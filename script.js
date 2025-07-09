// Sample formData object (normally filled dynamically after form submission)
const formData = {
  fullName: "Eman Ahmed",
  email: "smartcv.pk@gmail.com",
  phone: "+92 300 1234567",
  location: "Baldia Town, Karachi",
  linkedin: "linkedin.com/in/emanahmed",
  website: "www.smartcv.pk",

  objective: "To secure a responsible career opportunity in a reputable organization to expand my learnings and skills.",
  education: "BS Computer Science – University of Karachi (2020 - 2024)",
  experience: `Operation Executive, Spog On Logistics (Aug 2024 – Present)
Technical Incharge, Pakistan Steel Mills (2022 – 2024)`,

  skills: "HTML, CSS, JavaScript, Automation, CV Writing",
  languages: "English, Urdu",
  certifications: `Google UX Design Certificate
AI & Automation Tools – Coursera`,
  reference: "" // Leave empty to auto-show "Available upon request"
};


// Main Function
function populateCV(data) {
  // Sidebar Info
  document.querySelector(".sidebar h2").textContent = data.fullName || "Your Name";
  setTextOrRemove(".sidebar", "📧", data.email);
  setTextOrRemove(".sidebar", "📞", data.phone);
  setTextOrRemove(".sidebar", "🌍", data.location);
  setTextOrRemove(".sidebar", "🔗", data.linkedin);
  setTextOrRemove(".sidebar", "💼", data.website);

  // Main CV Sections
  setSection(".main", "Objective", data.objective);
  setSection(".main", "Education", data.education);
  setSection(".main", "Experience", data.experience);
  setTagsSection(".main", "Skills", data.skills);
  setTagsSection(".main", "Languages", data.languages);
  setSection(".main", "Certifications", data.certifications);

  // Reference
  const refText = data.reference?.trim()
    ? data.reference
    : "Available upon request";
  setSection(".main", "Reference", refText);
}

// Utility to insert or remove sidebar text
function setTextOrRemove(containerSelector, labelIcon, value) {
  const container = document.querySelector(containerSelector);
  const existing = Array.from(container.querySelectorAll("p")).find(p =>
    p.textContent.includes(labelIcon)
  );
  if (value) {
    if (existing) existing.textContent = `${labelIcon} ${value}`;
    else {
      const p = document.createElement("p");
      p.textContent = `${labelIcon} ${value}`;
      container.appendChild(p);
    }
  } else if (existing) {
    existing.remove();
  }
}

// Utility to create or remove main CV sections
function setSection(mainSelector, headingText, bodyText) {
  const main = document.querySelector(mainSelector);
  let section = Array.from(main.querySelectorAll(".section")).find(s =>
    s.querySelector("h3")?.textContent === headingText
  );

  if (bodyText?.trim()) {
    if (!section) {
      section = document.createElement("div");
      section.className = "section";
      section.innerHTML = `<h3>${headingText}</h3><p></p>`;
      main.appendChild(section);
    }
    section.querySelector("p").innerHTML = bodyText.replace(/\n/g, "<br>");
  } else if (section) {
    section.remove();
  }
}

// Utility to handle tags (skills, languages, etc.)
function setTagsSection(mainSelector, headingText, tagsString) {
  const main = document.querySelector(mainSelector);
  let section = Array.from(main.querySelectorAll(".section")).find(s =>
    s.querySelector("h3")?.textContent === headingText
  );

  if (tagsString?.trim()) {
    const tags = tagsString.split(",").map(t => t.trim()).filter(t => t);
    if (!section) {
      section = document.createElement("div");
      section.className = "section";
      section.innerHTML = `<h3>${headingText}</h3>`;
      main.appendChild(section);
    } else {
      section.innerHTML = `<h3>${headingText}</h3>`;
    }

    tags.forEach(tag => {
      const span = document.createElement("span");
      span.textContent = tag;
      section.appendChild(span);
    });
  } else if (section) {
    section.remove();
  }
}

// Run this on page load or after form submission
populateCV(formData);
