const {groupBy} = require('./groupBy');

describe('groupBy тесты: ', () => {
    test('Передаем функцию, которая возвращает аргумент: ', () => {
        expect(groupBy(x => x, {a: 1, b: 2, c: 1})).toEqual({'1': [1, 1], '2': [2]});
    });

    test('Передаем функцию, которая увеличивает аргумент в 2 раза: ', () => {
        expect(groupBy(x => 2 * x, {a: 1, b: 2})).toEqual({'2': [1], '4': [2]});
    });

    test('Передаем пустой объект: ', () => {
        expect(groupBy(x => x, {})).toEqual({});
    });

    test('Передаем строку вместо объекта: ', () => {
        expect(groupBy(x => x, 'str')).toEqual({'s': ['s'], 't': ['t'], 'r': ['r']});
    });

    test('Передаем число вместо объекта: ', () => {
        expect(groupBy(x => x, 123)).toEqual({});
    });

    test('Передаем объект с объектами: ', () => {
        expect(groupBy(x => x, {a: {q: 1}, b: {z: 2}})).toStrictEqual({'[object Object]': [{q: 1}, {z: 2}]});
    });
});

