// url https://api.unsplash.com/photos?client_id=YOUR_CLIENT_ID

const search = document.getElementById('searchQuery');
const searchBtn = document.getElementById('searchBtn')
const displayBox = document.getElementById('imageGallery');
const prev = document.getElementById('prevPage');
const next = document.getElementById('nextPage');
let currentPage = 1;

searchBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const query = search.value;
    if (query) {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&page=${currentPage}&per_page=11&client_id=20hEEU_6euPxQCN_ocHXItbi3xxulVaS5JY51i4sJKo`);
        const data = await response.json();
        displayImages(data.results);
    } else {
        alert('Please enter a search term');
    }
});

const displayImages = (images) => {
    displayBox.innerHTML = '';
    images.forEach(image => {
        console.log(image);
        const imgElement = document.createElement('img');
        const imgLinkElement = document.createElement('a');
        imgLinkElement.href = image.links.html;
        imgLinkElement.target = '_blank';
        imgLinkElement.rel = 'noopener noreferrer';
        imgElement.src = image.urls.small;
        imgElement.alt = image.alt_description || 'Image';
        imgLinkElement.appendChild(imgElement);
        displayBox.appendChild(imgLinkElement);
        displayBox.style.margin = '0';
    });
}

prev.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        searchBtn.click();
    }
});
next.addEventListener('click', () => {
    currentPage++;
    searchBtn.click();
});