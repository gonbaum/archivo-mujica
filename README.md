# Archivo Mujica

Este proyecto es un sitio web estático desarrollado con Astro que funciona como un archivo público y accesible sobre la vida, obra y pensamiento del político uruguayo José "Pepe" Mujica.

## Características

- Sitio web estático generado con Astro
- Contenido almacenado en archivos Markdown
- Diseño minimalista y responsivo
- Organización por categorías: discursos, escritos, libros y artículos
- Preparado para futuras integraciones con CMS headless

## Estructura del proyecto

```
/
├── public/             # Recursos estáticos (logo.svg)
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── content/        # Archivos de contenido en Markdown
│   │   ├── discursos/  # Discursos de Mujica
│   │   ├── escritos/   # Escritos personales
│   │   ├── libros/     # Información sobre libros
│   │   └── articulos/  # Artículos de prensa
│   ├── layouts/        # Plantillas de página
│   └── pages/          # Rutas del sitio
├── astro.config.mjs    # Configuración de Astro
├── package.json        # Dependencias del proyecto
└── tsconfig.json       # Configuración de TypeScript
```

## Cómo agregar nuevo contenido

### 1. Crear un nuevo archivo Markdown

Para agregar nuevo contenido, crea un archivo Markdown en la carpeta correspondiente bajo `src/content/`:

```markdown
---
titulo: "Título del contenido"
fecha: "YYYY-MM-DD"
resumen: "Breve descripción del contenido"
autor: "Nombre del autor" # Opcional
fuente: "Fuente del contenido" # Opcional
---

# Título principal

Contenido completo...
```

### 2. Frontmatter requerido

Cada archivo Markdown debe tener el siguiente frontmatter:

- `titulo`: Título del contenido
- `fecha`: Fecha en formato ISO (YYYY-MM-DD)
- `slug`: URL amigable (sin tildes, separado por guiones)
- `resumen`: Breve descripción del contenido
- `autor`: Autor del contenido (opcional)
- `fuente`: Fuente original (opcional, para artículos o citas)

### 3. Verificar el contenido

Una vez agregado el archivo Markdown, el sitio automáticamente generará una nueva página para ese contenido y lo incluirá en la lista correspondiente.

## Cómo contribuir

1. Haz fork del repositorio
2. Crea un archivo Markdown en la carpeta correspondiente
3. Haz commit de tus cambios
4. Abre un Pull Request en GitHub

¡Listo! Revisaremos tu aporte lo antes posible.

## Desarrollo local

Para ejecutar el sitio en modo desarrollo:

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## Licencia

Este proyecto es de código abierto y está disponible para su uso público y modificación.
