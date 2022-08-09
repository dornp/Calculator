document.addEventListener('DOMContentLoaded', () => {

    /* Написать калькулятор, который имеет следующий функционал:

    ⁃ Калькулятор состоит из кнопок и поля для отображения результата

    ⁃ Кнопки: цифры от 0 до 9, +, -, /, *, = и С (сбросить)

    ⁃ Пользователь сначала вводит первое число (число может состоять из одной цифры или из нескольких), 
    затем выбирает знак (+ - / *), а затем вводит второе число. Все числа и знак должны выводится 
    на поле для отображения результата (например 60 + 33)

    ⁃ После того, как пользователь нажмет =, в поле для отображения результата должно 
    добавится = и результат операции (например 60 + 33 = 93)

    - ПРОВЕРКИ  ОБЫЧНЫЕ КНОПКИ
    Если в поле уже есть знак (например +), то нельзя ввести ещё один знак. 
    Если в поле уже есть готовый результат (например 60 + 33 = 93), то нельзя вводить никакие символы, 
    до тех пор пока поле не будет очищено. Если в поле нет цифр, то нельзя вводить
    знаки. Если число больше 1 знака и начинается с 0, но 0 убираем.

    ⁃ Если пользователь нажимает кнопку С (сбросить), то поле должно очиститься. 
    По умолчанию в поле для отображения результата должен быть 0

    ⁃ Предусмотреть такой случай, как деление на 0. В этом случае в поле должна вывесить надпись Ошибка!*/ 


    const btns = document.querySelectorAll('.btn');
    const display = document.querySelector('.display_result');

    let operator ='';

    btns.forEach(item => {
        item.addEventListener('click', () => {
            let result = display.textContent;

            if (result.indexOf('=') === -1 || item.value === 'C') {
                if (result === '0') {
                    if (!isNaN(+item.value) && typeof(+item.value) === 'number') {
                        result = item.value;
                    }   
                } else if (item.value === '+' || item.value === '-' || item.value === 'x' || item.value === '/' || item.value === '%' || item.value === '√') {
                    if (operator === '') {
                        operator = item.value;
                        result += item.value;
                    }
                } else if (item.value === 'C') {
                    result = '0';
                    operator = '';
                } else if (item.value === '.') {
                    const lastCharacter = +result.slice(-1);
                    if (typeof(lastCharacter) === 'number' && !isNaN(lastCharacter)) {
                        result += item.value;
                    }
                } else if (item.value === '=') {
                    let arr = result.split(/x|\=|\%|√|\+|\-|\//);
                    let res = 0;
                    if (operator === '+') {
                        res = Number(arr[0]) + Number(arr[1]);
                    } else if (operator === '-') {
                        res = Number(arr[0]) - Number(arr[1]);
                    } else if (operator === 'x') {
                        res = Number(arr[0]) * Number(arr[1]);
                    } else if (operator === '/') {
                        res = Number(arr[0]) / Number(arr[1]);
                    } else if (operator === '%') {
                        res = Number(arr[0]) / 100;
                    } else if (operator === '√') {
                        res = Math.sqrt(Number(arr[0]));
                    }
                    result += '=' + res;
                }
                else {
                    result += item.value;
                }
            }

            display.textContent = result;
        });
    });
});



