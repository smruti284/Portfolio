document.addEventListener("DOMContentLoaded", () => {
  // Profile picture animation
  gsap.fromTo("#profile-pic", { x: 100 }, { x: 0, duration: 5, ease: "power2.out" });

  // Typing Effect
  const text = "Front End Developer";
  function typeEffect() {
    let index = 0;
    const el = document.getElementById("typing-text");
    el.innerHTML = "";
    function typing() {
      if (index < text.length) {
        el.innerHTML += text.charAt(index);
        index++;
        setTimeout(typing, 100);
      } else {
        setTimeout(() => {
          index = 0;
          el.innerHTML = "";
          typing();
        }, 2000);
      }
    }
    typing();
  }
  typeEffect();

  // Dark Mode Toggle
  const toggleMode = document.getElementById("toggle-mode");
  toggleMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleMode.innerHTML = document.body.classList.contains("dark-mode")
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
  });

  // Navbar Scroll Effect
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });

  // Show/Hide Projects
  window.showProjects = function () {
    document.getElementById("project-list").classList.toggle("hidden");
  };

  // Skill Progress Animation
  const skills = document.querySelectorAll(".skill");

  gsap.to(skills, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.3,
    ease: "power2.out"
  });

  skills.forEach(skill => {
    const progress = skill.querySelector(".progress");
    const percent = skill.querySelector(".percent");
    const target = parseInt(progress.dataset.percent);

    gsap.to(progress, {
      width: progress.dataset.percent,
      duration: 5.2,
      ease: "power2.out",
      delay: 0.13
    });

    let counter = { val: 0 };
    gsap.to(counter, {
      val: target,
      duration: 5.2,
      ease: "power2.out",
      delay: 0.13,
      onUpdate: () => {
        percent.textContent = `${Math.round(counter.val)}%`;
      }
    });
  });

  // Contact Form Submission (Frontend only)
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMsg");

  form?.addEventListener("submit", function (e) {
    e.preventDefault();
    successMsg.textContent = "Thank you! Your message has been submitted.";
    form.reset();
  });
  <script>
  // Sticky navbar on scroll
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Project box toggle
  function showProjects() {
    const list = document.getElementById('project-list');
    list.classList.toggle('hidden');
  }
</script>

});
