import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Preencha todos os campos.' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return NextResponse.json({ error: 'Credenciais inválidas.' }, { status: 401 });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json({ error: 'Credenciais inválidas.' }, { status: 401 });
    }

    // In a real app, you would set a cookie with a JWT here. 
    // For this simple demo, we will just return success.
    return NextResponse.json({ 
      message: 'Login realizado com sucesso!', 
      user: { id: user.id, name: user.name, email: user.email } 
    }, { status: 200 });

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: 'Ocorreu um erro ao realizar o login.' }, { status: 500 });
  }
}
