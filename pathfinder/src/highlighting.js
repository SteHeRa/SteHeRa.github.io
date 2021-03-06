//Highlight node that mouse is over
function highlight() {
    nodeID = getid(this);
    for(i=0; i<y; i++){
        for(j=0; j<x; j++){
            if (grid[i][j].id === nodeID){
                if(grid[i][j].start == false && grid[i][j].end == false && grid[i][j].wall == false) {           //node won't highlight if it has been set as start/end/wall node
                    document.getElementById(nodeID).style = 'background-color: #ffdf00';
                }
            }
        }
    }
}

//Return to original colour when mouse leaves
function unHighlight() {
    nodeID = getid(this);
    for(i=0; i<y; i++){
        for(j=0; j<x; j++){
            if (grid[i][j].id === nodeID){
                if(grid[i][j].start == false && grid[i][j].end == false && grid[i][j].wall == false) {           //node won't un-highlight if it has been set as start/end/wall node
                    document.getElementById(nodeID).style = 'background-color: f0f0f0';
                }
                if(grid[i][j].animated == true) {
                    document.getElementById(nodeID).style = 'background-color: #28A4E5';  //visited nodes that have been animated turn back to green
                }
                if(grid[i][j].shortestPath == true){
                    document.getElementById(nodeID).style = 'background-color: #ffdf00';    //nodes in the shortest path that have been animated turn back to yellow
                }
            }
        }
    }
}