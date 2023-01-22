import { Coordinates } from './main';

export function drawGrid() {
    const canvas = document.getElementById('whiteboard') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.width;
    if (ctx) {
        ctx.strokeStyle = '#ccc';
        for (let i = 10; i < 500; i += 10) {
            ctx.moveTo(0, i);
            ctx.lineTo(500, i);
            ctx.stroke();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, 500);
            ctx.stroke();
        }
    }
}

export function moveTo(coord: Coordinates, randomCoords: Coordinates) {
    const { x, y } = coord;
    drawGrid();
    const canvas = document.getElementById('whiteboard') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
        ctx.strokeStyle = '#f00';
        ctx.beginPath();
        ctx.arc(x * 10 + 5, y * 10 + 5, 5, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.strokeStyle = '#00f';
        ctx.beginPath();
        ctx.arc(randomCoords.x * 10 + 5, randomCoords.y * 10 + 5, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
}

export function randomMoveTo() {
    const x = Math.floor(Math.random() * 50);
    const y = Math.floor(Math.random() * 50);
    // drawGrid();
    // const canvas = document.getElementById('whiteboard') as HTMLCanvasElement;
    // const ctx = canvas.getContext('2d');
    // if (ctx) {
    //     ctx.strokeStyle = '#00f';
    //     ctx.beginPath();
    //     ctx.arc(x * 10 + 5, y * 10 + 5, 5, 0, 2 * Math.PI);
    //     ctx.fill();
    //     ctx.stroke();
    // }
    return { x, y };
}
