-- Agyl-Agro · esquema normalizado inicial
-- Unidad de superficie del MVP: cuerda (20 m x 20 m = 400 m²).

CREATE TABLE cultivos (
  id TEXT PRIMARY KEY,
  categoria TEXT NOT NULL,
  nombre TEXT NOT NULL UNIQUE,
  nombre_cientifico TEXT,
  altitud_msnm TEXT,
  humedad_relativa TEXT,
  temperatura_c TEXT,
  duracion_ciclo TEXT,
  suelo_apto TEXT,
  cantidad_agua TEXT,
  horas_luz TEXT
);

CREATE TABLE etapas_cultivo (
  id TEXT PRIMARY KEY,
  cultivo_id TEXT NOT NULL REFERENCES cultivos(id),
  nombre TEXT NOT NULL,
  orden INTEGER NOT NULL,
  UNIQUE (cultivo_id, nombre)
);

CREATE TABLE productos (
  id TEXT PRIMARY KEY,
  nombre TEXT NOT NULL UNIQUE,
  tipo_insumo TEXT NOT NULL CHECK (tipo_insumo IN ('Insecticida','Herbicida','Fertilizante')),
  estado_catalogo TEXT NOT NULL,
  dosis_min_cuerda REAL,
  dosis_max_cuerda REAL,
  unidad_dosis TEXT,
  forma_aplicacion TEXT,
  presentacion_comercial TEXT,
  agua_mezcla TEXT,
  unidad_mezcla TEXT,
  frecuencia_aplicaciones TEXT,
  observaciones_catalogo TEXT
);

CREATE TABLE grupos_recomendacion (
  id TEXT PRIMARY KEY,
  cultivo_id TEXT NOT NULL REFERENCES cultivos(id),
  etapa_nombre TEXT NOT NULL,
  tipo_insumo TEXT NOT NULL CHECK (tipo_insumo IN ('Insecticida','Herbicida','Fertilizante')),
  relacion TEXT NOT NULL CHECK (relacion IN ('ÚNICO','CONJUNTO','ALTERNATIVA','MIXTA','MANEJO')),
  recomendacion_original TEXT NOT NULL
);

CREATE TABLE items_recomendacion (
  id TEXT PRIMARY KEY,
  grupo_id TEXT NOT NULL REFERENCES grupos_recomendacion(id),
  producto_id TEXT REFERENCES productos(id),
  producto_texto TEXT,
  subgrupo INTEGER NOT NULL,
  estado TEXT NOT NULL,
  dosis_min_cuerda REAL,
  dosis_max_cuerda REAL,
  unidad_dosis TEXT,
  tipo_calculo TEXT NOT NULL CHECK (tipo_calculo IN ('producto','material','ninguno')),
  forma_aplicacion TEXT,
  presentacion_comercial TEXT,
  agua_mezcla TEXT,
  unidad_mezcla TEXT,
  frecuencia_aplicaciones TEXT,
  observaciones_catalogo TEXT,
  nota_especifica_cultivo TEXT,
  explicacion_funcional TEXT,
  regla_uso TEXT,
  mezcla_fisica TEXT
);

-- El motor calcula:
-- cantidad_min = numero_cuerdas * dosis_min_cuerda
-- cantidad_max = numero_cuerdas * dosis_max_cuerda
-- Para ALTERNATIVA no se suman items entre sí.
-- Para CONJUNTO se calcula cada item por separado.
-- CONJUNTO no implica mezcla física en la misma bomba.
