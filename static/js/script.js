// =========================
// Mobile Menu Toggle
// =========================
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");

if (mobileMenuBtn && navMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking on a link
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}

// =========================
// FAQ Toggle
// =========================
function toggleFAQ(button) {
  const answer = button.nextElementSibling;
  const icon = button.querySelector('.faq-icon');
  answer.classList.toggle('active');

  if (answer.classList.contains('active')) {
    answer.style.maxHeight = answer.scrollHeight + 'px';
    icon.textContent = '−';
  } else {
    answer.style.maxHeight = null;
    icon.textContent = '+';
  }
}


// =========================
// Newsletter Form
// =========================
const newsletterForm = document.getElementById("newsletterForm");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = newsletterForm.querySelector('input[type="email"]').value;
    const button = newsletterForm.querySelector("button");
    const originalText = button.textContent;

    try {
      button.textContent = "Subscribing...";
      button.disabled = true;

      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        newsletterForm.querySelector('input[type="email"]').value = "";
        button.textContent = "Subscribed!";
        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
        }, 3000);
      } else {
        alert(data.message);
        button.textContent = originalText;
        button.disabled = false;
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
      button.textContent = originalText;
      button.disabled = false;
    }
  });
}

// =========================
// Smooth Scroll
// =========================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

// =========================
// Intersection Observer (Animations)
// =========================

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll(".pricing-card").forEach((el) => {
  observer.observe(el);
});

// =========================
// Get Started
// =========================


const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };
        
      
        fetch('http://your-server-address.com/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
               
                window.location.href = 'dashboard.html';
            } else {
                
                alert('Registration failed: ' + data.message);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred during registration.');
        });



// ============================
// 🔐 Handle Login (Sign In)
// ============================
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const msgBox = document.getElementById("loginMessage");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      msgBox.textContent = data.message;
      msgBox.style.color = data.success ? "green" : "red";

      if (data.success) {
        setTimeout(() => (window.location.href = "/"), 1000);
      }
    } catch (err) {
      msgBox.textContent = "Something went wrong!";
      msgBox.style.color = "red";
    }
  });
}
