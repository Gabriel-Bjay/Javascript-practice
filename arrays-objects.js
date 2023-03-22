let student1 = {
    name: "Tamine Amakobe",
    age: 18,
    score: 70,
}
let student2 = {
    name: "Chris Kirubi",
    age: 19,
    score: 84,

}
let student3 = {
    name: "Sheryl Njoroge",
    age: 19,
    score: 69,
}
let student4 = {
    name: "Bjay Mburu",
    age: 18,
    score: 76,
}
// lists
let student_names = []
let student_age = []
let student_score = []
 



// Appendings
student_names.push(student1.name,student2.name,student3.name,student4.name)
student_age.push(student1.age,student2.age,student3.age,student4.age)
student_score.push(student1.score,student2.score,student3.score,student4.score)
console.log(student_names)
console.log(student_age)
console.log(student_score)


// for each
student_names.forEach(function(name){
    console.log(name);
})
student_age.forEach(function(age){
    console.log(age);
})
student_score.forEach(function(score){
    console.log(score);
})