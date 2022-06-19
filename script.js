let distanceInLightYears = prompt("Digite a distância em anos-luz: ");

let chosenOption = prompt("Digite a unidade de medida: \n1. Parse(pc) \n2. Unidade Astronômica(ua) \n3. Quilômetros(km)\n\nDigite a unidade desejada: ");

let chosenUnit 
let convertedDistance 

switch(chosenOption){
    case "1":
        chosenUnit = "pc";
        convertedDistance = distanceInLightYears * 0.306601;
        break;
    case "2":
        chosenUnit = "ua";
        convertedDistance = distanceInLightYears * 63241.1;
        break;
    case "3":
        chosenUnit = "km";
        convertedDistance = distanceInLightYears * 9.5 * Math.pow(10, 12);
        break;
    default:
        chosenUnit = "unidade nao indentificada";
        convertedDistance = "conversão fora do escopo";
}

alert(`A distância em anos-luz é ${distanceInLightYears} ${chosenUnit} e é equivalente a ${convertedDistance} ${chosenUnit}`);