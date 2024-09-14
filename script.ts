document.addEventListener("DOMContentLoaded", () => {
    // Get elements by ID
    const toggleExperienceButton = document.getElementById('toggleExperience') as HTMLButtonElement;
    const experienceSection = document.getElementById('experienceSection') as HTMLDivElement;

    const toggleEducationButton = document.getElementById('toggleEducation') as HTMLButtonElement;
    const educationSection = document.getElementById('educationSection') as HTMLDivElement;

    const toggleSkillsButton = document.getElementById('toggleSkills') as HTMLButtonElement;
    const skillsSection = document.getElementById('skillsSection') as HTMLDivElement;

    if (toggleExperienceButton && experienceSection) {
        toggleExperienceButton.addEventListener('click', () => {
            experienceSection.classList.toggle('d-none');
            toggleExperienceButton.textContent = experienceSection.classList.contains('d-none') ? 'Show Experience' : 'Hide Experience';
        });
    }

    if (toggleSkillsButton && skillsSection) {
        toggleSkillsButton.addEventListener('click', () => {
            skillsSection.classList.toggle('d-none');
            toggleSkillsButton.textContent = skillsSection.classList.contains('d-none') ? 'Show Skills' : 'Hide Skills';
        });
    }

    if (toggleEducationButton && educationSection) {
        toggleEducationButton.addEventListener('click', () => {
            educationSection.classList.toggle('d-none');
            toggleEducationButton.textContent = educationSection.classList.contains('d-none') ? 'Show Education' : 'Hide Education';
        });
    }
});
