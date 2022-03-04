const {palindrome, again, words} = require('../../public/app')

test('Does the palindrome function work?', ()=>{
    expect(palindrome(words())).toBe(true)
})
