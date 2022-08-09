function getLaceNameDataForShoes(inventory) {
    aux=[];
    for(var i = 0; i < inventory.length;i++){
        for(var j = 0; j < inventory[i].shoes.length; j++){
        if(inventory[i].shoes[j].name.includes("lace")||inventory[i].shoes[j].name.includes("laced")){
            auxName = inventory[i].shoes[j].name.split(" ");
            var pos = 0;
            for(var index in auxName){
                if(auxName[index].includes("lace")|| auxName[index].includes("laced")){
                    pos = parseInt(index);
                    break;
                }
            }
            aux.push({"nameWords":auxName,"targetWordIndex":pos});
        }  
        

        }
    }
    return aux;
}