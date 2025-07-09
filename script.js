document.getElementById('cv-form').addEventListener('submit', function(e) { e.preventDefault(); const form = e.target; const data = new FormData(form);

const reference = data.get('reference')?.trim() || 'Available upon request.'; const photoFile = data.get('photo');

const reader = new FileReader(); reader.onload = function () { const photoURL = photoFile && photoFile.name ? reader.result : '';

const cvHTML = `
<div class="cv-container">
  <div class="cv-left">
    ${photoURL ? `<img src="${photoURL}" class="cv-photo">` : ''}
    <div class="cv-section">
      <h2>${data.get('fullName')}</h2>
      ${data.get('email') ? `<p>Email: ${data.get('email')}</p>` : ''}
      <p>Phone: ${data.get('phone')}</p>
      ${data.get('address') ? `<p>Address: ${data.get('address')}</p>` : ''}
      ${data.get('linkedin') ? `<p>LinkedIn: ${data.get('linkedin')}</p>` : ''}
      ${data.get('website') ? `<p>Website: ${data.get('website')}</p>` : ''}
    </div>
    ${data.get('languages') ? `<div class="cv-section"><h2>Languages</h2><p>${data.get('languages')}</p></div>` : ''}
    ${data.get('hobbies') ? `<div class="cv-section"><h2>Hobbies</h2><p>${data.get('hobbies')}</p></div>` : ''}
  </div>

  <div class="cv-right">
    <div class="cv-section">
      <h2>Objective</h2>
      <p>${data.get('objective')}</p>
    </div>

    <div class="cv-section">
      <h2>Skills</h2>
      <p>${data.get('skills')}</p>
    </div>

    <div class="cv-section">
      <h2>Education</h2>
      <p>${data.get('education')}</p>
    </div>

    <div class="cv-section">
      <h2>Experience</h2>
      <p>${data.get('experience')}</p>
    </div>

    ${data.get('certifications') ? `<div class="cv-section"><h2>Certifications</h2><p>${data.get('certifications')}</p></div>` : ''}

    <div class="cv-section">
      <h2>Reference</h2>
      <p>${reference}</p>
    </div>
  </div>
</div>
`;

document.body.innerHTML = cvHTML;

};

if (photoFile && photoFile.name) { reader.readAsDataURL(photoFile); } else { reader.onload(); } });

