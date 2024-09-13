// script.ts
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form') as HTMLFormElement;
    
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // Get form data
            const formData = new FormData(form);
            const data = {
                firstName: formData.get('firstName') as string,
                lastName: formData.get('lastName') as string,
                email: formData.get('email') as string,
                phone: formData.get('phone') as string,
                position: formData.get('position') as string,
                education: formData.get('education') as string,
                educationAddress: formData.get('educationAddress') as string,
                educationDuration: formData.get('educationDuration') as string,
                experience: formData.get('experience') as string,
                experienceAddress: formData.get('experienceAddress') as string,
                experienceDuration: formData.get('experienceDuration') as string,
                skills: formData.get('skills') as string,
                interests: formData.get('interests') as string,
            };

            // Format full name
            const fullName = `${data.firstName} ${data.lastName}`;

            // Create resume HTML
            const resumeHtml = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${fullName}'s Resume</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                    <style>
                        .container {
                            max-width: 800px;
                            margin: 50px auto;
                            padding: 20px;
                            background: #fff;
                            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                            border-radius: 8px;
                        }
                        .header {
                            text-align: center;
                        }
                        .section {
                            margin-bottom: 20px;
                        }
                        .section__title {
                            font-size: 24px;
                            font-weight: bold;
                            color: #54AFE4;
                            margin-bottom: 10px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <div class="full-name">
                                <span>${fullName}</span>
                            </div>
                            <div class="contact-info">
                                <span>Email: ${data.email}</span>
                                <span class="separator"> | </span>
                                <span>Phone: ${data.phone}</span>
                            </div>
                            <hr>
                            <div class="about">
                                <span>${data.position}</span>
                                <p>${data.education}</p>
                            </div>
                        </div>
                        <div class="details">
                            <div class="section">
                                <div class="section__title">Education</div>
                                <div>${data.education} (${data.educationDuration})</div>
                                <div>${data.educationAddress}</div>
                            </div>
                            <div class="section">
                                <div class="section__title">Experience</div>
                                <div>${data.experience} (${data.experienceDuration})</div>
                                <div>${data.experienceAddress}</div>
                            </div>
                            <div class="section">
                                <div class="section__title">Skills</div>
                                <div>${data.skills}</div>
                            </div>
                            <div class="section">
                                <div class="section__title">Interests</div>
                                <p>${data.interests}</p>
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `;

            // Create a new Blob and open it in a new window
            const blob = new Blob([resumeHtml], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            window.open(url, '_blank');
        });
    }
});
