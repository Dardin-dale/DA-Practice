

//Given a directed graph figure out if there is a path between two nodes
//Use any graph traversal algorithm

//DFS
function isPathBetween(graph, node1, node2){
    if(node1 === node2) return true;

}

//BFS
function isPathBetween2(graph, node1, node2){
    if(node1 === node2) return true;
    let queue = [];
    let visited = {};
    let node = node1;
    queue.push(node);
    visited[node];

    while(queue.length){
        node = queue.shift();
        if(node === node2){
            return true;
        }
        visited[node] = true;
        for(adjacent in graph[node]){
            if(!visited.hasOwnProperty(adjacent)){
                queue.push(adjacent)
            }
        }
    }
    return false;
}


class InOutGraph {
    constructor(nodes) {
        this.edges = {};
        for(var i = 0; i < nodes.length; i++) {
            this.edges[nodes[i]] = {
                in: [],
                out: []
            }
        }
    }

    addConnection(dep, node) {
        this.edges[node].in.push(dep);
        this.edges[dep].out.push(node);
    }

    removeConnections(node) {
        delete this.edges[node];
        for(remainingNode in this.edges) {
            remainingNode.in = remainingNode.in.filter(x => x !== node);
        }
    }
}

//Build order: given a list of projects and then a map of their dependencies create a valid build order if possible
// eg: a,b,c,d,e,f  with dependencies (a,d), (f,b), (b,d), (f,a), (d,c) second depends on first
//outputs: f,e,a,b,d,c
//#26, #47, #60, #85, # 125, # 733
//Soln - topological sort
function buildOrder(packs, deps) {
    let result = [];
    //build graphs with both incoming and out going connections
    let adjList = new InOutGraph(packs);
    for (var i  = 0; i < deps.length; i++) {
        adjList.addConnection(...deps[i]);
    }

    //find elements with no deps and add them to list
    function addNoDeps(list, graph) {
        for(const node in graph.edges) {
            if (node.in.length === 0) {
                list.push(node);
                graph.removeConnections(node);
            }
        }
    }

    let currIdx = 0;
    while(currIdx < packs.length) {
        let curr = packs[currIdx];
        // add those with no deps
        addNoDeps(result, adjList);

        //check for circular deps
        if (!curr) {
            return null;
        }

        currIdx++;
    }

    return result;
    
}

//Soln - DFS
function buildOrder2(packs, deps) {


}




