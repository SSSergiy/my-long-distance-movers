
/*
(i) Код потрапляє у підсумковий файл,
тільки коли викликана функція,
наприклад flsFunctions.spollers();
Або коли імпортовано весь файл,
наприклад, import "files/script.js";
Невикористовуваний (не викликаний)
код у підсумковий файл не потрапляє.

Якщо ми хочемо додати модуль
слід його розкоментувати
*/

// Увімкнути/вимкнути FLS (Full Logging System) (в роботі)
window['FLS'] = true;

// Підключення основного файлу стилів
import "../scss/style.scss";


//============================================================================================================================================================================================================================================
// React ========================================================================================================================================================================================================================================================
//============================================================================================================================================================================================================================================
// import Index from './react/Index.jsx';
//============================================================================================================================================================================================================================================

// ========================================================================================================================================================================================================================================================
// Функціонал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Перевірка підтримки webp, додавання класу webp або no-webp для HTML */
/* (i) необхідно для коректного відображення webp із css */
flsFunctions.isWebp();
/* Додавання класу touch для HTML якщо браузер мобільний */
// flsFunctions.addTouchClass();
/* Додавання loaded для HTML після повного завантаження сторінки */
// flsFunctions.addLoadedClass();
/* Модуль для роботи з меню (Бургер) */
flsFunctions.menuInit();
/* Враховування плаваючої панелі на мобільних пристроях при 100vh */
// flsFunctions.fullVHfix();
/* Форматування чисел */
// import './libs/wNumb.min.js';

/*
Модуль "Спойлери"
Документація: https://template.fls.guru/template-docs/modul-spojlery.html
Сніппет (HTML): spollers
*/
flsFunctions.spollers();

/*
Модуль "Таби"
Документація: https://template.fls.guru/template-docs/modul-taby.html
Сніппет (HTML): tabs
*/
//flsFunctions.tabs();

/*
Модуль "Показати ще"
Документація: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Сніппет (HTML): showmore
*/
// flsFunctions.showMore();

/*
Модуль "До/Після"
Документація: https://template.fls.guru/template-docs/modul-do-pislia.html
Сніппет (HTML): ba
*/
// import './libs/beforeafter.js';

/*
Модуль "Ефект хвиль"
Документация: https://template.fls.guru/template-docs/modul-ripple-effect.html
Сниппет (HTML):
*/
// flsFunctions.rippleEffect();

/*
Модуль "Кастомний курсор"
Документация:
Сниппет (HTML):
*/
// flsFunctions.customCursor(true);

/*
Модуль "Попапи"
Документація: https://template.fls.guru/template-docs/funkcional-popup.html
Сніппет (HTML): pl, pop
*/
import './libs/popup.js';

/*
Модуль паралаксу мишею
Документація: https://template.fls.guru/template-docs/modul-animacii-parallaks-obektov-pri-dvizhenii-myshi.html
*/
// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Робота з формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Робота з полями форми */
/* Документація: https://template.fls.guru/template-docs/rabota-s-formami.html */
/*
flsForms.formFieldsInit({
    viewPass: false,
    autoHeight: false
});
*/
/* Надсилання форми */
/* Документація: https://template.fls.guru/template-docs/rabota-s-formami.html */
// flsForms.formSubmit();

/* Модуль форми "кількість" */
// flsForms.formQuantity();

/* Модуль зіркового рейтингу */
// flsForms.formRating();

/* Модуль роботи з select. */
// import './libs/select.js';

/* Модуль роботи з календарем */
// import './files/forms/datepicker.js';

/* (У роботі) Модуль роботи з масками.*/
/*
Підключення та налаштування виконується у файлі js/files/forms/inputmask.js
Документація по роботі у шаблоні:
Документація плагіна: https://github.com/RobinHerbots/inputmask
Сніппет(HTML):
*/
// import "./files/forms/inputmask.js";

/* Модуль роботи з повзунком */
/*
Підключення та налаштування виконується у файлі js/files/forms/range.js
Документація по роботі у шаблоні:
Документація плагіна: https://refreshless.com/nouislider/
Сніппет (HTML): range
*/
// import "./files/forms/range.js";

/* Модуль роботи з підказками (tippy) */
/*
Підключення плагіна Tippy.js та налаштування виконується у файлі js/files/tippy.js
Документація по роботі у шаблоні:
Документація плагіна: https://atomiks.github.io/tippyjs/
Сніппет (HTML): tip (додає атрибут з підказкою для html тега)
*/
// import "./files/tippy.js";

// ========================================================================================================================================================================================================================================================
// Робота зі слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Налаштування підключення плагіна слайдера Swiper та нових слайдерів виконується у файлі js/files/sliders.js
Документація по роботі у шаблоні: https://template.fls.guru/template-docs/rabota-so-slajderom-swiper.html
Документація плагіна: https://swiperjs.com/
Сніппет(HTML): swiper
*/
// import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Модулі роботи з прокручуванням сторінки ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Зміна дизайну скроллбару
Документація по роботі у шаблоні: У HTML додаємо до блоку атрибут data-simplebar
Документація плагіна: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сніппет(HTML):
*/
// import './files/scroll/simplebar.js';

// Ліниве (відкладене) завантаження картинок
// Документація по роботі у шаблоні: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документація плагіна: https://github.com/verlok/vanilla-lazyload
// Сніппет(HTML):
// import './files/scroll/lazyload.js';

// Спостерігач за об'єктами з атрибутом data-watch
// Документація: https://template.fls.guru/template-docs/modul-nabljudatel-za-poyavleniem-elementa-pri-skrolle.html
// Сніппет(HTML):
// import './libs/watcher.js'

// Модуль поекранної прокрутки
// Документація: https://template.fls.guru/template-docs/modul-poekrannoj-prokrutki-stranicy-fullpage.html
// Сніппет(HTML):
// import './libs/fullpage.js'

// Модуль паралаксу
// Документація: https://template.fls.guru/template-docs/paralaks-pri-skroli.html
// Сніппет(HTML):
// import './libs/parallax.js'

// Функції роботи скролом

// Плавна навігація по сторінці
// Документація: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
// flsScroll.pageNavigation();

// Функціонал додавання класів до хедеру під час прокручування
// Документація: https://template.fls.guru/template-docs/modul-dobavleniya-klassov-k-shapke-pri-prokrutke-stranicy.html
// flsScroll.headerScroll();

// Модуль анімація цифрового лічильника
// Документація: https://template.fls.guru/template-docs/modul-animacii-cifrovogo-lichilnika.html
// Сніппет(HTML):
// flsScroll.digitsCounter();

// ========================================================================================================================================================================================================================================================
// Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документація по роботі у шаблоні:
Документація плагіна: https://www.lightgalleryjs.com/docs/
Сніппет(HTML):
*/
// import "./files/gallery.js";

// ========================================================================================================================================================================================================================================================
// Масонрі сітка ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документація по роботі у шаблоні:
Документація плагіна:
Сніппет(HTML):
*/
// import "./files/isotope.js";

// ========================================================================================================================================================================================================================================================
// Інші плагіни ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Динамічний адаптив */
// Документація: https://template.fls.guru/template-docs/dinamicheskij-adaptiv.html
import "./libs/dynamic_adapt.js";

// ========================================================================================================================================================================================================================================================
// Інше ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Підключаємо файли зі своїм кодом */
//============================================================================================================================================================================================================================================
import flatpickr from "flatpickr";

var stateForm = {};

(function () {
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    function formatNumberWithComma(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    var myBlock = document.getElementById('form-step');
    var myBlockStep = document.getElementById('stepOneCount');
    var svichedScrol = true
    function scrollHandler(e) {
        var count = 0;
        if (isElementInViewport(myBlock) && svichedScrol) {
            function updateCount() {
                var formattedNumber = formatNumberWithComma(count);
                myBlockStep.innerHTML = formattedNumber;
                count += 353;
                if (count <= 1765) {
                    setTimeout(updateCount, 300);
                }
                if (count === 1765) {
                    window.removeEventListener("scroll", scrollHandler);
                    svichedScrol = false;
                }
            }
            updateCount();
        }
    }
    window.addEventListener("scroll", scrollHandler);
})();
(function () {
    var roomList = document.getElementById('step-one-list');
    var listItems = roomList.getElementsByTagName('li');

    Array.from(listItems).forEach(function (listItem) {
        listItem.addEventListener('click', function () {
            stateForm["rooms"] = this.textContent;
            document.getElementById('step-one').hidden = true;
            document.getElementById('step-two').hidden = false;
        });
    });
})()

function isValideZipe(number) {
    var zipeRegex = /^\d{5}$/;
    return zipeRegex.test(number);
}

function lookupPostalCodeFrom() {
    var postalCodeInput = document.getElementById('step-two-input-from');
    var resultDiv = document.getElementById('step-two-input-from-rezult');
    document.getElementById('step-two-input-svg-from').hidden = true;
    resultDiv.textContent = "";

    var postalCode = postalCodeInput.value.trim();
    if (isValideZipe(postalCode)) {
        document.getElementById('step-two-input-svg-from').hidden = false;
        document.getElementById('step-two-input-from-error').hidden = true;
        document.getElementById('step-two-input-from-block').classList.remove('error-block')

        if (!postalCode) {
            resultDiv.textContent = "";
            return;
        }

        var apiKey = "ee80d316104c43e8841e90df830a504e";
        var endpoint = `https://api.opencagedata.com/geocode/v1/json?q=${postalCode}&key=${apiKey}&language=en&countrycode=us`;
        fetch(endpoint).then(response => response.json()).then(data => {
            if (data.results && data.results.length > 0) {
                var result = data.results[0];
                var components = result?.components;
                var county = components?.county;
                var city = components?.city;
                var town = components?.town;
                var region = components?.state_code;

                var locationInfo = city || town || county;
                console.dir(components);
                resultDiv.textContent = `${locationInfo}, ${region}`;
            } else {
                resultDiv.textContent = "Location not found";
            }
        }
        ).catch(error => {
            console.error("Error fetching data:", error);
            resultDiv.textContent = "Error fetching data";
        }
        );
    } else {
        resultDiv.textContent = "";
        document.getElementById('step-two-input-svg-from').hidden = true;
        document.getElementById('step-two-input-from-block').classList.add('error-block')
        document.getElementById('step-two-input-from-error').hidden = false;
    }
}
document.getElementById('step-two-input-from').addEventListener('input', lookupPostalCodeFrom);

function lookupPostalCodeTo() {
    var postalCodeInput = document.getElementById('step-two-input-to');
    var resultDiv = document.getElementById('step-two-input-to-rezult');

    var postalCode = postalCodeInput.value.trim();
    document.getElementById('step-two-input-svg-to').hidden = true;
    resultDiv.textContent = "";
    if (isValideZipe(postalCode)) {
        document.getElementById('step-two-input-svg-to').hidden = false;
        document.getElementById('step-two-input-to-error').hidden = true;
        document.getElementById('step-two-input-to-block').classList.remove('error-block')
        if (!postalCode) {
            resultDiv.textContent = "";
            return;
        }
        var apiKey = "ee80d316104c43e8841e90df830a504e";

        var endpoint = `https://api.opencagedata.com/geocode/v1/json?q=${postalCode}&key=${apiKey}&language=en&countrycode=us`;

        fetch(endpoint).then(response => response.json()).then(data => {
            console.log(data.results)
            if (data.results && data.results.length > 0) {
                var result = data.results[0];
                var components = result?.components;
                var county = components?.county;
                var city = components?.city;
                var town = components?.town;
                var region = components?.state_code;
                var locationInfo = city || town || county;
                console.dir(components);

                resultDiv.textContent = `${locationInfo}, ${region}`;
            } else {
                resultDiv.textContent = "Location not found";
            }
        }
        ).catch(error => {
            console.error("Error fetching data:", error);
            resultDiv.textContent = "Error fetching data";
        }
        );
    } else {
        resultDiv.textContent = "";
        document.getElementById('step-two-input-svg-to').hidden = true;
        document.getElementById('step-two-input-to-error').hidden = false;
        document.getElementById('step-two-input-to-block').classList.add('error-block')
    }
}
document.getElementById('step-two-input-to').addEventListener('input', lookupPostalCodeTo);

function updateButtonState() {
    var btnTwo = document.getElementById('step-two-btn');
    var errorFrom = document.getElementById('step-two-input-from-block');
    var errorTo = document.getElementById('step-two-input-to-block');
    var resultDivFrom = document.getElementById('step-two-input-from');
    var resultDivTo = document.getElementById('step-two-input-to');
    btnTwo.classList.add("invalid-btn");

    if (resultDivTo.value && resultDivFrom.value &&
        !errorTo.classList.contains("error-block") &&
        !errorFrom.classList.contains("error-block")
    ) {
        btnTwo.classList.remove("invalid-btn");
        btnTwo.classList.add("valid-btn");
    } else {
        btnTwo.classList.add("invalid-btn");
    }
}
var inputFrom = document.getElementById('step-two-input-from')
var inputTo = document.getElementById('step-two-input-to')

inputFrom.addEventListener('input', updateButtonState);
inputTo.addEventListener('input', updateButtonState);
updateButtonState();

document.getElementById('step-two-btn').addEventListener('click', function () {
    stateForm["indexFrom"] = inputFrom.value;
    stateForm["stateFrom"] = document.getElementById('step-two-input-from-rezult').textContent;
    stateForm["indexTo"] = inputTo.value;
    stateForm["stateTo"] = document.getElementById('step-two-input-to-rezult').textContent;
    document.getElementById('step-two-input-to-rezult').textContent = ''
    document.getElementById('step-two-input-from-rezult').textContent = ''
    inputFrom.value = '';
    inputTo.value = '';
    document.getElementById('step-two').hidden = true;
    document.getElementById('step-three').hidden = false;
    console.log(stateForm);
    document.getElementById('step-two-input-svg-from').hidden = true;
    document.getElementById('step-two-input-svg-to').hidden = true;
});

(function () {
    var picker = document.getElementById('pickerID');
    var ThreeBtn = document.getElementById('step-three-btn');

    function updateButtonClass() {
        ThreeBtn.classList.remove('invalid-btn', 'valid-btn');

        if (picker.value) {
            ThreeBtn.classList.add('valid-btn');
        } else {
            ThreeBtn.classList.add('invalid-btn');
        }
    }

    picker.addEventListener('input', updateButtonClass);

    updateButtonClass();
}
)()

document.getElementById('step-three-btn').addEventListener('click', () => {
    stateForm["dataFiled"] = document.getElementById('pickerID').value
    document.getElementById('pickerID').value = ''
    document.getElementById('step-three').hidden = true;
    document.getElementById('step-fourth').hidden = false;
    console.log(stateForm)

})

function isValidEmail(email) {
    var emailRegex = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/;
    return emailRegex.test(email);
}
var mailCodeElement = document.getElementById('mail-code');
var btnFourth = document.getElementById('step-fourth-btn');

mailCodeElement.addEventListener('input', function (e) {

    btnFourth.classList.remove('valid-btn');
    btnFourth.classList.add('invalid-btn');
    var inputValue = mailCodeElement.value;
    if (isValidEmail(inputValue)) {
        btnFourth.classList.remove('invalid-btn');
        btnFourth.classList.add('valid-btn');
    } else {

        btnFourth.classList.remove('valid-btn');
        btnFourth.classList.add('invalid-btn');
    }

});

function handleClick() {

    stateForm["email"] = mailCodeElement.value;
    mailCodeElement.value = '';
    document.getElementById('step-fourth').hidden = true;
    document.getElementById('step-fifth').hidden = false;
    console.log(stateForm);
}

btnFourth.addEventListener('click', handleClick);
(function () {
    function isValidName(name) {
        var nameRegex = /^\p{L}{3,19}$/u;
        return nameRegex.test(name);
    }

    function isValidPhoneNumber(phoneNumber) {
        return phoneNumber.length === 14;
    }

    var nameCodeElement = document.getElementById('first-name');
    var nameCodeElementLast = document.getElementById('last-name');
    var inputt = document.getElementById('phone-code');
    var btnFifth = document.getElementById('step-fifth-btn');
    var btnSixth = document.getElementById('step-sixth');

    nameCodeElement.addEventListener('input', function () {
        checked();
    });

    nameCodeElementLast.addEventListener('input', function () {
        checked();
    });

    inputt.addEventListener('input', function () {
        formatPhoneNumber();
        checked();
    });

    function formatPhoneNumber() {
        var phoneNumber = inputt.value.replace(/\D/g, '');

        if (phoneNumber.length > 0) {
            var formattedNumber = '(' + phoneNumber.slice(0, 3) + ') ' + phoneNumber.slice(3, 6) + '-' + phoneNumber.slice(6, 10);
            inputt.value = formattedNumber;
        }
    }

    function checked() {
        var isFirstNameValid = isValidName(nameCodeElement.value);
        var isLastNameValid = isValidName(nameCodeElementLast.value);
        var isPhoneNumberValid = isValidPhoneNumber(inputt.value);

        btnFifth.classList.remove('valid-btn');
        btnFifth.classList.add('invalid-btn');

        if (isFirstNameValid && isLastNameValid && isPhoneNumberValid) {
            btnFifth.classList.remove('invalid-btn');
            btnFifth.classList.add('valid-btn');
        }
    }

    btnFifth.addEventListener('click', function () {
        stateForm['firstName'] = nameCodeElement.value;
        nameCodeElement.value = "";
        stateForm['lastName'] = nameCodeElementLast.value;
        nameCodeElementLast.value = '';
        stateForm['PhoneNumber'] = inputt.value;
        inputt.value = '';

        document.getElementById('step-fifth').hidden = true;
        document.getElementById('step-sixth').hidden = false;
        console.log(stateForm);
    })
    var secondElement = document.getElementById('popup');

    btnSixth.addEventListener('click', function () {
        stateForm = {}
        document.getElementById('step-sixth').hidden = true;
        document.getElementById('step-one').hidden = false;
        secondElement.click()
    })
})();

(function () {
    var choisesCards = document.querySelectorAll('.choises__card');
    var myPopupText = document.querySelector('.popup__text')
    var popupContent = document.querySelector('.popup__content');
    var sectionFormBlock = document.getElementById('section-form-block')
    var popup = document.getElementById('popup');
    var myForm = document.getElementById('section-form');
    var myPopup = document.querySelector('.popup__content');

    choisesCards.forEach((card) => {
        card.addEventListener('click', (e) => {

            var imageTarget = e.currentTarget.querySelector('img');
            var clonedImage = imageTarget.cloneNode(true)
            myPopup.appendChild(myForm);
            myPopupText.removeChild(myPopupText.firstChild);
            myPopupText.appendChild(clonedImage);

            document.removeEventListener('click', outsidePopupClick);

            setTimeout(function () {
                if (popup.classList.contains('popup_show')) {
                    console.log('Класс присутствует');
                    popupContent.addEventListener('click', function (event) {
                        event.stopPropagation();
                    });

                    document.addEventListener('click', outsidePopupClick);
                } else {
                    console.log('Класс отсутствует');
                }
            }, 400);

        }
        );
    }
    );

    function outsidePopupClick(event) {
        if (!popupContent.contains(event.target)) {
            console.log('Клик сделан вне блока .popup__content');
            sectionFormBlock.appendChild(myForm);
            document.removeEventListener('click', outsidePopupClick);
        }
    }
}
)();
(function () {
    var phones = document.querySelectorAll('.call-component-btn');
    phones.forEach((phon) => {
        phon.addEventListener('click', (el) => {
            el.stopPropagation();
        }
        )
    }
    )
}
)()

flatpickr("#pickerID", {
    dateFormat: "m/d/Y",
    showMonths: 2,
    disableMobile: "true",
    onReady: function (selectedDates, dateStr, instance) {
        if (window.innerWidth <= 600) {
            instance.set("showMonths", 1);
        }
    },
});

(function () {
    var clozer = document.getElementById('clozer');
    clozer.addEventListener('click', function () {
        var secondElement = document.getElementById('popup').click()

    })
}
)()



