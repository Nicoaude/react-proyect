# Proyecto Final: E-commerce React

## Descripción
App estilo e-commerce basado en una tienda de computación.
Gif probando la tienda: https://i.imgur.com/8tiF0zJ.gif

## Componentes principales
- **NavBar**: Barra de navegación con categorías y acceso al carrito
- **CartWidget**: Ícono del carrito con contador de productos
- **ItemListContainer**: Contenedor principal para mostrar los productos
- **ItemList**: Lista de productos con formato de grid
- **Item**: Tarjeta individual de producto
- **ItemDetailContainer**: Contenedor para la vista detallada de un producto
- **ItemDetail**: Vista detallada con descripción y opciones de compra
  - ItemQuantitySelector: Selector de cantidad
  - Description: Descripción del producto
  - AddItemButton: Botón para agregar al carrito
- **Checkout**: Proceso de finalización de compra
  - Brief: Resumen de la compra

## Flujos principales
- Navegación por categorías
- Selección y vista detallada de productos
- Agregar productos al carrito
- Proceso de checkout y generación de orden

## Tecnologías utilizadas
- React
- Vite
- React Router
- Context API para manejo del carrito
- CSS puro para estilos

## Instalación
```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
