// import { AtualizaTabela } from "./TabelaIMC.js";

const btn = document.querySelector('button');

btn.addEventListener('click', function(){ 
  var pesoDigitado = document.getElementById("Peso").value;
  var AlturaDigitada = document.getElementById("Altura").value;
  AlturaDigitada = AlturaDigitada.replace(/,/gi, ".");
  var IMC = pesoDigitado  / (AlturaDigitada * AlturaDigitada)
  document.getElementById("IMC").value = IMC;

    if (Object.is(NaN,IMC ))
    {
      gauge2.setValueAnimated( 0, 3);
    }
    else{
      gauge2.setValueAnimated( IMC, 3);
    }
    
    $("#divTabela").fadeIn(3000);

    
      $("#18range").css("backgroundColor", "rgba(209, 209, 209, 0.151)");
      $("#18peso").css("backgroundColor", "rgba(209, 209, 209, 0.151)");
      $("#18e24range").css("backgroundColor", "rgba(209, 209, 209, 0.151)");
      $("#18e24peso").css("backgroundColor", "rgba(209, 209, 209, 0.151)");
      $("#25e29range").css("backgroundColor", "rgba(209, 209, 209, 0.151)");
      $("#25e29peso").css("backgroundColor", "rgba(209, 209, 209, 0.151)");
      $("#30e34range").css("backgroundColor", "rgba(209, 209, 209, 0.151)");
      $("#30e34peso").css("backgroundColor", "rgba(209, 209, 209, 0.151)");
      $("#35e39range").css("backgroundColor", "rgba(209, 209, 209, 0.151)");
      $("#35e39peso").css("backgroundColor", "rgba(209, 209, 209, 0.151)");
      $("#40range").css("backgroundColor", "rgba(209, 209, 209, 0.151)");
      $("#40peso").css("backgroundColor", "rgba(209, 209, 209, 0.151)");

    if((IMC < 18.50)){
      $("#18range").css("backgroundColor", "#00CC00");//green
      $("#18peso").css("backgroundColor", "#00CC00");//green
    }else if ((IMC > 18.50) && (IMC < 24.90)){
      $("#18e24range").css("backgroundColor", "#00CC00");//green
      $("#18e24peso").css("backgroundColor", "#00CC00");//green
    }else if((IMC > 25.00) && (IMC < 29.90)){
      $("#25e29range").css("backgroundColor", "#00CC00");//green
      $("#25e29peso").css("backgroundColor", "#00CC00");//green
    }else if((IMC > 30.00) && (IMC < 34.90)){
      $("#30e34range").css("backgroundColor", "#00CC00");//green
      $("#30e34peso").css("backgroundColor", "#00CC00");//green
    }else if((IMC > 35.00) && (IMC < 39.90)){
      $("#35e39range").css("backgroundColor", "#00CC00");//green
      $("#35e39peso").css("backgroundColor", "#00CC00");//green
    }else if((IMC > 40.00)){
      $("#40range").css("backgroundColor", "#00CC00");//green
      $("#40peso").css("backgroundColor", "#00CC00");//green
  }

  $('html, body').animate({ scrollTop: 800 }, 100);


      
});




  




   