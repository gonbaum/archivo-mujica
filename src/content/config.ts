import { defineCollection, z } from "astro:content";

const commonSchema = z.object({
  titulo: z.string(),
  fecha: z.string().transform((str) => new Date(str)),
  resumen: z.string(),
  fuente: z.string(),
  source_url: z.string().url().optional(),
  autor: z.string(),
  video: z.boolean().optional().default(false),
  // Propiedades opcionales para discursos con video
  canal: z.string().optional(),
  duracion: z.string().optional(),
  embedUrl: z.string().optional(),
  esDiscurso: z.boolean().optional().default(false)
});

// Configuración común para todas las colecciones
const collectionConfig = {
  schema: commonSchema,
  // Generar slug a partir del nombre del archivo
  slug: ({ id }: { id: string }) => id.replace(/\.md$/, ""),
};

// Esquema específico para libros (no hereda del commonSchema)
const libroSchema = z.object({
  titulo: z.string(),
  autor: z.string(),
  fecha: z.string().transform((str) => new Date(str)),
  resumen: z.string(),
  fuente: z.string(),
  portada: z.string().optional(),
  editorial: z.string(),
  año: z.number().int().positive().optional(),
  paginas: z.number().int().positive().optional(),
  isbn: z.string().optional(),
  formato: z.enum(['Tapa blanda', 'Tapa dura', 'eBook', 'Audiolibro']).optional(),
  sinopsis: z.string()
});

// Esquema para videos
const videoSchema = z.object({
  titulo: z.string(),
  fecha: z.string().transform((str) => new Date(str)),
  fuente: z.string(),
  canal: z.string(),
  embedUrl: z.string().url(),
  duracion: z.string().optional(),
  descripcion: z.string().optional(),
});

// Esquema para frases
const fraseSchema = z.object({
  texto: z.string(),
  fecha: z.string().optional(),
  contexto: z.string().optional(),
  tema: z.array(z.string()).optional(),
});

export const collections = {
  discursos: defineCollection(collectionConfig),
  articulos: defineCollection(collectionConfig),
  escritos: defineCollection(collectionConfig),
  libros: defineCollection({
    ...collectionConfig,
    schema: libroSchema
  }),
  videos: defineCollection({
    ...collectionConfig,
    schema: videoSchema
  }),
};
