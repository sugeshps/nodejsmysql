const { uploadimg } = require("./user.service");
module.exports = {

    createUser: (req,res) => {
        const body = req.body;
        uploadimg(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:err.sqlMessage
                })
            }
            
            if(!results){
                return res.json({
                    success:0,
                    message: "failed to insert"
                })
            }else{
                return res.status(200).json({
                    success:1,
                    data:results
                });
            }
 

        });
    }
}