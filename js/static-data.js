/* Array of objects which contains events
categories and events under that category.
*/
const eventsArr = [
  {
    category: 'Education',
    description: 'Exploring the future of education and new approaches to building a better system.',
    events: [
      {
        date: 'Wed, 22 - Thu, 23 Jun 2022',
        topic: 'Rwanda Education Council',
        location: 'Kigali, Rwanda',
        info: 'The REC features top players from the global economic scale.',
        tags: 'Conference || IT & Technology || Education',
        hostName: 'Paul Kagame',
        hostImageUrl: './images/educational-events/paul-kagame.png',
        starCount: 20.1,
      },
      {
        date: 'Sat, 25 - Sun, 26 Jun 2022',
        topic: 'GOETHE Institut',
        location: 'Kigali, Rwanda',
        info: 'Technology & Teaching - Challenges & Issues Conference',
        tags: 'Education & Training || IT & Technology',
        hostName: 'Vusi Thembekwayo',
        hostImageUrl: './images/educational-events/vusi.jpeg',
        starCount: 13.5,
      },
      {
        date: 'Mon, 04 - Wed, 06 Jul 2022',
        topic: 'Library Aid Africa',
        location: 'Kigali, Rwanda',
        info: 'Discovering new ways to make libraries across Africa accessible',
        tags: 'Tradeshow || Apparel & Clothing || Fashion & Beauty',
        hostName: 'Damilare Oyedele',
        hostImageUrl: './images/educational-events/damilare.jpeg',
        starCount: 19.8,
      },
      {
        date: 'Mon, 20 - Fri, 24 Jun 2022',
        topic: 'A New Approach To IT Education',
        location: 'Kigali, Rwanda',
        info: 'Moving towards Self Directed Learning in IT',
        tags: 'Education & Training',
        hostName: 'Peter Okorafor',
        hostImageUrl: './images/educational-events/peter.jpeg',
        starCount: 12,
      },

    ],
    privateClasses: {
      categoryIcon: 'bi bi-layers',
      category: 'education',
    },
  },
  {
    category: 'Healthcare',
    description: 'Shaping Africans for the future of health care. Key speeches and seminars from this category will be chaired by the African Health Care Commission.',
    events: [
      {
        date: 'Sat, 09 Jul 2022',
        topic: 'Blood Delivery by Drones',
        location: 'Kigali, Rwanda',
        info: 'The first blood delivery by drones in Rwanda',
        tags: 'Healthcare || Technology',
        hostName: 'ZIPLINE Rwanda',
        hostImageUrl: './images/healthcare-events/zipline.jpeg',
        starCount: 55,
      },
      {
        date: 'Sat, 02 Jul 2022',
        topic: 'COVID Vaccination',
        location: 'Kigali, Rwanda',
        info: 'How Rwanda became first fully vaccniated African country',
        tags: 'Healthcare || Technology',
        hostName: 'Rwanda Health Care Commission',
        hostImageUrl: './images/healthcare-events/vaccine.png',
        starCount: 89.4,
      },
      {
        date: 'Fri, 24 - Sat, 25 Jun 2022',
        topic: 'EAC Collaborative Health',
        location: 'Kigali, Rwanda',
        info: "The EAC's collaborative health program to improve healthcare in memeber states",
        tags: 'Healthcare || Technology',
        hostName: 'East African Commission',
        hostImageUrl: './images/healthcare-events/eac.jpeg',
        starCount: 18.5,
      },
      {
        date: 'Thu, 13 - Sun, 16 Oct 2022',
        topic: 'Digitalizing Healthcare in the UK',
        location: 'Kigali, Rwanda',
        info: 'Using GPT3 Open AI to predict the future of healthcare in the UK',
        tags: 'Healthcare || Technology',
        hostName: 'Boris Johnson',
        hostImageUrl: './images/healthcare-events/boris.jpeg',
        starCount: 214,
      },
    ],
    privateClasses: {
      categoryIcon: 'bi bi-hospital',
      category: 'healthcare',

    },
  },
  {
    category: 'Global Policy',
    description: 'Global Policy is a series of events that will be chaired by the African Policy Commission, but explores the global policy of not just the African continent, but the world.',
    events: [
      {
        date: 'Mon, 08 - Tue, 09 Aug 2022',
        topic: 'Inter-African Trade Policy',
        location: 'Accra , Ghana',
        info: 'Understanding the major stakeholders involved and engaging them',
        tags: 'Global Policy || Trade || Trade Policy',
        hostName: 'African Union',
        hostImageUrl: './images/policy-events/au.jpeg',
        starCount: 8.4,
      },
      {
        date: 'Sat, 23 - Mon, 25 Jul 2022',
        topic: 'International Trade Fair',
        location: 'Kigali, Rwanda',
        info: 'International Trade Fair For International Trade',
        tags: 'Global Policy || Trade || Trade Policy',
        hostName: 'EXPO Dubai',
        hostImageUrl: './images/policy-events/expo.jpeg',
        starCount: 139.4,
      },
      {
        date: 'Sat, 02 - Sun, 03 Jul 2022',
        topic: 'Export Policy',
        location: 'Kigali, Rwanda',
        info: 'Understanding the export policy of the member countries',
        tags: 'Global Policy || Trade || Trade Policy',
        hostName: 'CHOGM Coummunity of Government Members',
        hostImageUrl: './images/policy-events/chogm.jpeg',
        starCount: 56.9,
      },
      {
        date: 'Fri, 24 - Sat, 25 Jun 2022',
        topic: 'Visa Free Entry',
        location: 'Kigali, Rwanda',
        info: 'Exploring restrictions on African countries',
        tags: 'Global Policy || Trade || Trade Policy',
        hostName: 'ECOWAS',
        hostImageUrl: './images/policy-events/ecowas.jpeg',
        starCount: 44.3,
      },
    ],
    privateClasses: {
      categoryIcon: 'bi bi-globe',
      category: 'sports',
    },
  },
  {
    category: 'News',
    description: 'Information about recent events or happenings, especially as reported by means of newspapers, websites, radio, television, and other forms of media.',
    events: [

      {
        date: '1 hour ago',
        topic: "President Putin's inclusion in a summit of top emerging economies is a signal that Russia is not alone on the world stage",
        location: 'Russia',
        info: '',
        tags: '',
        hostName: 'Marshall Cohen',
        hostImageUrl: './images/news/president-inclusion.jpg',
        starCount: 1327,
      },
      {
        date: '1 day ago',
        topic: 'China sends dozens of warplanes into skies near Taiwan',
        location: 'China',
        info: "Expert: China's military aggression on Taiwan will be 'incredible calamity' ",
        tags: '',
        hostName: 'Brad Lendon',
        hostImageUrl: './images/news/dozens-of-warplanes.jpg',
        starCount: 1034,
      },
      {
        date: '40 munites ago',
        topic: `
                  Russian troops have advanced into villages south of 
                  Lysychansk -- the last Ukrainian holdout in the 
                  key region of Luhansk -- and Moscow's sheer 
                  firepower is grinding down defenses
                  `,
        location: 'Russia',
        info: '',
        tags: '',
        hostName: 'Helen Regan',
        hostImageUrl: './images/news/russian-troops.jpg',
        starCount: 1761,
      },
      {
        date: '19 hours ago',
        topic: 'Japan tracks eight Russian and Chinese warships near its territory',
        location: 'Japan',
        info: 'At least eight Russian and Chinese warships have been spotted in the seas near Japan this week',
        tags: '',
        hostName: 'Brad Lendon',
        hostImageUrl: './images/news/japan-tracks.jpg',
        starCount: 461,
      },
      {
        date: '2 days ago',
        topic: 'Republican officials take the lead testifying against Trump',
        location: 'USA',
        info: 'Frustrated with hearings, Trump turns ire toward his allies',
        tags: '',
        hostName: 'Ruben Anan',
        hostImageUrl: './images/news/republican-officials.jpg',
        starCount: 617,
      },
      {
        date: '2 weeks ago',
        topic: 'Families of Americans detained abroad call for urgent action from Biden to free their loved ones',
        location: 'America',
        info: "<b>Analysis:</b> Pence ignores Trump's remarkable record of falsehoods",
        tags: '',
        hostName: 'Jennifer Hansler,',
        hostImageUrl: './images/news/families-of-americians.jpg',
        starCount: 542,
      },

    ],
    privateClasses: {
      categoryIcon: 'bi bi-newspaper',
      category: 'news',
    },
  },
];
document.addEventListener('DOMContentLoaded', () => {
  // Automatically choose an active category
  function getRandomIndexOfArray(min, max) {
    const step1 = max - min + 1;
    const step2 = Math.random() * step1;
    const result = Math.floor(step2) + min;
    return result;
  }
  const activeCategory = eventsArr[getRandomIndexOfArray(0, eventsArr.length - 1)];
  activeCategory.privateClasses.active = 'active-category';
  // loop through events Array when page loads and display each category

  eventsArr.forEach((events) => {
    const categoriesCtn = document.querySelector('.event-categories');
    const categoryCtn = document.createElement('div');
    const categoryClass = events.privateClasses.category;
    const categoryContent = `
                          <div>
                            <p class="category-icon ${categoryClass}">
                                <i class='${events.privateClasses.categoryIcon} ${categoryClass}'></i>
                            </p>
                          </div>
                          <div>
                            <p class="category-name ${categoryClass}">${events.category}</p>
                          </div>
                          <div>
                            <p class="category-description">
                              <a class="${categoryClass}" href="#events-category-section">${events.description}</a>
                            </p>
                          </div>
                      `;

    categoryCtn.setAttribute('class', 'category');
    categoryCtn.classList.add(categoryClass, events.privateClasses.active);
    categoryCtn.setAttribute('title', `Click to show ${events.category} events`);
    categoryCtn.innerHTML = categoryContent;

    categoriesCtn.appendChild(categoryCtn);

    // append events
    const eventsSection = document.querySelector('.events-category-section');
    const eventsContainer = document.createElement('div');
    const eachEvent = events.events.map((event) => `
                  <div class="an-event-container">
                      <div>
                          <img
                              class="host-image"
                              src=${event.hostImageUrl}
                              alt="Nicolas Sarkozy"
                          />
                      </div>
                      <div>
                          <div class="event-date">
                              ${event.date}
                          </div>
                          <h5 class="event-topic">${event.topic}</h5>
                          <div class="event-location">
                              ${event.location} ~ Get <i style="color:#ec5242;" class="bi bi-star-fill"></i> interested & see live
                          </div>
                          <p class="event-info">${event.info}</p>
                          <p class="event-tags">
                              ${event.tags}
                          </p>
                          <div class="host-interested-container">
                              <div>Host : <u><i>${event.hostName}</i></u></div>
                              <div>
                                  <button id='star${event.starCount}' class="interested-btn"><i class="bi bi-star"></i><span>${event.starCount}k</span></button>
                              </div>
                          </div>
                      </div>
                  </div>
                  `);
    const eventContent = `
                              <h4>Trending ${events.category} Events</h4>
                              <div class="category-events-container">
                                  ${eachEvent.join('')}
                              </div>
                          `;
    eventsContainer.setAttribute('class', 'events-parent-container');
    eventsContainer.setAttribute('id', categoryClass);
    eventsContainer.innerHTML = eventContent;
    eventsSection.appendChild(eventsContainer);

    // check an active category and display block
    if (categoryCtn.classList.contains('active-category')) {
      document.getElementById(categoryClass).classList.add('active');
    }
  });
});
// disable any active category and get chance to enable the current category
function disableActiveCategory() {
  eventsArr.forEach((events) => {
    const eventsContainer = document.getElementById(events.privateClasses.category);
    const categoryContainer = document.querySelector(`.${events.privateClasses.category}`);
    if (eventsContainer.classList.contains('active')) {
      eventsContainer.classList.remove('active');
      categoryContainer.classList.remove('active-category');
    }
  });
}
// make the current category active when clicked
document.querySelector('.event-categories').addEventListener('click', (e) => {
  eventsArr.forEach((events) => {
    const eventsContainer = document.getElementById(events.privateClasses.category);
    const categoryContainer = document.querySelector(`.${events.privateClasses.category}`);
    if (e.target.classList.contains(events.privateClasses.category)) {
      disableActiveCategory();
      eventsContainer.classList.add('active', 'active-category');
      categoryContainer.classList.add('active-category');
    }
  });
});
