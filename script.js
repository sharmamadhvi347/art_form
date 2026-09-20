// Initialize Map
const map = L.map('map').setView([22.5937, 78.9629], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// DOM Elements
const grid = document.getElementById('art-grid');
const emptyState = document.getElementById('empty-state');
const artDetails = document.getElementById('art-details');

const dImg = document.getElementById('detail-image');
const dCat = document.getElementById('detail-category');
const dTitle = document.getElementById('detail-title');
const dLoc = document.getElementById('detail-location');
const dDesc = document.getElementById('detail-desc');
const dHist = document.getElementById('detail-history');

function showDetails(art) {
  emptyState.classList.add('hidden');
  artDetails.classList.remove('hidden');

  dImg.src = art.image;
  dImg.alt = art.name;
  dCat.textContent = art.category;
  dTitle.textContent = art.name;
  dLoc.textContent = `${art.location}, ${art.state}`;
  dDesc.textContent = art.shortDescription;
  dHist.textContent = art.historicalContext;
  
  map.setView([art.latitude, art.longitude], 6, { animate: true });
}

// Populate map and grid
artForms.forEach(art => {
  // Add Marker
  const marker = L.marker([art.latitude, art.longitude]).addTo(map);
  marker.bindPopup(`<b>${art.name}</b><br>${art.location}, ${art.state}`);
  
  marker.on('click', () => {
    showDetails(art);
    document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });
  });

  // Add Grid Item
  const card = document.createElement('div');
  card.className = "bg-white rounded-xl shadow-sm border border-orange-100 overflow-hidden hover:shadow-lg transition-all cursor-pointer flex flex-col";
  card.innerHTML = `
    <div class="h-48 overflow-hidden relative">
      <img src="${art.image}" alt="${art.name}" class="w-full h-full object-cover" />
      <div class="absolute top-3 right-3 bg-white/90 text-orange-700 text-xs font-bold px-2 py-1 rounded">${art.category}</div>
    </div>
    <div class="p-5 flex-1 flex flex-col">
      <h3 class="text-xl font-serif text-gray-900 mb-2">${art.name}</h3>
      <p class="text-sm text-gray-500 mb-3 font-medium">${art.location}, ${art.state}</p>
      <p class="text-sm text-gray-600 line-clamp-2 mb-4 flex-1">${art.shortDescription}</p>
      <button class="text-orange-600 font-medium text-sm hover:text-orange-700 flex justify-between w-full">Explore on Map &rarr;</button>
    </div>
  `;
  card.addEventListener('click', () => {
    showDetails(art);
    document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });
  });
  grid.appendChild(card);
});
