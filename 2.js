/*
================
QUOTE GENERATOR
================

[INSTRUCTION]
Function quoteGenerator adalah function yang akan membuat quote (kutipan inspiratif).
Function quoteGenerator memiliki satu parameter arrOfArr berupa Array 2 Dimensi.
Elemen inner array pada arrOfArr berupa string.
Berikut adalah pola arrOfArr :
    [
        [<string>, <string>, dst],
        [<string>, <string>, dst],
        [<string>, <string>, dst],
    ]

Tugas kamu mencari elemen terpanjang pada setiap inner array.
Jika elemen terpanjang ada lebih dari satu, maka yang diambil adalah elemen terpanjang yang paling depan (index terkecil dari elemen terpanjang).
Output dari function ini adalah sebuah array dengan pola sebagai berikut:
    [<quote>, <indexes>]
    - <quote> bertipe data string, sebuah rangkain kutipan inspiratif dari elemen yang ditemukan (tambahkan spasi ya sebagai penguhubungnya).
    - <indexes> bertipe data string, sebuah rangkain dari index elemen yang ditemukan (tambahkan koma ya sebagai penguhubungnya).
Jika parameter arrOfArr bukan array atau array kosong maka output menjadi 'invalid input'.

[EXAMPLE]
INPUT:
    [
        ['Istanbul', 'Helsinki', 'Glasgow'],
        ['have a great interest in', 'adore', 'worship'],
        ['Ruby', 'JavaScript', 'PHP'],
    ]

PROCESS:
    - Elemen terpanjang pada inner array 0 adalah 'Istanbul' (index 0).
      Karena index lebih kecil dari pada 'Helsinki' (lebih dulu muncul dengan iterasi incremental).
    - Elemen terpanjang pada inner array 1 adalah 'have a great interest in' (index 0).
      Karena hanya memperdulikan jumlah karakternya, bahkan spasi pun dihitung.
    - Elemen terpanjang pada inner array 2 adalah 'JavaScript' (index 1).

OUTPUT:
    ['Istanbul have a great interest in JavaScript', '0,0,1']

[RULES]
- Mengikuti aturan umum saat briefing

*/

//disini saya buat function quoteGenerator yng menerima dari parameter arrOfarr berupa array 2 dimensi
function quoteGenerator(arrOfArr) {
  // VALIDASI INPUT
  if (!Array.isArray(arrOfArr) || arrOfArr.length === 0) {
    return 'invalid input';
  }

  let quote = '';
  let indexes = [];

  //loop outernya untuk iterasi setiap inner array
  for (let i = 0; i < arrOfArr.length; i++) {
    let innerArray = arrOfArr[i];
    let longestWord = '';
    let longestIndex = 0;

    //loop cari elemen terpanjang pada inner array
    for (let j = 0; j < innerArray.length; j++) {
      if (innerArray[j].length > longestWord.length) {
        longestWord = innerArray[j];
        longestIndex = j;
      }
    }

    //untuk mengatur spasi manual karena dilarang menggunakan builtin
    if (i === 0) {
      quote += longestWord;
    } else {
      quote += ' ' + longestWord;
    }

    indexes.push(longestIndex);
  }

  // rangkai index menjadi string dengan koma sebagai pemisah 
  let indexString = '';
  for (let i = 0; i < indexes.length; i++) {
    if (i === 0) {
      indexString += indexes[i];
    } else {
      indexString += ',' + indexes[i];
    }
  }

  return [quote, indexString];
}

let quotes0 = [
  ["It's", "A Big", "World", "Out", "There,", "Go", "Explore."],
  ["Don't", "Call", "It A", "Dream.", "Call", "It A", "Plan."],
  ["U Can't", "Know", "About", "Things", "U Have", "Yet To", "Discover."],
];
let quotes1 = [
  ["It", "is", "never", "too", "late", "to", "be", "what", "you", "might", "have", "been."],
  ["If", "you", "are", "gonna", "be", "two", "faced", "at", "least", "make", "one", "of", "them", "nice"],
  ["Give", "the", "best", "you", "have"],
  ["be", "you", "and", "be", "OK"],
  ["twinkle", "twinkle", "little", "star", "~~~up~~~", "above", "the", "world", "so", "high"],
];
let quotes2 = [
  ["I", "may", "not", "have", "gone", "where", "I intend", "to", "go,", "but", "I", "think", "I", "have", "ended", "up", "where", "I", "needed", "to", "be."],
  ["I", "solemnly", "swear", "that", "I", "am", "up", "to be a great", "no good."],
  ["JS", "ha", "ck", "ti", "v8"],
  ["I",  "like", "fiction,", "it", "wakes", "up", "the", "brain", "cells.", "Fantasy", "is", "a", "required", "developer", "in", "living."],
];
let quotes3 = [
  ["Whatever", "you", "are,", "be", "a", "good", "one"],
  ["You", "only", "live", "once,", "but", "if", "you do", "it", "right,", "once", "is", "enough"],
  ["Just", "do it"],
  ["Never", "put", "off", "till", "morrow", "what", "may", "be", "done", "today", "as", "well <3"],
];
let quotes4 = [
  ["Istanbul", "Helsinki", "Glasgow"],
  ["have a great interest in", "adore", "worship"],
  ["Ruby", "JavaScript", "PHP"],
];

console.log(quoteGenerator(quotes0)); // [ 'Explore. Dream. Discover. - 2.js:125', '6,3,6' ]
console.log(quoteGenerator(quotes1)); // [ 'never gonna Give you ~~~up~~~ - 2.js:126', '2,3,0,1,4' ]
console.log(quoteGenerator(quotes2)); // [ 'I intend to be a great JS developer - 2.js:127', '6,7,0,13' ]
console.log(quoteGenerator(quotes3)); // [ 'Whatever you do do it well <3 - 2.js:128', '0,6,1,11' ]
console.log(quoteGenerator(quotes4)); // [ 'Istanbul have a great interest in JavaScript - 2.js:129', '0,0,1' ]
console.log(quoteGenerator([])); // invalid input
console.log(quoteGenerator()); // invalid input

module.exports = quoteGenerator;