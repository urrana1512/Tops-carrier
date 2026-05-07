// Navbar scroll effect
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.remove("transparent");
    nav.classList.add("scrolled");
  } else {
    nav.classList.add("transparent");
    nav.classList.remove("scrolled");
  }
});
// function bookSession() {
//   const message = encodeURIComponent(
//     "Hello, I would like to book a crime awareness session."
//   );
//   window.open("https://wa.me/917990050104?text=" + message, "_blank");
// }
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function openBooking() {
  document.getElementById("bookingModal").style.display = "flex";
  currentSlide = 0;
  showSlide(currentSlide);
}

function closeBooking() {
  document.getElementById("bookingModal").style.display = "none";
}

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  if (currentSlide === 1 && !validateEmail()) return;

  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  } else {
    submitData();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
}

function skipSlide() {
  nextSlide();
}

function validateEmail() {
  const email = document.getElementById("email").value;
  const error = document.getElementById("emailError");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
    error.textContent = "Enter a valid email address";
    return false;
  }
  error.textContent = "";
  return true;
}

const countryData = {
  India: {
    Gujarat: ["Ahmedabad", "Surat"],
    Maharashtra: ["Mumbai", "Pune"],
  },
  USA: {
    California: ["Los Angeles", "San Diego"],
    Texas: ["Houston", "Dallas"],
  },
};

const country = document.getElementById("country");
const state = document.getElementById("state");
const city = document.getElementById("city");

country.innerHTML =
  `<option value="">Select country</option>` +
  Object.keys(countryData)
    .map((c) => `<option>${c}</option>`)
    .join("");

country.onchange = () => {
  state.innerHTML = `<option>Select state</option>`;
  city.innerHTML = `<option>Select city</option>`;
  Object.keys(countryData[country.value]).forEach((s) => {
    state.innerHTML += `<option>${s}</option>`;
  });
};

state.onchange = () => {
  city.innerHTML = `<option>Select city</option>`;
  countryData[country.value][state.value].forEach((c) => {
    city.innerHTML += `<option>${c}</option>`;
  });
};

function submitData() {
  const msg = `
Name: ${name.value}
Email: ${email.value}
Age: ${age.value}
Profession: ${profession.value}
Organization: ${organization.value}
Country: ${country.value}
State: ${state.value}
City: ${city.value}
  `;

  window.open(
    "https://wa.me/917990050104?text=" + encodeURIComponent(msg),
    "_blank"
  );
}

function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  menu.classList.toggle("show");
}

(function () {
  emailjs.init("YyaZ6RsGBn_tVrUDE"); // replace with your EmailJS public key
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_thrqe0w", // replace
      "template_1b75qvm", // replace
      this
    )
    .then(
      function () {
        document.getElementById("successMsg").style.display = "block";
        document.getElementById("contactForm").reset();
      },
      function () {
        alert("Message sending failed. Please try again.");
      }
    );
});

// document.getElementById("mailtoForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const subject = document.getElementById("subject").value;
//   const message = document.getElementById("message").value;

//   const mailtoLink = `mailto:imunknown0507@gmail.com
//       ?subject=${encodeURIComponent(subject)}
//       &body=${encodeURIComponent(
//         "Name: " + name + "\n" + "Email: " + email + "\n\n" + message
//       )}`;

//   // Show success message
//   document.getElementById("successMsg").style.display = "block";

//   window.location.href = mailtoLink;

//   // Optional: reset form
//   this.reset();
// });
