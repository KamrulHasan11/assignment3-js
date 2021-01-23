var friends = ['Kamrul Hasan', 'Rafsana Toma', 'Programmer Kamrul Hasan', 'Saidur Rahman Hridoy'];
function megaFriend(friends){
    var max = friends[0];
    for(i=0; i < friends.length; i++){
        var element = friends[i];
        if(element > max){
            max = element;
        }
    }
    return max;
}
var result = megaFriend(friends);
console.log("The largest friend's name is: ", result);