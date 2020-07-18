const { rle } = require('./rle');

describe('rle тесты: ', () => {
   test('Передаем строку в нижнем регистре с повторениями: ', () => expect(rle('aabbcccc')).toBe('a2b2c4'));

   test('Передаем строку в верхнем регистре с повторениями: ', () => expect(rle('AABCCCDDD')).toBe('A2BC3D3'));

   test('Передаем строку в нижнем регистре без повторений: ', () => expect(rle('abc')).toBe('abc'));

   test('Передаем строку в верхнем регистре без повторений: ', () => expect(rle('ABC')).toBe('ABC'));

   test('Передаем строку c разным регистром с повторениями: ', () => expect(rle('AaBCcCCdD')).toBe('AaBCcC2dD'));

   test('Передаем строку c числами: ', () => expect(rle('AaBC2dd4')).toBe('AaBC2d24'));

   test('Передаем пустую строку: ', () => expect(() => rle('')).toThrow());

   test('Передаем Number: ', () => expect(() => rle(7)).toThrow());

   test('Передаем Boolean: ', () => expect(() => rle(true)).toThrow());
});