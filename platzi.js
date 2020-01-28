var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverLobo);

var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};

var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.png",
    cargaOK: false
};

var lobo = {
    url: "lobo.png",
    cargaOK: false
};

var cantidadVacas = aleatorio(1, 10);
var cantidadCerdos = aleatorio(1, 4);
var cantidadPollos = aleatorio(1, 6);

var xLobo = 150;
var yLobo = 50;

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo);


function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargaOK = true;
    dibujar();
}

function cargarPollos()
{
    pollo.cargaOK = true;
    dibujar();
}

function cargarLobo()
{
    lobo.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if (fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOK)
    {
        console.log(cantidadVacas);
        for(var v = 0; v < cantidadVacas; v++)
        {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            x = x * 60;
            y = y * 60;
            papel.drawImage(vaca.imagen, x, y);
        }        
    }   
    if (cerdo.cargaOK)
    {
        for(var c = 0; c < cantidadCerdos; c++)
        {
            var xc = aleatorio(0, 7);
            var yc = aleatorio(0, 7);
            xc = xc * 60;
            yc = yc * 60;
            papel.drawImage(cerdo.imagen, xc, yc);
        }
    } 
    if (pollo.cargaOK)
    {
        for(var p = 0; p < cantidadPollos; p++)
        {
            var xp = aleatorio(0, 7);
            var yp = aleatorio(0, 7);
            xp= xp * 60;
            yp = yp * 60;
            papel.drawImage(pollo.imagen, xp, yp);
        }
    } 
    if (lobo.cargaOK)
    {
        papel.drawImage(lobo.imagen, xLobo, yLobo);
    }
           
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado; //palabra reservada que retorna a la linea de código el valor a la línea que invocó la función
}

function moverLobo(evento)
{
    var movimiento = 30;
    switch(evento.keyCode)
    {
        case teclas.UP:
            yLobo = yLobo - movimiento;
            dibujar(xLobo, yLobo);            
        break;        
        case teclas.DOWN:
            yLobo = yLobo + movimiento;
            dibujar(xLobo, yLobo);              
        break;
        case teclas.LEFT:
            xLobo = xLobo - movimiento;
            dibujar(xLobo, yLobo); 
        break;
        case teclas.RIGHT:
            xLobo = xLobo + movimiento;
            dibujar(xLobo, yLobo); 
        break;
        default: 
            console.log("otra tecla");
        break;
    }    
}