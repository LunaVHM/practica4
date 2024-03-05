inicio del proceso
definir las variables menú y bebidas
solicitar que el usuario elija una opcion del menú
 EN CASO DE (bebidas == café)
  solicitar que el usuario elija una opcion del nuevo menú
     SI (bebida == "mocha") 
       escribir "Su bebida esta siendo preparada, disfrute su café"
     SI NO, SI (bebida == "capuchino") 
       escribir "Su bebida esta siendo preparada, disfrute su café"
     SI NO, SI(bebida == "latte") 
        escribir "Su bebida esta siendo preparada, disfrute su café"
     SI NO, SI (bebida == "americano") 
        escribir "Su Bebida esta siendo preparada, disfrute su café"
     SI NO (bebida == "machiato") 
        escribir "Su bebida esta siendo preparada, disfrute su café"
     FIN DEL SI
 
 EN CASO DE (bebidas == frappe)
  solicitar que el usuario elija una opcion del nuevo menú
     SI NO, SI(bebida == "cookies and cream") 
        escribir "Su bebida sera entregada en un momento, disfrutela"
     SI NO, SI(bebida == "fresa") 
        escribir "Su bebida sera entregada en un momento, disfrutela"
     SI NO(bebida == "chocolate") 
        escribir "Su bebida sera entregada en un momento, disfrutela"
    FIN DEL SI

 EN CASO DE (bebidas == té)
  solicitar que el usuario elija una opcion del nuevo menú
     SI (bebida == "menta")
        escribir "Su bebida esta siendo preparada, disfrute su té";
     SI NO, SI (bebida == "manzanilla") 
        escribir "Su bebida esta siendo preparada, disfrute su té";
     SI NO, SI(bebida == "limón") 
        escribir "Su bebida esta siendo preparada, disfrute su té";
     SI NO, SI(bebida == "matcha") 
        escribir "Su bebida esta siendo preparada, disfrute su té";
     FIN DEL SI
  FIN DEL CASE
  
 EN CASO DE (bebidas == agua)
  solicitar que el usuario elija una opcion del nuevo menú
     SI (bebida == "natural") 
        escribir "Disfrute su agua, tenga buen día";
     SI NO (bebida == "mineral") 
        escribir "Disfrute su agua mineral, tenga buen día";
     FIN DEL SI

   EN CASO DE ninguna de las respuestas anteriores
   escribir "Gracias por su compra, tenga buen día";
   FIN DEL CASE
fin del proceso