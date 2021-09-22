import Graph from "graphology";
import { NodeKey } from "graphology-types";
import shortestPath from 'graphology-shortest-path/unweighted';


export default class GraphUtils {
    static getFirstLevel(graph: Graph, node: NodeKey): any[] {
        const neighbors = [];
        graph.forEachNeighbor(node, neighbor => neighbors.push(neighbor));
        return neighbors;
    }

    static hasPath(graph: Graph, source: NodeKey, target: NodeKey): boolean {
        const path = shortestPath(graph, source, target);
        return !!path;
    }

}
