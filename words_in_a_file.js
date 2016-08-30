//var sys=require('sys');

// actual  conversion code starts here

function main() {

  sort_from_file('source.txt')
}

function sort_from_file(filename) {
  let fs = require('fs')

  fs.readFile(filename, (err, data) => {

    if (err)
      return console.log(err)

    let items = data.toString();

    console.log(filename)
    console.log("--------")
    //console.log(items[0]);
    var temp = items.split(" ");
    console.log(temp.length);
    for(var i = 0; i<temp.length ; i++)
    {
      temp[i].replace(/[\n\r]/g,' ');
    }
    console.log(items);
    console.log(temp);

  })
}
main();
