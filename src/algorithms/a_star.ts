import { GridPoint } from "./data/gridPoint"
import { Node } from "./data/node"

export function aStar(source: GridPoint, destination: GridPoint, grid: GridPoint[][][]) {
    let nodeGrid = initializeGrid(grid)
    let sourceNode = new Node(source, 0, 0, 0)
    let destinationNode = new Node(destination)
    
    // Nodes that have not been visited yet, but they are neighbours of visited nodes
    let openSet: Node[] = []
    openSet.push(sourceNode)

    // Indicates whether node at given position hasbeen visited and added to the path
    let closedSet: boolean[][][] = []

    var destinationFound: boolean = false
    while(openSet.length != 0) {
        let currentNode = openSet[0] 
        openSet.slice(1, openSet.length)

        // Reconstruct path if the destination node has been found
        if(currentNode == destinationNode) return reconstructPath()

        let currentX = currentNode.getX()
        let currentY = currentNode.getY()
        let currentZ = currentNode.getZ()
        // Mark currentNode as visited
        closedSet[currentX][currentY][currentZ] = true

        // Now based on the walls on the grid, we should populate openSet
        // Meaning, we have to add the viable neighbours to the openSet
        populateOpenSet(currentNode, nodeGrid, openSet)
    }

}
function initializeGrid(grid: GridPoint[][][]) {
    throw new Error("Function not implemented.")
}

function reconstructPath() {
    throw new Error("Function not implemented.")
}

function populateOpenSet(currentNode: Node, nodeGrid: any, openSet: Node[]) {
    throw new Error("Function not implemented.")
}

