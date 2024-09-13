document.addEventListener("DOMContentLoaded", () => {
  const toggleSection = (buttonId, sectionId) => {
    const toggleButton = document.getElementById(buttonId);
    const section = document.getElementById(sectionId);

    if (toggleButton && section) {
      toggleButton.addEventListener("click", () => {
        section.classList.toggle("d-none");
        toggleButton.textContent = section.classList.contains("d-none") ? "▼" : "▲";
      });
    }
  };

  toggleSection("toggleExperience", "experienceSection");
  toggleSection("toggleEducation", "educationSection");
  toggleSection("toggleSkills", "skillsSection");
});
