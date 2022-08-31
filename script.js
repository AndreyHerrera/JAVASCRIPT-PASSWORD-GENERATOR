const generatePassword = (characters, length) => {
    let password = "";
    for (let x = 0; x < length; x++){
        let random = Math.floor(Math.random() * characters.length);
        password += characters.charAt(random);
    }
    return password;
}

const generate = () => {
    let length = parseInt(inputLength.value);
    let characters = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbols = "!@#$%&*^";
    const numbers = "0123456789"

    if(inputUppercase.checked){
        characters += uppercase;
    }

    if(inputSymbols.checked){
        characters += symbols;
    }

    if(inputNumbers.checked){
        characters += numbers;
    }

    generatedPassword.innerText = generatePassword(characters, length);
}

window.addEventListener('DOMContentLoaded', () =>{
    btnGenerate.addEventListener("click", () => {
        generate();
    })
});