const carData = {
  '911': {
    title: "Porsche 911 Carrera S",
    description: "Eleganza e prestazioni, motore boxer da 450 CV, trazione posteriore e uno stile iconico.",
    price: "€145.000",
    images: [
      "https://i.postimg.cc/BnnH5bYn/911.jpg",
      "https://i.postimg.cc/0NLSqf8z/9111.jpg",
      "https://i.postimg.cc/hGJmwwqF/91111.jpg"
    ]
  },
  'r8': {
    title: "Audi R8 V10 Performance",
    description: "Motore V10 aspirato, trazione integrale quattro e una linea inconfondibile.",
    price: "€185.000",
    images: [
      "https://i.postimg.cc/C5p6dk41/r88.jpg",
      "https://i.postimg.cc/yxhpRxfT/r8888.jpg",
      "https://i.postimg.cc/5yJnf1xQ/r8.jpg"
    ]
  },
  'ferrari488': {
    title: "Ferrari 488 GTB",
    description: "Motore V8 turbo da 670 CV, prestazioni estreme e design italiano inconfondibile.",
    price: "€250.000",
    images: [
      "https://i.postimg.cc/ht84G1bJ/ferrari488.jpg",
      "https://i.postimg.cc/SKySYYDg/ferrari4888.jpg",
      "https://i.postimg.cc/5tnxB9rb/ferrari48888.jpg"
    ]
  },
  'lamboHuracan': {
    title: "Lamborghini Huracán EVO",
    description: "V10 aspirato da 640 CV, design aggressivo e trazione integrale performante.",
    price: "€280.000",
    images: [
      "https://i.postimg.cc/Ghdd5y1d/lambo.jpg",
      "https://i.postimg.cc/6pQw9x3P/lamboo.jpg",
      "https://i.postimg.cc/Jzd80YHz/lambooo.jpg"
    ]
  },
  'mclaren720s': {
    title: "McLaren 720S",
    description: "Supercar inglese con motore V8 biturbo da 720 CV e aerodinamica avanzata.",
    price: "€310.000",
    images: [
      "https://i.postimg.cc/8zgW3wzs/mc.jpg",
      "https://i.postimg.cc/zGwW1Wy7/mcccc.jpg",
      "https://i.postimg.cc/1z9FRt6Q/mccccc.jpg"
    ]
  },
  'astonMartin': {
    title: "Aston Martin DB11",
    description: "Eleganza britannica, motore V12 da 600 CV e lusso raffinato.",
    price: "€200.000",
    images: [
      "https://i.postimg.cc/L6pLQNX5/ast.jpg",
      "https://i.postimg.cc/RZCf4hwz/astt.jpg",
      "https://i.postimg.cc/Hs95qXc2/asttt.jpg"
    ]
  },
  'nissanGTR': {
    title: "Nissan GT-R Nismo",
    description: "Sportiva giapponese con motore V6 biturbo da 600 CV e tecnologia avanzata.",
    price: "€150.000",
    images: [
      "https://i.postimg.cc/9FD5Stn3/jdm.jpg",
      "https://i.postimg.cc/m2KfGzvP/jdmm.jpg",
      "https://i.postimg.cc/x1HrjjQt/jdmmm.jpg"
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
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('searchInput').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll('.car-card');

    cards.forEach(function (card) {
      const title = card.querySelector('h2').textContent.toLowerCase();
      const description = card.querySelector('p').textContent.toLowerCase();
      const price = card.querySelector('.price').textContent.toLowerCase();

      if (title.includes(query) || description.includes(query) || price.includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});