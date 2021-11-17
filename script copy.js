const fs = require('fs');
let fileContent = fs.readFileSync('./rawData.json',
            {encoding:'utf8', flag:'r'});

let output = JSON.parse(fileContent).data.map(item => 
    Object.assign({}, {
        "driverName":item.driver.name,
        "vehicle": item.logMetaData.vehicles.map(vehicle => Object.assign({}, { "id" : vehicle.id , "name" : vehicle.name })),
        "disctanceTravelled":item.distanceTraveled.driveDistanceMeters
}));            

output = {"data":output};
console.log(output);


// const fs= require("fs");

// const jsonReader = (filepath,callback) => { //function to read jsonData in local
//     try{ //asynchronous JS
//     fs.readFileSync(filepath,'utf-8',(error,fileData)=>{
//         if(error) throw error;
//              return JSON.parse(fileData); 
//         });
//     }
//     catch (error){
//         return callback && callback(error);
//     }
// };

// jsonReader("./rawData.json",(error,data)=>{
//     if (error){
//         console.log(error);
//     }
//     else{
//    //const keys = Object.keys(data.data[0].driver);//Another method
//    const entries = Object.entries(data); //object.entries() ES8
//    //console.log(entries);
//    for (let [key,i] of Object.entries(data)) {
//       console.log(`${key}: ${data.data[0].driver.name}`);
//    }

//    //const usersCollection = [].concat(...entries)
//    //console.log(usersCollection)
//     }
// });
