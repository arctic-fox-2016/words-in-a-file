var sys = require('util');

var hasil = new Array();
var hasilCount = new Array();

function most_common_words(inputText) {
  var tanda = ["!","@","#","$","%","^","&","*","(",")","_","+","-","=",
  "<",">",".",";", ",",":"];

  var kataHubung = ["a ", "an ","the ", "and ", "by ", "or "];

  var words = new Array();
  var found;


  for (var i = 0; i < tanda.length ; i++){
    for (var j = 0; j < inputText.length ; j++) {
      if (inputText.slice(j,j+1) == tanda[i]) {
        inputText = inputText.slice(0,j) + inputText.slice(j+1,inputText.length);
      }
    }
  }


    // for (var i = 0; i < kataHubung.length ; i++){
    //   for (var j = 0; j < inputText.length ; j++) {
    //     if (inputText.slice(j,j+kataHubung[i].length) == kataHubung[i]) {
    //       inputText = inputText.slice(0,j) + " " +inputText.slice(j+kataHubung[i].length,inputText.length);
    //     }
    //   }
    // }
    //
  words = inputText.split(' ');


  for (var i=0; i < words.length; i++) {
    found = false;
    j = 0;
    while (found == false && j < hasil.length) {
      if (words[i] == hasil[j]) {
        found = true;
        hasilCount[j] += 1;
      }
      j++;
    }

    if (found == false) {
      hasil.push(words[i]);
      hasilCount.push(1);
    }
  }
  return;
}
// actual  conversion code starts here
most_common_words("apple! banana apple; yoghurt. melon apple banana");

for (i=0; i < hasil.length; i++){
  console.log(hasil[i] + " sebanyak " + hasilCount[i]);
}
