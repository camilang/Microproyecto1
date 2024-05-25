function sendForm(){
    const name = document.getElementById("name").value;
    if(name != ""){
        window.location.href = "../HTML/main.html";
        document.getElementById("name").innerHTML = "";
        localStorage.setItem("user",name);
    return true}else{
            document.getElementById("warning").innerHTML = "Ingrese un usuario válido";
            document.getElementById("name").innerHTML = "";
            return false;
        }
    }

function changeTitle(){
    document.getElementById("user-name").innerHTML = localStorage.getItem("user");
}

function startGame(){
    window.location.href = "../HTML/game.html";
    console.log(createScriptsHangman("hola"))
    return true
    }

function backIndex(){
    window.location.href = "../HTML/index.html";
    return true
    }

function changeUser(){
    document.getElementById("user-name-game").innerHTML = localStorage.getItem("user");
    }



function sendLetter(){
    document.getElementById("warning-letter-announce").innerHTML = "";
    let letter = document.getElementById("selectLetter").value;
    if(letter != "" && (String(letter)).length == 1 ) {
        console.log(letter)}else{
            document.getElementById("warning-letter-announce").innerHTML = "Ingrese una letra";
        }
    document.getElementById("selectLetter").value = "";
    }

//Funcion para escoger una palabra al azar 
function chooseWord(){
    const Wordlist = ["manzana", "naranja", "banana", "uva", "pera", "limón", "piña", "fresa", "frambuesa", "arándano", "kiwi", "mango", "melocotón", "cereza", "sandía"];
     // Obtener un índice aleatorio dentro del rango de la longitud de la lista
    var randomIndex  = Math.floor(Math.random() * Wordlist.length);
    // Almacenar un valor
    localStorage.setItem('word', Wordlist[randomIndex]);
}


//Funcion para convertir una palabra en guiones
function createScriptsHangman() {
    //Primero obtengo el localStorage con la palabra seleccionada
    const word = localStorage.getItem('word');
    // Convertir la palabra a minúsculas
    word = word.toLowerCase();
    // Inicializar un array vacío para almacenar los guiones
    let scripts = [];
    // Recorrer cada letra de la palabra
    for (let i = 0; i < word.length; i++) {
        scripts.push("_");
    }
    // Unir los guiones en una cadena de texto y devolverla
    return scripts.join("");
}

//Funcion para colocar los pisos de la palabra en la pantalla
function scripts(){
    //Primero obtengo el localStorage con la palabra seleccionada
    const word = localStorage.getItem('word');
    //Convierto la palabra en guiones
    const wordscripts= createScriptsHangman(word);
    const newScripts = document.getElementsByClassName("container-letter-word-space");
    newScripts.innerHTML= wordscripts ;
}

//Funcion para saber si una letra esta en una palabra 
function verifyLetterWord() {
    //Primero obtengo el localStorage con la palabra seleccionada
    const word = localStorage.getItem('word');
    let letterselected = document.getElementById("selectLetter");
    let letter = letterselected.value;
    // Convertir la palabra y la letra a minúsculas para ignorar mayúsculas/minúsculas
    word = word.toLowerCase();
    letter = letter.toLowerCase();
    //Busco la palabra en guiones del juego
    let scripts = document.getElementById("container-letter-word-space");
    let newWord="";
    var point=0;
    // Recorrer la palabra letra por letra
    for (let i = 0; i < word.length; i++) 
        //Si la palabra en una posicion es igual a la letra seleccionada
        { if (word[i] === letter) {
        //La constante newWord se convierte en la palabra en guiones que ya se tenia pero con la nueva letra encontrada
        newWord=changeLetter(scripts,i,letter);
        //Cambia el texto del contenedor de letras por la newWord
        scripts.innerText=newWord;
        //La constante de puntos aumenta por cada letra encontrada
        point+=1;
         // Almacenar un valor
        localStorage.setItem('points', point);
    }else{
        //Si la letra no es conseguida en esa posicion entonces queda igual
        scripts.innerText=newWord;
        point-=1;
        //Aca va una funcion para mostrar el personaje
        localStorage.setItem('points', point);
    }
    }
}

//Funcion para cambiar un piso por una letra
function changeLetter(word, index, newLetter) {
    // Convertir en un array de caracteres
    let charArray = word.split('');
    // Remplazar la letra en el indice especificado
    charArray[index] = newLetter;
    // Unir todo en un string
    let modifiedWord = charArray.join('');
    return modifiedWord;
}

//Funcion para mostrar las letras ingresadas
function showSelectedLetters(){
    //Constante que tiene el valor ingresado en el input
    let letterInput = document.getElementById("selectLetter");
    let selectedLetter = letterInput.value;
    //Cambiar el texto con la nueva letra ingresada, buscando el campo donde se colocan dichas letras y revisando cuales ya estan
    let sl = document.getElementById("sl");
    //Colocar el texto que estaba y la nueva letra
    sl.innerText= sl+" "+selectedLetter;
}

