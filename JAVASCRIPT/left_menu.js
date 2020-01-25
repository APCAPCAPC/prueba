//Indicamos variables
var menu_opened = 1;

//Funcion que comprueba si esta abierto
function opened(){
    if (menu_opened == 1){
        close_menu("menu",1,10);
        menu_opened = 0;
    } else {
        if (menu_opened == 0){
            open_menu("menu",-100,10);
            menu_opened = 1;
        }
    }
}

//Funcion que cierra el menu
function close_menu(Id_de_objeto,finished,timer){
    if (finished <= 100) {
        document.getElementById(Id_de_objeto).style.marginLeft ="-" + finished + "%";
        finished = finished + 1;
        setTimeout(function(){close_menu(Id_de_objeto,finished,timer)},timer)
    }
}

//Funcion que abre el menu
function open_menu(Id_de_objeto,finished,timer){
    if (finished <= -1) {
        document.getElementById(Id_de_objeto).style.marginLeft = finished + "%";
        finished = finished + 1;
        setTimeout(function(){open_menu(Id_de_objeto,finished,timer)},timer)
    } else {
        document.getElementById(Id_de_objeto).style.marginLeft = "0px"
    }
}
//Cerrar el menu al cargar la pagina
menu_opened = 0;
setTimeout('document.getElementById("menu").style.marginLeft ="100%";',300)