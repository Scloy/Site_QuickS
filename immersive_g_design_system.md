# 🎨 Immersive Garden (immersive-g.com) — Design System Extraction

Based on a visual analysis of the website, here is the extracted design system and aesthetic language used by Immersive Garden.

## 1. Core Concept & Aesthetic
The site employs a **"Cinematic Digital Gallery"** aesthetic. It feels less like a traditional website and more like a curated art exhibit or a high-end editorial piece. It relies heavily on extreme whitespace, minimalist UI framing, and central, high-quality media elements.

## 2. Color Palette
The color palette is extremely restrained, allowing the imagery and videos to take center stage.

*   **Background (Canvas):** 
    *   **Off-White/Light Grey:** `~#EAEAEA` or `~#F0F0F0`.
    *   *Texture:* The background is not a flat color; it features a subtle, organic texture (like handmade paper or plaster) that gives it a tactile feel.
*   **Typography & Line Art:**
    *   **Soft Black/Dark Grey:** `~#111111` to `~#1A1A1A`. Avoids harsh `#000000` to maintain elegance.
*   **Accents / Effects:**
    *   **Vignette Glow:** There is a noticeable, highly-blurred blue/cyan glow around the extreme edges of the viewport (approx. `~rgba(74, 144, 226, 0.2)`), which creates a dreamlike, immersive framing effect.

## 3. Typography
The typography contrasts a classic, elegant serif with a modern, utilitarian sans-serif.

*   **Primary Font (Headings & Storytelling):**
    *   **Style:** A high-contrast, elegant Serif (similar to *Garamond*, *Playfair Display*, or *Ogg*).
    *   **Usage:** Used for the main hero text ("Innovative digital experiences studio") and descriptive paragraphs.
    *   **Weight:** Light to Regular, emphasizing delicacy.
*   **Secondary Font (UI Elements & Navigation):**
    *   **Style:** A clean, geometric Sans-Serif (similar to *Inter*, *Helvetica*, or *Neue Montreal*).
    *   **Usage:** Used for functional UI labels ("About", "Scroll down", "See all projects", and the main logo text).
    *   **Styling:** Often used in smaller sizes, sometimes with slight letter-spacing (tracking) for a premium feel.

## 4. Layout & Spacing
*   **"Floating" UI:** Navigation and functional elements are pushed to the absolute edges and corners of the screen (e.g., logo on the left, "About" on the top right, "See all projects" on the bottom left). This creates a massive central "stage" for the content.
*   **Whitespace:** Extreme use of negative space. Content is given ample room to breathe, preventing cognitive overload and focusing attention entirely on the active element.
*   **Asymmetry & Flow:** While elements are often centered vertically, the scrolling experience feels non-linear, with media objects floating or parallaxing into view.

## 5. UI Elements & Interactions
*   **Minimalism:** There are virtually no visible containers, borders, or typical "cards". Elements exist freely on the canvas.
*   **Buttons:** "Ghost" buttons or simple text links. There are no heavy, filled background buttons. Interactive elements are indicated by typography and subtle hover states (or custom cursor interactions).
*   **Media Framing:** Images and videos act as the primary structural elements, often appearing in cinematic aspect ratios or dynamic, floating rectangles that tilt and move on scroll.
*   **3D / WebGL:** The site utilizes high-end WebGL for smooth, fluid transitions and 3D depth, making the flat canvas feel like a physical space.

## 6. How to replicate this in Tailwind CSS
If you want to apply this aesthetic to your projects, here are some conceptual Tailwind classes to start with:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        ig: {
          canvas: '#EAEAEA',
          text: '#1A1A1A',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'], // Replace with actual premium serif
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'paper-texture': "url('/path-to-subtle-noise-texture.png')",
        'edge-glow': 'radial-gradient(circle, transparent 70%, rgba(74,144,226,0.1) 150%)',
      }
    }
  }
}
```

**Key structural concept:**
```html
<div class="relative min-h-screen bg-ig-canvas text-ig-text bg-paper-texture">
  <!-- Blue Edge Glow -->
  <div class="pointer-events-none absolute inset-0 bg-edge-glow mix-blend-multiply"></div>
  
  <!-- Floating UI -->
  <div class="fixed top-8 right-8 font-sans text-sm tracking-wide">About</div>
  <div class="fixed bottom-8 left-8 font-sans text-sm tracking-wide">See all projects</div>
  
  <!-- Central Stage -->
  <div class="flex items-center justify-center min-h-screen p-20">
    <h1 class="font-serif text-5xl md:text-7xl font-light text-center leading-tight">
      Innovative digital<br/>experiences studio
    </h1>
  </div>
</div>
```
