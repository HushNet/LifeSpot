let name = prompt(`Введите имя: `);
let len = name.length;
alert(`В имени ${name} ${len} символов`);

let elements = document.getElementsByTagName('*');

// Выведем результат в уведомление
alert(`Количество элементов на странице:  ${elements.length}`);