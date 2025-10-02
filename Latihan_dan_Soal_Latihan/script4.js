// Fungsi ubah teks & warna menggunakan getElementById()
function ubahDenganId() {
    // 1. Ambil elemen berdasarkan ID
    const paragrafId = document.getElementById("teks-id");

    // 2. Manipulasi konten dan style
    paragrafId.textContent = "✅ Teks ini diubah dengan getElementById()";
    paragrafId.style.color = "green";
    paragrafId.style.fontWeight = "bold";

    console.log("Berhasil ubah dengan getElementById()");
}

// Fungsi ubah teks & warna menggunakan querySelector()
function ubahDenganQuery() {
    // 1. Ambil elemen berdasarkan Class menggunakan querySelector
    // (querySelector selalu mengambil elemen pertama yang cocok)
    const paragrafClass = document.querySelector(".teks-class");

    // 2. Manipulasi konten dan style
    paragrafClass.textContent = "🌟 Teks ini diubah dengan querySelector()";
    paragrafClass.style.color = "blue";
    paragrafClass.style.fontStyle = "italic";

    console.log("Berhasil ubah dengan querySelector()");
}