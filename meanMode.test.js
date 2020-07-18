const { meanMode } = require('./meanMode');

describe('meanMode тесты: ', () => {
    test('Передаем пустой массив: ', () => expect(meanMode([])).toBe(false));

    test('Передаем массив с одним числом: ', () => expect(meanMode([1])).toBe(true));

    test('Передаем массив разными повторяющимися одинаковое количество раз числами: ', () => expect(meanMode([1, 1, 3, 3, 5])).toBe(false));

    test('Передаем невалидный массив с несколькими числами: ', () => expect(meanMode([1, 2, 3, 1])).toBe(false));

    test('Передаем валидный массив с одинаковыми числами: ', () => expect(meanMode([1, 1, 1, 1])).toBe(true));

    test('Передаем валидный массив с разными числами: ', () => expect(meanMode([4, 4, 4, 6, 2])).toBe(true));

    test('Передаем не валидный массив с разными числами: ', () => expect(meanMode([1, 1, 1, 2, 5])).toBe(false));

    test('Передаем валидный массив с отрицательными числами: ', () => expect(meanMode([3, -2, 2, 2, 5])).toBe(true));

    test('Передаем массив с нулями: ', () => expect(meanMode([0, 0, 0, 0, 0])).toBe(true));

    test('Передаем массив с взаимоисключающими числами: ', () => expect(meanMode([0, 1, 1, -2])).toBe(false));

    test('Передаем строку: ', () => expect(() => meanMode('string')).toThrow());

    test('Передаем число: ', () => expect(() => meanMode(777)).toThrow());

    test('Передаем Boolean: ', () => expect(() => meanMode(true)).toThrow());
});