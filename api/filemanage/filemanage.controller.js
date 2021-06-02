const Excel = require('exceljs');
const XLSX = require('xlsx');

module.exports = {

    checkFilemanage: (req, res) => {
        //const body = req.body;

        const postdata = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            url: req.body.url,
        }
 
        const v = new Validator();
        const valResp = v.validate(postdata, schemaval);

   

            // Create workbook & add worksheet
            const workbook = new Excel.Workbook();
            const worksheet = workbook.addWorksheet('Sheet1');

            // add column headers
            worksheet.columns = [
                { header: 'Name', key: 'col_name' },
                { header: 'Email', key: 'col_email' },
                { header: 'Phone', key: 'col_phone' },
                { header: 'Url', key: 'col_url' }
            ];

            // Add row using key mapping to columns

            /* worksheet.addRow(
                { col_name: "ABC", col_email: "Author 1", col_phone: "Author 1", col_url: "Author 1" },
             );
            */


            // Add rows as Array values
            /* worksheet
                .addRow(["BCD", "Author Name 3"]);
            */


            // Add rows using both the above of rows
            const rows = [
                [postdata.name, postdata.email, postdata.phone, postdata.url],

            ];


            worksheet
                .addRows(rows);

            // save workbook to disk
            workbook
                .xlsx
                .writeFile('./webapproot/uploads/sample.xlsx')
                .then(() => {
                    console.log("saved");
                })
                .catch((err) => {
                    console.log("err", err);
                });



            var fs = require('fs');
            var pdf = require('html-pdf');



            //  var html = fs.readFileSync('./webapproot/uploads/testdata.html', 'utf8');

            var html = '<!DOCTYPE html><html><head><style>body { height: 842px; width: 595px;margin-left: auto; margin-right: auto;  } </style>  </head>  <body><h2>Input Data</h2> <img src="http://localhost:4000/test/photo.jpg" width="500"  > <br/><br/><table width="640" cellpadding="0" border="1" cellspacing="0" >  <tr>    <th>Name</th>    <th>Email</th>    <th>Phone</th>    <th>Url</th>  </tr>  <tr>    <td>' + postdata.name + ' </td>    <td> ' + postdata.email + '</td> <td> ' + postdata.phone + '</td>    <td>' + postdata.url + ' </td>   </tr></table>  </body></html>';

            var options = { format: 'Letter' };

            pdf.create(html, options).toFile('./webapproot/uploads/businesscard2.pdf', function (err, res) {
                if (err) return console.log(err);
                console.log(res); // { filename: '/app/businesscard.pdf' }
            });


            // Read file
            /*
            var workbookRd = XLSX.readFile('./webapproot/uploads/sample001.xlsx');
            var sheet_name_list = workbookRd.SheetNames;
            
            //console.log(sheet_name_list); 
            sheet_name_list.forEach(function(y) {

          
                var worksheet = workbookRd.Sheets[y];
                var headers = {};
                var data = [];
                //console.log(worksheet);
                for(z in worksheet) {
 
                    if(z[0] === '!') continue;
                    //parse out the column, row, and value
                    var tt = 0;
                    for (var i = 0; i < z.length; i++) {
                        if (!isNaN(z[i])) {
                            tt = i;
                            break;
                        }
                    };
                    var col = z.substring(0,tt);
                    var row = parseInt(z.substring(tt));
                    var value = worksheet[z].v;
            
                    //store header names
                    if(row == 1 && value) {
                        headers[col] = value;
                        continue;
                    }
            
                    if(!data[row]) data[row]={};
                    data[row][headers[col]] = value;
                }
                //drop those first two rows which are empty
                data.shift();
                data.shift();
                console.log(data);
            });
            */


            var sharp = require('sharp');
        // Configuring thumbnail image
            sharp(  './webapproot/uploads/test/photo.jpg').resize(200,200)
            .jpeg({quality : 50}).toFile( 
            './uploads/test/avatar_thumb.jpg');

            // Configuring Preview Image
            sharp(   './webapproot/uploads/test/photo.jpg').resize(640,480)
            .jpeg({quality : 80}).toFile( './webapproot/uploads/test/avatar_preview.jpg');

            return res.status(200).json({
                message: "Success",
                data: postdata
            })
 

    }


}