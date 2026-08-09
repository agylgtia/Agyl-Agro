# Especificación Funcional
## Herramienta 01 — Fertilización

**Proyecto:** Agyl Agro  
**Empresa:** AgylGT.IA  
**Estado:** En definición funcional

---

# 1. Propósito

Desarrollar una herramienta digital sencilla que permita a un productor agrícola determinar de manera práctica qué fertilizante utilizar y qué cantidad necesita según su cultivo, área sembrada y etapa del ciclo productivo.

La herramienta busca transformar criterios técnicos de fertilización en un proceso comprensible para productores que no necesariamente cuentan con conocimientos agronómicos especializados.

---

# 2. Problema que resuelve

Parte de los productores agrícolas tiene dificultades para determinar:

- Qué producto utilizar.
- Qué cantidad aplicar.
- Cuándo realizar la aplicación.

Estas decisiones pueden requerir conocimientos técnicos que no siempre están disponibles para el productor.

La herramienta deberá simplificar este proceso mediante preguntas y parámetros intuitivos, procesando internamente la información técnica necesaria para entregar una recomendación sencilla.

---

# 3. Usuario objetivo

## Usuario inicial

Productores agrícolas, especialmente aquellos que necesitan una herramienta sencilla y práctica para orientar sus decisiones de fertilización.

La interfaz deberá diseñarse considerando usuarios con diferentes niveles de conocimiento técnico y experiencia utilizando herramientas digitales.

## Usuarios futuros

La filosofía de Agyl Agro permite desarrollar posteriormente herramientas o capacidades dirigidas a:

- Técnicos agrícolas.
- Ingenieros agrónomos.
- Asociaciones y cooperativas.
- Organizaciones de productores.
- Otros actores especializados del sector agrícola.

Estas capacidades no deberán aumentar innecesariamente la complejidad de la primera herramienta.

---

# 4. Principio de funcionamiento

El productor no deberá realizar cálculos agronómicos manualmente.

El flujo conceptual será:

Selección del cultivo
→ Área sembrada
→ Etapa del cultivo
→ Información adicional necesaria
→ Procesamiento de reglas agronómicas
→ Producto recomendado
→ Cantidad necesaria
→ Instrucción sencilla para el productor

La cantidad de datos solicitados deberá mantenerse al mínimo necesario para producir una recomendación técnicamente válida.

---

# 5. Datos de entrada

## 5.1 Cultivo

El usuario deberá seleccionar el cultivo sobre el cual desea realizar el cálculo.

El catálogo inicial de cultivos deberá ser definido antes del lanzamiento.

**Estado:** Pendiente de definición y validación agronómica.

---

## 5.2 Área sembrada

El productor deberá indicar el área sobre la cual realizará la aplicación.

La herramienta deberá permitir trabajar con unidades utilizadas comúnmente por los productores objetivo.

**Estado:** Pendiente definir las unidades iniciales y sus conversiones.

---

## 5.3 Etapa del cultivo

La herramienta deberá contemplar inicialmente cuatro momentos del ciclo:

1. Siembra.
2. Desarrollo.
3. Floración.
4. Fructificación.

La recomendación podrá variar dependiendo de la etapa seleccionada.

**Estado:** Definido funcionalmente. Las reglas agronómicas de cada etapa requieren definición y validación profesional.

---

## 5.4 Parámetros adicionales

Solo deberán solicitarse parámetros adicionales cuando sean necesarios para generar una recomendación técnicamente válida.

Se evitarán formularios extensos o preguntas cuyo resultado no modifique la recomendación.

**Estado:** Los parámetros necesarios deberán definirse conjuntamente con el responsable agronómico.

---

# 6. Producto o fertilizante

La herramienta deberá ser capaz de determinar el producto o alternativa de fertilización correspondiente según los parámetros seleccionados.

El catálogo deberá permitir relacionar como mínimo:

- Cultivo.
- Etapa.
- Producto o fertilizante.
- Presentación o composición relevante.
- Dosis o regla de aplicación.
- Unidad utilizada.

La selección de productos, formulaciones y reglas no será generada libremente por inteligencia artificial.

Deberá provenir de información técnica previamente definida y validada.

---

# 7. Motor de cálculo

El sistema deberá contar con un motor encargado de convertir los datos ingresados por el productor en una recomendación.

De forma conceptual:

Datos del usuario
→ Consulta de reglas técnicas
→ Cálculo según superficie
→ Selección de producto
→ Cantidad necesaria
→ Resultado

Las fórmulas, tablas, dosis, equivalencias, restricciones y excepciones deberán documentarse separadamente y ser validadas agronómicamente.

La interfaz y el motor de cálculo deberán mantenerse separados para facilitar correcciones futuras sin necesidad de reconstruir toda la herramienta.

---

# 8. Resultado

El resultado deberá priorizar claridad sobre complejidad técnica.

Como mínimo deberá comunicar:

- Cultivo seleccionado.
- Área utilizada para el cálculo.
- Etapa del cultivo.
- Producto recomendado.
- Cantidad necesaria.

Cuando corresponda, podrá incluir instrucciones o advertencias breves previamente definidas.

El productor deberá poder comprender el resultado sin interpretar fórmulas técnicas.

---

# 9. Experiencia de usuario

La herramienta deberá ser:

- Sencilla.
- Intuitiva.
- Rápida.
- Visualmente clara.
- Utilizable desde teléfono móvil.
- Comprensible para usuarios con conocimientos digitales básicos.

La complejidad deberá permanecer detrás de la interfaz.

El objetivo no es mostrar al productor todo el cálculo realizado, sino entregarle la información necesaria para tomar una decisión.

---

# 10. Información agronómica requerida

Antes de considerar la herramienta técnicamente terminada deberá existir información validada para alimentar el motor de cálculo.

Entre los elementos que deberán definirse se encuentran:

- Cultivos iniciales.
- Requerimientos de fertilización por cultivo.
- Diferencias según etapa.
- Productos o formulaciones aplicables.
- Dosis.
- Unidades.
- Reglas de conversión.
- Límites y restricciones.
- Situaciones donde no corresponda emitir una recomendación.
- Advertencias técnicas necesarias.

**Responsabilidad:** esta información deberá ser proporcionada o validada por un profesional con criterio agronómico.

El software implementará dichas reglas; no sustituirá su definición técnica.

---

# 11. Inteligencia Artificial

La inteligencia artificial podrá utilizarse como apoyo cuando aporte valor real a la experiencia o al desarrollo de futuras capacidades.

Sin embargo, la dosis y selección técnica de fertilizantes no deberá depender de una respuesta generativa no controlada.

Las recomendaciones críticas deberán provenir de reglas y datos previamente definidos y validados.

---

# 12. Alcance inicial

La prioridad es construir una herramienta suficientemente sencilla para ser desarrollada, probada y comercializada rápidamente.

El alcance inicial se concentrará en:

- Selección de cultivo.
- Ingreso de superficie.
- Selección de etapa.
- Parámetros indispensables.
- Determinación del producto.
- Cálculo de cantidad.
- Presentación clara del resultado.

No se incorporarán funciones adicionales únicamente para hacer que el sistema parezca más completo.

---

# 13. Fuera del alcance actual

Por el momento no forman parte obligatoria de esta herramienta:

- Sistemas agrícolas integrales.
- Monitoreo completo de parcelas.
- Administración avanzada de fincas.
- Diagnósticos agronómicos generales.
- Funciones especializadas que no sean necesarias para resolver el problema de fertilización definido.

Estas posibilidades podrán evaluarse posteriormente como herramientas independientes de Agyl Agro cuando exista una necesidad concreta.

---

# 14. Criterios para considerar la herramienta lista

La herramienta podrá avanzar hacia comercialización cuando:

- El flujo completo pueda ejecutarse desde un dispositivo móvil.
- Los cálculos funcionen correctamente.
- Las reglas agronómicas utilizadas estén validadas.
- Existan casos de prueba satisfactorios.
- El productor pueda utilizarla sin capacitación compleja.
- Los resultados sean comprensibles.
- Se hayan realizado pruebas con usuarios reales.
- No existan errores críticos conocidos.

---

# 15. Regla del proyecto

Toda nueva funcionalidad deberá responder:

> ¿Es necesaria para resolver correctamente el problema de fertilización que esta herramienta pretende solucionar?

Si la respuesta es no, deberá evaluarse para una etapa posterior o como una herramienta independiente de Agyl Agro.

---

# 16. Pendientes de definición

## Decisiones agronómicas

- [ ] Cultivos incluidos inicialmente.
- [ ] Productos/fertilizantes incluidos.
- [ ] Reglas por cultivo.
- [ ] Reglas por etapa.
- [ ] Dosis.
- [ ] Restricciones y excepciones.
- [ ] Advertencias.
- [ ] Parámetros adicionales indispensables.

## Decisiones funcionales

- [ ] Unidades de superficie disponibles.
- [ ] Formato exacto del resultado.
- [ ] Flujo final de pantallas.
- [ ] Determinar si se requiere identificación del productor.
- [ ] Determinar mecanismo comercial de acceso.

---

Este documento deberá actualizarse conforme se validen las decisiones pendientes. Los cambios en reglas agronómicas deberán quedar documentados antes de incorporarse al motor de cálculo.