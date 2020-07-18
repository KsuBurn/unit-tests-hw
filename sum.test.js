const { sum } = require('./sum');

describe('sum тесты', () => {
    test('Ничего не передаем: ', () => expect(sum()).toBe(0));

    test('Передаем положительные числа: ', () => expect(sum(1)(2)()).toBe(3));

    test('Передаем отрицательные числа: ', () => expect(sum(-1)(-2)()).toBe(-3));

    test('Передаем отрицательные и положительные числа: ', () => expect(sum(1)(-2)()).toBe(-1));

    test('Передаем только одно число, один вызов функции:  ', () => expect(sum(1)).toBeInstanceOf(Function));

    test('Передаем String: ', () => expect(sum('str')()).toBeNaN());

    test('Передаем Boolean true: ', () => expect(sum(true)()).toBe(1));
});