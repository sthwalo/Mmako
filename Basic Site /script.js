//Initialize EmailJS and JavaScript 
 type="text/javascript">
  emailjs.init('dktKLDi51fEIfZaw0');  // Replace this with your actual user ID

  const btn = document.getElementById('button');
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    btn.value = 'Sending...';

    const serviceID = 'service_2esihpq';  // Replace with your actual service ID
    const templateID = 'template_wtt356g';  // Replace with your actual template ID

    emailjs.sendForm(serviceID, templateID, form)
      .then(() => {
        btn.value = 'Send Appointment Request';
        alert('Your appointment request has been sent successfully!');
      }, (err) => {
        btn.value = 'Send Appointment Request';
        alert('There was an error sending your request. Please try again later.');
      });
  });
