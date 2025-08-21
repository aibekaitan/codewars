function removeChar(str){
 //You got this!
  let s="";
  for(let i = 0;i<str.length;i++){
    if(i==0 || i==str.length-1){
      continue;
    }
    s+=str[i];
  }
  return s
};