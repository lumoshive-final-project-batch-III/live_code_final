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
    // Your code here
    //disini saya buat variable output untuk menampung hasil akhir berupa array 
    let output = [];
    let quote = '';
    let indexes = [];
    
    //untuk validasi input, ntar dicek apakah arrOfarr berupa array dan tidak kosong, jika tidak sesuai 
    // maka akan mengembalikan 'invalid input'
    if (!Array.isArray(arrOfArr) || arrOfArr.length === 0) {
        return 'Invalid Input';
    }
    
    //untuk mencari elemen terpanjang pada setiap inner array, buat loop untuk iterasi setiap inner array
    for (let i = 0; i < arrOfArr.length; i++) {
        let innerArray = arrOfArr[i];
        let longestElement = '';
        let longestIndex = 0; 
      //buat loop untuk iterasi setiap elemen dalam inner array untuk mencarri elemen terpanjang
        for (let j = 0; j < innerArray.length; j++) {
            if (innerArray[j].length > longestElement.length) {
                longestElement = innerArray[j];
                longestIndex = j;
            }
        }
        quote += longestElement + ' ';
        indexes.push(longestIndex);
    }
    // disini saya trim untuk menghilangkan spasi di akhir quote dan push ke output beserta indexs
    output.push(quote.trim());
    output.push(indexes.join(','));

    return output;
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

console.log(quoteGenerator(quotes0)); // [ 'Explore. Dream. Discover. - 2.js:114', '6,3,6' ]
console.log(quoteGenerator(quotes1)); // [ 'never gonna Give you ~~~up~~~ - 2.js:115', '2,3,0,1,4' ]
console.log(quoteGenerator(quotes2)); // [ 'I intend to be a great JS developer - 2.js:116', '6,7,0,13' ]
console.log(quoteGenerator(quotes3)); // [ 'Whatever you do do it well <3 - 2.js:117', '0,6,1,11' ]
console.log(quoteGenerator(quotes4)); // [ 'Istanbul have a great interest in JavaScript - 2.js:118', '0,0,1' ]
console.log(quoteGenerator([])); // invalid input
console.log(quoteGenerator()); // invalid input

module.exports = quoteGenerator;