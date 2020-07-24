const {promiseAll} = require('./promiseAll');

describe('promiseAll тесты: ', () => {
    test('Передаем промисы с resolve: ', () => {
        expect(promiseAll([Promise.resolve(1), Promise.resolve(2)])).resolves.toEqual([1, 2]);
    });

    test('Передаем промисы с resolve и reject: ', () => {
        expect(promiseAll([Promise.resolve(1), Promise.reject(2)])).rejects.toEqual(2);
    });

    test('Передаем пустой массив: ', () => {
        expect(promiseAll([])).rejects.toEqual('empty arr');
    });
})

describe('promiseAll тесты, которые выдадут ошибку: ', () => {
    test('Передаем строку: ', () => {
        expect(() => promiseAll('str')).rejects.toThrow();
    });

    test('Передаем число: ', () => {
        expect(promiseAll(123)).rejects.toEqual('empty arr');
    });

    test('Ничего не передаем: ', () => {
        expect(() => promiseAll()).rejects.toThrow();
    });
})