const followers = [
    'Андамов Руслан', 'Аловатов Сухроб', 'Амиршоева Хочатбегим',
    'Додихудоева Ханифа', 'Сафарова Ганчина', 'Мамадназарова Мижгона',
    'Мамадов Шоди', 'Мираков Мавлуд', 'Отамова Хубруй',
    'Туфалонова Шаходат', 'Холикшоев Шамил', 'Турсунов Шукулло',
    'Рахмонов Орзу', 'Иззатшоев Сиёвуш', 'Хуросониев Алидин'
];

const display = document.getElementById('display');
const timerDisplay = document.getElementById('timer');
const btn = document.getElementById('startBtn');

function startRaffle() {
    btn.disabled = true;
    let secondsLeft = 5;
    
    // Эффект перемешивания (быстрая смена имен)
    const shuffle = setInterval(() => {
        const randomName = followers[Math.floor(Math.random() * followers.length)];
        display.innerText = randomName;
        display.style.opacity = Math.random() > 0.5 ? "1" : "0.8"; // Легкое мерцание
    }, 100);

    // Таймер
    const countdown = setInterval(() => {
        secondsLeft--;
        timerDisplay.innerText = `Осталось секунд: ${secondsLeft}`;

        if (secondsLeft <= 0) {
            clearInterval(shuffle);
            clearInterval(countdown);
            
            const winner = followers[Math.floor(Math.random() * followers.length)];
            
            // Финальное оформление победителя
            display.innerText = winner;
            display.style.opacity = "1";
            display.style.background = "rgba(255, 255, 255, 0.2)";
            timerDisplay.innerText = "Победитель определен!";
            
            btn.disabled = false;
            btn.innerText = "Начать заново";
        }
    }, 1000);
}