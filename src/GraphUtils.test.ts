const Graph = require('graphology');
import { DirectedGraph } from "graphology";
import { NodeKey } from "graphology-types";

import GraphUtils from "./GraphUtils";

const graph = new DirectedGraph();
graph.addNode('AM 1');
graph.addNode('Assessoria 1');
graph.addNode('Assessoria 2');
graph.addNode('Imobiliaria 1');
graph.addNode('Imobiliaria 2');
graph.addNode('Corretor 3');
graph.addNode('Corretor 1');
graph.addNode('Corretor 2');

graph.addEdge('AM 1', 'Assessoria 1');
graph.addEdge('AM 1', 'Assessoria 2');
graph.addEdge('Assessoria 1', 'Imobiliaria 1');
graph.addEdge('Assessoria 1', 'Imobiliaria 2');
graph.addEdge('Imobiliaria 1', 'Corretor 1');
graph.addEdge('Imobiliaria 1', 'Corretor 2');
graph.addEdge('Assessoria 2', 'Corretor 3');

test("getFirstLevel", function () {
    expect(GraphUtils.getFirstLevel(graph, 'AM 1')).toEqual([
        "Assessoria 1",
        "Assessoria 2",
    ]);
});

test("hasPath true", function () {
    expect(GraphUtils.hasPath(graph, 'AM 1', 'Corretor 1')).toEqual(true);
});

test("hasPath false", function () {
    expect(GraphUtils.hasPath(graph, 'Assessoria 2', 'Assessoria 1')).toEqual(false);
});
