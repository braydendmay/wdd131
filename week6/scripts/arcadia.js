
function getCurrentYear() {
    return new Date().getFullYear();
}
//updates the year
document.addEventListener("DOMContentLoaded", function() {
    var yearSpan = document.querySelector("#year span.highlight");
    if (yearSpan) {
		yearSpan.textContent = getCurrentYear();
    }
});


document.addEventListener("DOMContentLoaded", function() {
    var lastModifiedDate = document.lastModified;
    var modifiedParagraph = document.querySelector("footer p:nth-of-type(2)");
    if (modifiedParagraph) {
        modifiedParagraph.textContent = "Last modified: " + lastModifiedDate;
    }
});

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const games = [
    {
      gameName: "Pac Man",
      cost: ".25",
      highScore: 120000,
      area: 11500,
      imageUrl:
      "https://th.bing.com/th/id/OIP.M-ALHinabbcLQZRk-QDarwHaEL?w=300&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    {
      gameName: "Pac Man",
      cost: ".25",
      highScore: 120000,
      area: 74792,
      imageUrl:
      "https://th.bing.com/th/id/OIP.M-ALHinabbcLQZRk-QDarwHaEL?w=300&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    {
      gameName: "Pac Man",
      cost: ".25",
      highScore: 120000,
      area: 49100,
      imageUrl:
      "https://th.bing.com/th/id/OIP.M-ALHinabbcLQZRk-QDarwHaEL?w=300&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    {
      gameName: "Pac Man",
      cost: ".25",
      highScore: 120000,
      area: 6861,
      imageUrl:
      "https://th.bing.com/th/id/OIP.M-ALHinabbcLQZRk-QDarwHaEL?w=300&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    {
      gameName: "Pac Man",
      cost: ".25",
      highScore: 120000,
      area: 156558,
      imageUrl:
      "https://th.bing.com/th/id/OIP.M-ALHinabbcLQZRk-QDarwHaEL?w=300&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    {
      gameName: "Pac Man",
      cost: ".25",
      highScore: 120000,
      area: 9600,
      imageUrl:
      "https://th.bing.com/th/id/OIP.M-ALHinabbcLQZRk-QDarwHaEL?w=300&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    {
      gameName: "Pac Man",
      cost: ".25",
      highScore: 120000,
      area: 116642,
      imageUrl:
      "https://th.bing.com/th/id/OIP.M-ALHinabbcLQZRk-QDarwHaEL?w=300&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    },
    {
      gameName: "Pac Man",
      cost: ".25",
      highScore: 120000,
        area: 28165,
        imageUrl:
        "https://th.bing.com/th/id/OIP.M-ALHinabbcLQZRk-QDarwHaEL?w=300&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
      },
      {
        gameName: "Pac Man",
        cost: ".25",
        highScore: 120000,
        area: 20630,
        imageUrl:
        "https://th.bing.com/th/id/OIP.M-ALHinabbcLQZRk-QDarwHaEL?w=300&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
      },
      {
        gameName: "Pac Man",
        cost: ".25",
        highScore: 120000,
        area: 67331,
        imageUrl:
        "https://th.bing.com/th/id/OIP.M-ALHinabbcLQZRk-QDarwHaEL?w=300&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
      },
  ];


  document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.arcade-catalauge');
    const homeLink = document.getElementById('home');
    const oldLink = document.getElementById('old');
    const newLink = document.getElementById('new');
    const largeLink = document.getElementById('large');
    const smallLink = document.getElementById('small');


    const displayGames = (games) => {
        container.innerHTML = ''; // Clear existing content
        games.forEach(game => {
            const figure = document.createElement('figure');
            figure.classList.add('hover');

            const img = document.createElement('img');
            img.src = game.imageUrl;
            img.alt = game.gameName;
            img.loading = "lazy";
            figure.appendChild(img);

            const figcaption = document.createElement('figcaption');
            figcaption.innerHTML = `
                <h3>${game.gameName}</h3>
                <p>Cost: ${game.cost}</p>
                <p>High Score: ${game.highScore}</p>`;
                //<p>Dedicated: ${formatDate(game.dedicated)}</p>
                //<p>Area: ${game.area.toLocaleString()} sq ft</p>
            //`;
            figure.appendChild(figcaption);

            container.appendChild(figure);
        });
    };

//    const formatDate = (dateString) => {
//        const date = new Date(dateString);
//        const year = date.getFullYear();
//        const month = date.toLocaleString('default', { month: 'long' });
//        const day = date.getDate();
//        return `${year}, ${month}, ${day}`;
//    };

    homeLink.addEventListener('click', () => displayGames(games));

//    oldLink.addEventListener('click', () => {
//        const oldTemples = games.filter(game => new Date(game.dedicated).getFullYear() < 1900);
//        displayGames(oldTemples);
//    });
//
//    newLink.addEventListener('click', () => {
//        const newTemples = games.filter(game => new Date(game.dedicated).getFullYear() > 2000);
//        displayGames(newTemples);
//    });
//
//    largeLink.addEventListener('click', () => {
//        const largeTemples = games.filter(game => game.area > 90000);
//        displayGames(largeTemples);
//    });
//
//    smallLink.addEventListener('click', () => {
//        const smallTemples = games.filter(game => game.area < 10000);
//        displayGames(smallTemples);
//    });

    // Display all temples by default when the page loads
    displayGames(games);
});