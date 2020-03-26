var fs = require('fs');

var content = fs.readFileSync('first.json','utf8');

var write = fs.writeFile('second','Hey there, Whats up!','utf8',function(error){
 if(error) throw error;
 console.log('File written');
});

console.log(content);
