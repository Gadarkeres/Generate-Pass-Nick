const input = document.querySelector('#nick-gerado')
const Copy = document.querySelector('#Copiar')
const btnStart = document.querySelector('#gerar-nick')
const container = document.querySelector('.container-nicks')
const containerpass = document.querySelector('.container-senha')
const btnChange = document.querySelector('#trocar-modo')
const btnChangepass = document.querySelector('#trocar-modo-pass')


const btnstartpassword = document.querySelector('#gerar-senha')
const inputPassword = document.querySelector('#senha-gerada')
const PasswordSizeInput = document.querySelector('#tamanho-senha');
const CopyPassword = document.querySelector("#copiar-senha")




 // Nicks
Copy.addEventListener('click', () => {
   if (input.value.length > 0){
    input.select()
    document.execCommand('copy')
    input.setSelectionRange(0, 0);
    alert('Texto copiado para a área de transferência com sucesso!');
   } else{
    window.alert('Por favor gere o nick primeiro.')
   }
})
btnStart.addEventListener('click', () => {
    const generatedNick = generateNick();
    input.value = generatedNick;
    
});

const generateNick = () => {
    const letters = ['ad','be','ci','uz','ef','fi','ge','hi','ia','jo','ke','la','mv','nt',]
    const initial = ['Ab', 'me', 'Ra','fi', 'ol', 'Mo', 'pa', 'lo', 'Ah', 'e', 'po']

    const initialIndex = Math.floor(Math.random() * initial.length);
    const selectedInitial = initial[initialIndex]


    let nick = selectedInitial;
    
    for (let i = 0; i < 4; i++){
        const randomLetterindex = Math.floor(Math.random() *letters.length);
        nick += letters[randomLetterindex];
        
    
    }
    return nick
}

// trocando janela
btnChange.addEventListener('click', () => {
    container.style.display = 'none';
    containerpass.style.display = 'block';
})
btnChangepass.addEventListener('click', () => {
    container.style.display = 'block';
    containerpass.style.display = 'none';
})
 


// Password
btnstartpassword.addEventListener('click', () => {
    const generatedPassword = generatePassword(); 
    inputPassword.value = generatedPassword;
});


const generatePassword = () => {
    let PasswordSize = PasswordSizeInput.value
    if(PasswordSize > 13 || PasswordSize < 4) {
        window.alert('{ERRO}:A senha deve ter o tamanho entre 4 e 13')
        return error
    }else {
    const lettersPassword = ['a', 'b', 'c', 'd', 'e', 'i', 'f', 'g', 'h' ,'i', 'j', 'k' ,'l','m', 'n','o','p','q','A', 'B', 'C', 'D', 'E', 'I', 'F', 'G', 'H', 'I', 'J', 'K' ,'L','M', 'N','O','P','Q', '1', '2', '3', '4','5','6','7','8','9','10']
    let generatedPassword = ''
    for(i = 0; i < PasswordSize; i++){
        const getPasswordIndex = Math.floor(Math.random() * lettersPassword.length)
        const getPassword = lettersPassword[getPasswordIndex]
        generatedPassword += getPassword
    }
    return generatedPassword;
}

}
CopyPassword.addEventListener('click', () => {
    if(inputPassword.value.length > 0){
        inputPassword.select()
        document.execCommand('copy')
        inputPassword.setSelectionRange(0, 0);
        alert('Texto copiado para a área de transferência com sucesso!');
    } else {
        window.alert("Por favor gere a senha primeiro.")
        return
    }
  
})

