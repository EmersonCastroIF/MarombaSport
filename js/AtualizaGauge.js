const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    var pesoDigitado = document.getElementById("Peso").value;
    var AlturaDigitada = document.getElementById("Altura").value;
    AlturaDigitada = AlturaDigitada.replace(/,/gi, ".");
    var IMC = pesoDigitado  / (AlturaDigitada * AlturaDigitada)
 
    if (Object.is(NaN,IMC ))
    {
      gauge2.setValueAnimated( 0, 3);
    }
    else{
      gauge2.setValueAnimated( IMC, 3);
    }


       
   
      
      
})

    




   