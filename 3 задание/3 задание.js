// 3 задание
// Реализовать чат на основе эхо-сервера wss://echo-ws-service.herokuapp.com. Интерфейс состоит из input,
// куда вводится текст сообщения, и кнопки «Отправить». При клике на кнопку «Отправить» сообщение должно появляться
// в окне переписки. Эхо-сервер будет отвечать вам тем же сообщением, его также необходимо выводить в чат.
// Добавить в чат механизм отправки гео-локации. При клике на кнопку «Гео-локация» необходимо отправить данные серверу
// и в чат вывести ссылку на https://www.openstreetmap.org/ с вашей гео-локацией. Сообщение, которое отправит обратно
// эхо-сервер, не выводить.

const btn = document.querySelector('button.send');
const btnGeo = document.querySelector('button.geo');
const outputMessage= document.querySelector('div.result');
let websocket;

function writeSmth(message, mesClass){
    if (writeSmth.arguments[2]){ // проверка наличия дополнительного параметра который добавляется при запросе геопозиции
        let result = `
            <div class="${mesClass}">
                <div class="message fill">
                    <a href="${message}">Ссылка на геопозицию</a>
                </div>
            </div>
        `;
        outputMessage.innerHTML += result;
    } else { // для аккуратности убирается подпись с собственных сообщений клиента
        let result = `
            <div class="${mesClass}">
                <div class="message">
                    ${mesClass === 'client' ? '' : 'Server: '}${message} 
                </div>
            </div>
        `;
        outputMessage.innerHTML += result;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    websocket = new WebSocket('wss://echo-ws-service.herokuapp.com');
    websocket.onopen = () => {
        console.log('Соединение открыто')
    };
    websocket.onclose = () => {
        console.log('Соединение закрыто')
    };
    websocket.onmessage = (elem) => {
        writeSmth(elem.data , 'server') // функция вывода, ответ сервера
    }
})

btn.addEventListener('click', () => {
    const userMessage = document.querySelector('input').value;
    if (userMessage !== ''){
        websocket.send(userMessage);
        writeSmth(userMessage, 'client'); // вывод сообщения клиента
    } else {
        writeSmth('Введено пустое значение', 'client')
    }
})
const success = (position) => {
    btnGeo.href = `https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`;
    writeSmth(btnGeo.href, 'server', 'geo');
}
const error = () => {
    writeSmth('Геопозиция недоступна', 'server');
}
btnGeo.addEventListener('click', () => {    // обработка запроса геопозиции
    btnGeo.href = '';
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success, error)
    } else {
        writeSmth('Geolocation не поддерживается браузером', 'server');
    }
})
