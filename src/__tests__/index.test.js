const {getType} = require('jest-get-type')
const {palindrome, readWords, knownPalindromes, notPalindromes, sortPeople, people} = require('../app')

test('Does readWords() return a single word from a list?', ()=>{
    const palindromeWords = knownPalindromes.includes(readWords(knownPalindromes))
        const justWords = notPalindromes.includes(readWords(notPalindromes))
    expect(palindromeWords).toBe(true)
    expect(justWords).toBe(true)
})


test('Does the palindrome function return true when given palindrome word?', ()=>{
    expect(palindrome(readWords(knownPalindromes))).toBe(true)
})

test('Does the palindrome function return false if not given palindromes?', ()=>{
    expect(palindrome(readWords(notPalindromes))).toBe(false)
})

test('Does sortPeople with byfirstNameOrder return names in String format, and in ascending Alphabetical order?', ()=>{
    const names = sortPeople('byfirstNameOrder').map((details)=> details.name)
    expect(getType(names[0])).toBe('string')
    // Ideally we would use a hash map of letters and their index position in the alphabet, and then compare alphabet index[i] to index[i+1]
    // but for now............ we will just test for 'a' as it's the first letter of the alphabet.
    expect(names[0].toLowerCase().charAt(0)).toBe('a') 
})

test('Does sortPeople with byfirstNameOrder return the correct names to ages?', ()=>{
    const testCase = {testName: '', testAge: 0, returnedName: '', returnedAge: 0}
    const mapPeople = people.map(person=>{ testCase.testName= person.name, testCase.testAge = person.age})
    const mapsortPeople = sortPeople('byfirstNameOrder').map(person=>{
        if(person.name === testCase.testName){
            return testCase.returnedName = person.name, testCase.returnedAge = person.age
        }
        })
        expect(testCase.testName && testCase.testAge).toStrictEqual(testCase.returnedName && testCase.returnedAge)
})

test('Does sortPeople with ageByDescending return ages as numbers, and also sort ages by descending order?', ()=>{
    const ages = sortPeople('ageByDescending').map((details)=> details.age)
    expect(getType(ages[0])).toBe('number')
    expect(ages).toBeSorted({ descending: true })
})

test('Does sortPeople with ageByDescending return the correct names for the ages returned?', ()=>{
    const testCase = {testName: '', testAge: 0, returnedName: '', returnedAge: 0}
    const mapPeople = people.map(person=>{ testCase.testName= person.name, testCase.testAge = person.age})
    const mapsortPeople = sortPeople('ageByDescending').map(person=>{
        if(person.name === testCase.testName){
            return testCase.returnedName = person.name, testCase.returnedAge = person.age
        }
    })
    expect(testCase.testName && testCase.testAge).toStrictEqual(testCase.returnedName && testCase.returnedAge)
})


test('Does sortPeople with extractAges return ages as numbers, and also return an array of ages?', ()=>{
    expect(sortPeople('extractAges')).toStrictEqual([ 50, 42, 29, 23 ])
    expect(getType(sortPeople('extractAges')[0])).toBe('number')
    console.log(sortPeople('extractAges')[0])
})