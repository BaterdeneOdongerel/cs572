function isWeekend(){
    const todayDate = new Date();
    const day = todayDate.getDay();
    let array = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];
    return array[day];

}

console.log(isWeekend());