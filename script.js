const fs= require("fs");


function jsonReader(filepath,callback){ //function to read jsonData in local
    fs.readFile(filepath,'utf-8',(err,fileData)=>{
        if(err){
            return callback && callback(err);
        }
        try{ //asynchronous JS
            const object=JSON.parse(fileData); 
            //coverts json to js object
            return callback && callback(null,object); 
        }
        catch (err){
            return callback && callback(err);
        }
    })
};

let sample=[];
jsonReader("./rawData.json",(err,data)=>{
    if (err){
        console.log(err);
    }
    else{
   //const keys = Object.keys(data.data[0].driver);//Another method

  const entries = Object.entries(data); //object.entries() ES8
  //console.log(entries);
  for (const [key, value] of Object.entries(data.data[0].driver.name)) {
      console.log(`${key}: ${value}`);
  }
  //const usersCollection = [].concat(...entries)
   //console.log(usersCollection)
    }
});
