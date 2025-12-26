// ==========================================
// 1. SOZLAMALAR (FAQAT SHUNI O'ZGARTIRASIZ)
// ==========================================
const MODEL_SETTINGS = {
    x: 0,    // O'ng (+) yoki Chap (-)
    y: 1.2,  // Balandlik (Yer = 0, Ko'z hizasi = 1.6)
    z: -3,   // Oldinda (-) yoki Orqada (+) -> -3 degani 3 metr oldinda degani
    scale: "0.5 0.5 0.5",
    color: "red"
};

// ==========================================
// 2. FUNKSIYALAR (KODGA TEGMANG)
// ==========================================

window.onload = () => {
    initCamera();
    applySettings();
    document.getElementById('status').innerText = "Model o'rnatildi!";
};

function applySettings() {
    const model = document.querySelector('#target-model');
    const box = document.querySelector('#test-box');

    // Model pozitsiyasini o'rnatish
    model.setAttribute('position', `${MODEL_SETTINGS.x} ${MODEL_SETTINGS.y} ${MODEL_SETTINGS.z}`);
    
    // Model o'lchami va rangi
    box.setAttribute('scale', MODEL_SETTINGS.scale);
    box.setAttribute('material', `color: ${MODEL_SETTINGS.color}`);
}

async function initCamera() {
    const video = document.getElementById('webcam');
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        video.srcObject = stream;
    } catch (err) {
        console.error("Kamera ochilmadi:", err);
        document.getElementById('status').innerText = "Kameraga ruxsat bering!";
    }
}

// Kelajakda modelni boshqa joyga ko'chirish kerak bo'lsa, 
// shunchaki 'updatePosition(1, 0, -5)' deb chaqirasiz
function updatePosition(newX, newY, newZ) {
    document.querySelector('#target-model').setAttribute('position', `${newX} ${newY} ${newZ}`);
}