// 1. Deklarasi dan Pengambilan Elemen
function prosesData() {
    console.log("Script Berjalan (ProsesData)");
    
    // Ambil elemen input
    let namaInput = document.getElementById("nama-input");
    let nilaiInput = document.getElementById("nilai-input");

    // Ambil elemen untuk output
    let namaSpan = document.getElementById("nama-span");
    let nilaiSpan = document.getElementById("nilai-span");
    let elStatus = document.getElementById("status-kelulusan");

    // Validasi input (Sederhana: memastikan tidak kosong)
    if (namaInput.value === "" || nilaiInput.value === "") {
        alert("Mohon isi Nama dan Nilai terlebih dahulu!");
        return;
    }

    // 2. Ambil dan Konversi Nilai
    let namaMahasiswa = namaInput.value;
    let nilai = parseInt(nilaiInput.value); // Konversi nilai string ke integer

    // 3. Logika Kelulusan
    let passStatus; // Variabel untuk menyimpan pesan status
    let isLulus = false; // Variabel boolean untuk status kelulusan
    
    if (nilai >= 70) {
        passStatus = "LULUS, Anda Dinyatakan Lulus!";
        isLulus = true;
    } else {
        passStatus = "Gagal. Tetap semangat, Anda perlu Mengulang.";
        isLulus = false;
    }

    // 4. Menampilkan Hasil ke HTML
    // Menampilkan Nama dan Nilai
    namaSpan.textContent = namaMahasiswa;
    nilaiSpan.textContent = nilai;

    // Menampilkan Status Kelulusan
    elStatus.textContent = passStatus;

    // 5. Mengubah Gaya berdasarkan status kelulusan
    if (isLulus) {
        // Jika Lulus (isLulus = true)
        elStatus.style.color = "green";
        elStatus.style.fontWeight = "bold";
    } else {
        // Jika Tidak Lulus (isLulus = false)
        elStatus.style.color = "red";
        elStatus.style.fontWeight = "bold";
    }
}