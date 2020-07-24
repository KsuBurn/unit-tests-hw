const {getIntersection} = require('./getIntersection');

describe('getIntersection тесты: ', () => {
    test('Передаем массивы с повторящимися числами: ', () => {
        expect(getIntersection([1, 2, 3], [1, 3, 4])).toEqual([1, 3]);
    });

    test('Передаем массивы с неповторяющимися числами: ', () => {
        expect(getIntersection([1, 2, 3], [4, 5, 6])).toEqual([]);
    });

    test('Передаем массивы с повторящимися числами несколько раз: ', () => {
        expect(getIntersection([1, 1, 1, 2, 3], [1, 2, 2, 4, 5, 6])).toEqual([1, 2]);
    });

    test('Передаем массивы с отрицательными числами: ', () => {
        expect(getIntersection([-1, 1, 1, 2, -3], [-1, -3,  2, 2, 1, 1, 5, 6])).toEqual([-3, -1, 1, 1, 2]);
    });

    test('Передаем пустые массивы : ', () => {
        expect(getIntersection([], [])).toEqual([]);
    });

    test('Передаем строку вместо массива : ', () => {
        expect(() => getIntersection('string', [1, 2, 3])).toThrow();
    });
});