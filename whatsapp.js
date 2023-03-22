function sendmessage (user,message){
    const timestamp = gettimestamp();
    console.log(
        `${user,message}
                                   ${timestamp} `
        )
}

function timestamp(){
    const d = newdate();
    const timestamp = d.gethours() + ":" + d.getminutes();
    return timestamp;
}

const bjay = "Bjay"
const mburu = "Mburu"

sendmessage(bjay,"Hello,how are you?")
sendmessage(mburu,"Good")
sendmessage(bjay,"I was just passing by yk?")
sendmessage(mburu,"Yee aight It's good")