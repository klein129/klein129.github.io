// let response = await fetch("https://emailsenderitweek.azurewebsites.net/api/ContactForm", {
//   method: "POST",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(data),
// });

// if (response.ok) {
//   const res = await response.json();
//   $('#sbtn').text(res);
//   await new Promise(r => setTimeout(r, 2500));
//   $('#sbtn').text(prevText);
//   if (res === 'Email bol odoslany') {
//     document.getElementById("contactForm").reset();
//     sendEmailNotification(data); // Odoslanie e-mailovej notifikácie
//   }
// } else {
//   $('#sbtn').text("Odoslanie zlyhalo");
//   await new Promise(r => setTimeout(r, 2500));
//   $('#sbtn').text(prevText);
// }

// // Funkcia na odoslanie e-mailovej notifikácie
// function sendEmailNotification(data) {
//   let notificationData = {
//     systemEmail: "michal26@michalklein.studenthosting.sk",
//     recipientEmail: "michal26@michalklein.studenthosting.sk", // E-mailová adresa, na ktorú sa má odoslať notifikácia
//     subject: "Nový kontaktný formulár",
//     message: `Nový kontaktný formulár bol odoslaný.
//     Kontaktovacie e-mailová adresa: ${data.contactEmail}
//     Správa: ${data.message}`
//   };

//   fetch("https://emailsenderitweek.azurewebsites.net/api/EmailNotification", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(notificationData),
//   })
//   .then(response => {
//     if (response.ok) {
//       console.log("E-mail notification sent successfully.");
//     } else {
//       console.log("Failed to send e-mail notification.");
//     }
//   })
//   .catch(error => {
//     console.log("An error occurred while sending e-mail notification:", error);
//   });
//   form.reset();
// }













// $(document).ready(function () {
//   $("form").submit(handleSubmit);
// });

// async function handleSubmit(event) {
//   event.preventDefault();

//   let data = {
//     systemEmail: "michal26@michalklein.studenthosting.sk",
//     contactEmail: $('#email').val(),
//     message: $('#msg').val(),
//     // message:""
//     podmienka: $('#podmienka').val()
//   };

//     // Jednoduchá podmienka pre zabránenie spamu
//     if (parseInt(data.podmienka) !== 40) {
//       // Ak hodnota pola message nie je 40, považujeme to za potenciálny spam
//       console.log("Spam detected. Form not submitted.");
//       return;
//     }
  
  
//   let response = await fetch("https://emailsenderitweek.azurewebsites.net/api/ContactForm", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data),
//   });

//   let prevText = $('#sbtn') . text();
//   if (response.status === 200) {
//     const res = await response.json();
//     $('#sbtn').text(res);
//     await new Promise(r => setTimeout(r, 2500));
//     $('#sbtn').text(prevText);
//     if (res === 'Email bol odoslany') {
//     document.getElementById("contactForm").reset(); // Resetovanie formulára
//   }}
//   else {
//     $('#sbtn').text("Odoslanie zlyhalo");
//     await new Promise(r => setTimeout(r, 2500));
//     $('#sbtn').text(prevText);
//   }
  
// }













// $(document).ready(function () {
//   $("form").submit(handleSubmit);
// });

// async function handleSubmit(event) {
//   event.preventDefault();

//   let data = {
//     systemEmail: "michal26@michalklein.studenthosting.sk",
//     contactEmail: $('#email').val(),
//     message: $('#msg').val(),
//     podmienka: $('#podmienka').val()
//   };

//   // Jednoduchá podmienka pre zabránenie spamu
//   if (parseInt(data.podmienka) !== 40) {
//     // Ak hodnota pola podmienka nie je 40, považujeme to za potenciálny spam
//     console.log("Spam detected. Form not submitted.");
//     return;
//   }

//   let response = await fetch("https://emailsenderitweek.azurewebsites.net/api/ContactForm", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data),
//   });

//   let prevText = $('#sbtn').text();
//   if (response.status === 200) {
//     const res = await response.json();
//     $('#sbtn').text(res);
//     await new Promise(r => setTimeout(r, 2500));
//     $('#sbtn').text(prevText);
//     if (res === 'Email bol odoslany') {
//       document.getElementById("contactForm").reset(); // Resetovanie formulára
//     }
//   } else {
//     $('#sbtn').text("Odoslanie zlyhalo");
//     await new Promise(r => setTimeout(r, 2500));
//     $('#sbtn').text(prevText);
//   }
// }






// async function handleSubmit(event) {
//   event.preventDefault();

//   let data = {
//     systemEmail: "michal26@michalklein.studenthosting.sk",
//     contactEmail: $('#email').val(),
//     message: $('#msg').val(),
//     podmienka: $('#podmienka').val()
//   };

//   // Jednoduchá podmienka pre zabránenie spamu
//   if (parseInt(data.podmienka) !== 40) {
//     // Ak hodnota pola podmienka nie je 40, považujeme to za potenciálny spam
//     console.log("Spam detected. Form not submitted.");
//     return;
//   }

//   let response = await fetch("https://emailsenderitweek.azurewebsites.net/api/ContactForm", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data),
//   });

//   let prevText = $('#sbtn').text();
//   if (response.status === 200) {
//     const res = await response.json();
//     $('#sbtn').text(res);
//     await new Promise(r => setTimeout(r, 2500));
//     $('#sbtn').text(prevText);
//     if (res === 'Email bol odoslany') {
//       document.getElementById("contactForm").reset(); // Resetovanie formulára
//     }
//   } else {
//     $('#sbtn').text("Odoslanie zlyhalo");
//     await new Promise(r => setTimeout(r, 2500));
//     $('#sbtn').text(prevText);
//   }

//   return false; // Zrušiť predvolenú akciu odosielania formulára
// }











async function handleSubmit(event) {
  event.preventDefault();

  let data = {
    systemEmail: "michal26@michalklein.studenthosting.sk",
    contactEmail: $('#email').val(),
    message: $('#msg').val(),
    podmienka: $('#podmienka').val()
  };

  // Jednoduchá podmienka pre zabránenie spamu
  if (parseInt(data.podmienka) !== 40) {
    // Ak hodnota pola podmienka nie je 40, považujeme to za potenciálny spam
    console.log("Spam detected. Form not submitted.");
    return;
  }

  let response = await fetch("https://emailsenderitweek.azurewebsites.net/api/ContactForm", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  });

  let prevText = $('#sbtn').text();
  if (response.status === 200) {
    const res = await response.json();
    $('#sbtn').text(res);
    await new Promise(r => setTimeout(r, 2500));
    $('#sbtn').text(prevText);

    // Resetovanie formulára po úspešnom odoslaní e-mailu
    if (res === 'Email bol odoslany') {
      // Vytvorenie skrytého iframe
      let iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // Spustenie resetovania formulára po načítaní odpovede z iframe
      iframe.onload = function () {
        document.getElementById("contactForm").reset(); // Resetovanie formulára
        document.body.removeChild(iframe); // Odstránenie iframe
      };

      // Nastavenie zdroja iframe na prázdnu stránku
      iframe.src = 'about:blank';
    }
  } else {
    $('#sbtn').text("Odoslanie zlyhalo");
    await new Promise(r => setTimeout(r, 2500));
    $('#sbtn').text(prevText);
  }
}


