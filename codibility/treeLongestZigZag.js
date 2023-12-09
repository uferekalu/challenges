// In this problem we consider binary trees. Let's define a turn on a 
// path as a change in the direction of the path (i.e. a switch from right to left or vice versa). 
// A zigzag is simply a sequence of turns (it can start with either right or left). The length of a 
// zigzag is equal to 
// the number of turns.

function solution(T) {
    return Math.max(zigzagLength(T.left, "left"), zigzagLength(T.right, "right"));
}

function zigzagLength(node, direction) {
    if (node === null) {
        return 0;
    }

    if (direction === "left") {
        return 1 + zigzagLength(node.right, "right");
    } else {
        return 1 + zigzagLength(node.left, "left");
    }
}