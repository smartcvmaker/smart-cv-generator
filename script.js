document.getElementById("cvForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);
  const get = name => data.get(name) || '';

  const skills = get("skills").split(",").map(s => s.trim());
  const languages = get("languages").split(",").map(l => l.trim());
  const reference = get("reference") || "Available upon request";

  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>${get("name")}'s CV</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif; }
      body { background: #f9f9f9; padding: 30px; color: #333; }
      .container { display: flex; max-width: 1000px; margin: auto; box-shadow: 0 0 15px rgba(0,0,0,0.1); background: #fff; border-radius: 12px; overflow: hidden; }
      .sidebar { background: linear-gradient(180deg, #5D9CFF, #A25CFF); color: white; padding: 30px; width: 35%; }
      .sidebar h2 { margin-bottom: 10px; font-size: 26px; font-weight: 700; }
      .sidebar p { margin: 10px 0; font-size: 14px; }
      .main { padding: 30px; width: 65%; }
      .main h3 { color: #5D9CFF; margin-bottom: 5px; }
      .section { margin-bottom: 20px; }
      .section p { font-size: 14px; line-height: 1.5; }
      .skills span, .languages span { display: inline-block; background: #EAEAFF; padding: 5px 10px; border-radius: 6px; margin: 5px 5px 0 0; font-size: 13px; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="sidebar">
        <h2>${get("name")}</h2>
        <p>📧 ${get("email")}</p>
        <p>📞 ${get("phone")}</p>
        <p>🌍 ${get("location")}</p>
        <p>🔗 ${get("linkedin")}</p>
        <p>💼 ${get("website")}</p>
      </div>
      <div class="main">
        <div class="section">
          <h3>Objective</h3>
          <p>${get("objective")}</p>
        </div>
        <div class="section">
          <h3>Education</h3>
          <p>${get("education")}</p>
        </div>
        <div class="section">
          <h3>Experience</h3>
          <p>${get("experience")}</p>
        </div>
        <div class="section skills">
          <h3>Skills</h3>
          ${skills.map(skill => `<span>${skill}</span>`).join('')}
        </div>
        <div class="section languages">
          <h3>Languages</h3>
          ${languages.map(lang => `<span>${lang}</span>`).join('')}
        </div>
        <div class="section">
          <h3>Certifications</h3>
          <p>${get("certifications")}</p>
        </div>
        <div class="section">
          <h3>Reference</h3>
          <p>${reference}</p>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;

  const newWindow = window.open("", "_blank");
  newWindow.document.write(html);
  newWindow.document.close();
});
