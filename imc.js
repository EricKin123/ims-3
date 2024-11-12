let altura = parseFloat( prompt("Escreva sua altura: "));
let peso = parseFloat( prompt("Escreva sua peso: "));
let imc = (altura/(altura*peso));

document.white("O imc é igual a:  ")

if(isNaN(peso) || isNaN(altura) || peso <=0 || altura<=0){
        document.write("Digite valores validos: ");
    } else{
        let imc = peso/(altura*altura).toFixed(2);
        document.write("Seu imc é igual a: ",imc);

        if(imc<=18){
            document.write("Seu imc está abaixo do normal!!");
        }else if(imc>18 && imc <=24.9){
            document.write("Seu imc está normal!!");
        }else if(imc>25 && imc <=28.9){
            document.write("Seu imc indica está em sobrepeso!!");
        }
        }
    







