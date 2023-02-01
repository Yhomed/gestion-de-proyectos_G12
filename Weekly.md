REGISTRO DE WEEKLY

    Qué se hizo esta semana.
    Si se encontró con algún impedimento.
    Qué va a hacer esta semana.

1. 2022/11/07 PRIMER REGISTRO (no primera weekly :P ):

    CONSIDERACIONES:

    - Vamos en el 3er sprint. 
    - Fecha de entrega 3er sprint: 2022/11/08 - 10
    - Entregables:
        1. Retro                                              LISTO
        2. Tablero Trello                                     LISTO
        3. Registro weeklys:                                  LISTO
        4. Implementar EJS (template engine):                 LISTO
        5. Separar vistas en carpetas:                        LISTO
        6. Separar componentes repetidos en vistas parciales: LISTO
        7. Página creación productos y sus estilos:           LISTO
        8. Página edición productos y sus estilos:            LISTO


    1. ¿QUÉ SE HIZO ESTA SEMANA?

        ABRIL: se realizó el formulario para createProducts.ejs y editProducts.ejs con el contenido que se especificaba en el sprint

        FER: se hizo el home.html, tambien se realizo cambios en las rutas,controlers y app para su correcto funcionamiento

        YHOMED: Se dio seguimiento al proyecto integrador para su posterior entrega 

        LILI: Reorganizar las rutas, Modularizar y Crear Controladores

    2.  ¿IMPEDIMENTOS?

        ABRIL: no se detectaron

        FER: En que las rutas estaban mal referenciadas, y que no tomaba los estilos del css

        YHOMED: tiempo para desarrollar actividades

        LILI: ninguno

    3. ¿QUÉ SE HARÁ ESTA SEMANA?

        ABRIL: realizar los cambios mencionados en Trello para el productDetail en su correspondiente hoja de estilos y agregar configuracion para utilizacion de metodos no soportados

        FER: estudiar el sprint para incluir metodos put y delete

        YHOMED: realizar las correcciones pertienentes que se determinen en equipo para dar finalidad al proyecto integrador 

        LILI: revisar el sprint para continuar la planificacion

2. 2022/11/17 SEGUNDO REGISTRO WEEKLY:

    CONSIDERACIONES:

    - Vamos en el 4to sprint. 
    - Fecha de entrega 4to sprint: Martes 2022/11/29
    - Entregables:
        1. Retro                                                                      LISTO
        2. Actualización Tablero Trello                                               LISTO 
        3. Registro weeklys                                                           LISTO 
        4. Definir los campos necesarios para los productos                           LISTO
        5. Generar archivo JSON de productos                                          LISTO
        6. Definir los campos necesarios para los usuarios                            LISTO
        7. Generar archivo JSON de usuarios                                           LISTO
        8. CRUD de productos (Crear productos):                                       LISTO
        9. CRUD de productos (Listado de productos):                                  LISTO
        10. CRUD de productos (Detalle de productos):                                 LISTO
        11. CRUD de productos (Editar productos):                                     LISTO
        12. CRUD de productos (Borrar productos):                                     LISTO

    1. ¿QUÉ SE HIZO ESTA SEMANA?

    2. ¿IMPEDIMENTOS?

    3. ¿QUÉ SE HARÁ ESTA SEMANA?

        1. Plantear estrategias que permitan dar una solución a las dificultades que se generan en el momento de desarrollar el proyecto integrador 
        2. Consultar fuentes externas que ayuden a interiorizar los conceptos
        3. Dar continuidad al desarrollo de las actividades según la programación 
        4. Crear archivo JSON con detalle de productos 
        5. Definir los campos necesarios aplicables a cada producto en curso 
            - Identificador
            - Nombre del producto
            - Descripción
            - Imagen
            - Precio
        6. Construir una carpeta data con la información solicitada: Archivo de productos (product.JSON) y Archivo de usuarios (users.JSON)
        7. Generar archivo JSON detallando los usuarios 
        8. Definir los campos asignados a cada usuario 
            - Id
            - Nombres
            - Apellidos
            - Email
            - Número de contacto
            - Contraseña
            - Foto (Opcional para el usuario)
        9. Rutas para el CRUD de productos:
            - /products (GET) - Listado de productos 
            - /products/create (GET) - Formulario de creación de productos 
            - /products/:id (GET) - Detalle de un producto en particular 
            - /products (POST) - Acción de creación de productos  
            - /products/:id/edit (GET) - Formulario de edición de productos  
            - /products/:id (PUT) - Acción de edición de productos 
            - /products/:id (DELETE) - Acción de borrado de productos

3. 2023/1/6 REGISTRO WEEKLY:

    CONSIDERACIONES:

    - Vamos en el 5to sprint.                                                   
    - Fecha de entrega 5to Sprint:                      
    - Entregables:
        1. Retro                                                                LISTO
        2. Actualización tablero trello                                         LISTO
        3. Registro weeklys                                                     LISTO
        4. Formulario de registro                                               LISTO
            a. Campos mínimos mencionados
            b. Subida de una imagen de perfil
            c. Guardado en JSON con encriptación de contraseña
        5. Formulario de login                                                  LISTO
            a. Campos de email y password
            b. Función de recordar al usuario (opcional)
        6. Rutas de huéspedes y usuarios                                        LISTO
            a. Huéspedes: redireccionan al perfil si el usuario está logueado
            b. Usuarios: redireccionan al login si el usuario no está logueado

        Rutas:
            /routes/users.js
        Controlador:
            /controllers/userController.js
        Vistas:
            /views/users/
        Directorio:
            /public/img/users/
        Coleccion:
            /data/users.json

        Rutas para el CRUD de usuarios:
        - /users (GET) - Listado de usuarios
            - /user/register (GET) - Formulario de registro (creación de usuarios) 
            - /user/login (GET) - Formulario de login
            - /user/detail/:id (GET) - Detalle de un usuario en particular 
            - /user (POST) - Proceso de registro
            - /user/profile (POST) - Proceso de login  
            - /user/profile/:id (GET) - Perfil del usuario logueado
            - /user/:id/edit (GET) - Formulario de edición de usuarios 
            - /user/:id (PUT) - Acción de edición de usuarios
            - /user/:id (DELETE) - Acción de borrado de usuarios

4. 2023/1/26 REGISTRO WEEKLY:

    - Vamos en el 6to Sprint.
    - Fecha de entrega 6to Sprint: Martes 2023/02/10
    - Entregables:
        1. Archivo retro.md con el resultado de la retrospectiva.                           LISTO
        2. (Opcional) Archivo daily.md con sus opiniones sobre las dailys/weeklys.          PENDIENTE
        3. Tablero de trabajo actualizado.                                                  PENDIENTE
        4. Diagrama de base de datos.                                                       PENDIENTE
        5. Script de creación de estructura de base de datos con:                           PENDIENTE
            a. Creación de la base de datos y de todas sus tablas.
            b. Tipos de datos de los campos y sus restricciones.
            c. Relaciones entre las diferentes tablas.
        6. (Opcional) Script de datos de base de datos para:                                PENDIENTE
            a. Tabla de usuarios.
            b. Tabla de productos.
            c. Tablas secundarias (categorías, marcas, colores, talles, etc).
            d. (Opcional) Tabla de carrito de compras y productos de carritos de compras.
        7. Creación de carpeta Sequelize con:                                               PENDIENTE
            a. Archivos de configuración.
            b. Modelos con sus relaciones.
        8. CRUD:                                                                            PENDIENTE
            a. De productos.
            b. De usuarios.
            c. (Opcional) De tablas secundarias.


