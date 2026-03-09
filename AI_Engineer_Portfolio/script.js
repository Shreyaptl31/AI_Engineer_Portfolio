// Navbar 
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar-collapse');
        const bsCollapse = new bootstrap.Collapse(navbar, {
            toggle: false
        });
        bsCollapse.hide();
    });
});

// hero section 
const roles = [
    "AI Engineer",
    "LLM Application Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.querySelector(".typing");

function typingEffect() {
    const current = roles[roleIndex];
    typingEl.textContent = current.substring(0, charIndex);

    if (!isDeleting && charIndex < current.length) {
        charIndex++;
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
    }

    if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(() => { }, 1200);
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typingEffect, isDeleting ? 70 : 120);
}
typingEffect();



// Success Message 
function showSuccess() {
    setTimeout(() => {
        document.getElementById("form-success").style.display = "block";
        document.querySelector(".contact-form").reset();
    }, 600);
}
// contact number 

const phoneInput = document.getElementById("phone");
const phoneError = document.getElementById("phone-error");
const successMsg = document.getElementById("form-success");

// 🔴 LIVE VALIDATION
phoneInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "");

    if (this.value.length === 0) {
        phoneError.style.display = "none";
    } else if (this.value.length < 10) {
        phoneError.style.display = "block";
        phoneError.textContent = "Phone number must be exactly 10 digits.";
    } else if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
        phoneError.style.display = "none";
    } else {
        phoneError.style.display = "none";
    }
});

// 🔴 SUBMIT BLOCKING
function validateForm() {
    const phone = phoneInput.value.trim();

    if (!/^\d{10}$/.test(phone)) {
        phoneError.style.display = "block";
        phoneError.textContent = "Enter a valid 10-digit mobile number.";
        phoneInput.focus();
        successMsg.style.display = "none";
        return false; // ❌ STOP SUBMISSION
    }

    // ✅ ALLOW SUBMISSION
    setTimeout(() => {
        successMsg.style.display = "block";
    }, 500);

    return true;
}



// const snowContainer = document.querySelector('.snow-container');
// const snowCount = window.innerWidth < 768 ? 50 : 65;

// for (let i = 0; i < snowCount; i++) {
//     const snow = document.createElement('div');
//     snow.classList.add('snowflake');
//     snow.innerHTML = '❄';


//     snow.style.left = Math.random() * 100 + 'vw';
//     snow.style.animationDuration = Math.random() * 5 + 5 + 's';
//     snow.style.fontSize = Math.random() * 12 + 10 + 'px';
//     snow.style.opacity = Math.random();

//     snowContainer.appendChild(snow);
// }
// setTimeout(() => {
//     snowContainer.innerHTML = '';
// }, 50000);
