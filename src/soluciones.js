// Consultar de Comparación

/* 

-- 1º Consulta con find con el operador $eq --
// Hemos realizado una consulta para que nos muestre los estados iguales a "A"

> db.inventory.find( { status: { $eq:"A" } } )          
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4be"), "item" : "journal", "qty" : 25, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4bf"), "item" : "notebook", "qty" : 50, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "A" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c2"), "item" : "postcard", "qty" : 45, "size" : { "h" : 10, "w" : 15.25, "uom" : "cm" }, "status" : "A" }


*/



/* 

-- 2º Consulta con find con el operador $gt --
// Hemos realizado una consulta para que nos muestre las cantidades mayores a 10

> db.inventory.find( { qty: { $gt:10 } } )  
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4be"), "item" : "journal", "qty" : 25, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4bf"), "item" : "notebook", "qty" : 50, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "A" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c0"), "item" : "paper", "qty" : 100, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "D" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c1"), "item" : "planner", "qty" : 75, "size" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "status" : "D" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c2"), "item" : "postcard", "qty" : 45, "size" : { "h" : 10, "w" : 15.25, "uom" : "cm" }, "status" : "A" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c3"), "item" : "pen", "qty" : 52, "size" : { "h" : 11, "w" : 16, "uom" : "in" }, "status" : "C" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c5"), "item" : "glue", "qty" : 36, "size" : { "h" : 80, "w" : 63, "uom" : "in" }, "status" : "B" }


*/



/* 

-- 3º Consulta con find con el operador $gte --
// Hemos realizado una consulta para que nos muestre las cantidades mayores e iguales a 75

> db.inventory.find( { qty: { $gte:75  } } )
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c0"), "item" : "paper", "qty" : 100, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "D" }   
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c1"), "item" : "planner", "qty" : 75, "size" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "status" : "D" }


*/



/* 

-- 4º Consulta con find con el operador $in --
// Hemos realizado una consulta para que nos muestre los estados que sean C y B

> db.inventory.find( { status: { $in: [ "C", "B" ] } } )
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c3"), "item" : "pen", "qty" : 52, "size" : { "h" : 11, "w" : 16, "uom" : "in" }, "status" : "C" }   
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c4"), "item" : "letter", "qty" : 10, "size" : { "h" : 63, "w" : 75, "uom" : "cm" }, "status" : "C" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c5"), "item" : "glue", "qty" : 36, "size" : { "h" : 80, "w" : 63, "uom" : "in" }, "status" : "B" }  

*/



/* 

-- 5º Consulta con find con el operador $lt --
// Hemos realizado una consulta para que nos muestre las cantidades menores a 25

> db.inventory.find( { qty: { $lt:25 } } )
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c4"), "item" : "letter", "qty" : 10, "size" : { "h" : 63, "w" : 75, "uom" : "cm" }, "status" : "C" }

*/



/* 

-- 6º Consulta con find con el operador $lte --
// Hemos realizado una consulta para que nos muestre las cantidades menores e iguales a 25

> db.inventory.find( { qty: { $lte:25 } } )
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4be"), "item" : "journal", "qty" : 25, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c4"), "item" : "letter", "qty" : 10, "size" : { "h" : 63, "w" : 75, "uom" : "cm" }, "status" : "C" }


*/



/* 

-- 7º Consulta con find con el operador $ne --
// Hemos realizado una consulta para que nos muestre los estados que no sean "A"

> db.inventory.find( { status: { $ne:"A" } } )         
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c0"), "item" : "paper", "qty" : 100, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "D" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c1"), "item" : "planner", "qty" : 75, "size" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "status" : "D" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c3"), "item" : "pen", "qty" : 52, "size" : { "h" : 11, "w" : 16, "uom" : "in" }, "status" : "C" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c4"), "item" : "letter", "qty" : 10, "size" : { "h" : 63, "w" : 75, "uom" : "cm" }, "status" : "C" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c5"), "item" : "glue", "qty" : 36, "size" : { "h" : 80, "w" : 63, "uom" : "in" }, "status" : "B" }


*/



/* 

-- 8º Consulta con find con el operador $nin --
// Hemos realizado una consulta para que nos muestre los estados que no sean "A" y "C"

> db.inventory.find( { status: { $nin:[ "A", "C"] } } )
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c0"), "item" : "paper", "qty" : 100, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "D" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c1"), "item" : "planner", "qty" : 75, "size" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "status" : "D" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c5"), "item" : "glue", "qty" : 36, "size" : { "h" : 80, "w" : 63, "uom" : "in" }, "status" : "B" }

*/




// Consultas Lógicas //

/*

-- 1º Consulta con el operador $and explicito --
// Hemos realizado una consulta para que nos muestre los items que sean paper y tengan un estado "D"

> db.inventory.find( { $and: [ { item: "paper"}, { status:  "D"  } ] } )
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c0"), "item" : "paper", "qty" : 100, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "D" }

*/

/*

-- 1.1º Consulta con el operador $and implícito --
// Hemos realizado una consulta para que nos muestre los items que sean paper y tengan un estado "D"

> db.inventory.find( {item:"paper", status:{$eq:"D"}})
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c0"), "item" : "paper", "qty" : 100, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "D" }

*/


/*

-- 2º Consulta con el operador $not --
// Hemos realizado una consulta para que nos muestre los items que no sean paper

> db.inventory.find({item: {$not:{$eq:"paper"}} })
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4be"), "item" : "journal", "qty" : 25, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }    
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4bf"), "item" : "notebook", "qty" : 50, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "A" }  
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c1"), "item" : "planner", "qty" : 75, "size" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "status" : "D" } 
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c2"), "item" : "postcard", "qty" : 45, "size" : { "h" : 10, "w" : 15.25, "uom" : "cm" }, "status" : "A" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c3"), "item" : "pen", "qty" : 52, "size" : { "h" : 11, "w" : 16, "uom" : "in" }, "status" : "C" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c4"), "item" : "letter", "qty" : 10, "size" : { "h" : 63, "w" : 75, "uom" : "cm" }, "status" : "C" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c5"), "item" : "glue", "qty" : 36, "size" : { "h" : 80, "w" : 63, "uom" : "in" }, "status" : "B" }


*/

/* 

-- 3º Consulta con el operador $nor --
// Hemos realizado una consulta para que nos muestre las cantidades que no son 50 y las cantidades que no son menores de 25

> db.inventory.find( { $nor: [ { qty: { $eq: 50 } }, { qty: { $lt: 25 } } ] } )
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4be"), "item" : "journal", "qty" : 25, "size" : { "h" : 14, "w" : 21, "uom" : "cm" }, "status" : "A" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c0"), "item" : "paper", "qty" : 100, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "D" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c1"), "item" : "planner", "qty" : 75, "size" : { "h" : 22.85, "w" : 30, "uom" : "cm" }, "status" : "D" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c2"), "item" : "postcard", "qty" : 45, "size" : { "h" : 10, "w" : 15.25, "uom" : "cm" }, "status" : "A" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c3"), "item" : "pen", "qty" : 52, "size" : { "h" : 11, "w" : 16, "uom" : "in" }, "status" : "C" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c5"), "item" : "glue", "qty" : 36, "size" : { "h" : 80, "w" : 63, "uom" : "in" }, "status" : "B" }

*/


/* 

-- 4º Consulta con el operador $or
// Hemos realizado una consulta para que nos muestre las cantidades iguales a 50 y las cantidades iguales a 25

> db.inventory.find( { $or: [ { qty: { $eq: 50 } }, { qty: { $lt: 25 } } ] } ) 
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4bf"), "item" : "notebook", "qty" : 50, "size" : { "h" : 8.5, "w" : 11, "uom" : "in" }, "status" : "A" }
{ "_id" : ObjectId("5f9966f9c842cadb27dfe4c4"), "item" : "letter", "qty" : 10, "size" : { "h" : 63, "w" : 75, "uom" : "cm" }, "status" : "C" }

*/

