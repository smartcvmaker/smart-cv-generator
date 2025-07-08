function generateCV() {
  const data = {
    name: document.getElementById("name").value,
    image: document.getElementById("image").value,
    summary: document.getElementById("summary").value,
    experience: document.getElementById("experience").value,
    education: document.getElementById("education").value,
    skills: document.getElementById("skills").value,
  };

  localStorage.setItem("cvData", JSON.stringify(data));
  window.location.href = "cv-template.html";
}
