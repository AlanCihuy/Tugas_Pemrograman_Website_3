// Simulasi data cuaca (dummy)
const weatherData = {
  "bontang": {
    temperature: 30,
    condition: "Cerah"
  },
  "sangatta": {
    temperature: 25,
    condition: "Hujan Ringan"
  },
  "balikpapan": {
    temperature: 33,
    condition: "Panas Terik"
  },
  "samarinda": {
    temperature: 28,
    condition: "Mendung"
  }
};

const cityInput = document.getElementById('cityInput');
const showBtn = document.getElementById('showBtn');
const output = document.getElementById('output');

function showWeather() {
  const raw = cityInput.value.trim();
  if (!raw) {
    output.innerHTML = '<span class="muted">Masukkan nama kota terlebih dahulu.</span>';
    console.log('Input kosong — masukkan nama kota.');
    return;
  }

  const key = raw.toLowerCase();
  const data = weatherData[key];

  if (data) {
    // Cetak di console (permintaan utama)
    console.log(`Cuaca di ${capitalize(raw)}: ${data.temperature}°C, ${data.condition}`);
    // juga log objek lengkap
    console.log({ city: capitalize(raw), ...data });

    // tampilkan ringkasan di UI juga
    output.innerHTML = `
      <strong>${capitalize(raw)}</strong><br/>
      Suhu: ${data.temperature}°C — Kondisi: ${data.condition}
    `;
  } else {
    console.log(`Data untuk kota "${raw}" tidak ditemukan dalam database dummy.`);
    output.innerHTML = `<span class="muted">Data untuk kota "<strong>${escapeHtml(raw)}</strong>" tidak ditemukan pada dataset dummy.</span>`;
  }
}

// helper
function capitalize(s) {
  if (!s) return s;
  return s[0].toUpperCase() + s.slice(1);
}
// very small escape to avoid HTML injection in output div
function escapeHtml(str) {
  return str.replace(/[&<>"']/g, function (m) {
    return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]);
  });
}

// event listeners
showBtn.addEventListener('click', showWeather);
cityInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') showWeather();
});
