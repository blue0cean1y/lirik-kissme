window.onload = function() {
    const grassContainer = document.getElementById('grass');
    const flowersContainer = document.getElementById('flowers');

    // rumput
    for (let i = 0; i < 50; i++) {
        const blade = document.createElement('div');
        blade.classList.add('grass-blade');
        blade.style.height = `${Math.random() * 30 + 70}px`;
        grassContainer.appendChild(blade);
    }

    // bunga
    for (let i = 0; i < 1; i++) { 
        const flower = document.createElement('div');
        flower.classList.add('flower');

        const stem = document.createElement('div');
        stem.classList.add('stem');
        
        const petal = document.createElement('div');
        petal.classList.add('petal');

        flower.appendChild(stem);
        flower.appendChild(petal);
        flowersContainer.appendChild(flower);
    }

    // menambahkan elemen manusia yang sedang bernyanyi
    const human = document.createElement('div');
    human.id = 'human';

    const head = document.createElement('div');
    head.classList.add('head');

    const body = document.createElement('div');
    body.classList.add('body');

    const arm = document.createElement('div');
    arm.classList.add('arm');

    const mic = document.createElement('div');
    mic.classList.add('mic');

    const leg = document.createElement('div');
    leg.classList.add('leg');

   
    arm.appendChild(mic);
    human.appendChild(head);
    human.appendChild(body);
    human.appendChild(arm);
    human.appendChild(leg);

    document.querySelector('.scene').appendChild(human);
};
