// 1. Tahun otomatis di footer
document.getElementById("tahun").textContent = new Date().getFullYear();

// 2. Teks peran di hero berganti-ganti (efek ketik)
const daftarPeran = [
  "Web Developer",
  "UI/UX Designer",
  "Data Analyst",
  "Business Analyst",
];
const teksPeran = document.getElementById("peran");
let idxPeran = 0;
let idxHuruf = 0;
let sedangHapus = false;

function ketik() {
  const kata = daftarPeran[idxPeran];
  idxHuruf += sedangHapus ? -1 : 1;
  teksPeran.textContent = kata.substring(0, idxHuruf);

  let jeda = sedangHapus ? 50 : 100;
  if (!sedangHapus && idxHuruf === kata.length) {
    sedangHapus = true;
    jeda = 1500;
  } else if (sedangHapus && idxHuruf === 0) {
    sedangHapus = false;
    idxPeran = (idxPeran + 1) % daftarPeran.length;
    jeda = 300;
  }
  setTimeout(ketik, jeda);
}
setTimeout(ketik, 1500);

// 3. Papan Ide: klik tombol untuk mengganti isi catatan
const isiCatatan = {
  n1t: [
    "Responsive layout dengan grid Bootstrap.",
    "Dasar JavaScript untuk interaksi halaman.",
    "Prinsip tipografi dan warna di Figma.",
  ],
  n2t: [
    "Playlist fokus ngoding favoritku.",
    "Lagu santai buat nyari ide desain.",
  ],
  n3t: [
    "Ikut satu lomba desain atau hackathon.",
    "Menyelesaikan satu proyek web utuh.",
  ],
  n4t: [
    "Mulai saja dulu, rapikan sambil jalan.",
    "Desain yang baik itu yang nggak bikin bingung.",
  ],
};

document.querySelectorAll(".note button").forEach(function (tombol) {
  let urutan = 0;
  tombol.addEventListener("click", function () {
    const id = tombol.dataset.k;
    urutan = (urutan + 1) % isiCatatan[id].length;
    document.getElementById(id).textContent = isiCatatan[id][urutan];
  });
});

// 4. Hati kecil muncul saat layar diklik/disentuh
const bentuk = ["♡", "✿", "★", "✦"];
document.addEventListener("click", function (e) {
  const hati = document.createElement("span");
  hati.className = "hati";
  hati.textContent = bentuk[Math.floor(Math.random() * bentuk.length)];
  hati.style.left = e.clientX - 10 + "px";
  hati.style.top = e.clientY - 10 + "px";
  hati.style.color = Math.random() > 0.5 ? "#E0457F" : "#FF8DB8";
  document.body.appendChild(hati);
  setTimeout(function () {
    hati.remove();
  }, 1000);
});

// 5. Tutup menu navbar otomatis di layar kecil setelah link diklik
const menu = document.getElementById("navMenu");
document.querySelectorAll("#navMenu .nav-link").forEach(function (link) {
  link.addEventListener("click", function () {
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
