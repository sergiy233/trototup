const stick = document.getElementById('pink-stick');
const farmer = document.getElementById('farmer');
const milkZone = document.getElementById('milk-zone');
const milkCountEl = document.getElementById('milk-count');

// Змінна лічильника
let currentCount = 0;

// Функція для створення кульки
function createSideBall(side) {
    const ball = document.createElement('div');
    ball.classList.add('side-ball', side);
    // Додаємо кульку в контейнер фермера, щоб вона рухалась разом з ним
    document.querySelector('.farmer-container').appendChild(ball);
    
    // Видаляємо кульку після анімації
    setTimeout(() => {
        ball.remove();
    }, 500);
}

stick.addEventListener('click', () => {
    // 1. Створюємо краплю молока
    const drop = document.createElement('div');
    drop.classList.add('milk-drop');
    const randomOffset = (Math.random() - 0.5) * 40;
    drop.style.marginLeft = randomOffset + 'px';
    milkZone.appendChild(drop);

    // 2. Логіка попадання в обличчя
    setTimeout(() => {
        const face = farmer.querySelector('.face');
        
        // --- НОВЕ: Оновлюємо лічильник ---
        currentCount++;
        milkCountEl.innerText = currentCount;

        // --- НОВЕ: Створюємо дві кульки по бокам ---
        createSideBall('left');
        createSideBall('right');

        // Ефект попадання (емодзі і рух)
        face.innerText = '😵';
        document.querySelector('.farmer-container').style.transform = 'translateX(-50%) scale(1.4) rotate(5deg)';
        
        // Повертаємо як було
        setTimeout(() => {
            face.innerText = '👨‍🌾';
            document.querySelector('.farmer-container').style.transform = 'translateX(-50%) scale(1) rotate(0deg)';
        }, 300);
    }, 300);

    // 3. Видаляємо елемент молока
    setTimeout(() => {
        drop.remove();
    }, 450);
});
