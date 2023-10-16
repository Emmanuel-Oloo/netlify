const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { // Check if Enter key is pressed
      event.preventDefault(); // Prevent default form submission
      const query = searchInput.value.trim(); // Get the search query
      if (query) {
        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
        window.open(mapUrl, '_blank'); // Open map in new tab
      }
    }
  });
