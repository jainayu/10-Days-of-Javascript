/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
function Polygon(lengths){
    this.lengths = lengths;
    this.perimeter = getPerimeter;
}

function getPerimeter(){
    var p=0;
    this.lengths.forEach((value)=>{
        p+=value;
    });
    return p;
}


