alert ("hello")

function scoping(){
    let likes = 0;

    //closure
    return function(){
        likes++;
    }
}

let likespost1 = scoping("Post Fight")
likespost1();
likespost1();