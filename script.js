// Kumpulan pertanyaan kuis
const pertanyaanKuis = [

    {
        pertanyaan: "Apa perintah pertama yang terdapat dalam QS. Al-'Alaq?",
        pilihan: [
            "Membaca",
            "Menulis",
            "Berbicara",
            "Berjalan"
        ],
        jawaban: 0
    },

    {
        pertanyaan: "Apa arti tabayyun dalam Islam?",
        pilihan: [
            "Menyebarkan berita",
            "Memeriksa kebenaran informasi",
            "Membuat berita",
            "Mengabaikan informasi"
        ],
        jawaban: 1
    },

    {
        pertanyaan: "Manakah yang termasuk manfaat teknologi dalam pendidikan?",
        pilihan: [
            "Menyebarkan hoaks",
            "Mengurangi waktu belajar",
            "Mempermudah mencari materi pembelajaran",
            "Membuat orang kecanduan gadget"
        ],
        jawaban: 2
    },

    {
        pertanyaan: "Apa contoh penggunaan teknologi yang sesuai nilai Islam?",
        pilihan: [
            "Menyebarkan kebencian",
            "Melakukan penipuan",
            "Menyebarkan berita palsu",
            "Menggunakan internet untuk berdakwah"
        ],
        jawaban: 3
    },

    {
        pertanyaan: "Bagaimana sikap Muslim terhadap perkembangan teknologi?",
        pilihan: [
            "Menggunakannya tanpa batas",
            "Menghindari semua teknologi",
            "Menggunakannya secara bijak dan bertanggung jawab",
            "Menggunakannya hanya untuk hiburan"
        ],
        jawaban: 2
    }

];


// Variabel permainan
let nomorSekarang = 0;
let skor = 0;
let sudahMenjawab = false;


// Menampilkan pertanyaan
function tampilkanSoal() {

    sudahMenjawab = false;

    const soal = pertanyaanKuis[nomorSekarang];

    document.getElementById("nomor-soal").innerText =
        "Pertanyaan " + (nomorSekarang + 1) +
        " dari " + pertanyaanKuis.length;

    document.getElementById("pertanyaan").innerText =
        soal.pertanyaan;

    const tempatPilihan =
        document.getElementById("pilihan-jawaban");

    tempatPilihan.innerHTML = "";

    soal.pilihan.forEach((pilihan, index) => {

        tempatPilihan.innerHTML += `
            <label class="pilihan">
                <input type="radio" name="jawaban" value="${index}">
                ${pilihan}
            </label>
        `;

    });

    document.getElementById("hasil-jawaban").innerText = "";

    document.getElementById("tombol-jawab").style.display =
        "inline-block";

    document.getElementById("tombol-lanjut").style.display =
        "none";

    document.getElementById("nilai-akhir").innerText = "";

}


// Memeriksa jawaban
function periksaJawaban() {

    if (sudahMenjawab) return;

    const pilihan =
        document.querySelector('input[name="jawaban"]:checked');

    if (!pilihan) {

        alert("Silakan pilih jawaban terlebih dahulu!");

        return;

    }

    sudahMenjawab = true;

    const jawabanPengguna = Number(pilihan.value);

    const jawabanBenar =
        pertanyaanKuis[nomorSekarang].jawaban;

    const hasil =
        document.getElementById("hasil-jawaban");

    if (jawabanPengguna === jawabanBenar) {

        skor++;

        hasil.innerText = "Benar! Hebat, jawabanmu tepat. 🎉";

    } else {

        hasil.innerText =
            "Belum tepat. Jawaban yang benar adalah: " +
            pertanyaanKuis[nomorSekarang].pilihan[jawabanBenar];

    }

    document.getElementById("tombol-jawab").style.display =
        "none";

    document.getElementById("tombol-lanjut").style.display =
        "inline-block";

}


// Berpindah ke pertanyaan berikutnya
function soalBerikutnya() {

    nomorSekarang++;

    if (nomorSekarang < pertanyaanKuis.length) {

        tampilkanSoal();

    } else {

        tampilkanNilai();

    }

}


// Menampilkan nilai akhir
function tampilkanNilai() {

    document.getElementById("nomor-soal").innerText =
        "Kuis Selesai!";

    document.getElementById("pertanyaan").innerText =
        "Terima kasih sudah mengikuti kuis Muslim Digital.";

    document.getElementById("pilihan-jawaban").innerHTML = "";

    document.getElementById("hasil-jawaban").innerText = "";

    document.getElementById("tombol-lanjut").style.display =
        "none";

    document.getElementById("nilai-akhir").innerText =
        "Nilai Kamu: " + (skor / pertanyaanKuis.length * 100) +
        " dari 100";

    document.getElementById("tombol-jawab").innerText =
        "Ulangi Kuis";

    document.getElementById("tombol-jawab").style.display =
        "inline-block";

    document.getElementById("tombol-jawab").onclick =
        ulangiKuis;

}


// Mengulang kuis
function ulangiKuis() {

    nomorSekarang = 0;
    skor = 0;

    document.getElementById("tombol-jawab").innerText =
        "Periksa Jawaban";

    document.getElementById("tombol-jawab").onclick =
        periksaJawaban;

    tampilkanSoal();

}


// Memulai kuis
tampilkanSoal();
// ANIMASI SAAT WEBSITE DI-SCROLL

const elemenAnimasi = document.querySelectorAll(
    "section, .card"
);

elemenAnimasi.forEach((elemen) => {
    elemen.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {
    threshold: 0.15
});

elemenAnimasi.forEach((elemen) => {
    observer.observe(elemen);
});
// FITUR DARK MODE

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    const tombol = document.getElementById("dark-mode-btn");

    if (document.body.classList.contains("dark-mode")) {
        tombol.innerText = "☀️ Light Mode";
    } else {
        tombol.innerText = "🌙 Dark Mode";
    }

}
// LOADING SCREEN

window.addEventListener("load", function() {

    setTimeout(function() {

        document
            .getElementById("loading-screen")
            .classList.add("hidden");

    }, 1800);

});
window.addEventListener("scroll", function () {
    const scrollTop = document.documentElement.scrollTop;
    const tinggiHalaman =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / tinggiHalaman) * 100;

    document.getElementById("scroll-progress").style.width =
        progress + "%";
});