alert ("hello")

function scoping(){
    let likes = 0;

    //closure
    return function(){
        likes++;
        console.log(`${postname} Got ${likes}`)
    }
}

let likespost1 = scoping("Post Fight")
likespost1();
likespost1();