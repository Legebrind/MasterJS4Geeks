function renderInventory(inventory) {
    var aux=[];
    var contador = 0;
    for(var i = 0; i < inventory.length;i++){
        contador = 0;
        aux[i] ={}
        aux[i]['name'] = inventory[i].name; 
        for(var j = 0; j < inventory[i].shoes.length; j++){
            contador += inventory[i].shoes[j].price;
        }
        aux[i]['averagePrice'] = contador/inventory[i].shoes.length;
    }
    return aux;
}
