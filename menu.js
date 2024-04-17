document.addEventListener('DOMContentLoaded', function() {
  // Existing code for navbar, modal, etc.

  // Adding event listeners for menu buttons
  document.getElementById('dinnerButton').addEventListener('click', function() {
    document.getElementById('dinnerImage').style.display = 'block';
    document.getElementById('brunchImage').style.display = 'none';
    document.getElementById('drinkImage').style.display = 'none';
    document.getElementById('wineImage').style.display = 'none';
  });

  document.getElementById('brunchButton').addEventListener('click', function() {
    document.getElementById('dinnerImage').style.display = 'none';
    document.getElementById('brunchImage').style.display = 'block';
    document.getElementById('drinkImage').style.display = 'none';
    document.getElementById('wineImage').style.display = 'none';
  });

  document.getElementById('drinkButton').addEventListener('click', function() {
    document.getElementById('dinnerImage').style.display = 'none';
    document.getElementById('brunchImage').style.display = 'none';
    document.getElementById('drinkImage').style.display = 'block';
    document.getElementById('wineImage').style.display = 'none';
  });

  document.getElementById('wineButton').addEventListener('click', function() {
    document.getElementById('dinnerImage').style.display = 'none';
    document.getElementById('brunchImage').style.display = 'none';
    document.getElementById('drinkImage').style.display = 'none';
    document.getElementById('wineImage').style.display = 'block';
  });

  // Ensure all images are initially set to display none except the default one if necessary
  document.getElementById('brunchImage').style.display = 'none';
  document.getElementById('drinkImage').style.display = 'none';
  document.getElementById('wineImage').style.display = 'none';
  document.getElementById('dinnerImage').style.display = 'block';  // Show dinner menu by default
});
