import getDigit from "./getDigit";
import getMonochromePicture from "./getMonochromePicture";
import NumMask from "./types/NumMask";

export default async function resolve(numMasks: Array<NumMask>, img: HTMLImageElement): Promise<string | undefined> {
    const monochromePicture = await getMonochromePicture(img);

    if (!monochromePicture) return;

    let parsedDigits = "";
    for (let x = 0; x < monochromePicture.width; x++) {
        for (let y = 0; y < monochromePicture.height; y++) {
            const parsedDigit = getDigit(monochromePicture, x, y, numMasks);
            if (typeof parsedDigit != "undefined") {
                parsedDigits += parsedDigit.digit;
                x += parsedDigit.width;
            }
        }
    }

    return parsedDigits;
}