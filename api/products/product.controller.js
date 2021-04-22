const { create, getProducts } = require("./product.service");
const { genSaltSync, hashSync  } = require("bcrypt");
module.exports = {

    createProduct: (req,res) => {
        const body = req.body;
      //  const salt = genSaltSync(10);
       // body.password = hashSync(body.password,salt);
        create(body,(err,results)=>{
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
    ,
    getProducts: (req,res) => {
 
        getProducts((err,results)=>{
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
                    message: "failed data ferch"
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