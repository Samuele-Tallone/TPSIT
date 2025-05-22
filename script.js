const carData = {
  '911': {
    title: "Porsche 911 Carrera S",
    description: "Eleganza e prestazioni, motore boxer da 450 CV, trazione posteriore e uno stile iconico.",
    price: "€145.000",
    images: [
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
      "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
    ]
  },
  'r8': {
    title: "Audi R8 V10 Performance",
    description: "Motore V10 aspirato, trazione integrale quattro e una linea inconfondibile.",
    price: "€185.000",
    images: [
      "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg",
      "https://images.pexels.com/photos/3366964/pexels-photo-3366964.jpeg",
      "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
    ]
  },
  'ferrari488': {
    title: "Ferrari 488 GTB",
    description: "Motore V8 turbo da 670 CV, prestazioni estreme e design italiano inconfondibile.",
    price: "€250.000",
    images: [
      "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg",
      "https://images.pexels.com/photos/2397659/pexels-photo-2397659.jpeg",
      "https://images.pexels.com/photos/246232/pexels-photo-246232.jpeg"
    ]
  },
  'lamboHuracan': {
    title: "Lamborghini Huracán EVO",
    description: "V10 aspirato da 640 CV, design aggressivo e trazione integrale performante.",
    price: "€280.000",
    images: [
      "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
      "https://images.pexels.com/photos/1791995/pexels-photo-1791995.jpeg",
      "https://images.pexels.com/photos/257006/pexels-photo-257006.jpeg"
    ]
  },
  'mclaren720s': {
    title: "McLaren 720S",
    description: "Supercar inglese con motore V8 biturbo da 720 CV e aerodinamica avanzata.",
    price: "€310.000",
    images: [
      "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg",
      "https://images.pexels.com/photos/1149832/pexels-photo-1149832.jpeg",
      "https://images.pexels.com/photos/1149833/pexels-photo-1149833.jpeg"
    ]
  },
  'astonMartin': {
    title: "Aston Martin DB11",
    description: "Eleganza britannica, motore V12 da 600 CV e lusso raffinato.",
    price: "€200.000",
    images: [
      "https://images.pexels.com/photos/1179833/pexels-photo-1179833.jpeg",
      "https://images.pexels.com/photos/3429364/pexels-photo-3429364.jpeg",
      "https://images.pexels.com/photos/1334601/pexels-photo-1334601.jpeg"
    ]
  },
  'nissanGTR': {
    title: "Nissan GT-R Nismo",
    description: "Sportiva giapponese con motore V6 biturbo da 600 CV e tecnologia avanzata.",
    price: "€150.000",
    images: [
      "https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg",
      "https://images.pexels.com/photos/1230139/pexels-photo-1230139.jpeg",
      "https://images.pexels.com/photos/1326189/pexels-photo-1326189.jpeg"
    ]
  }
};

let currentSlide = 0;

function openPopup(carId) {
  const data = carData[carId];
  if (!data) return;

  document.getElementById("popup-title").textContent = data.title;
  document.getElementById("popup-description").textContent = data.description;
  document.getElementById("popup-price").textContent = data.price;

  const carousel = document.getElementById("carousel");
  carousel.innerHTML = "";
  data.images.forEach((url, index) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = `${data.title} ${index + 1}`;
    img.className = "carousel-img";
    if (index === 0) img.classList.add("active");
    carousel.appendChild(img);
  });

  currentSlide = 0;
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-img");
  slides.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  const slides = document.querySelectorAll(".carousel-img");
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  const slides = document.querySelectorAll(".carousel-img");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}
