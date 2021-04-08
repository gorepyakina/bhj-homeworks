const baige = document.querySelector(".chat-widget");
const button = document.querySelector(".chat-widget__side-text");
const messages = document.querySelector('.chat-widget__messages' );
const input = document.querySelector('.chat-widget__input');

const date = new Date();
const time = `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;

const botAnswers = ["Добрый день! До свидания!",
                    "Вы не купили ни одного товара, чтобы так с нами разговаривать!",
                    "Кто тут?",
                    "Где ваша совесть?",
                    "Мы ничего не будем вам продавать",
                    "К сожалению, все операторы заняты. Не пишите нам больше",
                    "Добрый день, мы ещё не проснулись. Позвоните через 10 лет"];

button.addEventListener('click', function() {
    baige.classList.toggle('chat-widget_active');
});

input.addEventListener('keydown', sendMessage);

function sendMessage(event) {
    if (event.code === "Enter" && event.target.value !== "") {
        let userMessage = event.target.value;
        messages.innerHTML += `
            <div class="message_client">
                <div class="message__time">${time}</div>
                <div class="message__text">
                    ${userMessage}
                </div>
            </div>
        `;
        input.value = "";
        scroll();
        answer();
    }
}

function answer() {
    let botMessage = botAnswers[Math.floor(Math.random() * botAnswers.length)];

    messages.innerHTML += `
            <div class="message">
                <div class="message__time">${time}</div>
                <div class="message__text">
                    ${botMessage}
                </div>
            </div>
        `;
    scroll();
}

function scroll() {
    messages.closest('.chat-widget__messages-container').scrollTop = messages.scrollHeight;
}