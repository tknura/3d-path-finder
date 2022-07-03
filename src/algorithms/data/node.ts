import { GridPoint } from "./gridPoint"

/* Represents single node on 3D grid */
export class Node {

    private location: GridPoint
    private fScore: number
    private gScore: number
    private hScore: number

    constructor(location: GridPoint, fScore?: number, gScore?: number, hScore?: number, ) {
        this.location = location
        this.fScore = fScore ?? Number.MAX_VALUE
        this.gScore = gScore ?? Number.MAX_VALUE
        this.hScore = hScore ?? Number.MAX_VALUE
    }

    distanceTo(anotherNode: Node): number {
        if (anotherNode == this) return 0
        return Math.sqrt(
                Math.pow(anotherNode.getX() - this.getX(), 2) + 
                Math.pow(anotherNode.getY() - this.getY(), 2) + 
                Math.pow(anotherNode.getZ() - this.getZ(), 2)
            )
    }

    isBlocked(): boolean {
        return this.location.isBlocked()
    }

    getX(): number {
        return this.location.getX()
    }

    getY(): number {
        return this.location.getY()
    }

    getZ(): number {
        return this.location.getZ()
    }

}