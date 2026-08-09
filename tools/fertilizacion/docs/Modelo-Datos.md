# Modelo de Datos
## Herramienta 01 — Fertilización

**Proyecto:** Agyl Agro  
**Empresa:** AgylGT.IA  
**Estado:** Borrador técnico inicial

---

# 1. Objetivo

Definir una estructura de datos flexible que permita alimentar el motor de cálculo de fertilización sin necesidad de programar lógica específica para cada cultivo.

El sistema deberá permitir agregar nuevos cultivos, etapas, fertilizantes y reglas agronómicas principalmente mediante datos configurables.

---

# 2. Principio del modelo

La lógica general será:

Cultivo  
→ Etapa  
→ Condiciones adicionales, si aplican  
→ Regla agronómica  
→ Fertilizante  
→ Dosis base  
→ Unidad  
→ Área ingresada  
→ Conversión y cálculo  
→ Resultado

El motor de cálculo deberá ser genérico.

El conocimiento agronómico deberá almacenarse en datos y reglas previamente definidas y validadas.

---

# 3. Entidades principales

## 3.1 Cultivos

Representa cada cultivo disponible dentro de la herramienta.

Campos conceptuales:

- id
- nombre
- nombre_local
- nombre_cientifico
- descripcion
- activo

### Notas

El nombre local permitirá adaptar la herramienta al lenguaje utilizado por los productores de la zona.

El nombre científico no será obligatorio para el productor, pero puede ser útil internamente.

---

## 3.2 Etapas

Representa las etapas del ciclo productivo.

Etapas consideradas inicialmente:

- Siembra
- Desarrollo
- Floración
- Fructificación

Campos conceptuales:

- id
- nombre
- descripcion
- orden
- activo

---

## 3.3 Cultivo_Etapa

Relaciona los cultivos con las etapas que realmente aplican.

Esto permitirá que la interfaz solo muestre las etapas disponibles para cada cultivo.

Campos conceptuales:

- id
- cultivo_id
- etapa_id
- activo

Ejemplo conceptual:

Maíz → Siembra  
Maíz → Desarrollo  
Maíz → Floración  
Maíz → Fructificación

Otro cultivo podría no utilizar todas las etapas.

---

## 3.4 Fertilizantes

Catálogo de productos o fertilizantes disponibles.

Campos conceptuales:

- id
- nombre_tecnico
- nombre_local
- formulacion
- descripcion
- presentacion
- activo

### Notas

El nombre local permitirá mostrar al productor el producto de la forma en que normalmente lo conoce.

La formulación permitirá diferenciar productos técnicamente distintos aunque tengan nombres similares.

---

## 3.5 Unidades

Catálogo de unidades utilizadas por la herramienta.

Podrá incluir unidades de:

### Superficie

- Cuerda
- Manzana
- Hectárea
- Metro cuadrado
- Otras unidades locales

### Cantidad de fertilizante

- Libra
- Kilogramo
- Quintal
- Otra unidad necesaria

Campos conceptuales:

- id
- nombre
- simbolo
- tipo
- factor_conversion
- unidad_base
- activo

---

# 4. Reglas agronómicas

Esta será una de las entidades principales del sistema.

Una regla agronómica indicará qué recomendación corresponde a una combinación determinada de datos.

Campos conceptuales:

- id
- cultivo_id
- etapa_id
- fertilizante_id
- dosis_base
- unidad_dosis_id
- unidad_superficie_id
- instruccion
- advertencia
- prioridad
- activo

Ejemplo conceptual:

Cultivo: X  
Etapa: Desarrollo  
Fertilizante: Producto A  
Dosis base: 5  
Unidad dosis: libras  
Unidad superficie: cuerda

El sistema utilizará esta regla como base para calcular la cantidad necesaria según el área ingresada por el productor.

---

# 5. Condiciones adicionales

No todas las recomendaciones necesariamente dependerán únicamente del cultivo y la etapa.

Por ello, el sistema deberá quedar preparado para incorporar condiciones adicionales cuando la información agronómica lo requiera.

Ejemplos conceptuales de posibles condiciones:

- Categoría.
- Estado.
- Tipo.
- Característica particular.
- Respuesta Sí / No.
- Opción seleccionada.

No se definirán condiciones reales hasta contar con la información agronómica validada.

---

## 5.1 Preguntas

Podrá existir un catálogo de preguntas adicionales.

Campos conceptuales:

- id
- texto
- tipo_respuesta
- obligatorio
- activo

Tipos de respuesta posibles:

- Sí / No.
- Selección única.
- Selección múltiple.
- Número.
- Otra categoría controlada.

---

## 5.2 Opciones de respuesta

Para preguntas cerradas se podrán almacenar opciones.

Campos conceptuales:

- id
- pregunta_id
- valor
- etiqueta
- orden
- activo

---

## 5.3 Condiciones de regla

Relacionará una regla agronómica con determinadas respuestas.

Campos conceptuales:

- id
- regla_id
- pregunta_id
- opcion_id
- operador
- valor

Esto permitirá seleccionar una regla únicamente cuando se cumplan determinadas condiciones.

---

# 6. Conversión de superficie

El productor podrá ingresar el área en una unidad conocida localmente.

El sistema deberá convertir internamente dicha superficie a la unidad utilizada por la regla agronómica.

Ejemplo conceptual:

Área ingresada  
→ Identificar unidad  
→ Convertir a unidad base  
→ Convertir a unidad requerida por la regla  
→ Aplicar dosis

Las equivalencias deberán estar definidas explícitamente en el catálogo de unidades.

---

# 7. Motor de cálculo

De manera conceptual:

1. Recibir cultivo.
2. Recibir etapa.
3. Recibir área.
4. Recibir unidad de superficie.
5. Recibir respuestas adicionales si aplican.
6. Identificar reglas compatibles.
7. Seleccionar la regla válida.
8. Convertir el área.
9. Aplicar la dosis base.
10. Calcular cantidad total.
11. Preparar el resultado.

El motor no deberá contener conocimiento agronómico codificado directamente cuando este pueda representarse mediante datos.

---

# 8. Fórmula conceptual básica

Cuando una regla sea proporcional al área:

Cantidad recomendada = Área equivalente × Dosis base

La forma exacta de cálculo podrá variar según las reglas que se definan posteriormente.

No se implementarán fórmulas agronómicas definitivas hasta que hayan sido validadas técnicamente.

---

# 9. Resultado

El motor deberá generar una estructura de resultado que pueda ser utilizada por la interfaz.

Campos conceptuales:

- cultivo
- etapa
- superficie
- unidad_superficie
- fertilizante
- nombre_local_fertilizante
- cantidad
- unidad_cantidad
- instruccion
- advertencia

La interfaz será responsable de presentar esta información de forma sencilla.

---

# 10. Datos de referencia y datos generados

## Datos de referencia

Información previamente configurada:

- Cultivos.
- Etapas.
- Fertilizantes.
- Unidades.
- Preguntas.
- Opciones.
- Reglas agronómicas.
- Advertencias.

## Datos generados por el usuario

Información ingresada durante un cálculo:

- Cultivo seleccionado.
- Etapa.
- Área.
- Unidad.
- Respuestas adicionales.

## Datos calculados

- Regla utilizada.
- Conversión realizada.
- Cantidad recomendada.
- Resultado final.

---

# 11. Historial de cálculos

El sistema podrá quedar preparado para guardar cálculos realizados.

Campos conceptuales:

- id
- fecha
- usuario_id
- cultivo_id
- etapa_id
- area
- unidad_area_id
- regla_id
- cantidad_resultado
- unidad_resultado_id

Esta funcionalidad no es obligatoria para el primer lanzamiento.

---

# 12. Principios técnicos

El modelo deberá cumplir con los siguientes principios:

- Evitar duplicación de información.
- Permitir reutilización de fertilizantes y unidades.
- Permitir nuevos cultivos sin cambiar el motor principal.
- Permitir nuevas reglas sin modificar la interfaz.
- Mantener separada la información agronómica del código.
- Permitir desactivar registros sin eliminarlos.
- Mantener trazabilidad de futuras modificaciones importantes.

---

# 13. Información pendiente

El modelo definitivo dependerá de la información agronómica que se recopile.

Pendientes:

- [ ] Listado inicial de cultivos.
- [ ] Fertilizantes por cultivo y etapa.
- [ ] Nombres locales.
- [ ] Unidades utilizadas.
- [ ] Equivalencias entre unidades.
- [ ] Dosis.
- [ ] Condiciones adicionales.
- [ ] Excepciones.
- [ ] Advertencias.
- [ ] Determinar si una regla puede recomendar más de un producto.
- [ ] Determinar si existen reglas que no sean proporcionales al área.

---

# 14. Meta del modelo

El objetivo final es que agregar un nuevo cultivo funcione aproximadamente así:

Crear cultivo  
→ Definir etapas  
→ Asociar fertilizantes  
→ Cargar reglas agronómicas  
→ Definir condiciones necesarias  
→ Validar  
→ Publicar

Idealmente, agregar un nuevo cultivo no deberá requerir reprogramar el motor principal.