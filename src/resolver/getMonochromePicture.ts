import MonochromePicture from "./types/monochromePicture";

type Color = {
    red: number,
    green: number,
    blue: number,
    alpha: number
}

const isFilledColor = (color: Color): boolean => color.red == 214 && color.green == 191 && color.blue == 168;

async function loadImg (img: HTMLImageElement) {
    return new Promise<void>(resolve => {
        if (img.width != 0) resolve();
        else img.onload = () => resolve()
    });
}

export default async function getMonochromePicture(): Promise<MonochromePicture | undefined> {
    const img = document.querySelector("img");
    const ctx = document.createElement("canvas").getContext("2d");

    if (!ctx || !img) return;

    await loadImg(img);

    ctx.drawImage(img, 0, 0);
    const imgData = ctx.getImageData(0, 0, img.width, img.height).data;

    const picture = new Array<Array<boolean>>(img.height);
    for (let pixelIndex = 0; pixelIndex < img.width * img.height; pixelIndex++) {
        const x = pixelIndex % img.width, y = img.height - Math.floor(pixelIndex / img.width) - 1;
        const color: Color = {
            red: imgData[pixelIndex * 4],
            green: imgData[pixelIndex * 4 + 1],
            blue: imgData[pixelIndex * 4 + 2],
            alpha: imgData[pixelIndex * 4 + 3]
        };

        if (!picture[y]) picture[y] = new Array<boolean>(img.width);

        picture[y][x] = isFilledColor(color);
    }

    return {
        height: img.height, width: img.width,
        filled: picture
    };
}