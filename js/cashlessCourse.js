var cashlessCourse_Button = document.getElementById('cashlessCourse__button');

var cashlessCourse__USD_buy = document.getElementById('cashlessCourse__USD-buy');
var cashlessCourse__USD_sale = document.getElementById('cashlessCourse__USD-sale');

var cashlessCourse__EUR_buy = document.getElementById('cashlessCourse__EUR-buy');
var cashlessCourse__EUR_sale = document.getElementById('cashlessCourse__EUR-sale');

var cashlessCourse__RUR_buy = document.getElementById('cashlessCourse__RUR-buy');
var cashlessCourse__RUR_sale = document.getElementById('cashlessCourse__RUR-sale');


function cashlessCourse_button() {                                                           // send a request
    fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
    .then(function(responce) {                                                               // we get the response
        return responce.json();                                                              // парсинг? обработака инфо с формата данных JSON
    }) 
    .then(function(data) {
        displayInfo_cashlessCourse(data);                                                     // возвращяеться обьект с нужными данными, передаем его в функцию для отрисовки
    })
}

function displayInfo_cashlessCourse(data) {                                                   // отрисовываем инфо в нижных ячейках
    console.log(data);
    cashlessCourse__USD_buy.innerText = fixedNumber_cashlessCourse(data[0].buy);
    cashlessCourse__USD_sale.innerText = fixedNumber_cashlessCourse(data[0].sale);

    cashlessCourse__EUR_buy.innerText = fixedNumber_cashlessCourse(data[1].buy);
    cashlessCourse__EUR_sale.innerText = fixedNumber_cashlessCourse(data[1].sale);

    cashlessCourse__RUR_buy.innerText = fixedNumber_cashlessCourse(data[2].buy);
    cashlessCourse__RUR_sale.innerText = fixedNumber_cashlessCourse(data[2].sale);
}

function fixedNumber_cashlessCourse(num) {                  // num передаеться как строка
    return parseFloat(num).toFixed(2);                      // так как число float (не целое, с числами после точки), функцией parseFloat переводим в тип данних number                                           
}                                                           // методом toFixed оставляем после точки два числа





cashlessCourse_Button.addEventListener('click', cashlessCourse_button); // шпион-прослушка кнопки