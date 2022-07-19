const mobileNavbarMenu = document.querySelector('.mobile-navbar-menu');
const mobileNavbarMenuChildren = document.querySelectorAll('.mobile-navbar-menu > *');

document.getElementById('navbar-open-button').addEventListener('click', (event) => {
  event.preventDefault();
  mobileNavbarMenuChildren.forEach((child) => {
    child.classList.remove('animate__slideOutRight');
    child.classList.add('animate__slideInRight');
  });
  mobileNavbarMenu.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

function hideMobileMenu() {
  mobileNavbarMenuChildren.forEach((child) => {
    child.classList.remove('animate__slideInRight');
    child.classList.add('animate__slideOutRight');
  });
  document.body.style.overflow = 'auto';
}

document.getElementById('navbar-close-button').addEventListener('click', (event) => {
  event.preventDefault();
  hideMobileMenu();
});

document.querySelectorAll('.mobile-navbar-menu a').forEach((node) => {
  node.addEventListener('click', () => {
    hideMobileMenu();
  });
});

const features = [
  {
    imageURL: './images/vusi.jpeg',
    title: 'GOETHE Institut',
    description: 'Technology & Teaching - Challenges & Issues Conference',
    hostName: 'Vusi Thembekwayo',
  },
  {
    imageURL: './images/damilare.jpeg',
    title: 'Library Aid Africa',
    description: 'Discovering new ways to make libraries across Africa accessible to everyone',
    hostName: 'Damilare Oyedele',
  },
  {
    imageURL: './images/zipline.jpeg',
    title: 'Blood Delivery by Drones',
    description: 'The first blood delivery by drones in Rwanda - Healthcare || Technology',
    hostName: 'ZIPLINE Rwanda',
  },
  {
    imageURL: './images/au.jpeg',
    title: 'Inter-African Trade Policy',
    description: 'Understanding the major stakeholders involved and engaging them - Global Policy || Trade || Trade Policy',
    hostName: 'African Union',
  },
  {
    imageURL: './images/dozens-of-warplanes.jpeg',
    title: 'China Global',
    description: 'China sends dozens of warplanes into skies near Taiwan - Expert: China´s military aggression on Taiwan will be incredible calamity',
    hostName: 'CNN Global',
  },
  {
    imageURL: './images/president-inclusion.jpeg',
    title: 'Russia - Ukraine Update',
    description: 'President Putin`s inclusion in a summit of top emerging economies is a signal that Russia is not alone on the world stage',
    hostName: 'Aljazeera',
  },
];
const featuresList = document.querySelector('#features ul');

features.forEach((feature) => {
  const node = document.createElement('li');
  node.classList.add('col-12', 'col-md-6', 'mt-md-4');
  node.id = feature.title;
  node.innerHTML = `
    <div class="feature-card">
        <div class="feature-img-content">
            <img class="feature-img-bg" src="images/features/boxes.png" alt="">
            <img class="feature-img-top"
                 src="${feature.imageURL}"
                 alt="${feature.title}">
        </div>
        <div class="feature-img"></div>
        <div class="feature-description">
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
            <p><b>${feature.hostName}</b></p>
        </div>
    </div>
  `;
  featuresList.appendChild(node);
});