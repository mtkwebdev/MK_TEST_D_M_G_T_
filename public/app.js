
const data = {
    palindromeWords: ()=>{
        list = [
        "Anna", "civic", "kayak", 
        "level", "madam", "mom", "noon", 
        "racecar", "radar", "redder", 
        "refer", "repaper", "rotator", 
        "rotor", "sagas", "solos", 
        "stats", "tenet", "wow"]; 
        
        let randomWord = ' '; 
        for (let i = 0; i < list.length; i++){
            const index = Math.floor(Math.random() * i)
            randomWord = list[index]
        }
        return randomWord
    }
}

const functions = {
    palindrome: (words)=>{
        const wordRegEx = '/[\W_]/g '
        const formatNoSpaces = words.toLowerCase().replace(wordRegEx, ' ');
        const reverseWords = formatNoSpaces.split('').reverse().join('');
        if (formatNoSpaces === reverseWords){
            return true
        } else {return false}
    },
    again: ()=>{
        console.log('something else')
        return 'something else'
    }
}



function app(){


    // function palindrome(){

    // }

    // function orderByAge(){}
    // function orderByName(){}
    // function ageToArray(){}
    // functions.palindrome()

    // main.addEventListener('clicks',(e)=>{
    // })

} 
app()

module.exports = {
    palindrome: functions.palindrome, 
    again: functions.again, 
    words: data.palindromeWords}