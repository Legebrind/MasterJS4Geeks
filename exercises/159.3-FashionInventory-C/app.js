let inventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];

function renderInventory(shoeList) {
  aux=[];
  for(var i = 0; i < shoeList.length;i++){
      for(var j = 0; j < shoeList[i].shoes.length; j++){
        if(shoeList[i].shoes[j].name.includes("black")){
          aux.push([shoeList[i].name,shoeList[i].shoes[j].name,shoeList[i].shoes[j].price]);
        }  
        

      }
  }
  return aux;
}
