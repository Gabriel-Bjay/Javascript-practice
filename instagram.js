const post = {
    id: "0",
    likes : "99",
    username: "trippie",
    timestamp: "11:11" ,
    comments: []
}



const posts = [
    {
        id: "1",
        likes : "0",
        username: "african",
        timestamp: "16:20" ,
        comments: []
    }
]

posts.push(
    post,
    {
        id: "2",
        likes : "9",
        username: "makaraa",
        timestamp: "11:20" ,
        comments: []
    },
    {
        id: "3",
        likes : "20",
        username: "bjay",
        timestamp: "09:20" ,
        comments: []
    },
    {
        id: "4",
        likes : "110",
        username: "jt",
        timestamp: "06:20" ,
        comments: []
    },
    {
        id: "5",
        likes : "0",
        username: "dummie",
        timestamp: "14:20" ,
        comments: []
    },
    {
        id: "6",
        likes : "15",
        username: "trippie.blackkk",
        timestamp: "18:20" ,
        comments: []
    }

    );

posts.pop()    
posts.pop() 


// map function
posts.map((post,index) =>{
    return {...post, shares :0  }
}).forEach((posts,index) =>{
    console.log(`
    ${posts.username}   | ${posts.timestamp}
    IMAGE
    ${posts.likes} likes    | ${posts.comments.length} comments  | ${posts.shares}shares
    `

    )
}
)


// filter function
console.log(posts.filter((post,index) => post.likes >= 50))


console.log(posts)


