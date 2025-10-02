// Fungsi ubah teks & style
function ubahKonten() {
    // Ambil elemen judul dan paragraf
    const judul = document.getElementById("judul");
    const paragraf = document.getElementById("paragraf");

    // 1. Ubah textContent
    judul.textContent = "Judul Berubah!";
    paragraf.textContent = "Teks ini sudah diubah setelah klik tombol.";

    // 2. Ubah style (CSS via JavaScript)
    judul.style.color = "green";
    paragraf.style.color = "blue";
    paragraf.style.backgroundColor = "yellow";
    paragraf.style.fontWeight = "bold";

    console.log("Konten berhasil diubah!");
}

// Fungsi reset kembali ke awal
function resetKonten() {
    // Ambil elemen judul dan paragraf
    const judul = document.getElementById("judul");
    const paragraf = document.getElementById("paragraf");

    // 1. Reset textContent
    judul.textContent = "Judul Asli";
    paragraf.textContent = "Ini adalah teks awal paragraf.";

    // 2. Reset style ke default
    judul.style.color = "black";
    paragraf.style.color = "black";
    paragraf.style.backgroundColor = "transparent";
    paragraf.style.fontWeight = "normal";

    console.log("Konten berhasil di-reset!");
}