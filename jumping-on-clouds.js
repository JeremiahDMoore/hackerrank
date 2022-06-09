// There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

// For each game, you will get an array of clouds numbered  if they are safe or  if they must be avoided.


// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

function jumpingOnClouds(c) {
    var i = 0;
    var jump = 0;
    
    while (i < c.length) {
        if (c[i+2] === 0) {
            jump++;
            i += 2;
        }
        else if (c[i+1] === 0) {
            jump++;
            i++;
        }
        else {
            i++;
        }
        
    }
    return jump
}
