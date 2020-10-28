/*
Esto es un documento cogido de la documentación de Mongo
para hacer la práctica Query Documents para la asignatura de 
Base de Datos No Relacionadas de ASIR.

Autor de la practica: Miguel García
Fecha: 28/10/2020
Fuente de Info: MongoDB Docs

*/

db.inventory.insertMany([

    { 

      item: "journal",
      qty: 25,
      size: { h: 14, w: 21, uom: "cm" },
      status: "A" 

    },

    { 

      item: "notebook",
      qty: 50,
      size: { h: 8.5, w: 11, uom: "in" },
      status: "A" 

    },

    {
        
     item: "paper",
     qty: 100,
     size: { h: 8.5, w: 11, uom: "in" },
     status: "D" 


    },

    {
        
     item: "planner",
     qty: 75,
     size: { h: 22.85, w: 30, uom: "cm" },
     status: "D" 


    },

    {
        
     item: "postcard",
     qty: 45,
     size: { h: 10, w: 15.25, uom: "cm" },
     status: "A" 
    
    },

    {
        
        item: "pen",
        qty: 52,
        size: { h: 11, w: 16, uom: "in" },
        status: "C" 
       
    },

    {
        
        item: "letter",
        qty: 10,
        size: { h: 63, w: 75, uom: "cm" },
        status: "C" 
       
    },

    {
        
        item: "glue",
        qty: 36,
        size: { h: 80, w: 63, uom: "in" },
        status: "B" 
       
    }

 ]);