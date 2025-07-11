function getParam(name) {
  const url = new URL(window.location.href);
  return decodeURIComponent(url.searchParams.get(name) || "");
}

document.getElementById("fullName").textContent = getParam("fullName");
document.getElementById("email").textContent = "📧 " + getParam("email");
document.getElementById("phone").textContent = "📞 " + getParam("phone");
document.getElementById("address").textContent = "🌍 " + getParam("address");
document.getElementById("linkedin").textContent = "🔗 " + getParam("linkedin");
document.getElementById("website").textContent = "💼 " + getParam("website");
document.getElementById("objective").textContent = getParam("objective");
document.getElementById("education").textContent = getParam("education");

const expDiv = document.getElementById("experience");
expDiv.innerHTML = getParam("experience").split(";").map(e => `<p>${e}</p>`).join("");

const skillsDiv = document.getElementById("skills");
skillsDiv.innerHTML = getParam("skills").split(",").map(skill => `<span>${skill}</span>`).join("");

const langDiv = document.getElementById("languages");
langDiv.innerHTML = getParam("languages").split(",").map(lang => `<span>${lang}</span>`).join("");

const certDiv = document.getElementById("certifications");
certDiv.innerHTML = getParam("certifications").split(";").map(c => `<p>${c}</p>`).join("");

const ref = getParam("reference");
document.getElementById("reference").textContent = ref || "Available upon request";
