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

            if (display.textContent === '0') {
                if (!isNaN(+item.value) && typeof(+item.value) === 'number') {
                    display.textContent = item.value;
                }
                
            } else {
                display.textContent += item.value;
            }

            if (item.value === 'C') {
                display.textContent = '0';
            }

            if (item.value === '+' || item.value === '-' || item.value === 'x' || item.value === '/') {
                operator = item.value;
            }
            console.log(item.value);
            if (item.value === '=') {
                let arr = display.textContent.split(/[x=+-\/]/);
                let res = 0;
                console.log(arr);
                if (operator === '+') {
                    res = Number(arr[0]) + Number(arr[1]);
                } else if (operator === '-') {
                    res = Number(arr[0]) - Number(arr[1]);
                } else if (operator === 'x') {
                    res = Number(arr[0]) * Number(arr[1]);
                } else if (operator === '/') {
                    res = Number(arr[0]) / Number(arr[1]);
                }
                display.textContent += res;
            }
    
            
        });
    });
    

});



