// Función para validar el texto ingresado
function validarTexto(texto) {
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;
    let vacio = "";

    if (texto.match(mayusculas) || texto.match(caracteres)) {
        alert("No se admiten caracteres especiales, ni mayúsculas");
        return true;
    } else if (texto == vacio) {
        alert("Por favor ingresa un mensaje para encriptar");
        return true;
    } else {
        return false;
    }
}

// Reglas de encriptación
const reglas = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };

// Función para encriptar el texto
function encriptar(textoIngresado) {
    let Encriptado = textoIngresado;
    for (const obj in reglas) {
        Encriptado = Encriptado.replaceAll(obj, reglas[obj]);
    }
    return Encriptado;
}

// Función para desencriptar el texto
function desencriptar(textoIngresado) {
    let Desencriptado = textoIngresado;
    for (const obj in reglas) {
        Desencriptado = Desencriptado.replaceAll(reglas[obj], obj);
    }
    return Desencriptado;
    
}

function limpiarcaja(){
    document.querySelector(`#textoIngresado`).value = ``;
}
// Event listener para el botón Encriptar
let btnEncriptar = document.querySelector("#btn-encriptar");
btnEncriptar.addEventListener("click", function () {
    let textInput = document.querySelector("#input-texto").value;
    let textoIngresado = textInput;

    if (!validarTexto(textoIngresado)) {
        let Encriptado = encriptar(textoIngresado);
        let resultado = document.querySelector("#msg");
        resultado.value = Encriptado;
    }
});

// Event listener para el botón Desencriptar
let btnDesencriptar = document.querySelector("#btn-desencriptar");
btnDesencriptar.addEventListener("click", function () {
    let textInput = document.querySelector("#input-texto").value;
    let textoIngresado = textInput;

    if (!validarTexto(textoIngresado)) {
        let Desencriptado = desencriptar(textoIngresado);
        let resultado = document.querySelector("#msg");
        resultado.value = Desencriptado;
    }
});

// Event listener para el botón Copiar
let btnCopiar = document.querySelector("#btn-copy");
btnCopiar.addEventListener("click", function () {
    let Copiado = document.querySelector("#msg").value;
    navigator.clipboard.writeText(Copiado);
    document.querySelector("#input-texto").value = "";
});