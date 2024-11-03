# ProyectoFinal-Calabres
Este proyecto es una aplicación de tipo e-commerce para una tienda de gomas y llantas, desarrollada como una Single Page Application (SPA) usando React. La aplicación permite a los usuarios explorar productos, agregarlos al carrito y realizar compras, guardando la información en Firebase Firestore.

Tecnologías Utilizadas
React: Framework de JavaScript utilizado para crear la interfaz de usuario.
React Router DOM: Para manejar la navegación entre las distintas vistas de la aplicación.
Firebase Firestore: Base de datos en la nube para almacenar los productos y las órdenes de compra.
Context API: Para manejar el estado global del carrito de compras.
CSS: Estilado básico para la presentación de la UI.
Funcionalidades
Listado de Productos: Muestra todos los productos disponibles en la tienda.
Vista Detallada del Producto: Muestra la descripción y el precio del producto seleccionado.
Filtrado por Categoría: Permite navegar por las categorías de productos (e.g., llantas, neumáticos).
Carrito de Compras: Los usuarios pueden agregar y quitar productos en el carrito, ver la cantidad total y el subtotal de cada producto.
Checkout: Formulario para realizar la compra, que guarda la orden en Firebase Firestore y genera un ID de orden.
Renderizado Condicional: Mensajes de carga, mensajes de error y mensajes para estados especiales, como “carrito vacío” o “producto sin stock”.
Estructura de Componentes
App: Componente principal que envuelve toda la aplicación.
NavBar: Barra de navegación con enlaces a las distintas secciones.
CartWidget: Ícono del carrito de compras que muestra el número total de productos.
ItemListContainer: Contenedor principal para mostrar el listado de productos.
ItemList y Item: Lista y componente individual para cada producto.
ItemDetailContainer: Contenedor para la vista detallada del producto.
ItemDetail: Componente de detalle del producto.
ItemCount: Selector de cantidad de productos para agregar al carrito.
Cart y CartItem: Muestra el contenido del carrito.
CheckoutForm: Formulario de finalización de compra.
