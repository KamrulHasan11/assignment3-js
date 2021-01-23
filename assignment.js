// Start kilometerToMeter function
function kilometerToMeter(km){
    var m = km * 1000;
    return m;
}
var result = kilometerToMeter(3);
console.log(result); // End of kilometerToMeter function


// Start budgetCalculator function
function budgetCalculator(x, y, z){
    const watch = 50;
    const phone = 100;
    const laptop = 500;
    let sum = 0;
    if ((x >= 0) && (y >= 0) && (z >= 0)){
        sum = x * watch
        sum = sum + (y * phone);
        sum = sum + (z * laptop);
    }else if ((x < 0) || (y < 0) || (z < 0)) {
        return "Oh! no, please input positive number."
    }
    return sum
}
let result = budgetCalculator(2, 6, 6)
console.log(result); // End of budgerCalculator function


// Start of hotelCost function
function hotelCost(singleDayHotelCost){
    var everyDaysCost = 0;
    if(singleDayHotelCost<=10){
        everyDaysCost = singleDayHotelCost * 100;
    }else if(singleDayHotelCost<= 20){
        var first10Days = 10 * 100;
        var remaining = singleDayHotelCost - 10;
        var second10Days = remaining * 80;
        everyDaysCost = first10Days + second10Days;
    }else{
        var first10Days = 10 * 100;
        var second10Days = 10 * 80;
        var remaining = singleDayHotelCost - 20;
        var after20Days = remaining * 50;
        everyDaysCost = first10Days + second10Days + after20Days;
    }
    return everyDaysCost;
}
var result = hotelCost(30);
console.log(result); // End of hotelCost function


// Start of megaFriend function
function megaFriend(friendsName){
    var max = [0];
    for(i=0; i<friendsName.length; i++){
        var element = friendsName[i];
        if(element > max){
            max = element;
        }
    }
    return max;
} // End of megaFriend function