class Math {
  static PI = 3.14;

  static getCircleArea(radius){
    return Math.PI * radius * radius;
  }
}

console.log(Math.PI); // 3.14
console.log(Math.getCircleArea(10)); // 314

Math.PI = 3.141592;
Math.getRectArea = function(width, height){
  return width * height;
}

console.log(Math.PI); // 3.141592
console.log(Math.getRectArea(10, 10));  // 100

console.log(Date.now());
// 1622943652080
// (1970년 1월 1일 부터 지금 이 시점까지 경과된 밀리초)