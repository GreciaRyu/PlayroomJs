function Videojuego (nombre,genero,desarrollador,fecha_de_publicacion,puntuacion,plataformas){
    this.nombre=nombre
    this.genero= genero
    this.desarrollador= desarrollador
    this.fecha_de_publicacion=fecha_de_publicacion
    this.puntuacion= puntuacion
    this.plataformas= plataformas
}

let videojuegos=[
    new Videojuego ("Persona 5 Royal","RPG","Altus Co","21-10-2022",
                    8.8,["Xbox One","Nintendo Switch","Windows","PlayStation 5"]),
    new Videojuego ("The Legend of Zelda: Tears of the Kingdom","Accion","Nintendo","12-05-2023",
                    9.5,["Nintendo Switch"]),
    new Videojuego ("Portal","Accion, Puzzle","Valve Co","10-10-2007",
                    8.4,["Linux", "Windows", "Android"]),
    new Videojuego ("Mass Effect","Accion-RPG","BioWare Corporation","20-11-2007",
                    8.6,["Windows", "Xbox 360", "Xbox One"]),
    new Videojuego ("Circus Charlie","Accion","Konami Industry Co. Ltd.","1984",
                    6.5,["MSX", "Arcade", "NES", "Commodore 64", "Wii U", "PlayStation 4", "Nintendo Switch"]),
    new Videojuego ("Pac-Man World 3","Accion","Blitz Games Ltd","15-11-2005",
                    7.2,["Windows", "PlayStation 2", "Xbox", "GameCube", "PSP", "Nintendo DS"]),
    new Videojuego ("Cult of the Lamb","Accion, Simulacion","Massive Monster Ltd.","11-04-2022",
                    8.2,["Windows", "Macintosh", "PlayStation 4", "Xbox One", "Nintendo Switch", "PlayStation 5", "Xbox Series"]),
    new Videojuego ("Terraria","Accion","Re-Logic","16-05-20112",
                    7.9,["Windows", "PlaStation 4", "Android", "Xbox 360", "iPhone", "PSVita", "Wii U"]),
    new Videojuego ("Hades","RPG","Supergiant Games, Inc.","06-12-2018",
                    9.0,["Windows", "Nintendo Switch", "PlaStation 4", "Xbox One", "Playstation 5"]),
    new Videojuego ("Super Mario 64","Action","Nintendo","1996",
                    8.5,["Nintendo 64","Wii","Wii U","Nintendo Switch"])

] 

let nombreUsuario= prompt("Bienvenido a Playroom, ¿Cómo te llamas?").toLowerCase()
let mensaje= ". Bienvenido a Playroom.\n¿Qué te gustaría hacer esta vez?\n1 - Ver todos los juegos\n2 - Ver juegos por genero\n3 - Buscar la puntuación de un juego\n4 - Buscar juegos disponibles en una plataforma"
let bienvenida= Number(prompt("Hola ".concat(nombreUsuario,mensaje)))
let listado = ""

function enlistar(propiedad, array) {
    if (propiedad==="nombre") {
        for (let i=0; i<array.length; i++) {
            listado+=array[i].nombre+"\n";
        }
        alert("Juegos encontrados:\n\n"+listado)
    }
    else {
        for (let i=0; i<array.length; i++) {
            listado+=array[i].nombre+" - "+array[i][propiedad]+"\n";
        }
        alert ("Juegos encontrados:\n\n"+listado)
    }
}

function ordenarVideojuegosPor(propiedad) {
    return videojuegos.sort((a, b) => {
     if (a[propiedad] > b[propiedad]) {
         return 1;
     }
     if (a[propiedad] < b[propiedad]) {
         return -1;
     }
     return 0;
 })
 }
 
if (bienvenida===1){
    let opcion=Number(prompt("Escoge el orden en el que quisieras ver los juegos\n1 - por nombre de A a Z\n2 - por género de A a Z\n3 - por desarrollador de A a Z\n4 - por puntuación"))
    if (opcion===1) { 
        ordenarVideojuegosPor("nombre")
        enlistar("nombre",videojuegos)
    }
    else if (opcion===2){
        ordenarVideojuegosPor("genero")
        enlistar("genero",videojuegos)
    }
    else if (opcion===3){
        ordenarVideojuegosPor("desarrollador")
        enlistar("desarrollador",videojuegos)
    }
    else if (opcion===4){
        ordenarVideojuegosPor("puntuacion")
        enlistar("puntuacion",videojuegos)
    }
    else{
        prompt("opción incorrecta, intenta de nuevo")
    }
}
else if(bienvenida===2){
    let generoSeleccionado=Number(prompt("Escoge el genero que deseas filtrar:\n1 -Acción\n2 - Puzzle\n3 - RPG\n4 - Simulación"))
    if (generoSeleccionado===1){
        let videojuegoPorGenero = videojuegos.filter(videojuego => videojuego.genero.includes("Accion"))
        enlistar("nombre",videojuegoPorGenero)
    }
    else if(generoSeleccionado===2){
        let videojuegoPorGenero = videojuegos.filter(videojuego => videojuego.genero.includes("Puzzle"))
        enlistar("nombre",videojuegoPorGenero)
    }
    else if(generoSeleccionado===3){
        let videojuegoPorGenero = videojuegos.filter(videojuego => videojuego.genero.includes("RPG"))
        enlistar("nombre",videojuegoPorGenero)
    }
    else if(generoSeleccionado===4){
        let videojuegoPorGenero = videojuegos.filter(videojuego => videojuego.genero.includes("Simulacion"))
        enlistar("nombre",videojuegoPorGenero)
    } 
}
else if(bienvenida===3){
    let nombreJuego=prompt("Ingrese nombre del juego:")
    let videojuegoBuscado=videojuegos.find(videojuego => videojuego.nombre.toLowerCase() === nombreJuego.toLowerCase())
    if (videojuegoBuscado === undefined) {
        alert("videojuego no encontrado, pruebe de nuevo")
    }
    else {
        alert("El juego "+nombreJuego+" tiene una puntuación de: "+videojuegoBuscado.puntuacion)
    }
}
else if (bienvenida===4){
    let plataformaSeleccionada=prompt("Introduce la plataforma que buscas:")
    let videojuegosDisponibles=[]
    videojuegos.forEach(videojuego => {
        let videojuegoEncontrado=videojuego.plataformas.find(plataforma=>plataforma.toLowerCase()===plataformaSeleccionada.toLowerCase())
        if (videojuegoEncontrado!=undefined){
            videojuegosDisponibles.push(videojuego)
        }
    })
    if (videojuegosDisponibles.length===0) {
        alert("plataforma no encontrada, prueba de nuevo")
    }
    else{
    enlistar("nombre",videojuegosDisponibles)
    }
}
else {
    alert("opción ivalida, intenta de nuevo")
}




