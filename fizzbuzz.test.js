const fizzbuzz = require('./fizzbuzz')

test('数値1を渡すと文字列1で返す', () => {
  expect(fizzbuzz(1)).toBe('1');
})

test('数値2を渡すと文字列2で返す', () => {
  expect(fizzbuzz(2)).toBe('2');
})

test('数値3を渡すと文字列Fizzを返す',() => {
  expect(fizzbuzz(3)).toBe('Fizz');
})

test('数値6を渡すと文字列Fizzを返す',() => {
  expect(fizzbuzz(6)).toBe('Fizz');
})

test('数値5を渡すと文字列Buzzを返す',() => {
  expect(fizzbuzz(5)).toBe('Buzz');
})

test('数値15を渡すと文字列FizzBuzzを返す',() => {
  expect(fizzbuzz(15)).toBe('FizzBuzz');
})

test('数値10を渡すと文字列Buzzを返す',() => {
  expect(fizzbuzz(10)).toBe('Buzz');
})

test('数値30を渡すと文字列FizzBuzzを返す',() => {
  expect(fizzbuzz(30)).toBe('FizzBuzz');
})

test('文字列2を渡すと文字列2で返す', () => {
    expect(fizzbuzz("2")).toBe('2');
  })
  
test('文字列3を渡すと文字列Fizzを返す',() => {
    expect(fizzbuzz("3")).toBe('Fizz');
})

test('文字列10を渡すと文字列Buzzを返す',() => {
    expect(fizzbuzz("10")).toBe('Buzz');
  })
  
test('文字列30を渡すと文字列FizzBuzzを返す',() => {
    expect(fizzbuzz('30')).toBe('FizzBuzz');
})
  