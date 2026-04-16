# Propuesta TP DSW

## Grupo

### Integrantes

- 51136 - Cano, Julián
- 48077 - Croci, Juan Ignacio
- 50738 - Bruno, Carlos Uriel

### Repositorios

- [frontend app](http://hyperlinkToGihubOrGitlab)
- [backend app](http://hyperlinkToGihubOrGitlab)
  _Nota_: si utiliza un monorepo indicar un solo link con fullstack app.

## Tema

### Descripción

_2 a 6 líneas describiendo el negocio (menos es más)_

### Modelo

![imagen del modelo]()

_Nota_: incluir un link con la imagen de un modelo, puede ser modelo de dominio, diagrama de clases, DER. Si lo prefieren pueden utilizar diagramas con [Mermaid](https://mermaid.js.org) en lugar de imágenes.

## Alcance Funcional

### Alcance Mínimo

_Nota_: el siguiente es un ejemplo para un grupo de 3 integrantes para un sistema de hotel. El

Regularidad:
|Req|Detalle|
|:-|:-|
|CRUD simple|1. CRUD Cliente<br>2. CRUD Proveedor<br>3. CRUD Tipo_producto<br>4. CRUD Marca|
|CRUD dependiente|1. CRUD Producto {depende de} CRUD Tipo_producto + CRUD Proveedor<br>2. CRUD Descuento {depende de} CRUD Producto<br>3. CRUD Favoritos {depende de} CRUD xxx|
|Listado<br>+<br>detalle| 1. Listado de habitaciones filtrado por tipo de habitación, muestra nro y tipo de habitación => detalle CRUD Habitacion<br> 2. Listado de reservas filtrado por rango de fecha, muestra nro de habitación, fecha inicio y fin estadía, estado y nombre del cliente => detalle muestra datos completos de la reserva y del cliente|
|CUU/Epic|1. Hacer pedido (carrito)<br>2. Entregar/cancelar pedido|

Adicionales para Aprobación
|Req|Detalle|
|:-|:-|
|CRUD |1. CRUD Cliente<br>2. CRUD Proveedor<br>3. CRUD Tipo_producto<br>4. CRUD Marca<br>5. CRUD Tag|
|CUU/Epic|1. Hacer pedido (carrito)<br>2. Entregar/cancelar pedido<br>3. Pago<br>4. Reseña de producto|

### Alcance Adicional Voluntario

_Nota_: El Alcance Adicional Voluntario es opcional, pero ayuda a que la funcionalidad del sistema esté completa y será considerado en la nota en función de su complejidad y esfuerzo.

| Req      | Detalle                                                                                                                                                                                                             |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Listados | 1. Estadía del día filtrado por fecha muestra, cliente, habitaciones y estado <br>2. Reservas filtradas por cliente muestra datos del cliente y de cada reserve fechas, estado cantidad de habitaciones y huespedes |
| CUU/Epic | 1. Consumir servicios<br>2. Cancelación de reserva                                                                                                                                                                  |
| Otros    | 1. Envío de recordatorio de reserva por email                                                                                                                                                                       |
