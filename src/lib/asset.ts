// Prefija una ruta relativa con el `base` del sitio.
// Ejemplo: asset('logo/cadd-emblem.svg') → `/cadd-web/logo/cadd-emblem.svg`.
// Nota: `import.meta.env.BASE_URL` NO garantiza barra final (queda `/cadd-web`
// cuando `base: '/cadd-web'`), por eso normalizamos ambos lados.
export const asset = (path: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const clean = path.replace(/^\/+/, '');
  return `${base}/${clean}`;
};
