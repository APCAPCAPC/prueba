		
var time;

//Este timeout es para darle cuerda al slider
setTimeout('slider("img_1")', 3000)

//Esta es la funcion que hace cambiar de slider
function slider(imagen) {
    if (imagen == "img_1") {
        lessopacity("img_1");
        moreopacity("img_2");
        time = setTimeout("slider('img_2')", 3000)
        console.log("cambiando slider a [] [X] []")
    }
    if (imagen == "img_2") {
        lessopacity("img_2")
        moreopacity("img_3")
        time = setTimeout("slider('img_3')", 3000)
        console.log("cambiando slider a [] [] [X]")
    }
    if (imagen == "img_3") {
        lessopacity("img_3")
        moreopacity("img_1")
        time = setTimeout("slider('img_1')", 3000)
        console.log("cambiando slider a [X] [] []")
    }
}
//Esta es la funcion que oculta la imagen seleccionada
function lessopacity(img) {
    var x = 100;
    var d = 1;
    if (img == "img_1") {
        l_op("img_1", 3, 1, 0.01)
    }
    if (img == "img_2") {
        l_op("img_2", 3, 1, 0.01)
    }
    if (img == "img_3") {
        l_op("img_3", 3, 1, 0.01)
    }
    function l_op(objeto, tiempo, opacityd, f) {
        opacity = opacityd;
        timer = tiempo;

        document.getElementById(objeto).style.opacity = opacity;
        opacity = opacity - f;
        if (opacity <= 0) {} else {
            setTimeout(function() {
                l_op(objeto, timer, opacity, f)
            }, timer)
        }
    }
}

//Esta es la funcion que muestra la imagen seleccionada
function moreopacity(img) {
    if (img == "img_1") {
        m_op("img_1", 3, 0, 0.01)
    }
    if (img == "img_2") {
        m_op("img_2", 3, 0, 0.01)
    }
    if (img == "img_3") {
        m_op("img_3", 3, 0, 0.01)
    }
    function m_op(objeto, tiempo, opacityd, f) {
        opacity = opacityd;
        timer = tiempo;

        document.getElementById(objeto).style.opacity = opacity;
        opacity = opacity + f;

        if (opacity > 1) {} else {
            setTimeout(function() {
                m_op(objeto, timer, opacity, f)
            }, timer)
        }
    }
}

//Esta es la funcion que cambia a la imagen cliqueada en el boton
function changeslider(imagen) {
    var a = imagen
    clearTimeout(time);
    img_1.style.opacity = 0;
    img_2.style.opacity = 0;
    img_3.style.opacity = 0;
    console.log("alterando el orden del slider")
    slider(a)
}

//definimos unas variables para no estar usando document.getElementById("") todo el rato
var img_1 = document.getElementById("img_1")
var img_2 = document.getElementById("img_2")
var img_3 = document.getElementById("img_3")
var prueba = document.getElementById("ejemplo")