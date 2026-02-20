/**
======================
Lelang Ticket Terbesar
======================

Buatlah sistem untuk mencarikan pembeli ticket dengan harga terbesar.

`auctionWinner` adalah function yang menerima 1 parameter berupa array of string, yang akan mengeluarkan output berupa string sebagai berikut:

"Selamat andi anda mendapatkan tiket dengan harga 1009000"

Function `auctionWinner` WAJIB menggunakan modular function untuk membuat system tersebut.
Berikut ini modular function nya.

1.  `splitData`: adalah function untuk merubah data array of string menjadi array multidimensi.

    - function `splitData` menerima 1 buah parameter berupa array of string.
    - output berupa array multidimensi

    - contoh :

             - input: ["didi-20000", "rudi-50000", "andi-10000"]
             - output: [
                         [ 'didi', '20000' ],
                         [ 'rudi', '50000' ],
                         [ 'andi', '10000' ]
                       ]
             - Penjelasan: data yang masuk berupa array of string akan displit lalu dirubah menjadi array multidimensi.


2.  `createObject`: adalah function untuk merubah data array multidimensi menjadi array of object.

    - function `createObject` menerima 1 parameter array multidimensi
    - output yang diharapkan berupa array of object dengan key name dan money.

    - contoh :

            - input: [
                       [ 'didi', '20000' ],
                       [ 'rudi', '50000' ],
                       [ 'andi', '10000' ]
                     ]

             - output: [
                         {
                           name: 'didi',
                           money: 20000
                         },
                         {
                           name: 'rudi',
                           money: 50000
                         },
                         {
                           name: 'andi',
                           money: 10000
                         }
                       ]


             - Penjelasan: data yang masuk berupa array multidimensi akan dirubah menjadi array of object yang mana key name akan berisi value dari index 0 dan key money akan berisi value dari index 1 yang sudah dirubah tipe datanya menjadi number.

3.  `checkMoney`: adalah function untuk memfilter data array of object menjadi object.

    - function `checkMoney` menerima 1 parameter array of object.
    - function akan mengembalikan data object yang memiliki value money terbesar.

    - contoh :

             - input: [
                         {
                           name: 'didi',
                           money: 20000
                         },
                         {
                           name: 'rudi',
                           money: 50000
                         },
                         {
                           name: 'andi',
                           money: 10000
                         }
                       ]

             - output: {
                         name: 'rudi',
                         money: 50000
                       }

             - Penjelasan: data yang masuk berupa array of object akan difilter berdasarkan value money terbesar, pada contoh di atas object dengan name: rudi memiliki jumlah money terbesar, maka function akan mengembalikan object tersebut.


4.  `auctionWinner`: adalah main function yang akan memanggil function yang lain dan memanfaatkan hasil dari pemanggilan function.

    - function akan mengembalikan data berupa string.
    - output yang diharapkan adalah:
      "Selamat rudi anda mendapatkan tiket dengan harga 50000"

NOTE:

- DILARANG menggunkan BUILT-IN function APAPUN, kecuali .push
- DILARANG merubah nama function.

 */


function splitData(data) {
  // your code here
  let result = [];

  for (let i = 0; i < data.length; i++) {
    let temp = [];
    let word = "";

    for (let j = 0; j < data[i].length; j++) {
      if (data[i][j] === '-') {
        temp.push(word);
        word = "";
      } else {
        word += data[i][j];
      }
    }
    temp.push(word);
    result.push(temp);
  }
  return result;
}

function createObject(data) {
  // your code here
  let result = [];
  for (let i = 0; i < data.length; i++) {
    let money = 0;
    for (let j = 0; j < data[i][1].length; j++){
      money = money * 10 + (data[i][1][j] - '0');
    }
    result.push({
      name: data[i][0],
      money: money
    });
  }
  return result;
}

function checkMoney(data) {
  // your code here
  let winner = data[0];

  for (let i = 1; i < data.length; i++){
    if (data[i].money > winner.money){
      winner = data[i];
    }
  }
  return winner;
}

function auctionWinner(data) {
  let array = splitData(data);
  let object = createObject(array);
  let winner = checkMoney(object);
  // your code here
  return "Selamat " + winner.name + " anda mendapatkan tiket dengan harga " + winner.money;
}

/* TEST CASE */

let data1 = ["didi-2050", "rudi-50000", "andi-1000", "budi-10000"];

let data2 = ["murni-120000", "rani-50400", "dini-107", "rinjani-18000"];

console.log(auctionWinner(data1));
// Selamat rudi anda mendapatkan tiket dengan harga 50000

console.log(auctionWinner(data2));
// Selamat murni anda mendapatkan tiket dengan harga 120000

module.exports = auctionWinner;
