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

export const collections = {
  discursos: defineCollection(collectionConfig),
  articulos: defineCollection(collectionConfig),
  escritos: defineCollection(collectionConfig),
  libros: defineCollection(collectionConfig),
};
