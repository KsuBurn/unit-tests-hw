const { passwordCheck } = require('./passwordCheck');

describe('passwordCheck тесты: ', () => {
    test('Пароль более 10 символов: ', () => expect(passwordCheck('Qwerty12!*zxc')).toBe(true));

    test('Пароль менее 10 символов: ', () => expect(passwordCheck('Qwerty1!')).toBe(false));

    test('Пароль ровно 10 символов: ', () => expect(passwordCheck('sdQwerty1!')).toBe(true));

    test('Пароль бец цифр: ', () => expect(passwordCheck('qQwertasd!')).toBe(false));

    test('Пароль бец спец символов: ', () => expect(passwordCheck('qQwertasd1')).toBe(false));

    test('Пароль бец букв в верхнем регистре: ', () => expect(passwordCheck('werty12!*zxc')).toBe(false));

    test('Пароль только из букв: ', () => expect(passwordCheck('qwertdfgkis')).toBe(false));

    test('Пароль только из цифр: ', () => expect(passwordCheck('1234567812')).toBe(false));

    test('Передаем Number: ', () => expect(passwordCheck(1234567812)).toBe(false));

    test('Передаем Boolean: ', () => expect(passwordCheck(true)).toBe(false));

    test('Пароль с русскими буквами: ', () => expect(passwordCheck('Qwerty12!*zxё')).toBe(true));
});