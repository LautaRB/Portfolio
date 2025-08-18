# 🌐 Portfolio - Lautaro Rodríguez Brown

¡Bienvenido/a a mi portfolio!  
Este proyecto está pensado para mostrar mis habilidades, proyectos y experiencia como desarrollador web.  
El sitio fue construido con **Astro**, **TypeScript** y **TailwindCSS**, y está deployado en **Netlify**.  

👉 Podés verlo online en: [lautaro-rodriguez-brown.netlify.app](https://lautaro-rodriguez-brown.netlify.app)

---

## 🚀 Tecnologías utilizadas

- [Astro](https://astro.build/) → Framework moderno para construir sitios rápidos y optimizados.  
- [TypeScript](https://www.typescriptlang.org/) → Superset de JavaScript que permite tipado estático.  
- [TailwindCSS](https://tailwindcss.com/) → Framework CSS basado en utilidades para un diseño rápido y consistente.  
- [Netlify](https://www.netlify.com/) → Plataforma de hosting y deploy continuo.  
- [GitHub API](https://docs.github.com/en/rest) → Usada para obtener información dinámica de mis proyectos.  

---

## 📂 Estructura del proyecto

```bash
PORTFOLIO
├── .vscode/               # Configuración de VSCode
├── dist/                  # Archivos generados tras el build
├── public/                # Archivos estáticos (imágenes, fuentes, etc.)
├── src/                   # Código fuente del proyecto
│   ├── components/        # Componentes reutilizables
│   ├── layouts/           # Layouts principales
│   ├── pages/             # Páginas del portfolio
├── .gitignore             # Archivos/carpetas ignorados por Git
├── astro.config.mjs       # Configuración principal de Astro
├── netlify.toml           # Configuración de deploy en Netlify
├── package-lock.json      # Dependencias bloqueadas
├── package.json           # Dependencias y scripts del proyecto
├── README.md              # Documentación del proyecto
├── tailwind.config.mjs    # Configuración de TailwindCSS
└── tsconfig.json          # Configuración de TypeScript
```
---

## 🛠️ Instalación y uso

Si querés levantar este proyecto de forma local, seguí estos pasos:
### Clonar el repositorio
git clone https://github.com/tuusuario/tu-repo.git

### Entrar al directorio
cd tu-repo

### Instalar dependencias
npm install

---

## 🔑 Variables de entorno

Este proyecto utiliza la API de GitHub, por lo que es necesario contar con una clave personal de acceso.
Creá un archivo .env en la raíz del proyecto con el siguiente contenido:

GITHUB_TOKEN=tu_clave_personal

---

## ▶️ Ejecutar en desarrollo

npm run dev

El proyecto se ejecutará en http://localhost:4321 (o el puerto que indique Astro).

---

## 📦 Scripts disponibles

npm run dev → Levanta el servidor de desarrollo.

npm run build → Genera la versión optimizada para producción.

npm run preview → Previsualiza el build localmente.

---

## 🌍 Deploy

El proyecto está hosteado en Netlify, con integración continua: cada vez que se hace push a la rama principal, Netlify se encarga de generar el build y desplegarlo automáticamente.

👉 Portfolio online: lautaro-rodriguez-brown.netlify.app

## ⚡Fork the Repository
Si te gusta el **proyecto** y queres usarlo, podes crear un fork y usarlo en tu propio portafolio.

Gracias por visitar mi portafolio. Si tienes alguna pregunta o sugerencia, ¡no dudes en contactarme!
