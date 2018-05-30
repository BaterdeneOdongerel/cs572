const item = {
    "name" : "Biscuits",
    "type" : "regular",
    "category" : "food",
    "price" : 2.0 
};

var applyCoupon = cat => discount => item => {
    
    if ( item.category == cat ) {
        item.price = item.price - item.price * discount;   
    }
    return item;

}

console.log(applyCoupon("food")(0.1)(item).price);

