document.addEventListener("DOMContentLoaded", function () {
    const typingText = document.querySelector(".typing-text");
    const words = [
        { text: "Web Developer.", color: "#00D4FF" }, 
        { text: "Human Resources.", color: "#04ff00" }
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        typingText.style.color = currentWord.color; 

        if (isDeleting) {
            typingText.textContent = currentWord.text.substring(0, charIndex--);
        } else {
            typingText.textContent = currentWord.text.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentWord.text.length + 1) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, isDeleting ? 100 : 150);
        }
    }

    typeEffect();

    // ✅ Fixed Hamburger Menu Toggle
    const menu = document.querySelector(".menu");
    const hamburger = document.querySelector(".hamburger");

    if (!menu || !hamburger) return;

    function toggleMenu() {
        menu.classList.toggle("active");
        let icon = hamburger.querySelector("i");

        if (menu.classList.contains("active")) {
            icon.classList.replace("fa-bars", "fa-times");
        } else {
            icon.classList.replace("fa-times", "fa-bars");
        }
    }

    hamburger.addEventListener("click", toggleMenu);

    // ✅ Close menu when clicking outside (but not when clicking on menu items)
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
            menu.classList.remove("active");
            hamburger.querySelector("i").classList.replace("fa-times", "fa-bars");
        }
    });

    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("touchstart", function () {
            this.classList.add("active");
        });

        link.addEventListener("touchend", function () {
            setTimeout(() => this.classList.remove("active"), 500);
        });
    });

    // ✅ Add tooltips and open social icons in new tab
    document.querySelectorAll(".media-icons a").forEach(icon => {
        icon.setAttribute("target", "_blank");
        icon.setAttribute("title", icon.getAttribute("href"));

        icon.addEventListener("click", () => {
            icon.style.transform = "scale(1.1)";
            setTimeout(() => icon.style.transform = "scale(1)", 200);
        });
    });

    // ✅ Download CV button confirmation
    const downloadButton = document.querySelector(".buttons button");
    if (downloadButton) {
        downloadButton.addEventListener("click", function (event) {
            const confirmDownload = confirm("Do you want to download Sarvesh's CV?");
            if (!confirmDownload) {
                event.preventDefault();
            } else {
                alert("Downloading CV...");
            }
        });
    }
});

// Function to switch tabs in the About section
function opentab(tabName) {
    // Hide all tab contents
    let tabContents = document.querySelectorAll(".tab-contents");
    tabContents.forEach(tab => tab.classList.remove("active"));

    // Remove active class from all tab links
    let tabLinks = document.querySelectorAll(".tab-links");
    tabLinks.forEach(link => link.classList.remove("active"));

    // Show the selected tab and highlight the clicked tab
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}

// Set default tab on page load
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".tab-links").click();
});

document.addEventListener("DOMContentLoaded", function () {
    // Social Media Icon Links
    const socialLinks = {
        facebook: "https://www.facebook.com/yourprofile",
        whatsapp: "https://wa.me/8830806054",
        linkedin: "https://www.linkedin.com/in/sarvesh-patkar28102001",
        github: "https://github.com/sarveshpatkar"
    };

    const socialIcons = document.querySelectorAll(".media-icons a");

    socialIcons.forEach((icon, index) => {
        const platform = icon.querySelector("i").classList[1].split("-")[1]; // Extract platform name
        icon.href = socialLinks[platform];
        icon.target = "_blank";
    });

    // Download CV Button
    const downloadCVBtn = document.querySelector(".buttons button");

    downloadCVBtn.addEventListener("click", () => {
        window.open("assets/Sarvesh Patkar.pdf", "_blank"); // Adjust the path if needed
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const nodes = document.querySelectorAll('.tree-node');
  
    nodes.forEach((node, index) => {
      if (index < nodes.length - 1) {
        const line = document.createElement('div');
        line.className = 'connector-line';
        node.appendChild(line);
      }
    });
  });

