const { sendemail } = require("./sendmail.service");
var nodemailer = require("nodemailer");
module.exports = {

    sendMail: (req, res) => {
        const body = req.body;
        console.log(body);
        email_id = body['email_id'];
        user_name = body['user_name'];
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
            to: email_id,
            subject: 'Test Mail Node JS',
            // text: ``,
            html: '<h1>Hi ' + user_name + '</h1><h2>How to Change Font Type in HTML [Inline CSS]</h2><p style="font-family: Arial">This is dummy text. This is more dummy text. This is more dummy text. This is more dummy text. This is more dummy text. This is more dummy text. This is more dummy text. This is more dummy text. This is more dummy text. This is more dummy text. This is more dummy text. This is more dummy text.   </p> <h3>The Explanation</h3> <p>Since I’m using the CodePen Editor, the default typeface is Times New Roman. That means changing the typeface of a paragraph will require me to use a style attribute that contains the CSS font-family property set to "Arial." The other elements on the page are not targeted by inline CSS and therefore remain Times New Roman. </p>'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return res.json({
                    success: 0,
                    message: error
                })
            } else {
                return res.json({
                    success: true,
                    message: "Mail sent. " + info.response
                })
            }
        });
    }


}