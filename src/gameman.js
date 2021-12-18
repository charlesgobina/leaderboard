export default class GameManager {
  gameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/czCBThdljYeFh5GEzrDY/scores/';

  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  async addScore(user, score) {
    const data = { user, score };
    const response = await fetch(this.gameUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const finalResponse = await response.json();
    return finalResponse;
  }

  async displayScore() {
    const response = await fetch(this.gameUrl, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const finalResponse = await response.json();
    if (response.status === 200) {
      return finalResponse;
    }
    return null;
  }

  static renderer(data, container) {
    let parent = '';
    data.result.forEach((resu) => {
      parent += `
      <li>
        <span>${resu.user}</span>
        <span>${resu.score}</span>
      </li>
      `;
    });
    container.innerHTML = parent;
  }
}