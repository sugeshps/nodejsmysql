require("dotenv").config();
const express = require("express");
var  fileupload = require("express-fileupload");
const app = express();
const productRouter = require("./api/products/product.router");
const userRouter = require("./api/user/user.router");
const sendMailRouter = require("./api/sendmail/sendmail.router");
const formvalidateRouter = require("./api/formvalidate/formvalidate.router");
//const imageUpload = require("./api/imageupload/imageupload.router");

app.use(express.json());
app.use("/api/products",productRouter);
app.use("/api/validate",formvalidateRouter);
app.use("/api/users",userRouter);
app.use("/api/sendmail",sendMailRouter);
//app.use("/api/imageupload",imageUpload);
app.use(express.static("webapproot"));
app.use(fileupload());
app.use("/api/upload",function(req,res,next){
    console.log(req.files);
   
    const file = req.files.file_upload;
   file.mv("./webapproot/uploads/"+file.name,function(err,result){
    if(err)
    throw err;
    res.send({
        success : true,
        message : "File uploaded"
    })

   });
     
});
 
app.listen(process.env.APPPORT,()=>{
    console.log("test port is : ",process.env.APPPORT );
});


