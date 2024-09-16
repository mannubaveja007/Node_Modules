// NODE JS express

// challenge Timeeeeeee

// 1.Crete a folder  named it Baveja
// 2. Create a file in it named bio.txt      and data into it
// 3. Add more data into the file at the end of th existing  data.
// 4. Read the data without getting the buffer  data at first 
// 5. Rename the file name to mybio.txt
// 6. now delete both the files and the folder



const fs = require("fs");

fs.mkdirSync("Thapa")

fs.writeFileSync("Thapa/bio.txt","name=Manu Baveja\nAge=19\nCity=Chandigarh");

fs.appendFileSync("Thapa/bio.txt","\nState=Punjab");


fs.readFile("Thapa/bio.txt","utf8",function( data){
    // if (err) throw err;
    console.log(data);
});

fs.renameSync("Thapa/bio.txt","Thapa/mybio.txt");

// fs.rmdir("/home/mannsec/NodeJS_Revising/Baveja")

fs.rmdirSync("Thapa",{recursive :true});