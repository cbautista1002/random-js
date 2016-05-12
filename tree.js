
function Node(v){

  this.value = v;
  this.left = null;
  this.right = null;

  this.setLeft = function(left){
    this.left = left
  };

  this.setRight = function(right){
    this.right = right
  };

}

//        1
//    2       3
//  4   5   6   7
//      8

var root   = new Node(1);
var left1  = new Node(2);
var right1 = new Node(3);

var ll2 = new Node(4);
var lr2 = new Node(5);
var rl2 = new Node(6);
var rr2 = new Node(7);

var lll3 = new Node(8);

root.setLeft(left1);
root.setRight(right1);

left1.setLeft(ll2);
left1.setRight(lr2);
right1.setLeft(rl2);
right1.setRight(rr2);

lr2.setLeft(lll3);

console.log(root);
console.log(left1);
console.log(right1);

console.log(ll2);
console.log(lr2);
console.log(rl2);
console.log(rr2);

console.log(lll3);