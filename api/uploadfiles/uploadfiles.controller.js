const express = require("express");
var  fileupload = require("express-fileupload");
const app = express();
app.use(fileupload());
module.exports = {
    uploadFiles: (req, res) => {
        //    const body = req.body;
    const file = req.files.file_upload;
        file.mv("./uploads/" + file.name, function (error, result) {
           
            if (error) {
                return res.json({
                    success: 0,
                    message: error
                })
            } else {
                return res.json({
                    success: true,
                    message: "Successfully uploaded"
                })
            }

        });
        
    }


}