function sumar() {
  let primer_numero = parseInt(document.getElementById("num1").value);
  let segundo_numero = parseInt(document.getElementById("num2").value);

  document.getElementById("resultado").value = primer_numero + segundo_numero;
}

function dividir(){
  let primer_numero = parseInt(document.getElementById("num1").value);
  let segundo_numero = parseInt(document.getElementById("num2").value);

  document.getElementById("resultado").value = primer_numero / segundo_numero;
}