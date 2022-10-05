import NumMask from "./types/NumMask";
import MonochromePicture from "./types/monochromePicture";

export default function getDigit(picture: MonochromePicture, x: number, y: number, numMasks: Array<NumMask>): NumMask | undefined {
    for (let numMask of numMasks) {
        if (y + numMask.height <= picture.height && x + numMask.width <= picture.width
            && numMask.points.every(filledPoint => picture.filled[y + filledPoint.y][x + filledPoint.x])
        ) {
            return numMask;
        }
    }
}