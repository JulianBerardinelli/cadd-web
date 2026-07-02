// Íconos Lucide inlineados en build (sin JS de cliente, sin flash).
// Fuente: lucide-static. Cada SVG usa stroke="currentColor", así que
// el color se controla con `color` en el contenedor.
import fileSignature from 'lucide-static/icons/file-signature.svg?raw';
import shieldCheck from 'lucide-static/icons/shield-check.svg?raw';
import scale from 'lucide-static/icons/scale.svg?raw';
import anchor from 'lucide-static/icons/anchor.svg?raw';
import trophy from 'lucide-static/icons/trophy.svg?raw';
import heartHandshake from 'lucide-static/icons/heart-handshake.svg?raw';
import graduationCap from 'lucide-static/icons/graduation-cap.svg?raw';
import landmark from 'lucide-static/icons/landmark.svg?raw';
import flag from 'lucide-static/icons/flag.svg?raw';
import route from 'lucide-static/icons/route.svg?raw';
import clipboardCheck from 'lucide-static/icons/clipboard-check.svg?raw';
import checkCircle from 'lucide-static/icons/check-circle.svg?raw';

export const icons = {
  'file-signature': fileSignature,
  'shield-check': shieldCheck,
  scale,
  anchor,
  trophy,
  'heart-handshake': heartHandshake,
  'graduation-cap': graduationCap,
  landmark,
  flag,
  route,
  'clipboard-check': clipboardCheck,
  'check-circle': checkCircle,
} as const;

export type IconName = keyof typeof icons;
