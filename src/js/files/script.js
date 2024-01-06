(function () {
    var calendarContainer = document.querySelector('.qs-squares');
    var datePickerInput = document.querySelector('.data-datepicker');

    // Функция для проверки и обновления класса
    function updateClass(mutationsList) {
        for (var i = 0; i < mutationsList.length; i++) {
            var mutation = mutationsList[i];
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                // Проверяем, есть ли среди дочерних элементов элемент с классом qs-active
                var isActive = Array.from(calendarContainer.children).some(function (child) {
                    return child.classList.contains('qs-active');
                });
                // Если есть элемент с классом qs-active, добавляем класс input-ok, иначе убираем его
                if (isActive) {
                    datePickerInput.classList.add('input-ok');
                } else {
                    datePickerInput.classList.remove('input-ok');
                }
                break;
            }
        }
    }

    // Создаем MutationObserver
    var observer = new MutationObserver(function (mutationsList) {
        updateClass(mutationsList);
    });

    // Настраиваем наблюдение за изменениями в атрибутах класса у дочерних элементов
    Array.from(calendarContainer.children).forEach(function (child) {
        observer.observe(child, { attributes: true });
    });

    // Вызываем функцию при загрузке страницы, чтобы установить начальный класс
    updateClass([]);
})();

(function () {
    var optionElements = document.querySelectorAll('.select__option');
    var optionArray = Array.from(optionElements);

    optionArray.forEach(function (option) {
        option.addEventListener('click', function (s) {
            var dataValue = s.target.getAttribute('data-value');
            if (dataValue !== "1") {
                var targetElement = document.querySelector('[data-id="3"]');
                if (targetElement && targetElement.querySelector('.select__body')) {
                    targetElement.classList.add('input-ok');
                }
            } else {
                var targetElement = document.querySelector('[data-id="3"]');
                if (targetElement && targetElement.querySelector('.select__body')) {
                    targetElement.classList.remove('input-ok');
                }
            }
        });
    });
})();

(function () {
    function isValidePhone(number) {
        var phoneRegex = /^\+\d{10,15}$/;
        return phoneRegex.test(number);
    }
    var phoneCodeElement = document.getElementById('phone-code');

    phoneCodeElement.addEventListener('input', function () {
        var inputValue = phoneCodeElement.value;

        phoneCodeElement.classList.remove('input-ok');
        isValidePhone(inputValue)

        if (isValidePhone(inputValue)) {
            phoneCodeElement.classList.add('input-ok');
            console.log(inputValue)
        }

    });
}
)();

(function () {
    function isValidName(name) {
        var nameRegex = /^(\p{L}{3,19})\s?(\p{L}{3,19})?\s?(\p{L}{3,19})?$/u;
        return nameRegex.test(name);
    }
    var nameCodeElement = document.getElementById('name-code');
    nameCodeElement.addEventListener('input', function () {
        var inputValue = nameCodeElement.value;

        nameCodeElement.classList.remove('input-ok');
        isValidName(inputValue)
        // console.log(inputValue)

        if (isValidName(inputValue)) {
            nameCodeElement.classList.add('input-ok');
            console.log(inputValue)
        }

    });
}
)();

(function () {
    function isValidEmail(email) {
        var emailRegex = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/;
        return emailRegex.test(email);
    }
    var mailCodeElement = document.getElementById('mail-code');
    mailCodeElement.addEventListener('input', function (e) {
        mailCodeElement.classList.remove('input-ok');
        var inputValue = mailCodeElement.value;
        if (isValidEmail(inputValue)) {
            mailCodeElement.classList.add('input-ok');
        } else {

            mailCodeElement.classList.remove('input-ok');
        }

    });
}
)();


(function () {
    var btnNextElement = document.querySelector('.btn-next');
    var btnOkElement = document.querySelector('.btn-ok');

    function handleMutations(mutations) {
        updateButtons();
    }

    var observer = new MutationObserver(handleMutations);

    var observerConfig = {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ['class']
    };

    observer.observe(document.body, observerConfig);

    function updateButtons() {
        var mailCodeElement = document.querySelector('#mail-code.input-ok');
        var nameCodeElement = document.querySelector('#name-code.input-ok');
        var phoneCodeElement = document.querySelector('#phone-code.input-ok');

        var allInputsOk = mailCodeElement && nameCodeElement && phoneCodeElement;

        if (allInputsOk) {
            btnNextElement.hidden = true;
            btnOkElement.hidden = false;
        } else {
            btnNextElement.hidden = false;
            btnOkElement.hidden = true;
        }
    }

    updateButtons();
})();
