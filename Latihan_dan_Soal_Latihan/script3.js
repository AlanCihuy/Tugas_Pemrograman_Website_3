function cekKelulusan() {
    console.clear(); // Bersihkan console biar rapi

    let nilai = document.getElementById("nilai").value;

    if (nilai === "") {
        console.log("⚠️ Silakan masukan nilai terlebih dahulu.");
        return;
    }

    // Konversi nilai dari string ke integer
    nilai = parseInt(nilai);

    if (nilai >= 70) {
        console.log("Nilai Anda:", nilai, "-> Status: Lulus ✔️");
    } else {
        console.log("Nilai Anda:", nilai, "-> Status: Tidak Lulus ❌");
    }
}