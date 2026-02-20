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

function quoteGenerator(arrOfArr) {
  let quote = "";
  let index = "";
  
  if (arrOfArr === undefined) {
    return "invalid input";
  }
  
  if (arrOfArr.length === 0) {
    return "invalid input";
  }

  for (let baris = 0; baris < arrOfArr.length; baris++) {
    let terpanjang = "";
    let indexTerpanjang = 0;

    // console.log(arrOfArr[baris].length);
    
    for (let kolom = 0; kolom < arrOfArr[baris].length; kolom++) {
      if (arrOfArr[baris][kolom].length > terpanjang.length) {
        terpanjang = arrOfArr[baris][kolom];
        indexTerpanjang = kolom;

      }
    }

    quote += terpanjang;
    index += "," + indexTerpanjang;
    

  }
  return [quote, index];
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

console.log(quoteGenerator(quotes0)); // [ 'Explore. Dream. Discover.', '6,3,6' ]
console.log(quoteGenerator(quotes1)); // [ 'never gonna Give you ~~~up~~~', '2,3,0,1,4' ]
console.log(quoteGenerator(quotes2)); // [ 'I intend to be a great JS developer', '6,7,0,13' ]
console.log(quoteGenerator(quotes3)); // [ 'Whatever you do do it well <3', '0,6,1,11' ]
console.log(quoteGenerator(quotes4)); // [ 'Istanbul have a great interest in JavaScript', '0,0,1' ]
console.log(quoteGenerator([])); // invalid input
console.log(quoteGenerator()); // invalid input

module.exports = quoteGenerator;