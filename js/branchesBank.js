var branchesBank_Button = document.getElementById('branchesBank__button');

var branchesBank__USD_buy = document.getElementById('branchesBank__USD-buy');
var branchesBank__USD_sale = document.getElementById('branchesBank__USD-sale');

var branchesBank__EUR_buy = document.getElementById('branchesBank__EUR-buy');
var branchesBank__EUR_sale = document.getElementById('branchesBank__EUR-sale');

var branchesBank__RUR_buy = document.getElementById('branchesBank__RUR-buy');
var branchesBank__RUR_sale = document.getElementById('branchesBank__RUR-sale');


function branchesBank_button() {                                                          // send a request

    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then(function(responce) {                                                      // we get the response
        return responce.json();                                                     // парсинг? обработака инфо с формата данных JSON
    })
    .then(function(data) {
        displayInfo_branchesBank(data);                                             // возвращяеться обьект с нужными данными, передаем его в функцию для отрисовки
    })

}
 

function displayInfo_branchesBank(data) {                                           // отрисовываем инфо в нижных ячейках
  
    branchesBank__USD_buy.innerText = fixedNumber_branchesBank(data[0].buy);
    branchesBank__USD_sale.innerText = fixedNumber_branchesBank(data[0].sale);

    branchesBank__EUR_buy.innerText = fixedNumber_branchesBank(data[1].buy);
    branchesBank__EUR_sale.innerText = fixedNumber_branchesBank(data[1].sale);

    branchesBank__RUR_buy.innerText = fixedNumber_branchesBank(data[2].buy);
    branchesBank__RUR_sale.innerText = fixedNumber_branchesBank(data[2].sale);
}

function fixedNumber_branchesBank(num) {                                // num передаеться как строка
    return parseFloat(num).toFixed(2);                                  // так как число float (не целое, с числами после точки), функцией parseFloat переводим в тип данних number
}                                                                       // методом toFixed оставляем после точки два числа





branchesBank_Button.addEventListener('click', branchesBank_button); // шпион-прослушка кнопки