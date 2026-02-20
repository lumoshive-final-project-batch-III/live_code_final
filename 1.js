/*
  ===========================
  Listing Destination Hiking 
  ===========================

  INSTRUCTION
  -----------
  Listing Destination Hiking adalah sebuah program yang ingin di kembangkan oleh Budi untuk mengelompokkan destinasi gunung berdasarkan Pulau nya.
  Namun budi hanya bisa merencanakan program ini saja, tidak untuk pembuatan program nya.
  Jadi bantulah budi untuk membuat program sesuai dengan yang di rencanakan oleh nya!

  DIRECTION
  -------------
  Diberikan sebuah function getHikingDestination yang menerima satu parameter, yaitu destinationList berupa array multidimensi yang didalamnya terdapat:
  - Pulau gunung itu berada
  - Nama gunung tersebut
  
  Output merupakan sebuah object yang memiliki key Pulau yang telah ditentukan, dengan value berupa nama-nama gunung yang ada di dalam Pulau tersebut dalam bentuk array

  List Pulau yang sudah ditentukan: 
  - Jawa
  - Kalimantan
  - Sulawesi
  - Aceh

  Contoh input parameter destinationList:
  
  let destinastionList = [
    ["Jawa", "Gunung Cikuray"],
    ["Jawa", "Gunung Guntur"],
    ["Jambi", "Gunung Kerinci"],
  ]

  Contoh output dari function getHikingDestination jika input destinationList seperti diatas:
  =================================================================================================================
  Jika gunung berada di Pulau SELAIN di Jawa, Kalimantan, Sulawesi dan Aceh, masukkan gunung ke kelompok Others
  =================================================================================================================

  {
    Jawa: ["Gunung Cikuray", "Gunung Guntur"],
    Kalimantan: [],
    Sulawesi: [],
    Aceh: [],
    Others: ["Gunung Kerinci"],
  }

  NOTES
  ---------
  1. Jika data destinationList berupa array kosong, maka mengembalikan 'Destination List Data is Not Exist!'
  2. Jika input kosong (undefined), maka mengembalikan 'Invalid Data!'
 
 
  RESTRICTION
  ------------
  1. DILARANG menggunakan built-in function split, slice, splice, includes, find, findIndex, indexOf
*/

function getHikingDestination(destinationList) {
  // VALIDASI INPUT
  if (destinationList === undefined) {
    return "Invalid Data!";
  }
 
  if (destinationList.length === 0) {
    return "Destination List Data is Not Exist!";
  }

  let output = {
    Jawa: [],
    Kalimantan: [],
    Sulawesi: [],
    Aceh: [],
    Others: [],
  };

  for (let i = 0; i < destinationList.length; i++) {
    let pulau = destinationList[i][0];
    let gunung = destinationList[i][1];

    if (pulau === "Jawa") {
      output.Jawa.push(gunung);
    } else if (pulau === "Kalimantan") {
      output.Kalimantan.push(gunung);
    } else if (pulau === "Aceh") {
      output.Aceh.push(gunung);
    } else if (pulau === "Sulawesi") {
      output.Sulawesi.push(gunung);
    } else {
      output.Others.push(gunung);
    }
  }

  return output;
}

// test cases 
let destinationList1 = [
  ["Jawa", "Gunung Semeru"],
  ["Aceh", "Gunung Leuser"],
  ["Kalimantan", "Gunung Lianpran"],
  ["NTB", "Gunung Rinjani"],
  ["Papua", "Puncak Jaya"],
  ["Sulawesi", "Gunung Sojol"],
  ["Jawa", "Gunung Merbabu"],
];

let destinationList2 = [
  ["Bali", "Gunung Batukaru"],
  ["Jawa", "Gunung Pangrango"],
  ["Papua", "Gunung Yamin"],
  ["Bali", "Gunung Agung"],
  ["Jawa", "Gunung Prau"],
  ["Jawa", "Gunung Papandayan"],
  ["Kalimantan", "Gunung Bukit Raya"],
];

let destinationList3 = [
  ["Jawa", "Gunung Ciremay"],
  ["Aceh", "Gunung Perkison"],
  ["Sulawesi", "Gunung Mekongga"],
  ["Jambi", "Gunung Kerinci"],
  ["Sulawesi", "Gunung Latimojong"],
  ["Aceh", "Gunung Simpali"],
  ["NTB", "Gunung Tambora"],
];

console.log(getHikingDestination(destinationList1));
// {
//   Jawa: ["Gunung Semeru", "Gunung Merbabu"],
//   Kalimantan: ["Gunung Lianpran"],
//   Sulawesi: ["Gunung Sojol"],
//   Aceh: ["Gunung Leuser"],
//   Others: ["Gunung Rinjani", "Puncak Jaya"],
// };

console.log(getHikingDestination(destinationList2));
// {
//   Jawa: ["Gunung Pangrango", "Gunung Prau", "Gunung Papandayan"],
//   Kalimantan: ["Gunung Bukit Raya"],
//   Sulawesi: [],
//   Aceh: [],
//   Others: ["Gunung Batukaru", "Gunung Yamin", "Gunung Agung"],
// };

console.log(getHikingDestination(destinationList3));
// {
//   Jawa: ["Gunung Ciremay"],
//   Kalimantan: [],
//   Sulawesi: ["Gunung Mekongga", "Gunung Latimojong"],
//   Aceh: ["Gunung Perkison", "Gunung Simpali"],
//   Others: ["Gunung Kerinci", "Gunung Tambora"],
// };

console.log(getHikingDestination([]));
// Destination List Data is Not Exist!

console.log(getHikingDestination());
// Invalid Data!

module.exports = getHikingDestination;