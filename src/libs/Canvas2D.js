import { chunk, shuffle, getRandomRange, getRandomSymbol } from "@/utils";

export default class Canvas2D {
    constructor({ canvas, width, height }) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = width;
        this.canvas.height = height;
    }

    drawText({ font, ASCIICharRange, colors, cell = { width: 1, height: 1 }, delay }) {
        const renderCount =
            (this.canvas.width / cell.width) * (this.canvas.height / cell.height);
        const renderLimit = renderCount - renderCount * 0.5;
        let counter = 0;
        const positions = [];

        this.ctx.font = font;

        const interval = setInterval(() => {
            const position = {
                x: Math.ceil(getRandomRange(0, this.canvas.width) / cell.width) * cell.width,
                y:
                    Math.ceil(getRandomRange(0, this.canvas.height) / cell.height) *
                    cell.height,
            };

            if (!positions.some((pos) => pos.x === position.x && pos.y === position.y)) {
                this.ctx.fillStyle = colors[getRandomRange(0, colors.length - 1)];
                this.ctx.fillText(getRandomSymbol(...ASCIICharRange), position.x, position.y);
                counter++;
            }
            positions.push(position);

            if (counter >= renderLimit) {
                clearInterval(interval);
            }
        }, delay);
    }

    drawFromImage({
        image,
        font,
        ASCIICharRange,
        colors,
        cell = { width: 1, height: 1 },
        delay,
    }) {
        const imageCanvas = document.createElement("canvas");
        const imageCanvasContext = imageCanvas.getContext("2d");
        this.ctx.font = font;

        let pixels = [];
        let pixelCoords = [];

        imageCanvas.width = this.canvas.width;
        imageCanvas.height = this.canvas.height;

        const img = new Image();
        img.src = image;

        img.addEventListener("load", () => {
            imageCanvasContext.drawImage(img, 0, 0, imageCanvas.width, imageCanvas.height);
            const data = imageCanvasContext.getImageData(
                0,
                0,
                imageCanvas.width,
                imageCanvas.height
            ).data;

            for (let i = 0; i < data.length; i += 4) {
                const pixel = {
                    r: data[i],
                    g: data[i + 1],
                    b: data[i + 2],
                    a: data[i + 3],
                };
                pixels.push(pixel);
            }

            pixels = chunk(pixels, imageCanvas.width);

            for (let i = 0; i < pixels.length; i += cell.width) {
                for (let j = 0; j < pixels[i].length; j += cell.height) {
                    const pixel = {
                        r: pixels[i][j].r,
                        g: pixels[i][j].g,
                        b: pixels[i][j].b,
                        x: j,
                        y: i,
                    };

                    if (pixel.r > 100 && pixel.g > 100 && pixel.b > 100) {
                        pixelCoords.push(pixel);
                    }
                }
            }

            pixelCoords = shuffle(pixelCoords);

            const render = () => {
                let counter = 0;

                const interval = setInterval(() => {
                    this.ctx.fillStyle = colors[getRandomRange(0, colors.length - 1)];
                    this.ctx.fillText(
                        getRandomSymbol(...ASCIICharRange),
                        pixelCoords[counter].x,
                        pixelCoords[counter].y
                    );
                    counter++;

                    if (counter >= pixelCoords.length) {
                        clearInterval(interval);
                    }
                }, delay);
            };

            render();
        });
    }
}
