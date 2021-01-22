






//Kilometer To Meter calculator 

function kilometerToMeter (meter){
    var kilometer = 1000 * meter ;
    return kilometer;
}



//Budget Calculator

function budgetCalculator (watch, phone, laptop){
    var totalPrice = watch * 50 + phone * 100 + laptop * 500;
    return totalPrice; 
}

//Hotel Rent

function hotelCost(stay){
    var cost = 0;
    if(stay<=10){
        cost = stay * 10;
    }
    else if(stay<=20){
        var firstTenDays = 10 * 100;
        var remaining = stay - 10;
        var secondTendays = remaining * 80;
        Cost = firstTenDays + secondTendays;
    }
    else{
        var firstTenDays = 100 * 10;
        var secondTendays = 80 * 10;
        var remaining = stay - 20;
        var nextUnlimitedDays = remaining * 50;
        cost = firstTenDays + secondTendays + nextUnlimitedDays;
    }
    return cost;
}




//Mega Friend Largest Name



function megaFriend(name){
   var result = '';
   for(var i = 0; i < name.length; i++){
       var currentItem = name[i];
       if(currentItem.length>result.length){
           result = name[i];
       }
   }
   return result ;
  }
  