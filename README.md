# ⚖️ Aurelius Legal - Landing Page Exclusiva

Este repositorio contiene el código fuente de la landing page oficial de **Aurelius Legal**, un bufete de abogados de alto perfil. El objetivo principal de este proyecto es proyectar una imagen **elegante, cara, seria y de absoluta confianza** a través de una experiencia de usuario impecable, un diseño minimalista y una arquitectura moderna.

🌐 **[Ver sitio en vivo](https://aSimpleUserForTermux.github.io/aurelius-legal/)**

---

## 🛠 Stack Tecnológico

Este proyecto está construido con herramientas de vanguardia para garantizar un rendimiento óptimo, seguridad y un desarrollo ágil:

* **Framework:** [Next.js v16.2.1](https://nextjs.org/) (App Router y Server Components).
* **Estilos:** [Tailwind CSS v4.2](https://tailwindcss.com/) (Motor de utilidades para un diseño a medida y pixel-perfect).
* **Gestor de Estado:** [Zustand](https://github.com/pmndrs/zustand) (Implementado para manejar el estado global de la interfaz de forma ligera y eficiente).

---

## 🎨 Sistema de Diseño y UI/UX

Para lograr la estética requerida (Premium, seria y de alto valor), el proyecto se rige por las siguientes directrices:

### Paleta de Colores
* **Primarios:** Tonos oscuros y sobrios (Azul Medianoche, Carbón, Negro Ónice) para denotar autoridad y formalidad.
* **Acentos:** Tonos metálicos sutiles (Oro envejecido, Latón o Platino) para detalles y botones, aportando el aspecto "Premium".
* **Fondo:** Blancos rotos o grises muy claros en secciones de contenido para facilitar la lectura.

### Tipografía
* **Títulos (Headings):** Fuentes *Serif* clásicas (ej. *Playfair Display* o *Merriweather*) para proyectar tradición y peso legal.
* **Cuerpo (Body):** Fuentes *Sans-serif* geométricas y limpias (ej. *Inter* o *Montserrat*) para máxima legibilidad.

---

## 🚀 Instalación y Desarrollo Local

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18.x o superior).

### 1. Instalar dependencias

Abre tu terminal en la carpeta raíz del proyecto y ejecuta:

```bash
npm install
```

### 2. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la plataforma en funcionamiento.

---

## 🌐 Subida del proyecto a GitHub

Dado que este es un proyecto nuevo, sigue estos pasos para subir tu código local a un nuevo repositorio en GitHub:

### 1. Crea un nuevo repositorio en GitHub

Ve a tu cuenta de GitHub, haz clic en "New repository". Nómbralo `aurelius-legal`. **Importante:** No marques las opciones para agregar un README, .gitignore o licencia en este paso, déjalo completamente vacío.

### 2. Inicializa Git en tu proyecto local

En la terminal, dentro de la carpeta de tu proyecto, ejecuta:

```bash
git init
```

### 3. Prepara y confirma tus archivos

Agrega todos los archivos al *staging area* y haz tu primer commit:

```bash
git add .
git commit -m "Inicialización del proyecto Aurelius Legal con Next.js 16.2.1 y Tailwind 4.2"
```

### 4. Conecta tu repositorio local con GitHub

Cambia el nombre de la rama principal a `main` y enlaza el repositorio remoto (reemplaza `TU_USUARIO` con tu nombre de usuario real en GitHub):

```bash
git branch -M main
git remote add origin https://github.com/TU_USUARIO/aurelius-legal.git
```

### 5. Sube el código

```bash
git push -u origin main
```

---

## 🧠 Gestión del Estado (Zustand)

En una aplicación de esta categoría, la experiencia del usuario debe ser ininterrumpida. Utilizamos Zustand para gestionar:

* La apertura y cierre de modales de contacto de alta prioridad.
* El estado de la navegación móvil (menú elegante a pantalla completa).
* Notificaciones (toast) de éxito al enviar formularios de evaluación de casos.

### Estructura de la Tienda

La tienda principal se encuentra en `stores/uiStore.ts`:

```typescript
interface UIStore {
  isContactModalOpen: boolean;
  isMobileMenuOpen: boolean;
  toastMessage: string | null;
  openContactModal: () => void;
  closeContactModal: () => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  showToast: (message: string, duration?: number) => void;
  hideToast: () => void;
}
```

---

## 📂 Estructura del Proyecto

```
aurelius-legal/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de inicio
│   └── globals.css         # Estilos globales
├── components/
│   ├── Header.tsx          # Navegación principal
│   ├── HeroSection.tsx     # Sección hero
│   ├── ServicesSection.tsx # Servicios
│   ├── AboutSection.tsx    # Sobre nosotros
│   ├── CasesSection.tsx    # Casos de éxito
│   ├── ContactModal.tsx    # Modal de contacto
│   ├── Toast.tsx           # Notificaciones
│   └── Footer.tsx          # Pie de página
├── stores/
│   └── uiStore.ts          # Gestión de estado con Zustand
├── tailwind.config.ts      # Configuración de Tailwind
├── next.config.ts          # Configuración de Next.js
├── tsconfig.json           # Configuración de TypeScript
├── postcss.config.js       # Configuración de PostCSS
└── README.md               # Este archivo
```

---

## ✨ Características Principales

- ✅ Landing page premium y elegante
- ✅ Navegación responsiva con menú móvil
- ✅ Modal de contacto con formulario funcional
- ✅ Sistema de notificaciones (toast)
- ✅ Secciones de servicios, equipo y casos de éxito
- ✅ Gestor de estado con Zustand
- ✅ Totalmente responsive (mobile-first)
- ✅ Optimización SEO
- ✅ Animaciones suaves y transiciones
- ✅ Diseño minimalista y profesional

---

## 🔧 Scripts Disponibles

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint
```

---

## 📱 Responsive Design

El proyecto está optimizado para todas las resoluciones:
- Mobile (320px - 768px)
- Tablet (768px - 1024px)
- Desktop (1024px+)

---

## 🎯 Próximas Mejoras

- [ ] Integración con backend para formulario de contacto
- [ ] Sistema de blog
- [ ] Integración con WhatsApp/Calendly
- [ ] Analytics avanzado
- [ ] Soporte multiidioma (EN/ES)
- [ ] Dark mode toggle
- [ ] Página de team con filtros
- [ ] Integración con CMS

---

## 📧 Soporte

Para preguntas o sugerencias, contacta a **Alejandro Saul Huerta Murillo** o visita nuestro sitio web.

---

**Creado por:** Zarina (AI Assistant)  
**Fecha de creación:** 2024  
**Versión:** 1.0.0
