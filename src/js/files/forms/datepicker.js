/* Календар */

// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів
import { flsModules } from "../modules.js";

// Підключення модуля
import datepicker from 'js-datepicker';

if (document.querySelector('[data-datepicker]')) {
	const picker = datepicker('[data-datepicker]', {
		customDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		customMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		overlayButton: 'Застосувати',
		overlayPlaceholder: 'Рік (4 цифри)',
		startDay: 1,
        formatter: (input, date, instance) => {
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear();

            const formattedDate = `${day}/${month}/${year}`;

            input.value = formattedDate;
        },
		// formatter: (input, date, instance) => {
		// 	const value = date.toLocaleDateString()
		// 	input.value = value
		// },
		onSelect: function (input, instance, date) {

		}
	});
	flsModules.datepicker = picker;
}
