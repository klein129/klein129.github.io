

// $(document).ready(function () {
//   $("form").submit(handleSubmit);
// });

// function handleSubmit(event) {
//   event.preventDefault();

//   var msg = $('#msg').val();
//   var email = $('#email').val();
  
//   console.log(msg);
// }

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Zabraňuje predvolenému správaniu formulára

  var email = document.getElementById('email').value;
  var message = document.getElementById('msg').value;

  // Vytvorte objekt s dátami, ktoré sa majú odoslať
  var data = {
    email: email,
    message: message
  };

  // Vytvorte konfiguráciu pre požiadavku na odoslanie dát
  var config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  // Odoslanie dát pomocou funkcie fetch()
  fetch('https://emailsenderitweek.azurewebsites.net/api/ContactForm', config)
    .then(function(response) {
      if (response.ok) {
        // Spracovanie úspešnej odpovede
        console.log('Správa úspešne odoslaná.');
      } else {
        // Spracovanie chybovej odpovede
        console.log('Nastala chyba pri odosielaní správy.');
      }
    })
    .catch(function(error) {
      // Spracovanie chyby
      console.log('Nastala chyba: ' + error);
    });
});
