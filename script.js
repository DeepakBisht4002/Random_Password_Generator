const Upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lowerset = "abcdefghijklmnopqrstuvwxyz";
const numberset = "1234567890";
const symbolset = "~!@#%^&*()_+/";

//selectors
const passbox = document.getElementById("pass-box");
const totalchar = document.getElementById("total-char");
const upperinput = document.getElementById("upper-case");
const lowerinput = document.getElementById("lower-case");
const numberrinput = document.getElementById("numbers");
const symbolinput = document.getElementById("symbols");

const getrandomdata =(dataset)=>{
    return dataset[Math.floor(Math.random() * dataset.length)]
}
const generatePassword = (password = "") =>{
    if(upperinput.checked){
        password += getrandomdata(Upperset)
    }
    if(lowerinput.checked){
        password += getrandomdata(Lowerset)
    }
    if(numberrinput.checked){
        password += getrandomdata(numberset)
    }
    if(symbolinput.checked){
        password += getrandomdata(symbolset)
    }
    if(password.length < totalchar.value){
        return generatePassword(password)
    }
passbox.innerText = (truncatestring(password, totalchar.value))
}

generatePassword();
document.getElementById("btn").addEventListener("click",
function(){

    generatePassword();
})

function truncatestring(str,num){
    if(str.length > num){
        let substr = str.substring(0,num);
        return substr;
    }
    else{
        return str;
    }
}
