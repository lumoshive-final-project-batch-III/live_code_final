/**
 * ===============================
 *  JYV ENTERTAINMENT INVITATION
 * =============================== 
 * 
 * Seorang pengusaha muda bernama J.Y. Vincent selaku CEO dari JYV Entertainment dapat undangan untuk mengisi acara January K-POP Concert.
 * JYV akan memberikan group dan jumlah performances dari masing-masing group sesuai dengan budget mereka.
 *  
 * DIRECTION
 * ------------
 * Proses peng-hire an :
 * - Group akan di ambil dari yang paling atas (jangan merubah urutan)
 * - Ketika budget cukup, maka akan meng-hire group tsb dan budget berkurang
 * - Proses akan berulang jika budget masih cukup
 * - Jika sudah tidak bisa meng-hire karena budget tidak cukup, maka proses kelar
 * - Hasil yang di harapkan berupa object literal
 * 
 * Contoh :
 * let groups = [
 * {
 *      name : "B-Bang",
 *      price : 100
 * },
 * {
 *      name : "12yes",
 *      price : 50
 * }
 * ]
 * Budget yang dimiliki adalah 250
 * 
 * Proses :
 * 1. B-Bang akan di hire karena budget cukup, lalu budget berkurang  100 sesuai harga B-Bang
 * 2. 12yes akan di hire karena budget cukup, lalu budget berkurang  50 sesuai harga 12yes
 * 3. Proses berulang karena budget masih cukup dari price terendah
 * 4. Jumlah performance B-Bang akan ditambah 1 karena budget cukup, lalu budget berkurang 100 sesuai harga B-Bang
 * 5. Ketika budget sudah tidak bisa menghire siapapun dari group, maka proses telah selesai
 * 6. Hasil sisa budget akan ditampilkan
 * 7. Expected result berupa object literal
 * 
 * Rules : Tidak boleh menggunakan built-in function!
 */

let groups = [
    {
        name: "Twoosh",
        price: 500
    },
    {
        name: "Itsy",
        price: 175
    },
    {
        name: "GET7",
        price: 550,
    },
    {
        name: "Whitepink",
        price: 250
    },
    {
        name: "JYV",
        price: 300
    }
]


function hireGroup(groups, budget) {
    // validasi budget
    if (budget === undefined) {
        return "There's no budget"
    }

    let result = {
        performances: {},
        change: budget
    }

    let canHire = true

    // selama masih bisa meng-hire minimal 1 group
    while (canHire) {
        canHire = false

        // loop group dari atas (urutan tidak diubah)
        for (let i = 0; i < groups.length; i++) {
            let name = groups[i].name
            let price = groups[i].price

            if (result.change >= price) {
                //jika belum ada, set awal 0
                if (result.performances[name] === undefined) {
                    result.performances[name] = 0
                }

                //hasil hire, tambah jumlah performance dan kurangi budgetnya
                result.performances[name] += 1
                result.change -= price
                canHire = true
            }
        }
    }

    return result
}

console.log(hireGroup(groups, 5350))
// {
//     performances : {
//         Twoosh : 3,
//         Itsy : 3,
//         GET7 : 3,
//         Whitepink : 3
//         JYV : 3
//     },
//     change : 25
// }

console.log(hireGroup(groups, 1000))
// {
//     performances : {
//         Twoosh : 1,
//         Itsy : 1,
//         Whitepink : 1
//     },
//     change : 75
// }
// console.log(hireGroup(groups, 350))
// {
//     performances : {
//         Itsy : 2,
//     },
//     change : 0
// }
// console.log(hireGroup(groups, 100))
// {
//     performances :  {}
//     change : 100
// }
// console.log(hireGroup(groups))
// There's no budget.
module.exports = hireGroup