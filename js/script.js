      // Live date & time (updates every second, blinking separators in CSS)
      const clockDate = document.getElementById("clockDate");
      const clockHour = document.getElementById("clockHour");
      const clockMin = document.getElementById("clockMin");
      const clockSec = document.getElementById("clockSec");

      function updateClock() {
        const now = new Date();
        if (clockDate) {
          clockDate.textContent = now.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          });
        }
        const pad = (n) => String(n).padStart(2, "0");
        if (clockHour) clockHour.textContent = pad(now.getHours());
        if (clockMin) clockMin.textContent = pad(now.getMinutes());
        if (clockSec) clockSec.textContent = pad(now.getSeconds());
      }
      updateClock();
      setInterval(updateClock, 1000);

      // Footer year
      const footerYear = document.getElementById("footerYear");
      if (footerYear) footerYear.textContent = new Date().getFullYear();

      // Contact form simulation
      const form = document.getElementById("contactForm");
      const feedback = document.getElementById("formFeedback");
      if (form) {
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          const name = document.getElementById("name").value.trim();
          const message = document.getElementById("message").value.trim();
          if (!name || !message) {
            feedback.style.color = "#f2c94c";
            feedback.textContent = "> please fill in both fields.";
            return;
          }
          feedback.style.color = "#6fcf97";
          feedback.textContent = `> thanks, ${name}! your message was sent (simulated).`;
          form.reset();
          setTimeout(() => (feedback.textContent = ""), 4000);
        });
      }

      // Terminal-style log on project card click
      document.querySelectorAll(".project-card").forEach((card) => {
        card.addEventListener("click", (e) => {
          if (e.target.tagName === "A") return;
          const title =
            card.querySelector(".project-title")?.innerText || "project";
          console.log(
            `%c> cat ~/projects/${title.toLowerCase().replace(/\s/g, "_")}.md`,
            "color: #7ab7ff; font-family: monospace;",
          );
        });
      });
