function aStar () {
    let unvisitedNodes = [];        //Array to hold all unvisited nodes
    let visitedNodes = [];          //Array to dump visited nodes into
    for(i = 0; i < grid[i].length; i++){
        unvisitedNodes = unvisitedNodes.concat(grid[i]);        //populating unvisited nodes array to make life easier for sorting and retrieving closest unvisited node 
    }
}