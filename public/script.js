document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('vacationForm');
    if (!form) return;
  
    const destination = document.getElementById('destination');
    const departureDate = document.getElementById('departureDate');
    const travelers = document.getElementById('travelers');
  
    // Prevent selecting dates in the past
    const today = new Date().toISOString().split('T')[0];
    departureDate.setAttribute('min', today);
  
    form.addEventListener('submit', (event) => {
      let isValid = true;
  
      if (!destination.value) {
        showError(destination, 'destError');
        isValid = false;
      } else {
        hideError(destination, 'destError');
      }
  
      if (!departureDate.value) {
        showError(departureDate, 'dateError');
        isValid = false;
      } else {
        hideError(departureDate, 'dateError');
      }
  
      if (!travelers.value || travelers.value < 1 || travelers.value > 10) {
        showError(travelers, 'travelerError');
        isValid = false;
      } else {
        hideError(travelers, 'travelerError');
      }
  
      if (!isValid) {
        event.preventDefault();
      }
    });
  
    function showError(inputElement, errorId) {
      inputElement.classList.add('invalid');
      document.getElementById(errorId).style.display = 'block';
    }
  
    function hideError(inputElement, errorId) {
      inputElement.classList.remove('invalid');
      document.getElementById(errorId).style.display = 'none';
    }
  });