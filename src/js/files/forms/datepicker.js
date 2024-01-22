import datepicker from 'js-datepicker';
import { flsModules } from "../modules.js";

if (document.querySelector('[data-datepicker]')) {
    const picker = datepicker('[data-datepicker]', {
        customDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        customMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        overlayButton: 'to apply',
        overlayPlaceholder: 'year (four digits)',
        startDay: 1,
        showAllDates: true,
        formatter: (input, date, instance) => {
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear();

            const formattedDate = `${day}/${month}/${year}`;

            input.value = formattedDate;
        },
        onSelect: function (input, instance, date) {
            // Обробник вибору дати
        }
    });
    flsModules.datepicker = picker;
}