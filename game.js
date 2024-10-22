
const things = []
const entities = []
const sprites = [] /// sprites are things that can be moved on screen

const spriteList = [] // things can move on screen

function Sprite(nameParameter, kindParameter, posParameter){
    return {
        position: posParameter,
        health: 100,
        name: nameParameter,
        kind: kindParameter
    };
}
spriteList.push(Sprite("Yun", "elf", Position(10, 5)));
spriteList.push(Sprite("Venom", "parasite", Position(20, 10) ));
spriteList.push(Sprite("Venom", "parasite", Position(15, 10) ));
spriteList.push(Sprite("Venom", "parasite", Position(20, 15) ));
function printAll(){
    
}
for(let i = 0; i < spriteList.length; i++){
    console.log(spriteList[i])
}
function getParasites(){

}
