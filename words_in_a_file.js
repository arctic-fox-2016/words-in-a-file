var sys=require('sys');

var hasil = new Array();
var hasilCount = new Array();

function most_common_words(inputText) {
  var words = inputText.split(' ');
  var found, j;

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
most_common_words('apple banana apple yoghurt melon apple banana');

for (i=0; i < hasil.length; i++){
  console.log(hasil[i] + " sebanyak " + hasilCount[i]);
}
