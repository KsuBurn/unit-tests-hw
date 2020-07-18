const { getMinMax } = require('./getMinMax')


describe('getMinMax тесты: ', () => {
    test('Передаем пустую строку: ', () => expect(getMinMax("")).toEqual({min: Infinity, max: -Infinity}));

    test('Передаем строку без чисел: ', () => expect(getMinMax("String without numbers")).toEqual({min: Infinity, max: -Infinity}));

    test('Передаем строку c одним положительным числом: ', () => expect(getMinMax("Positive number 3")).toEqual({min: 3, max: 3}));

    test('Передаем строку c одним отрицательным числом: ', () => expect(getMinMax("Negative number -3")).toEqual({min: -3, max: -3}));

    test('Передаем строку c положительными числами: ', () => expect(getMinMax("1 and 10 and 5")).toEqual({min: 1, max: 10}));

    test('Передаем строку c отрицательными числами: ', () => expect(getMinMax("-1 and -10 and -5")).toEqual({min: -10, max: -1}));

    test('Передаем строку c положительными и отрицательными числами: ', () => expect(getMinMax("-1 and 10 and -5")).toEqual({min: -5, max: 10}));

    test('Передаем строку c Infinity и числом', () => expect(getMinMax("10 and Infinity")).toEqual({min: 10, max: Infinity}));

    test('Передаем строку c -Infinity и числом', () => expect(getMinMax("10 and -Infinity")).toEqual({min: -Infinity, max: 10}));

    test('Передаем строку c Infinity, числом и NaN', () => expect(getMinMax("10 and -Infinity and NaN")).toEqual({min: -Infinity, max: 10}));

    test('Передаем число Number', () => expect(() => getMinMax(10)).toThrow());

    test('Передаем Boolean', () => expect(() => getMinMax(true)).toThrow());

    test('Ничего не передаем', () => expect(() => getMinMax()).toThrow());
});
