--start TRANSACTION
--select * from courses
insert into courses(title, parrafo, price, number, image)
values
    (   "Herramientas para análisis de datos con EXCEL",
        "Obtendrá los conocimientos básicos de las principales herramientas de análisis de datos, necesarios para continuar con la Ruta de Gestión de Proyectos potencializada con Herramientas Avanzadas de EXCEL",
        3000,1,"Imagen02-Curso00.png"
    ),
    (   "Herramientas avanzadas de EXCEL para la elaboración de cronogramas en Proyectos Ágiles y Prescriptivos",
        "Aprenderás las herramientas que permitirán optimizar el cronograma de los proyectos para que tu equipo se convierta en uno de alto desempeño",
        30000,2,"Imagen02-Curso01.png"
    ),
    (
        "Elaboración y Gestión de presupuestos con Herramientas Avanzadas de EXCEL",
        "Una estimación más precisa del presupuesto del proyecto te permitirá disminuir la desviación futura y asegurar el beneficio económico del proyecto y de tu compañía. Esto será posible gracias al uso de Power Query y Power Pivot de EXCEL",
        30000,3,"Imagen02-Curso02.png"
    ),
    (
        "Herramientas para la Priorización y Clasificación de Alternativas y Proyectos",
        "Los líderes y equipos de los proyectos están limitados por las restricciones del proyecto y es necesario realizar un uso racional de los recursos. Esto será posible gracias a las técnicas de clasificación, priorización y análisis desarrolladas con la ayuda de EXCEL",
        30000,4,"Imagen02-Curso03.png"
    ),
    (
        "Elaboración de Tableros de Seguimiento 'Dashboards' y Control del Proyecto con POWER BI",
        "Los dashboards y tableros de control te permitirán visualizar los indicadores claves que están conectados con el mapa estratégico del proyecto y tomar decisiones acertadas a tiempo para ordenar y controlar la gestión del proyecto",
        30000,5,"Imagen02-Curso04.png"
    );

insert into usuarios(id, name, surname, email, password,image, is_admin)
values
    (
        1,"Fernando","Sanchez","alala@gmail","$2a$10$1igH.lNTDpK7CYYKFTX8MeUAtfIePCoO.XsiTbjmY0tJXRrDJyZzS","user1674353485630.jpg",0
    ),
      
   
    
    
    
    
