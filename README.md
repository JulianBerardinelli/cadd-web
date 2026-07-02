# CADD — Landing institucional

Landing page pública del **Consejo Argentino de Diplomacia Deportiva (CADD)**: un
nexo institucional, técnico y neutral que vincula al cuerpo diplomático acreditado
en Argentina con el ecosistema del deporte, la academia y la gestión social.

Estética *diplomatic premium* — navy midnight + oro antiguo, serif Spectral para
display, IBM Plex Mono para datos/eyebrows. Copy en español (es-AR).

## Stack

- **[Astro](https://astro.build)** — sitio estático, sin framework de UI.
- Tokens de diseño oficiales del handoff (`src/styles/tokens.css`).
- Íconos **Lucide** inlineados en build (`lucide-static`, sin JS de cliente).
- JS de cliente mínimo: modal de contacto + reveal por scroll (IntersectionObserver).

## Desarrollo

```bash
npm install
npm run dev        # servidor local (http://localhost:4321)
npm run build      # genera el sitio estático en dist/
npm run preview    # sirve el build de dist/
```

## Estructura

```
src/
  layouts/Base.astro        # <html>, <head> (fuentes, meta, tokens), reveal-js
  styles/
    tokens.css              # tokens del design-system (colores, tipos, espaciado…)
    app.css                 # resets, layout, animaciones, reveal, responsive
  components/
    Icon.astro, icons.ts    # wrapper Lucide (SVG inline en build)
    ui/                     # Button, Card, Stat, Badge, Tag, Divider, ProgressBar
    Header, Hero, Mission, Objetivos, Aliados, Equipo, Plan, Footer, ContactModal
  pages/index.astro         # compone todas las secciones + modal
public/
  logo/cadd-emblem.svg
  imagery/hero-handshake.png
  team/*.jpeg
```

## Secciones

Header (sticky) → Hero → Misión/Visión → Objetivos → Aliados → Equipo → Plan 2026 →
Footer. El **modal "Solicitar convenio"** se abre desde cualquier CTA; el formulario
es demostrativo (sin backend): al enviar muestra el estado de confirmación.

## Notas

- **Retratos del equipo**: por decisión del handoff, algunos nombres de archivo no
  coinciden con la persona (Germán E. Campisi usa `christian-berardinelli.jpeg` y
  Christian Berardinelli usa `german-campisi.jpeg`). El mapeo se mantiene a propósito.
- **Fuentes** desde Google Fonts CDN. Para un sitio 100% offline, reemplazar por
  `@font-face` local con `.woff2` licenciados.
- Antes de publicar, ajustar `site` en `astro.config.mjs` al dominio final (afecta
  `canonical` y las etiquetas Open Graph).

---

Diseño: Claude Design · Implementación: Astro.
