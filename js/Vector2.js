function Vector2(x = 0,y = 0){
    this.x = x;
    this.y = y;
}

Vector2.prototype.copy = function(){
    return new Vector2(this.x, this.y)
}
Vector2.prototype.addTo = function(vector){
    this.x += vector.x;
    this.y += vector.y;
}

Vector2.prototype.mult = function(scalar){
     return new Vector2(this.x * scalar, this.y * scalar);
} 

Vector2.prototype.length = function(){
    return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
}