const pool = require("../../config/database");
module.exports = {
    create : (data, callBack)=>{
    let dateTime = require('node-datetime');
    let dt = dateTime.create();
    data.product_created = dt.format('Y-m-d H:M:S');
 
        pool.query(`insert into products(product_name ,product_code,product_description,product_rate,product_status,product_created) values(?,?,?,?,?,?)`,[
            data.product_name,
            data.product_code,
            data.product_description,
            data.product_rate,
            data.product_status,
            data.product_created

        ],
        (error,results,fields)=>{
            if(error){
                 return  callBack(error);
            }
 
            return callBack(null,results);
            }
        );
    },
    getProducts :  callBack=>{
        pool.query(`select * from products `,[],
        (error,results,fields)=>{
            if(error){
                 return  callBack(error);
            }
            return callBack(null,results);
            }
        );
    }

}