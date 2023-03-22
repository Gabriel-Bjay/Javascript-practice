// let student = {
//     id : 1,
//     age: 18,
//     name: "Bjay Mburu",
//     subjects: [],
//     addsubject(subject){
//         this.subjects = [...this.subjects,subject]

//     }
// }

// student.addsubject("Maths")
// console.log(student)

// class Student{
//     constructor(id,name,age,subjects){
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.subjects = subjects;
//     }
//     addSubject(subject){
//         this.subjects = [...this.subjects,subject]
//         console.log(this.subjects)
//     }


// }


// const bjay = new Student(1, "Bjay", 19, ["Math"] )
// bjay.addSubject("History");

// console.log(bjay)


// Class 
class Movie {
    constructor(id,title,starring =[],genres= []){
        this.id = 7465;
        this.title = title;
        this.starring = starring;
        this.genres = genres;
    }

    addGenre(...genre){
        this.genres = [...this.genres,...genre]
        console.log(this.genres)
    }
    addStars(...star){
        this.stars = [...this.stars,...star]
        console.log(this.stars)
    }
}

const umbrellaacademy = new Movie (1, "Umbrella Academy");
umbrellaacademy.addGenre("Mystery");
console.log(umbrellaacademy)



function Student(id,name,age,subjects){
    this.id=id;
    this.name=name;
    this.age=age;
    this.subjects=subjects;
} 

const bjay = new Student (1, "Bjay Mburu",19, ["Maths"])
console.log(bjay)