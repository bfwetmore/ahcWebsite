// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  export default {
    async fetch(request) {
      send_request = new Request('https://api.mailchannels.net/tx/v1/send', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: 'bfwetmore@gmail.com', name: 'Test Recipient' }],
            },
          ],
          from: {
            email: 'sender@example.com',
            name: 'Workers - MailChannels integration',
          },
          subject: 'Look! No servers',
          content: [
            {
              type: 'text/plain',
              value: 'And no email service accounts and all for free too!',
            },
          ],
        }),
      })
    },
  }
  