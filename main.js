document.addEventListener('DOMContentLoaded', function() {
  // Sticky Navbar Effect
  var navbar = document.getElementById('navbar');
  window.onscroll = function() {
    if (window.pageYOffset > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  // Mobile Navigation Toggle
  var navTrigger = document.getElementById('mobileNavTrigger');
  var mobileNavbar = document.getElementById('mobileNavbar');
  var hamburgerIcon = navTrigger.querySelector('.hamburger-icon');
  navTrigger.addEventListener('click', function() {
    mobileNavbar.classList.toggle('open');
    hamburgerIcon.classList.toggle('open');
  });


  // Modal Handling
  var modal = document.getElementById("reservationModal");
  var reservationForm = document.getElementById("reservationForm");
  var detailsForm = document.getElementById("detailsForm");
  var span = document.getElementsByClassName("close-button")[0];

  var numberOfPeople = document.getElementById("number-of-people");
  var datePicker = document.getElementById("date-picker");

  reservationForm.addEventListener('submit', function(event) {
    console.log('Form submission attempt.');
    event.preventDefault();  // Prevent the form from submitting normally
    detailsForm.elements['res-people'].value = numberOfPeople.value;  // Pass number of people to hidden input
    detailsForm.elements['res-date'].value = datePicker.value;  // Pass selected date to hidden input
    modal.style.display = "block";
  });

  // AJAX submission for details form
  detailsForm.addEventListener('submit', function(event) {
    console.log('Details form submission attempt.');
    event.preventDefault();  // Continue to prevent the normal submit

    var formData = new FormData(detailsForm); // Collect form data including hidden fields

    fetch('https://formspree.io/f/mayraydz', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      },
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(submittedData => {
      console.log('Form successfully submitted', submittedData);
      alert('Details Submitted!'); // Alert or handle success
      modal.style.display = "none"; // Close modal on success
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error submitting details!');
    });
  });

  span.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };


});
