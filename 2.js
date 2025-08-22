function findAverage(array) {
  let avg=0;
  for(let i=0;i<array.length;i++){
    avg+=array[i];
  }
  if(array.length==0){
    return 0;
  }
  avg=avg/array.length;
  return avg;
}