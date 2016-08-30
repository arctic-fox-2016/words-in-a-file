var sys=require("sys");
var fs=require("fs");

// actual  conversion code starts here

function most_common_words(source, n) {

    // Initialize variables
    var text = "";
    var dataAll = [];
    var check = 0

    text = source;

    // Convert text file to string
    var text = source.split(" ");

    // Go through each word, and count
    for(var i = 0; i < text.length; i++) {

        // Filter 'a', 'the', 'and'
        if(text[i] != "a" && text[i] != "the" && text[i] != "and") {

            // If word exists before, increase count
            for(var j = 0; j < dataAll.length; j++) {
                if (dataAll[j][0].indexOf(text[i]) > -1) {
                    dataAll[j][1] += 1;
                    check = 1;
                    break;
                }
            }

            // Otherwise, just push new text
            if(check != 1) {
                dataAll.push([text[i], 1]);
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
    })

    // Show only top n data
    for (var k = 0; k < n; k++) {
        console.log("'" + dataAll[k][0] + "': '" + dataAll[k][1] + " occurrences");
    }
}

most_common_words("the the the error error error error halo halo what are you doing lanang peter", 3)
