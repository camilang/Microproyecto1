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
    const letter = document.getElementById("selectLetter").value;
    if(letter != "" && (String(letter)).length == 1 ) {
        console.log(letter)}else{
            document.getElementById("warning-letter-announce").innerHTML = "Ingrese una letra";
        }
    document.getElementById("selectLetter").value = "";
    }