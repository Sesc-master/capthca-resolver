type Point = {
    x: number, y: number;
}

export default class NumMask {
    public height: number;
    public width: number;
    public points: Array<Point>;
    public digit: number;

    constructor(rawNumMask: Array<string>, digit: number) {
        this.height = rawNumMask.length;
        this.width = rawNumMask[0].length;
        this.digit = digit;

        this.points = new Array<Point>();
        rawNumMask.forEach((rawNumMaskLine, y) => {
            Array.from(rawNumMaskLine).map((filledState, x) => {
                if (filledState == '1') this.points.push({x, y: this.height - y - 1});
            });
        });
    }
}