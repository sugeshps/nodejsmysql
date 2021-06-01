
const express = require("express");
var  fileupload = require("express-fileupload");
const app = express();
app.use(express.json());
module.exports = {
    uploadimg : (req, callBack)=>{
    console.log(req);
   
   /* const file = req.files.file_upload;
    file.mv("./uploads/"+file.name,function(err,result){
        if(err)
        throw err;
        res.send({
            success : true,
            message : "File uploaded"
        })
    });

*/

    },
    
}