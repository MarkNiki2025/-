let hideTimeout;

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.remove("hidden");
  clearTimeout(hideTimeout);
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 800) { 
    header.classList.add('white-bg');
  } else {
    header.classList.remove('white-bg');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".alltextintheheadline");
  setTimeout(() => {
    section.classList.add("show");
  }, 500); 
});

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".center");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section.classList.add("show1");
        observer.unobserve(section); 
      }
    });
  }, {
    threshold: 0.3 
  });

  if (section) {
    observer.observe(section);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".numbers");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section.classList.add("show2");
        observer.unobserve(section); 
      }
    });
  }, {
    threshold: 0.3 
  });

  if (section) {
    observer.observe(section);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".left");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section.classList.add("show3");
        observer.unobserve(section); 
      }
    });
  }, {
    threshold: 0.3 
  });

  if (section) {
    observer.observe(section);
  }
});

const names = ["Петро Коваль", "Оксана Бузина", "Лариса Горбач"];
let currentIndex = 0;
let timeout;

function updateDots(index) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.style.opacity = "1";
      dot.style.backgroundColor = "white";
    } else {
      dot.style.opacity = "0.5";
      dot.style.backgroundColor = "rgb(231, 231, 235)";
    }
  });
}

function updateName(index) {
  document.getElementById("personName").textContent = names[index];
  currentIndex = index;
  updateDots(index);
  resetAutoChange();
}

function changeName(index) {
  updateName(index);
}

function autoChange() {
  currentIndex = (currentIndex + 1) % names.length;
  updateName(currentIndex);
}

function resetAutoChange() {
  clearTimeout(timeout);
  timeout = setTimeout(autoChange, 6000); 
}

window.onload = () => {
  updateName(0);
  resetAutoChange();
};

function initMap() {
  const location = { lat: 50.4501, lng: 30.5234 }; // Київ
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });

  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

window.initMap = initMap;