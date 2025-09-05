// Configuración del juego
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Configuración del cubo
const cube = {
    x: canvas.width / 2 - 25,
    y: canvas.height / 2 - 25,
    width: 50,
    height: 50,
    speed: 5,
    dx: 0,
    dy: 0,
    color: '#3498db'
};

// Dibujar el cubo
function drawCube() {
    ctx.fillStyle = cube.color;
    ctx.fillRect(cube.x, cube.y, cube.width, cube.height);
}

// Limpiar el canvas
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Actualizar la posición del cubo
function update() {
    // Actualizar posición
    cube.x += cube.dx;
    cube.y += cube.dy;

    // Detección de bordes
    if (cube.x < 0) cube.x = 0;
    if (cube.x + cube.width > canvas.width) cube.x = canvas.width - cube.width;
    if (cube.y < 0) cube.y = 0;
    if (cube.y + cube.height > canvas.height) cube.y = canvas.height - cube.height;
}

// Bucle principal del juego
function gameLoop() {
    clear();
    update();
    drawCube();
    requestAnimationFrame(gameLoop);
}

// Control del teclado
function keyDown(e) {
    if (e.key === 'ArrowRight' || e.key === 'd') {
        cube.dx = cube.speed;
    } else if (e.key === 'ArrowLeft' || e.key === 'a') {
        cube.dx = -cube.speed;
    } else if (e.key === 'ArrowDown' || e.key === 's') {
        cube.dy = cube.speed;
    } else if (e.key === 'ArrowUp' || e.key === 'w') {
        cube.dy = -cube.speed;
    }
}

function keyUp(e) {
    if (
        e.key === 'ArrowRight' || 
        e.key === 'd' || 
        e.key === 'ArrowLeft' || 
        e.key === 'a'
    ) {
        cube.dx = 0;
    }
    if (
        e.key === 'ArrowDown' || 
        e.key === 's' || 
        e.key === 'ArrowUp' || 
        e.key === 'w'
    ) {
        cube.dy = 0;
    }
}

// Event listeners para el teclado
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

// Iniciar el juego
gameLoop();
