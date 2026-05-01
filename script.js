const stick = document.getElementById('pink-stick');
const farmer = document.getElementById('farmer');
const milkZone = document.getElementById('milk-zone');

stick.addEventListener('click', () => {
    // 1. Створюємо краплю молока
    const drop = document.createElement('div');
    drop.classList.add('milk-drop');
    
    // Рандомне відхилення, щоб бризки були реалістичнішими
    const randomOffset = (Math.random() - 0.5) * 40;
    drop.style.marginLeft = randomOffset + 'px';
    
    milkZone.appendChild(drop);

    // 2. Логіка попадання в обличчя
    // Вичікуємо 300мс (поки анімація долетить)
    setTimeout(() => {
        const face = farmer.querySelector('.face');
        
        // Міняємо емодзі на "заляпане"
        face.innerText = '😵';
        farmer.style.transform = 'translateX(-50%) scale(1.4) rotate(5deg)';
        
        // Через деякий час повертаємо як було
        setTimeout(() => {
            face.innerText = '👨‍🌾';
            farmer.style.transform = 'translateX(-50%) scale(1) rotate(0deg)';
        }, 300);
    }, 300);

    // 3. Видаляємо елемент з DOM після анімації
    setTimeout(() => {
        drop.remove();
    }, 450);
});

