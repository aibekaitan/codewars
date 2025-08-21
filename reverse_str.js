function solution(str){
  let s="";
  
  for(let i=0;i<str.length;i++){
    s+=str[str.length-1-i];
  }
  return s;
}