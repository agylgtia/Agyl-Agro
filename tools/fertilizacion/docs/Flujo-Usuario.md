# Flujo de Usuario
## Herramienta 01 — Fertilización

**Proyecto:** Agyl Agro  
**Empresa:** AgylGT.IA  
**Estado:** Borrador funcional

---

# 1. Objetivo del flujo

Definir la experiencia que seguirá un productor desde que abre la herramienta hasta que recibe una recomendación de fertilización.

El flujo deberá ser simple, rápido y comprensible para usuarios con conocimientos digitales básicos.

La herramienta deberá solicitar únicamente la información necesaria para generar una recomendación válida.

---

# 2. Principio de experiencia

La lógica técnica deberá permanecer detrás de la interfaz.

El productor no deberá enfrentarse a fórmulas, tablas agronómicas ni procesos complejos.

El flujo general será:

Inicio  
→ Selección de cultivo  
→ Selección de etapa  
→ Ingreso de área sembrada  
→ Parámetros adicionales necesarios  
→ Procesamiento  
→ Resultado

---

# 3. Pantalla 1 — Inicio

La pantalla inicial deberá comunicar de forma sencilla qué hace la herramienta.

Ejemplo conceptual:

> Calcula qué fertilizante necesitas y cuánto aplicar según tu cultivo, etapa y área sembrada.

Elementos iniciales:

- Identidad visual de Agyl Agro.
- Nombre de la herramienta.
- Breve explicación.
- Botón: **Iniciar cálculo**.

No deberá mostrarse información técnica innecesaria.

---

# 4. Pantalla 2 — Selección de cultivo

El usuario deberá seleccionar el cultivo para el cual desea realizar el cálculo.

La selección deberá ser visual y sencilla.

Opciones posibles:

- Tarjetas.
- Botones.
- Lista con buscador.

La interfaz deberá poder crecer a medida que se incorporen nuevos cultivos.

**Pendiente:** definir listado inicial de cultivos.

---

# 5. Pantalla 3 — Etapa del cultivo

El productor deberá indicar la etapa actual del cultivo.

Etapas inicialmente consideradas:

- Siembra.
- Desarrollo.
- Floración.
- Fructificación.

La herramienta únicamente deberá mostrar las etapas que sean válidas para el cultivo seleccionado.

**Regla:** si una etapa no aplica a determinado cultivo, no deberá mostrarse como opción.

---

# 6. Pantalla 4 — Área sembrada

El usuario deberá ingresar la superficie sobre la cual realizará la aplicación.

La pantalla deberá incluir:

- Campo numérico.
- Selector de unidad.

Las unidades disponibles deberán utilizar términos conocidos por los productores objetivo.

**Pendiente:** definir unidades y nombres locales utilizados.

La herramienta realizará internamente las conversiones necesarias.

---

# 7. Pantalla 5 — Parámetros adicionales

Esta pantalla será dinámica.

Solo aparecerá cuando el cultivo, etapa o regla agronómica requiera información adicional.

Ejemplos conceptuales:

- Tipo de condición.
- Característica específica del cultivo.
- Situación que modifique la dosis.
- Selección entre alternativas previamente definidas.

Las preguntas deberán ser principalmente cerradas.

Ejemplos:

- Sí / No.
- Selección única.
- Selección entre categorías.

No deberán solicitarse datos que no modifiquen el resultado.

---

# 8. Procesamiento

Una vez ingresada la información, el sistema deberá:

1. Identificar el cultivo.
2. Identificar la etapa.
3. Normalizar el área a una unidad interna.
4. Evaluar parámetros adicionales.
5. Consultar la regla agronómica correspondiente.
6. Determinar el producto o fertilizante.
7. Calcular la cantidad necesaria.
8. Preparar el resultado para el productor.

El usuario no deberá ver esta lógica técnica.

---

# 9. Pantalla 6 — Resultado

El resultado deberá ser directo y fácil de comprender.

Deberá mostrar como mínimo:

- Cultivo.
- Etapa.
- Área utilizada.
- Fertilizante recomendado.
- Cantidad necesaria.

Podrá incluir:

- Nombre coloquial del producto.
- Presentación habitual.
- Indicaciones breves.
- Advertencias previamente definidas.

Ejemplo conceptual:

> Para 2 cuerdas de maíz en etapa de desarrollo necesitas:
>
> **X cantidad de [producto]**

El lenguaje deberá adaptarse a la forma en que los productores conocen los productos y unidades en la zona.

---

# 10. Acciones posteriores al resultado

El usuario deberá poder:

- Realizar otro cálculo.
- Cambiar el cultivo.
- Cambiar la etapa.
- Corregir el área.
- Regresar al inicio.

Se evaluará posteriormente si es necesario:

- Guardar resultados.
- Descargar o compartir resultado.
- Historial de cálculos.

Estas funciones no son obligatorias para el primer producto.

---

# 11. Flujo resumido

Inicio
↓
Cultivo
↓
Etapa
↓
Área
↓
Preguntas adicionales si aplican
↓
Motor de reglas
↓
Producto
↓
Cantidad
↓
Resultado
↓
Nuevo cálculo

---

# 12. Reglas de diseño

La interfaz deberá:

- Priorizar uso desde teléfono móvil.
- Utilizar botones grandes.
- Evitar formularios largos.
- Utilizar lenguaje sencillo.
- Utilizar términos conocidos localmente.
- Reducir al mínimo la escritura manual.
- Mostrar una pregunta o bloque lógico a la vez cuando sea conveniente.
- Permitir regresar y corregir datos fácilmente.

---

# 13. Decisiones pendientes

- [ ] Listado inicial de cultivos.
- [ ] Unidades disponibles.
- [ ] Nombres locales o coloquiales.
- [ ] Parámetros adicionales por cultivo.
- [ ] Fertilizantes disponibles.
- [ ] Determinar si cultivo o etapa se selecciona primero.
- [ ] Definir formato final de resultado.
- [ ] Determinar si se guardarán cálculos.
- [ ] Determinar si el usuario necesitará identificarse antes de utilizar la herramienta.

---

# 14. Criterio principal

Cada pantalla y pregunta deberá justificar su existencia.

Antes de agregar un campo deberá responderse:

> ¿Este dato modifica la recomendación final?

Si la respuesta es no, no deberá solicitarse al productor.