let points = 10;
console.log('Welcome to my grading system!');
if(points >= 70 && points < 100){
    console.log('A');
}else if( points >=60 && points < 70 ){
    console.log('B');
}else if (points >=50 && points < 60){
    console.log('C');
}else if(points >=40 && points < 50){
    console.log('D');
}else if(points >0 && points < 40 ){
    console.log('E');
}else{
    console.log('You Have Entered Invalid Points');
}


