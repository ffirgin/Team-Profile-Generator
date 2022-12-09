const createTeam = team => {
  const createManager = (manager) => {
    return `
    <div>
    <div>
      <h2>${manager.name}</h2>
      <h3>${manager.getRole()}</h3>
    </div>
    <div>
      <ul>
        <li>ID: ${manager.getId()}</li>
        <li>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li>Office number: ${manager.getOfficeNumber()}</li>
      </ul>
    </div>
  </div>
    `;
  };

  const createEngineer = (engineer) => {
    return `
    <div>
    <div>
      <h2>${engineer.getName()}</h2>
      <h3>${engineer.getRole()}</h3>
    </div>
    <div>
      <ul>
        <li>ID: ${engineer.getId()}</li>
        <li>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li>GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank">${engineer.getGitHub()}</a></li>
      </ul>
    </div>
  </div>
    `;
  };

  const createIntern = (intern) => {
    return `
    <div>
    <div>
      <h2>${intern.getName()}</h2>
      <h3>${intern.getRole()}</h3>
    </div>
    <div>
      <ul>
        <li>ID: ${intern.getId()}</li>
        <li>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li>School: ${intern.getSchool()}</li>
      </ul>
    </div>
  </div>
    `;
  };

  const finalHTML = [];

  finalHTML.push(team.filter(employee => employee.getRole() === "Manager").map(manager => createManager(manager)));
  finalHTML.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => createEngineer(engineer)));
  finalHTML.push(team.filter(employee => employee.getRole() === "Intern").map(intern => createIntern(intern)));

  return finalHTML.join("");
}

module.exports = team => {

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <div>
      <div>
        <div>
          <h1>Team Profile</h1>
        </div>
      </div>
    </div>
    <div>
      <div>
        <div>
          ${createTeam(team)}
        </div>
      </div>
    </div>
  </body>
  </html>
  `;
};