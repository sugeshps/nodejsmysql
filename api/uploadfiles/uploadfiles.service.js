const pool = require("../../config/database");
var nodemailer = require("nodemailer")

module.exports = {
    sendemail : (data, callBack)=>{
    console.log(data);
    email_id = data['email_id'];
    user_name = data['user_name'];
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            user: 'sugeshpulinelly@gmail.com',
            pass: 'SugeshPulinelly123456'
            }
        });
        var mailOptions = {
            from: 'sugeshpulinelly@gmail.com',
            to: 'sugeshps@gmail.com',
            subject: 'Test Mail Node JS',
            text: `Hi , thank you for your nice Node.js tutorials.
            I will donate 50$ for this course. Please send me payment options.`,
            html: '<h1>Hi </h1><p>Your Messsage</p>' 
            
        };
        
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
            console.log(error);
            } else {
            console.log('Email sent: ' + info.response);
            }
        });

     
    },
    

}