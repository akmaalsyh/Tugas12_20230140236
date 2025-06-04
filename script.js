function kirimData() {
    // Mengambil nilai dari elemen input
    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var alamat = document.getElementById("alamat").value;

    // Mengambil nilai peminatan dari radio button
    var peminatanElement = document.querySelector('input[name="peminatan"]:checked');
    var peminatan = peminatanElement ? peminatanElement.value : "Belum memilih"; // Handle jika tidak ada yang dipilih

    // Mengambil nilai dari select dropdown "Angkatan"
    var angkatan = document.getElementById("angkatan").value;

    // Mengambil nilai dari input tanggal "Tanggal Pendaftaran"
    var tanggal = document.getElementById("tanggal").value;

    // Validasi sederhana (opsional, bisa diperluas)
    if (!nama || !nim || !peminatanElement || !angkatan || !tanggal) {
        alert("Mohon lengkapi semua data yang wajib diisi!");
        return; // Hentikan fungsi jika ada data yang kosong
    }

    // Membangun pesan alert yang lebih informatif dan rapi
    var pesan = "Data Pendaftaran Peminatan:\n\n" +
                "Nama Lengkap    : " + nama + "\n" +
                "NIM             : " + nim + "\n" +
                "Peminatan       : " + peminatan + "\n" +
                "Alamat          : " + alamat + "\n" +
                "Angkatan        : " + angkatan + "\n" +
                "Tanggal Daftar  : " + tanggal;

    alert(pesan);
}

// Tambahan: Menonaktifkan perilaku default submit form agar alert muncul
document.getElementById('peminatanForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah halaman reload
    kirimData(); // Panggil fungsi kirimData
});