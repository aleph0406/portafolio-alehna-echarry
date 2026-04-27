# Portfolio — ING ALEHNA ECHARRY

Portafolio profesional de alto impacto. Stack: **React + Tailwind CSS + Vite**.

## 🚀 Setup Local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build
```

## 📁 Estructura

```
src/
  App.jsx              # Raíz de la app
  index.css            # Estilos globales + Google Fonts
  components/
    Nav.jsx            # Navegación sticky
    Hero.jsx           # Sección principal con foto placeholder
    Projects.jsx       # Grid de proyectos (9 cards)
    Skills.jsx         # Tecnologías + skill bars
    Contact.jsx        # Formulario de contacto
    Footer.jsx         # Footer con redes sociales
```

## 🎨 Personalización

### Foto de perfil (Hero.jsx)
Reemplaza el bloque del placeholder con tu imagen:
```jsx
// Busca el div con "Reemplaza con tu foto" y cámbialo por:
<img src="/tu-foto.jpg" alt="Germán Reyes" className="w-full h-full object-cover" />
```

### Datos de contacto
- Actualiza el email en `Nav.jsx`, `Contact.jsx` y `Footer.jsx`
- Actualiza los links de GitHub y LinkedIn en los tres archivos

### Formulario de contacto
Conecta a un servicio real en `Contact.jsx` (función `handleSubmit`):
- **EmailJS**: https://www.emailjs.com/
- **Resend**: https://resend.com/
- **Formspree**: https://formspree.io/

## 🌐 Deploy en Vercel

```bash
# Con Vercel CLI
npm i -g vercel
vercel

# O simplemente conecta el repo en vercel.com
```

## 🎯 Agregar Framer Motion (opcional pero recomendado)

Las animaciones ya están preparadas. Para activar Framer Motion:

```bash
npm install framer-motion
```

Luego en cada sección, envuelve con `<motion.div>`:
```jsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>
  {/* contenido */}
</motion.div>
```

## 🎨 Paleta de colores

| Variable | Color | Uso |
|---------|-------|-----|
| `#080808` | Negro casi puro | Background principal |
| `#0e0e0e` | Negro suave | Cards y paneles |
| `#C8FF00` | Verde ácido | Accent principal |
| `white/5 → white/70` | Blancos con opacidad | Texto secundario |

## 📝 Tipografía

- **Display**: Syne (headings, logo, botones)
- **Body**: DM Sans (texto corrido, labels)

Ambas se cargan desde Google Fonts en `index.css`.
