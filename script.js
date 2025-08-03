// Data for recommendations
const recommendationsData = {
    beach: [
        {
            name: "Boracay, Philippines",
            description: "Known for its stunning white sand beaches and crystal-clear turquoise waters. Perfect for relaxation and water sports.",
            images: [
                "https://via.placeholder.com/300?text=Boracay+Beach+1",
                "https://via.placeholder.com/300?text=Boracay+Beach+2"
            ]
        },
        {
            name: "Maldives",
            description: "An idyllic tropical paradise with overwater bungalows, vibrant coral reefs, and incredible marine life.",
            images: [
                "https://via.placeholder.com/300?text=Maldives+Beach+1",
                "https://via.placeholder.com/300?text=Maldives+Beach+2"
            ]
        }
    ],
    temple: [
        {
            name: "Angkor Wat, Cambodia",
            description: "A breathtaking temple complex and the largest religious monument in the world, renowned for its intricate architecture.",
            images: [
                "https://via.placeholder.com/300?text=Angkor+Wat+Temple+1",
                "https://via.placeholder.com/300?text=Angkor+Wat+Temple+2"
            ]
        },
        {
            name: "Kyoto Temples, Japan",
            description: "Kyoto is home to thousands of temples and shrines, each offering a unique glimpse into Japan's rich history and culture.",
            images: [
                "https://via.placeholder.com/300?text=Kyoto+Temple+1",
                "https://via.placeholder.com/300?text=Kyoto+Temple+2"
            ]
        }
    ],
    country: [
        {
            name: "Japan",
            description: "A captivating country that perfectly blends ancient traditions with modern technology, from serene gardens to bustling cityscapes.",
            images: [
                "https://via.placeholder.com/300?text=Japan+Scenery+1",
                "https://via.placeholder.com/300?text=Japan+Scenery+2"
            ]
        },
        {
            name: "Italy",
            description: "Rich in history, art, and delicious cuisine, Italy offers a diverse landscape from ancient Roman ruins to scenic coastlines.",
            images: [
                "https://via.placeholder.com/300?text=Italy+Scenery+1",
                "https://via.placeholder.com/300?text=Italy+Scenery+2"
            ]
        }
    ]
};

// Function to handle navigation and page visibility
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => page.classList.remove('active-page'));

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active-page');
    }

    // Clear recommendations when changing pages
    clearRecommendations();
}

// Function to handle search functionality
function searchRecommendations() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    let recommendations = [];
    if (searchTerm.includes('beach')) {
        recommendations = recommendationsData.beach;
    } else if (searchTerm.includes('temple')) {
        recommendations = recommendationsData.temple;
    } else if (searchTerm.includes('country')) {
        recommendations = recommendationsData.country;
    }

    if (recommendations.length > 0) {
        let html = '';
        recommendations.forEach(reco => {
            html += `
                <div class="recommendation-card">
                    <h3>${reco.name}</h3>
                    <p>${reco.description}</p>
                    <img src="${reco.images[0]}" alt="${reco.name} image 1">
                    <img src="${reco.images[1]}" alt="${reco.name} image 2">
                </div>
            `;
        });
        resultsContainer.innerHTML = html;
        showPage('recommendations-container');
    } else {
        resultsContainer.innerHTML = '<p>No recommendations found for that search term.</p>';
        showPage('recommendations-container');
    }
}

// Function to clear search results
function clearRecommendations() {
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('results');
    
    searchInput.value = '';
    resultsContainer.innerHTML = '';
    
    // Return to home page
    showPage('home-page');
}

// Handle form submission to prevent page reload
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
});

// Set initial page view
document.addEventListener('DOMContentLoaded', () => {
    showPage('home-page');
});