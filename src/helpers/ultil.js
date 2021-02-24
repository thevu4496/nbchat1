export function filter(object,field,value) {
  let flag = true;
  let cond = object.length;
  for(let o = 0; o < cond; o++){
  	if(value.indexOf(object[o][field]) === -1){
  		return false;
  	}
  }
  return flag;
}