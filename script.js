document.getElementById('cvForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const reference = data.get("reference") || "Available upon request.";

  const photoFile = document.getElementById('photo').files[0];
  const reader = new FileReader();

  reader.onload = function () {
    const photoHTML = photoFile ? `<div class="cv-photo"><img src="${reader.result}" /></div>` : "";

    const cvHTML = `
      <div class="cv">
        ${photoHTML}
        <div>
          <h2>${data.get("name")}</h2>
          <p><strong>${data.get("jobtitle") || ""}</strong></p>
          <p><strong>Email:</strong> ${data.get("email")}</p>
          <p><strong>Phone:</strong> ${data.get("phone")}</p>
          ${data.get("address") ? `<p><strong>Address:</strong> ${data.get("address")}</p>` : ""}
          ${data.get("linkedin") ? `<p><strong>LinkedIn:</strong> ${data.get("linkedin")}</p>` : ""}
          ${data.get("website") ? `<p><strong>Website:</strong> ${data.get("website")}</p>` : ""}

          <div class="cv-section"><h3>Objective</h3><p>${data.get("objective")}</p></div>
          <div class="cv-section"><h3>Skills</h3><p>${data.get("skills")}</p></div>
          <div class="cv-section"><h3>Education</h3><p>${data.get("education")}</p></div>
          <div class="cv-section"><h3>Experience</h3><p>${data.get("experience")}</p></div>
          ${data.get("languages") ? `<div class="cv-section"><h3>Languages</h3><p>${data.get("languages")}</p></div>` : ""}
          ${data.get("certifications") ? `<div class="cv-section"><h3>Certifications</h3><p>${data.get("certifications")}</p></div>` : ""}
          <div class="cv-section"><h3>Reference</h3><p>${reference}</p></div>
        </div>
      </div>
    `;

    document.getElementById("cvOutput").innerHTML = cvHTML;
    window.scrollTo(0, document.body.scrollHeight);
  };

  if (photoFile) {
    reader.readAsDataURL(photoFile);
  } else {
    reader.onload();
  }
});
