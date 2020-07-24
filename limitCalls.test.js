const {limitCalls} = require('./limitCalls');

describe('limitCalls тесты, которые вернут значение: ', () => {
   test('Передаем максимальное число вызовов 2: ', () => {
       const testFunc = limitCalls(() => 3, 2);
       expect(testFunc()).toEqual(3);
       expect(testFunc()).toEqual(3);
       expect(testFunc()).toBeUndefined();
   })
});

describe('limitCalls тесты, которые вернут undefined: ', () => {
    test('Передаем отрицательное число вызовов функции: ', () => {
        const testFunc = limitCalls(() => console.log('log'), -1);
        expect(testFunc()).toBeUndefined();
    });

    test('Передаем число вызовов функции - ноль: ', () => {
        const testFunc = limitCalls(() => console.log('log'), 0);
        expect(testFunc()).toBeUndefined();
    })
});

describe('limitCalls тесты, которые вернут ошибку: ', () => {
    test('Передаем строку вместо функции: ', () => {
        const testFunc = limitCalls('str', 2);
        expect(() => testFunc()).toThrow();
    });

    test('Передаем число вместо функции: ', () => {
        const testFunc = limitCalls(123, 2);
        expect(() => testFunc()).toThrow();
    });
});