var sys=require("sys");
var fs=require("fs");

function most_common_words(source, n) {

    // Initialize variables
    var text = "";
    var textArray = [];
    var dataAll = [];
    var check = 0

    // Load file from source
    fs.readFile(source, function (err, data) {
        if (err) {
            return console.error(err);
        }
    });

    // Synchronous read
    var data = fs.readFileSync(source);

    // Convert data to text
    text = data.toString().toLowerCase();

    // Replace all symbols and characters to space
    text = text.replace(/\'/g, " ").replace(/\=/g, " ").replace(/\[/g, " ").replace(/\]/g, " ").replace(/\./g, " ").replace(/{]/g, " ").replace(/}]/g, " ").replace(/\*/g, " ").replace(/\|/g, " ").replace(/\//g, " ").replace(/\\/g, " ").replace(/\"/g, " ").replace(/\</g, " ").replace(/\>/g, " ").replace(/\:/g, " ").replace(/\-/g, " ").replace(/\,/g, " ").replace(/\{/g, " ").replace(/\}/g, " ").replace(/\_/g, " ").replace(/\–/g, " ").replace(/\(/g, " ").replace(/\)/g, " ").replace(/\s+/g, " ");

    // Convert data to text array
    textArray = text.split(" ");

    // Go through each word, and count
    for(var i = 0; i < textArray.length; i++) {

        // Filter 'a', 'the', 'and'
        if(textArray[i] != "a" && textArray[i] != "the" && textArray[i] != "and" && textArray[i] != "") {

            // If word exists before, increase count
            for(var j = 0; j < dataAll.length; j++) {
                if (dataAll[j][0].indexOf(textArray[i]) > -1) {
                    dataAll[j][1] += 1;
                    check = 1;
                    break;
                }
            }

            // Otherwise, just push new text
            if(check != 1) {
                dataAll.push([textArray[i], 1]);
            }
            check = 0;
        }
    }

    // Sort from largest to smallest total word count
    dataAll.sort(function compareSecondColumn(a, b) {
        if (a[1] === b[1]) {
            return 0;
        }
        else {
            return (a[1] > b[1]) ? -1 : 1;
        }
    });

    // Show only top n data
    if(dataAll.length < n) {
        n = dataAll.length;
    }
    for(var k = 0; k < n; k++) {
        console.log("'" + dataAll[k][0] + "': " + dataAll[k][1] + " occurrences");
    }
}

most_common_words("source.txt", 10)
