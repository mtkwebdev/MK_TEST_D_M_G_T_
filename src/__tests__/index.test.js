const {palindrome, readWords, knownPalindromes, notPalindromes} = require('../../public/app')

test('Does readWords() return a single known palindrome word from a list?', ()=>{
    const word = knownPalindromes.includes(readWords(knownPalindromes))
    expect(word).toBe(true)
})
test('Does readWords() return a single non-palindrome word from a list?', ()=>{
    const word = notPalindromes.includes(readWords(notPalindromes))
    expect(word).toBe(true)
})

test('Does the palindrome function return true when given palindrome word?', ()=>{
    expect(palindrome(readWords(knownPalindromes))).toBe(true)
})

test('Does the palindrome function return false if not given palindromes?', ()=>{
    expect(palindrome(readWords(notPalindromes))).toBe(false)
})

