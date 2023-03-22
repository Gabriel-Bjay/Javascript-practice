let kenya = {
    capital: 'Nairobi',
    continent: 'Africa',
    region: 'East Africa',
    culture: 'Corruption',
    stability: 'Not Stable',
    motto(){
        return`
            console.log(kenya.capital)
            console.log(kenya.continent)
            console.log(kenya.region)
            console.log(kenya.culture)
            console.log(kenya.stability)
            console.log(kenya.motto())
        `
    }
}




let person = {
    firstname: 'Gabriel',
    middlename: 'Bjay',
    lastname: 'Makara',
    age: 18,
    nationality: 'Kenyan',
    tribe: 'Unknown',
    languages: 'I know a few',
     greet:function(){
        console.log('I can Talk!!!')
    }
}    

const { firstname , middlename , lastname, age , nationality , tribe , languages , greet} =person;
console.log(firstname)     
console.log(middlename)
console.log(lastname)
console.log(age)
console.log(nationality)
console.log(languages)
console.log(greet())

// For ...in loops --->Syntax{for(const/let rank in rankings){
    // console.log()
// }}

let rankings = {
    '1':  'Jomo Kigwe',
    '2':  'Ken Koi' ,
    '3':  'Zed Zeddy' ,
    '4':  'Benson Juma ' ,
    '5':  'Kirui Tanui' ,
    '6':  'Macharia Orutu' ,
    '7':  'Treudeu Oketch' , 
    '8':  'Halima Mobedo'  ,
    '9':  'Baba Odinga'  ,
    '10': 'Chris Hemsworth',
}

for(let rank in rankings){
    console.log(rank);
    console.log(rankings[rank]);

}



// Combining objects
const profile ={
    username: "",
    password: " ",
    email: " ",
    posts: " ",
    followers: " ",
    following: " ",
    link: " ",
    bio: " ",
    info (){},

}

const signedupuser ={
    username: " trippie.blackkk",
    email: "trippie@gmail.com ",
    password: "iamtrippie ",

}

// spreadoperator for combining objects
const newuser = {...profile, ...signedupuser}
// const newuser = Object.assign(profile,signedupuser)
console.log(newuser)


