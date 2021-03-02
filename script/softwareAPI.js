'use strict';
async function fetchGithub() {
  const url = 'https://api.github.com/users/firatmelih/repos';
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
    },
    method: 'GET',
  });
  const data = await response.json();

  const tableBody = document.querySelector('.table-body');
  data.forEach((repo) => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    const firstContent = document.createTextNode(repo.name);
    const secondContent = document.createTextNode(repo.language);
    const thirdContent = document.createTextNode(
      repo.updated_at.substring(0, 10)
    );

    td1.appendChild(firstContent);
    td2.appendChild(secondContent);
    td3.appendChild(thirdContent);

    const childsToAppend = [td1, td2, td3];

    for (let i = 0; i < childsToAppend.length; i++) {
      tr.appendChild(childsToAppend[i]);
    }

    tableBody.appendChild(tr);
  });
}

fetchGithub();

