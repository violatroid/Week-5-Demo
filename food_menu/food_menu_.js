
let menuObject = {
    drinkList: ["Water", "Tea", "Sweettea", "Coke", "Dr. Pepper", "sprite"],
    entreeList: ["Hamburger w/ fries", "Grilled Cheese w/ tator tots", ]
    dessertList: ["cheesecake", "chocolate cake", "Snickerdoodle Cookie"]
};

//console.log(menuObject.drinkList)

for(key in menuObject){
    let list = menuObject[key];
    console.log(key, list.length);
    //console.log(list[0])
    for(let i = 0; i < list.length; i++){
        const.text = list[i];
        console.log("\t\t", i, text); // "\t" - back slash "t" is for tab but for hrere we added two tabs
        let i = 0;
        for(text of list){
            confirm.log("\t\t", i, text);
            i++;
        }
    }
}