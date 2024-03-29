[
    {
        "week": "Week 01",
        "links": [
            {
                "url": "https://jaronrhill.github.io/wdd230",
                "title": "W01 Activity: Course Home Page Development"
            },
            {
                "url": "https://jaronrhill.github.io/wdd230/week01/chamber-site-plan",
                "title": "W01 Project Introduction: The Chamber Site Plan"
            }
        ]
    },
    {
        "week": "Week 02",
        "links": [
            {
                "url": "https://jaronrhill.github.io/wdd230/chamber",
                "title": "W02 Project Milestone: The Chamber Home Page"
            }
        ]
    }
]


// links.js

const baseURL = 'https://jaronrhill.github.io/wdd230/';

const linksURL = `${baseURL}links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const linksData = await response.json();
        displayLinks(linksData);
    } catch (error) {
        console.error('Fetch error:', error.message);
    }
}

function displayLinks(weeks) {
    const container = document.querySelector('.learning-activities ul');

    if (container) {
        container.innerHTML = '';

        weeks.forEach(week => {
            const weekItem = document.createElement('li');
            weekItem.textContent = week.week;

            week.links.forEach(link => {
                const linkElement = document.createElement('a');
                linkElement.setAttribute('href', link.url);
                linkElement.textContent = link.title;

                const listItem = document.createElement('li');
                listItem.appendChild(linkElement);
                weekItem.appendChild(listItem);
            });

            container.appendChild(weekItem);
        });
    }
}

getLinks();
