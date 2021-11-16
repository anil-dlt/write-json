const fs=require("fs");

function jsonReader(filepath,callback){ //function to read jsonData in local
    fs.readFile(filepath,'utf-8',(err,fileData)=>{
        if(err){
            return callback && callback(err);
        }
        try{ //asynchronous JS
            const object=JSON.parse(fileData);
            return callback && callback(null,object);
        }
        catch (err){
            return callback && callback(err);
        }
    })
};


jsonReader("./rawData.json",(err,data)=>{
    if (err){
        console.log(err)
    }
    else{
        
   // console.log(data); //driver obj from data arr
        // to read from that Array
        // for (const key in data) {

        //     if (data.hasOwnProperty(key)) {
        
        //         console.log(`${key}: ${data[key]}`);
        //     }
        // }

        const keys = Object.keys(data); //object.keys() method
        console.log(keys);
        keys.forEach((driver, index) => {
            console.log(`${driver}: ${data[driver]}`);
        });
    }
    Object.values(data).forEach(val => console.log(val.driver)); //Object.values( method in ES8)

    const entries = Object.entries(data); //object.entries() ES8
    console.log(entries);
    for (const [key, value] of Object.entries(data)) {
        console.log(`${key}: ${value}`);
    }
    
});

