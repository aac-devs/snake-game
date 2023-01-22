import './style.css';
import { moveTo, randomMoveTo } from './blueprint';

console.clear();
console.log('hola aac');

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>SNAKE GAME</h1>
<canvas id="whiteboard" width="500" height="500" style="border:1px solid #000000;"></canvas>
`;

export type Coordinates = { x: number; y: number };

let coord: Coordinates = { x: 24, y: 24 };

let randomCoords = randomMoveTo();

moveTo(coord, randomCoords);

globalThis.document.addEventListener('keydown', (key) => {
    let x = coord.x;
    let y = coord.y;
    switch (key.code) {
        case 'ArrowUp':
            y--;
            if (y === -1) y = 49;
            break;
        case 'ArrowDown':
            y++;
            if (y === 50) y = 0;
            break;
        case 'ArrowLeft':
            x--;
            if (x === -1) x = 49;
            break;
        case 'ArrowRight':
            x++;
            if (x === 50) x = 0;
            break;
    }
    console.clear();
    console.log({ x, y });
    coord.x = x;
    coord.y = y;
    if (randomCoords.x === coord.x && randomCoords.y === coord.y) randomCoords = randomMoveTo();

    moveTo(coord, randomCoords);
});
