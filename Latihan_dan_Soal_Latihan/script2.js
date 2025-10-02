function runExercises() {
    console.clear(); // Bersihkan console sebelum jalan

    // SOAL 1: CONST (String)
    const universitas = "Universitas Muhammadiyah Kalimantan Timur";
    console.log("Nama Universitas:", universitas);

    // SOAL 2: LET (Number)
    let jumlahMahasiswa = 25;
    jumlahMahasiswa = jumlahMahasiswa + 5; // operasi penambahan
    console.log("Jumlah Mahasiswa Sekarang:", jumlahMahasiswa);

    // SOAL 3: String
    const namaLengkap = "Alan Yahya";
    console.log("Halo, kata saya: " + namaLengkap);

    // SOAL 4: Number
    let angka1 = 10;
    let angka2 = 5;
    console.log("Hasil penjumlahan:", angka1 + angka2);
    console.log("Hasil pengurangan:", angka1 - angka2);
    console.log("Hasil perkalian:", angka1 * angka2);
    console.log("Hasil pembagian:", angka1 / angka2);

    // SOAL 5: Boolean
    let nilaiUjian = 80;
    let lulus = nilaiUjian >= 75;
    console.log("Apakah lulus?", lulus);
}