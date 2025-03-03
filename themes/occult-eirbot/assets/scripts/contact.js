const contactForm = document.getElementById('contactForm');

const FORM_API_URL = contactForm.dataset.apiurl;
const FORM_API_URI = "/formbee/email-only"

contactForm.addEventListener('submit', async (ev) => {
  ev.preventDefault();

  const formData = new FormData(ev.target);
  
  // Adding all form data to an object
  const formObject = {};
  formData.forEach((value, key) => {
    formObject[key] = value;
  });

  try {
    if (!confirm("Confirmez-vous l'envoi de ce message ?\nNous tâcherons de le traiter dans les plus brefs délais.")) return;
    const response = await fetch(FORM_API_URL + FORM_API_URI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formObject)
    });

    if (response.ok) {
      alert('Formulaire envoyé !');
    } else {
      alert('L\'envoi n\'a pas réussi.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Error submitting form.');
  }
});
