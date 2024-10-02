const readline = require("readline-sync");

const angkaPertama = parseFloat (readline.question("Masukkan Angka Pertama: "));
const operator = readline.question("Masukkan Operator (+, -, *, /, %) :");
const angkaKedua = parseFloat (readline.question("Masukkan Angka Kedua :"));

// validasi Inputan
if (isNaN(angkaPertama) || isNaN(angkaKedua)){
    // maka tampilkan Error 
    return console.log("Inputan tidak sesuai !!");
}else{

    // Lanjutan Eksekusi kode
    const hasil = execute(angkaPertama, angkaKedua, operator);
    console.log(`Hasilnya adalah ${hasil}`);
}

function execute(angkaPertama, angkaKedua, operator){
    switch (operator) {
        case "+" :
            return angkaPertama + angkaKedua;
        case "-":
            return angkaPertama - angkaKedua;
        case "*":
            return angkaPertama * angkaKedua;
        case "/":
            if (angkaKedua ===0){ 
                return console.log("Error : tidak bisa dibagi dengan nol");
            }
            return angkaPertama / angkaKedua;
        case "%" :
            return angkaPertama % angkaKedua;
        default:  
        console.log("Operator Tidak Valid!");
    }
}