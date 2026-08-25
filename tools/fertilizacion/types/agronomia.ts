export type RelacionRecomendacion =
  | "ÚNICO"
  | "CONJUNTO"
  | "ALTERNATIVA"
  | "MIXTA"
  | "MANEJO";

export type TipoInsumo = "Insecticida" | "Herbicida" | "Fertilizante";

export interface ParametrosAgylAgro {
  version: string;
  unidad_superficie: "cuerda";
  metros_por_lado_cuerda: 20;
  metros_cuadrados_por_cuerda: 400;
  formula_base: string;
  usa_hectareas: false;
}

export interface Cultivo {
  id: string;
  categoria: string;
  nombre: string;
  nombre_cientifico: string | null;
  altitud_msnm: string | null;
  humedad_relativa: string | null;
  temperatura_c: string | null;
  duracion_ciclo: string | null;
  suelo_apto: string | null;
  cantidad_agua: string | null;
  horas_luz: string | null;
  fuente: string;
}

export interface EtapaCultivo {
  id: string;
  cultivo_id: string;
  nombre: string;
  orden: number;
}

export interface ItemRecomendacion {
  id: string;
  producto_id: string | null;
  producto_texto: string | null;
  subgrupo: number;
  estado: string;
  coincidencia_catalogo: string;
  dosis_min_cuerda: number | null;
  dosis_max_cuerda: number | null;
  unidad_dosis: string | null;
  tipo_calculo: "producto" | "material" | "ninguno";
  formula: string | null;
  forma_aplicacion: string | null;
  presentacion_comercial: string | null;
  agua_mezcla: string | null;
  unidad_mezcla: string | null;
  frecuencia_aplicaciones: string | null;
  observaciones_catalogo: string | null;
  nota_especifica_cultivo: string | null;
  explicacion_funcional: string | null;
  regla_uso: string | null;
  mezcla_fisica: string | null;
}

export interface Recomendacion {
  id: string;
  cultivo_id: string;
  cultivo: string;
  categoria: string;
  etapa: string;
  tipo_insumo: TipoInsumo;
  relacion: RelacionRecomendacion;
  recomendacion_original: string;
  items: ItemRecomendacion[];
  fuente_cultivo: string;
  fuente_dosis: string;
}

export function calcularCantidad(
  cuerdas: number,
  dosisPorCuerda: number
): number {
  if (!Number.isFinite(cuerdas) || cuerdas <= 0) {
    throw new Error("La cantidad de cuerdas debe ser mayor que 0.");
  }
  if (!Number.isFinite(dosisPorCuerda) || dosisPorCuerda < 0) {
    throw new Error("La dosis por cuerda no es válida.");
  }
  return cuerdas * dosisPorCuerda;
}
