document.addEventListener("DOMContentLoaded", () => {
    const toggleExperienceButton = document.getElementById('toggleExperience') as HTMLButtonElement;
    const experienceSection = document.getElementById('experienceSection') as HTMLDivElement;

    const toggleSkillsButton = document.getElementById('toggleSkills') as HTMLButtonElement;
    const skillsSection = document.getElementById('skillsSection') as HTMLDivElement;

    if (toggleExperienceButton && experienceSection) {
        toggleExperienceButton.addEventListener('click', () => {
            experienceSection.classList.toggle('d-none');
            toggleExperienceButton.textContent = experienceSection.classList.contains('d-none') ? 'Show' : 'Hide';
        });
    }

    if (toggleSkillsButton && skillsSection) {
        toggleSkillsButton.addEventListener('click', () => {
            skillsSection.classList.toggle('d-none');
            toggleSkillsButton.textContent = skillsSection.classList.contains('d-none') ? 'Show' : 'Hide';
        });
    }
});
