/* Represents single node on the 3d grid */
export class GridPoint {

    private x: number
    private y: number
    private z: number
    private blocked: boolean

    constructor(x: number, y: number, z: number, blocked: boolean) {
        this.x = x
        this.y = y
        this.z = z
        this.blocked = blocked
    }

    static MINUS_ONE(blocked: boolean): GridPoint {
        return new GridPoint(-1, -1, -1, blocked)
    }

    getX(): number {
        return this.x
    }

    getY(): number {
        return this.y
    }

    getZ(): number {
        return this.z
    }

    isBlocked(): boolean {
        return this.blocked
    }
}
