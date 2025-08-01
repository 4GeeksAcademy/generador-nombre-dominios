let pronoun = ['el', 'la'];
let adj = ['gran', 'majestuoso'];
let noun = ['comida', 'gato'];

let extensions = ['.com', '.net', '.us', '.cl',];
// generador de combinaciones
function Generatecombination() {
    let combinations = [];
    for (let i= 0; i < pronoun.length; i++) {
        for (let j= 0; j < adj.length; j++) {
            for (let k= 0; k < noun.length; k++) {
                let NameComb = pronoun[i] + adj[j] + noun[k];
                combinations.push(NameComb); 
            }
        }
    }
    return combinations;
}
// extensiones 
function AddExtension(Combs) {
    let ExtensionsComb = [];
    for (let i= 0; i < Combs.length; i++) {
        for (let j= 0; j < extensions.length; j++) {
            ExtensionsComb.push(Combs[i] + extensions[j]); 
            }
        }
    return ExtensionsComb;
}

function Generateallcombs () {
    console.log("Generando nombres... \n");

    let basicCombinations = Generatecombination();
    console.log("\n Dominios basicos generados:");
    basicCombinations.forEach((combination, index) => {
        console.log(`${index + 1}. ${combination}`);
    });
    
    let CombWithExtension = AddExtension(basicCombinations);
    console.log("\n Dominios con extensiones:");
    CombWithExtension.forEach((combination, index) => {
        console.log(`${index + 1}. ${combination}`);
    });

    // console.log para combinaciones de nombre
    console.log("Vista general:");
    console.log(` Combinaciones basicas: ${basicCombinations.length}`);
    console.log(` Combinaciones con extensiones: ${CombWithExtension.length}`);

    return {
        basic : basicCombinations,
        plusextensions : CombWithExtension
    };

}   

Generateallcombs();





