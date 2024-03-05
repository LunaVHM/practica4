let menu, bebida;
menu = prompt("Menú: café, frappe, té o agua")
switch (menu){
    case 'café':
        bebida = prompt ("Qué tipo de café desea: mocha, capuchino, latte, americano o machiato");
      if (bebida == "mocha") {
      bebida= "Su bebida esta siendo preparada, disfrute su café";
    }
      if (bebida == "capuchino") {
        bebida= "Su bebida esta siendo preparada, disfrute su café";
      }
    if (bebida == "latte") {
      bebida= "Su bebida esta siendo preparada, disfrute su café";
    }
    if (bebida == "americano") {
      bebida= "Su bebida esta siendo preparada, disfrute su café";
    }
    if (bebida == "machiato") {
      bebida= "Su bebida esta siendo preparada, disfrute su café";
    }
    else; 
        break;
    case 'frappe':
        bebida = prompt ("Qué sabor prefiere: cookies and cream, fresa ó chocolate") ;
      if (bebida == "cookies and cream") {
      bebida= "Su bebida sera entregada en un momento, disfrutela";
    }
      if (bebida == "fresa") {
        bebida= "Su bebida sera entregada en un momento, disfrutela";
      }
    if (bebida == "chocolate") {
      bebida= "Su bebida sera entregada en un momento, disfrutela";
    }
    
    else; 
        break;
    case 'té':
        bebida = prompt ("Qué tipo de té desea: menta, manzanilla, limón o matcha");
      if (bebida == "menta") {
      bebida= "Su bebida esta siendo preparada, disfrute su té";
    }
      if (bebida == "manzanilla") {
        bebida= "Su bebida esta siendo preparada, disfrute su té";
      }
    if (bebida == "limón") {
      bebida= "Su bebida esta siendo preparada, disfrute su té";
    }
    if (bebida == "matcha") {
      bebida= "Su bebida esta siendo preparada, disfrute su té";
    }
    else; 
        break;
    case 'agua':
        bebida = prompt ("¿Desea agua natural o mineral?");
      if (bebida == "natural") {
      bebida= "Disfrute su agua, tenga buen día";
    }
      if (bebida == "mineral") {
        bebida= "Disfrute su agua mineral, tenga buen día";
      }
    else; 
        break;
    default:
        bebida = "Gracias por su compra, tenga buen día";
    }
alert(bebida);