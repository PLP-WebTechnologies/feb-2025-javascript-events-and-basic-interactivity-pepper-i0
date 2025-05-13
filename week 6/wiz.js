// Button click changes text and color
const clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click", () => {
  clickBtn.textContent = "Clicked!";
  clickBtn.style.backgroundColor = "#ff6347"; // Tomato color
});

// Hover effect on another button
const hoverBtn = document.getElementById("hoverBtn");
hoverBtn.addEventListener("mouseover", () => {
  hoverBtn.style.backgroundColor = "#ffeb3b"; // Yellow
});
hoverBtn.addEventListener("mouseout", () => {
  hoverBtn.style.backgroundColor = "";
});

// Keypress detection (e.g., Enter key)
document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    alert("Enter key was pressed!");
  }
});

// Double-click or Long press detection
let longPressTimeout;
const doubleClickBtn = document.getElementById("clickBtn");
doubleClickBtn.addEventListener("mousedown", () => {
  longPressTimeout = setTimeout(() => {
    alert("Long press detected!");
  }, 1000); // Trigger after 1 second
});
doubleClickBtn.addEventListener("mouseup", () => {
  clearTimeout(longPressTimeout);
});

// Image Gallery (Slideshow functionality)
const images = document.querySelectorAll(".galleryImage");
let currentImageIndex = 0;

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    currentImageIndex = index;
    alert("Image " + (currentImageIndex + 1) + " clicked!");
  });
});

// Form validation
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  const email = document.getElementById("emailField").value;
  const password = document.getElementById("passwordField").value;
  
  if (password.length < 8) {
    event.preventDefault();
    alert("Password must be at least 8 characters long.");
  }

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    event.preventDefault();
    alert("Invalid email format.");
  }
});
