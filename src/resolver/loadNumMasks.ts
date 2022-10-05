import NumMask from "./types/NumMask";

export default function loadNumMasks(rawNumMasksSets: Array<Array<Array<string>>>): Array<NumMask> {
    return rawNumMasksSets.map(rawNumMasksSet =>
        rawNumMasksSet.map((rawNumMask, rawNumMaskIndex) => new NumMask(rawNumMask, rawNumMaskIndex))
    ).flat();
}