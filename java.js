function encriptar() {
    let text=document.getElementById('text_encriptador').value;
    let text_mensaje=document.getElementById('titulo_mensaje');
    let text_parafo=document.getElementById('parrafo');
    let imagen=document.getElementById('imagen');
    
    let text_cifrado=text
        .replace(/a/gi, 'tfjg')
        .replace(/e/gi, 'ldjd')
        .replace(/i/gi, 'xstr')
        .replace(/o/gi, 'ksrt')
        .replace(/u/gi, 'ptfy');
    
    if(text.length != 0){
        document.getElementById('text_encriptador').value=text_cifrado;
        text_mensaje.textContent='Texto encriptado con exito.';
        text_parafo='';
        imagen.src='/imagenes/encriptado.jpg';
    }else{
        imagen.src='/imagenes/Muñeco.png';
        text_mensaje.textContent='Ningun mensaje fue encontrado.';
        text_parafo.textContent='Ingresa el texto que deseas encriptar o desencriptar.';
        alert('Debes ingresar algun texto');
    }
}

function desencriptar(){
    let text=document.getElementById('text_encriptador').value;
    let text_mensaje=document.getElementById('titulo_mensaje');
    let text_parafo=document.getElementById('parrafo');
    let imagen=document.getElementById('imagen');
    let text_cifrado=text
        .replace(/tfjg/gi, 'a')
        .replace(/ldjd/gi, 'e')
        .replace(/xstr/gi, 'i')
        .replace(/ksrt/gi, 'o')
        .replace(/ptfy/gi, 'u'); 

    if(text.length != 0){
        document.getElementById('text_encriptador').value=text_cifrado;
        text_mensaje.textContent='Texto desencriptado con exito.';
        text_parafo='';
        imagen.src='/imagenes/desencriptado.jpg';
    }else{
        imagen.src='/imagenes/Muñeco.png';
        text_mensaje.textContent='Ningun mensaje fue encontrado.';
        text_parafo.textContent='Ingresa el texto que deseas encriptar o desencriptar.';
        alert('Debes ingresar algun texto');
    }

}