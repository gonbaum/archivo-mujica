import { defineCollection, z } from "astro:content";

const commonSchema = z.object({
  titulo: z.string(),
  fecha: z.string().transform((str) => new Date(str)),
  resumen: z.string(),
  fuente: z.string(),
  autor: z.string(),
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

export const collections = {
  discursos: defineCollection(collectionConfig),
  articulos: defineCollection(collectionConfig),
  escritos: defineCollection(collectionConfig),
  libros: defineCollection({
    ...collectionConfig,
    schema: libroSchema
  }),
};
