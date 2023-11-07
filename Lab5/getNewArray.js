let array=["Tonny","Hope", "sam","Kakooza","Micheal","Gideoon"];

const getNewArray=function(arr){

    let result=array.filter(name=>name.length>=5 && name.includes('a'));
            
  return result;
}

console.log(getNewArray());