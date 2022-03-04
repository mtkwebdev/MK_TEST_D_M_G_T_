const {palindrome, again} = require('../../public/app')

test('desc', ()=>{
    expect(palindrome()).toBe('stuff')
    //expecting test to pass
})
test('AGAIN', ()=>{
    expect(again()).toBe('stuff')
    //expecting test to fail
})
