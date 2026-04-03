# 🌐 proyecto web practica
> Web dinámica con componentes independientes construida **100% con HTML, CSS y JavaScript nativo**. Sin frameworks, sin dependencias externas, sin pasos de compilación obligatorios.

## 📖 Descripción
Arquitectura frontend basada en **estándares web nativos**. La interfaz se divide en componentes autónomos que encapsulan su estructura, estilo y comportamiento. Cada uno se registra como elemento personalizado, se carga dinámicamente bajo demanda y se comunica mediante eventos nativos. Ideal para proyectos ligeros, máxima performance, zero-dependency o como base reutilizable en cualquier ecosistema.

## ✨ Características
- 🧩 **Encapsulamiento **: `Shadow DOM` + `Custom Elements` = aislamiento total de estilos y lógica.
- ⚡ **Carga dinámica**: `import()` + `<script type="module">` = lazy loading sin bundlers.
- 🔌 **Cero dependencias**: Funciona directamente en cualquier navegador moderno.
- 🔄 **Despliegue independiente**: Cada componente es un módulo autónomo. Actualiza sin tocar el resto.
- 📡 **Comunicación estándar**: `CustomEvent`, atributos HTML y propiedades observadas.
- 🎨 **Estilos aislados**: CSS Scopes vía Shadow DOM + CSS Variables para tokens globales.

## 🏗️ Arquitectura
