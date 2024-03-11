
function calculateDistance(point1, point2) {
  const deltaX = point2.x - point1.x;
  const deltaY = point2.y - point1.y;
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  return distance;
}

export default function polygonArea(coordsarray) {
  let area = 0;
/*  let j = coords.length - 1;

  for (let i = 0; i < coords.length; i++) {
      area += (coords[j].x + coords[i].x) * (coords[j].y - coords[i].y);
      j = i;
  }

  return Math.abs(area / 2);


let highestY=0;
let secondHighestY=0;
for (let i=1;i<yArr.length;i++){
  if(yArr[i]>yArr[highestY]){
    highestY=i;
  }
}
for (let i=0;i<yArr.length;i++){
  if(yArr[i]>yArr[secondHighestY]&&yArr[i]<yArr[highestY]){
    secondHighestY=i;
  }
}
*/
coordsarray.sort((a,b)=>b.y>a.y);
console.log(coordsarray);
const edge1=calculateDistance(coordsarray[1],coordsarray[0]);
const edge2=calculateDistance(coordsarray[2],coordsarray[1]);
area= edge1*edge2;
console.log(edge1, edge2, area);
  return area/400;
}
