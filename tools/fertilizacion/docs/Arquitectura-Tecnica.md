# Arquitectura Técnica
## Herramienta 01 — Fertilización

**Proyecto:** Agyl Agro  
**Empresa:** AgylGT.IA  
**Estado:** Borrador técnico inicial

---

# 1. Objetivo

Definir la arquitectura técnica inicial de Agyl Agro y de su primera herramienta comercial: Fertilización.

La arquitectura deberá priorizar:

- Simplicidad.
- Desarrollo rápido.
- Uso desde teléfonos móviles.
- Bajo costo inicial.
- Seguridad.
- Facilidad de mantenimiento.
- Capacidad de incorporar nuevas herramientas en el futuro.

Las decisiones documentadas aquí podrán modificarse conforme avance el desarrollo y se obtenga información de usuarios reales.

---

# 2. Plataforma

Agyl Agro funcionará inicialmente como una aplicación web accesible desde el navegador.

No será necesario instalar una aplicación desde una tienda.

La interfaz será diseñada bajo el principio:

> Mobile First

El uso principal esperado será desde teléfonos móviles.

El productor podrá crear un acceso directo a Agyl Agro en la pantalla de inicio de su teléfono para ingresar fácilmente a la plataforma.

---

# 3. Estructura general de Agyl Agro

La cuenta del productor pertenecerá a Agyl Agro y no exclusivamente a la herramienta de Fertilización.

Estructura conceptual:

Cuenta Agyl Agro
→ Perfil del productor
→ Herramientas habilitadas
→ Fertilización
→ Futuras herramientas

Esto permitirá que un productor registrado pueda utilizar nuevas herramientas sin crear una cuenta diferente para cada producto.

---

# 4. Identificación comercial mediante DPI

El número de DPI será utilizado como identificador para comprobar que un productor tiene autorización para utilizar una herramienta adquirida.

Durante la venta se registrará el DPI del comprador y se habilitará la herramienta correspondiente.

Ejemplo conceptual:

DPI
→ Compra registrada
→ Fertilización habilitada

Si el DPI ingresado no tiene una herramienta habilitada, el sistema no permitirá completar el acceso a dicha herramienta.

El DPI no deberá utilizarse por sí solo como contraseña.

---

# 5. Verificación mediante teléfono

Después de comprobar que el DPI posee acceso válido, el productor deberá vincular un número de teléfono.

El teléfono será verificado mediante un código enviado por SMS.

Flujo conceptual:

DPI
→ Validación de compra
→ Número de teléfono
→ Código SMS
→ Verificación
→ Cuenta vinculada
→ Acceso a Agyl Agro

La implementación específica del proveedor de SMS se definirá posteriormente.

---

# 6. Sesión persistente

Después de completar correctamente la verificación inicial, el productor no deberá ingresar DPI ni código SMS cada vez que abra Agyl Agro.

El sistema mantendrá una sesión segura en el dispositivo.

El productor podrá volver a ingresar directamente mientras su sesión continúe siendo válida.

Podrá requerirse una nueva verificación cuando:

- Se utilice un dispositivo diferente.
- Se cierre sesión manualmente.
- Se eliminen los datos del navegador.
- La sesión expire.
- Exista una razón de seguridad para solicitar nueva autenticación.

La implementación deberá utilizar mecanismos seguros de sesión y evitar almacenar credenciales sensibles de forma insegura en el navegador.

---

# 7. Perfil del productor

El perfil inicial deberá solicitar únicamente información necesaria.

Datos definidos inicialmente:

- Nombre.
- Apellido.
- Número de teléfono verificado.
- Departamento.
- Municipio.
- Comunidad o aldea.

No se preguntará inicialmente qué cultivos produce.

La información relacionada con cultivos podrá generarse progresivamente a partir del uso real de las herramientas.

---

# 8. Datos generados por uso

Conforme el productor utilice Fertilización, el sistema podrá registrar información asociada a sus cálculos.

Entre ella:

- Cultivo consultado.
- Etapa.
- Área ingresada.
- Unidad.
- Fertilizante recomendado.
- Cantidad calculada.
- Fecha del cálculo.

Esto permitirá construir un historial de uso sin obligar al productor a declarar previamente todos los cultivos que trabaja.

La recopilación y uso de información deberá comunicarse adecuadamente al usuario y limitarse a los fines definidos para la plataforma.

---

# 9. Historial de cálculos

Los cálculos realizados por productores autenticados se guardarán automáticamente.

La primera versión incluirá una sección:

> Mis cálculos

El productor podrá:

- Consultar cálculos anteriores.
- Abrir un cálculo.
- Volver a visualizar su resultado.

Inicialmente no se requieren:

- Gráficas.
- Estadísticas avanzadas.
- Análisis históricos complejos.

---

# 10. Herramientas y permisos

La plataforma deberá permitir habilitar herramientas individualmente para cada productor.

Ejemplo:

Productor
→ Fertilización: Activa
→ Herramienta 02: Sin acceso
→ Herramienta 03: Sin acceso

Esto permitirá comercializar las herramientas de Agyl Agro individualmente.

Agregar una nueva herramienta no deberá requerir crear nuevamente la cuenta del productor.

---

# 11. Panel administrativo

La primera versión deberá incluir un panel administrativo básico.

Este panel será independiente de la interfaz utilizada por los productores.

Como mínimo deberá permitir:

- Registrar una venta.
- Registrar o localizar un DPI.
- Habilitar Fertilización para un productor.
- Consultar si un productor posee acceso.
- Consultar información básica de la cuenta.
- Desactivar un acceso cuando exista una razón válida.

Las funciones administrativas deberán estar protegidas mediante autenticación y permisos diferentes a los de los productores.

---

# 12. Flujo de venta y activación

Flujo conceptual:

Venta
→ Registrar DPI
→ Habilitar Fertilización
→ Productor abre Agyl Agro
→ Ingresa DPI
→ Sistema comprueba autorización
→ Verifica teléfono mediante SMS
→ Completa perfil
→ Cuenta activada
→ Fertilización disponible

En posteriores ingresos desde un dispositivo con sesión válida:

Abrir Agyl Agro
→ Validar sesión
→ Acceso directo

---

# 13. Base de datos central

Los datos necesarios para operar Agyl Agro se almacenarán en una base de datos central.

La base deberá separar conceptualmente:

## Cuenta

- Identidad interna.
- Datos básicos.
- Teléfono verificado.
- Estado de la cuenta.

## Autorizaciones

- Herramientas adquiridas.
- Estado del acceso.
- Fecha de activación.

## Fertilización

- Cálculos.
- Cultivos.
- Etapas.
- Reglas agronómicas.
- Fertilizantes.
- Unidades.

## Administración

- Ventas.
- Activaciones.
- Acciones administrativas relevantes.

---

# 14. Privacidad y seguridad

Agyl Agro manejará información personal de productores.

El sistema deberá aplicar desde el diseño principios de:

- Minimización de datos.
- Acceso restringido.
- Protección de información personal.
- Sesiones seguras.
- Separación entre usuarios y administradores.
- Registro de acciones administrativas importantes.
- No exposición innecesaria del DPI.
- Protección de credenciales y códigos de autenticación.

El DPI deberá mostrarse parcialmente oculto cuando no sea necesario visualizarlo completo.

La información recopilada deberá tener una finalidad definida y comprensible para el productor.

---

# 15. Separación de componentes

La arquitectura deberá mantener separados, en la medida de lo posible:

Frontend
→ Interfaz del productor y administración

Backend
→ Autenticación, permisos y lógica del sistema

Base de datos
→ Usuarios, accesos, historial y catálogos

Motor de fertilización
→ Evaluación de reglas y cálculos

Datos agronómicos
→ Cultivos, etapas, fertilizantes, dosis y condiciones

Esto permitirá modificar una parte del sistema sin reconstruir innecesariamente las demás.

---

# 16. Arquitectura conceptual

Productor
↓
Interfaz web móvil
↓
Autenticación
↓
Cuenta Agyl Agro
↓
Permisos
↓
Fertilización
↓
Motor de reglas
↓
Base de datos agronómica
↓
Resultado
↓
Historial

Por separado:

Administrador
↓
Panel administrativo
↓
Gestión de ventas y accesos
↓
Base de datos Agyl Agro

---

# 17. Decisiones ya tomadas

- [x] Framework de frontend: Next.js + TypeScript.
- [x] Tecnología de backend inicial: Next.js Server Functions / Route Handlers.
- [x] Motor/base de datos: PostgreSQL mediante Supabase.
- [x] Aplicación web.
- [x] Diseño Mobile First.
- [x] Acceso directo desde pantalla de inicio del teléfono.
- [x] Base de datos central.
- [x] Cuenta general de Agyl Agro.
- [x] DPI utilizado para validar la compra.
- [x] DPI no utilizado como única contraseña.
- [x] Verificación mediante teléfono y SMS.
- [x] Sesión persistente.
- [x] Historial automático de cálculos.
- [x] Sección Mis cálculos.
- [x] Acceso independiente por herramienta.
- [x] Panel administrativo básico.
- [x] Los cultivos del productor se inferirán progresivamente mediante el uso y no se preguntarán durante el registro inicial.

---

# 18. Decisiones técnicas pendientes

- [ ] Proveedor de SMS.
- [ ] Sistema de autenticación y sesiones.
- [ ] Hosting.
- [ ] Dominio.
- [ ] Diseño del panel administrativo.
- [ ] Política de expiración de sesiones.
- [ ] Estrategia de respaldo.
- [ ] Política y mecanismos de privacidad.
- [ ] Estructura definitiva de permisos.
- [ ] Flujo para recuperación o cambio de número telefónico.

---

# 19. Principio de desarrollo

La arquitectura inicial deberá ser suficiente para comercializar Fertilización sin construir prematuramente una plataforma agrícola completa.

Las decisiones deberán favorecer:

> Construir lo necesario para vender y operar correctamente la primera herramienta, manteniendo una base que permita crecer después.