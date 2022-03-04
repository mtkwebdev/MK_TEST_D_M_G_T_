
const data = {
        knownPalindromes : [
        "Anna", "civic", "kayak", 
        "level", "madam", "mom", "noon", 
        "racecar", "radar", "redder", 
        "refer", "repaper", "rotator", 
        "rotor", "sagas", "solos", 
        "stats", "tenet", "wow"],

        notPalindromes : [
        "Bike", "Dave", "yes", 
        "potato", "Banana", "45 Thousand", "News Paper", 
        "Daily Mail", "The New Scientist", "Metro", 
        "Did_you_know", "I_Live", "Near", 
        "The", "Metro", "Offices", 
        "IN_HAMMERSMITH", "because", "I_live_on_shepherds_bush_road", ":)"],
}

const functions = {
    // This takes in words from the Data object above, and then loops through the words, returning one random word. 
    readWords: (dataLists)=>{        
        let randomWord = ' '; 
        for (let i = 0; i < dataLists.length; i++){
            const index = Math.floor(Math.random() * i)
            randomWord = dataLists[index]
        }
        return randomWord
    },

    // This takes in one Random word generated by readWords, and assesses if it is a palindrome.
    palindrome: (readWords)=>{
        const wordRegEx = '/[\W_]/g '
        const formatNoSpaces = readWords.toLowerCase().replace(wordRegEx, ' ');
        const reverseWords = formatNoSpaces.split('').reverse().join('');
        if (formatNoSpaces === reverseWords){
            return true
        } else {return false}
    },
}

module.exports = {
    palindrome: functions.palindrome, 
    readWords: functions.readWords,
    knownPalindromes: data.knownPalindromes, 
    notPalindromes: data.notPalindromes, 
}