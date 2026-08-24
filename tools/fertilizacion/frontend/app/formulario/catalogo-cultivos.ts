/**
 * Catálogo inicial de cultivos y sus etapas de desarrollo para el
 * formulario de Fertilización.
 *
 * Esta estructura es la única fuente de verdad de la relación
 * cultivo → etapas. Para agregar un cultivo nuevo basta con añadir una
 * entrada al arreglo `CATALOGO_CULTIVOS`, reutilizando un conjunto de
 * etapas existente o definiendo uno nuevo.
 */

export interface CultivoEtapas {
  readonly nombre: string;
  readonly etapas: readonly string[];
}

/** Etapas estándar compartidas por la mayoría de los cultivos. */
const ETAPAS_ESTANDAR: readonly string[] = [
  "Siembra / Crecimiento",
  "Floración / Desarrollo",
  "Fructificación / Cosecha",
];

/** Etapas para cultivos de raíz sin etapa de floración diferenciada. */
const ETAPAS_RAIZ: readonly string[] = [
  "Siembra / Crecimiento",
  "Fructificación / Cosecha",
];

/** Etapas propias del rábano, con "Desarrollo" como etapa independiente. */
const ETAPAS_RABANO: readonly string[] = [
  "Siembra / Crecimiento",
  "Desarrollo",
  "Fructificación / Cosecha",
];

/** Etapas propias de leguminosas como el frijol. */
const ETAPAS_FRIJOL: readonly string[] = [
  "Siembra / Emergencia",
  "Vegetativo / Floración",
  "Llenado de vaina / Cosecha",
];

/** Catálogo completo de cultivos soportados, en orden de presentación. */
export const CATALOGO_CULTIVOS: readonly CultivoEtapas[] = [
  { nombre: "Limón", etapas: ETAPAS_ESTANDAR },
  { nombre: "Naranja", etapas: ETAPAS_ESTANDAR },
  { nombre: "Mandarina", etapas: ETAPAS_ESTANDAR },
  { nombre: "Durazno / Melocotón", etapas: ETAPAS_ESTANDAR },
  { nombre: "Ciruela", etapas: ETAPAS_ESTANDAR },
  { nombre: "Manzana", etapas: ETAPAS_ESTANDAR },
  { nombre: "Aguacate", etapas: ETAPAS_ESTANDAR },
  { nombre: "Café", etapas: ETAPAS_ESTANDAR },
  { nombre: "Remolacha", etapas: ETAPAS_RAIZ },
  { nombre: "Zanahoria", etapas: ETAPAS_RAIZ },
  { nombre: "Papa", etapas: ETAPAS_ESTANDAR },
  { nombre: "Rábano", etapas: ETAPAS_RABANO },
  { nombre: "Tomate", etapas: ETAPAS_ESTANDAR },
  { nombre: "Chile / Pimiento", etapas: ETAPAS_ESTANDAR },
  { nombre: "Pepino", etapas: ETAPAS_ESTANDAR },
  { nombre: "Ayote / Calabaza", etapas: ETAPAS_ESTANDAR },
  { nombre: "Chipilín", etapas: ETAPAS_ESTANDAR },
  { nombre: "Hierbas aromáticas / culinarias", etapas: ETAPAS_ESTANDAR },
  { nombre: "Frijol", etapas: ETAPAS_FRIJOL },
  { nombre: "Maíz", etapas: ETAPAS_ESTANDAR },
  { nombre: "Maní", etapas: ETAPAS_ESTANDAR },
];

/** Nombres de todos los cultivos disponibles, en orden de presentación. */
export function obtenerCultivos(): readonly string[] {
  return CATALOGO_CULTIVOS.map((cultivo) => cultivo.nombre);
}

/**
 * Etapas válidas para un cultivo dado. Devuelve un arreglo vacío si el
 * cultivo no existe en el catálogo, de modo que nunca se muestre una
 * etapa que no corresponda al cultivo seleccionado.
 */
export function obtenerEtapas(nombreCultivo: string): readonly string[] {
  const cultivo = CATALOGO_CULTIVOS.find((item) => item.nombre === nombreCultivo);
  return cultivo ? cultivo.etapas : [];
}

/**
 * Categorías de navegación del formulario (solo UX). Agrupan los cultivos
 * del catálogo para que el productor encuentre más rápido lo que siembra.
 * NO alteran la relación agronómica cultivo → etapas definida arriba.
 */
export type CategoriaId = "frutas" | "verduras" | "granos" | "hierbas" | "cafe";

export interface CategoriaCultivos {
  readonly id: CategoriaId;
  readonly nombre: string;
  /** Fotografía real representativa del cultivo (no comida preparada). */
  readonly imagen: string;
}

/**
 * Fotografías reales por cultivo (mismo patrón de imágenes remotas que la
 * pantalla "Mis cálculos"). Representan plantas o cultivos en campo.
 */
const IMAGENES_CULTIVO: Readonly<Record<string, string>> = {
  "Limón": "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=480&q=70",
  "Naranja": "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=480&q=70",
  "Mandarina": "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=480&q=70",
  "Durazno / Melocotón": "https://images.unsplash.com/photo-1595743825637-cdafc8ad4173?auto=format&fit=crop&w=480&q=70",
  "Ciruela": "https://images.unsplash.com/photo-1596363505729-4190a9506133?auto=format&fit=crop&w=480&q=70",
  "Manzana": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=480&q=70",
  "Aguacate": "https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&w=480&q=70",
  "Remolacha": "https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?auto=format&fit=crop&w=480&q=70",
  "Zanahoria": "https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=480&q=70",
  "Papa": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=480&q=70",
  "Rábano": "https://images.unsplash.com/photo-1605196560547-b2f7281b7355?auto=format&fit=crop&w=480&q=70",
  "Tomate": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=480&q=70",
  "Chile / Pimiento": "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&w=480&q=70",
  "Pepino": "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=480&q=70",
  "Ayote / Calabaza": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=480&q=70",
  "Chipilín": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=480&q=70",
  "Hierbas aromáticas / culinarias": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=480&q=70",
  "Frijol": "https://images.unsplash.com/photo-1639947219179-bb0357b8856a?auto=format&fit=crop&w=480&q=70",
  "Maíz": "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=480&q=70",
  "Maní": "https://images.unsplash.com/photo-1590080874088-eec64895b423?auto=format&fit=crop&w=480&q=70",
  "Café": "https://images.unsplash.com/photo-1442550528053-c431ecb55509?auto=format&fit=crop&w=480&q=70",
};

/** Categorías en orden de presentación. La categoría CAFÉ comparte imagen con el cultivo Café. */
export const CATEGORIAS_CULTIVOS: readonly CategoriaCultivos[] = [
  { id: "frutas", nombre: "Frutas", imagen: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=480&q=70" },
  { id: "verduras", nombre: "Verduras y hortalizas", imagen: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=480&q=70" },
  { id: "granos", nombre: "Granos", imagen: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=480&q=70" },
  { id: "hierbas", nombre: "Hierbas", imagen: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=480&q=70" },
  { id: "cafe", nombre: "Café", imagen: "https://images.unsplash.com/photo-1442550528053-c431ecb55509?auto=format&fit=crop&w=480&q=70" },
];

/** Agrupación de navegación: cada cultivo pertenece a exactamente una categoría. */
const CULTIVOS_POR_CATEGORIA: Readonly<Record<CategoriaId, readonly string[]>> = {
  frutas: ["Limón", "Naranja", "Mandarina", "Durazno / Melocotón", "Ciruela", "Manzana", "Aguacate"],
  verduras: ["Remolacha", "Zanahoria", "Papa", "Rábano", "Tomate", "Chile / Pimiento", "Pepino", "Ayote / Calabaza"],
  granos: ["Maíz", "Frijol", "Maní"],
  hierbas: ["Chipilín", "Hierbas aromáticas / culinarias"],
  cafe: ["Café"],
};

/** Categorías disponibles, en orden de presentación. */
export function obtenerCategorias(): readonly CategoriaCultivos[] {
  return CATEGORIAS_CULTIVOS;
}

/** Cultivos que pertenecen a una categoría de navegación. */
export function obtenerCultivosDeCategoria(id: CategoriaId): readonly string[] {
  return CULTIVOS_POR_CATEGORIA[id] ?? [];
}

/** Categoría a la que pertenece un cultivo del catálogo. */
export function obtenerCategoriaDeCultivo(nombreCultivo: string): CategoriaId | undefined {
  return (Object.keys(CULTIVOS_POR_CATEGORIA) as readonly CategoriaId[]).find((id) =>
    CULTIVOS_POR_CATEGORIA[id].includes(nombreCultivo),
  );
}

/** Fotografía real asociada a un cultivo. Cadena vacía si no tiene imagen. */
export function obtenerImagenCultivo(nombreCultivo: string): string {
  return IMAGENES_CULTIVO[nombreCultivo] ?? "";
}
