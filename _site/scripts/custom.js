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


//   addEventListener("fetch", event => {
//     event.respondWith(handleRequest(event.request))
// })
 
// async function handleRequest(request) {
//     let content = "";
//     for( var i of request.headers.entries() ) {
//         content += i[0] + ": " + i[1] + "\n";
//     }
//     let send_request = new Request("https://api.mailchannels.net/tx/v1/send", {
//         "method": "POST",
//         "headers": {
//             "content-type": "application/json",
//         },
//         "body": JSON.stringify({
//             "personalizations": [
//                 { "to": [ {"email": "recipient@example.com",
//                         "name": "Test Recipient"}]}
//             ],
//             "from": {
//                 "email": "sender@example.com",
//                 "name": "Test Sender",
//             },
//             "subject": "Test Subject",
//             "content": [{
//                 "type": "text/plain",
//                 "value": "Test message content\n\n" + content,
//             }],
//         }),
//     });
 
//     let respContent = "";
//     // only send the mail on "POST", to avoid spiders, etc.
//     if( request.method == "POST" ) {
//         const resp = await fetch(send_request);
//         const respText = await resp.text();
 
//         respContent = resp.status + " " + resp.statusText + "\n\n" + respText;
 
//     }
 
//     let htmlContent = "<html><head></head><body><pre>" +
//         '</pre><p>Click to send message: <form method="post"><input type="submit" value="Send"/></form></p>' +
//         "<pre>" + respContent + "</pre>" +
//         "</body></html>";
//     return new Response(htmlContent, {
//         headers: { "content-type": "text/html" },
//     })
// }

// document.addEventListener('DOMContentLoaded', function () {
//     var form = document.querySelector('form[data-static-form-name="contact"]');
    
//     form.addEventListener('submit', function (event) {
//         event.preventDefault(); // Prevent the default form submission
        
//         // Here, you can add your custom logic to handle the form submission, e.g., fetch data
//         fetch( {
//             method: 'POST',
//             body: new FormData(form),
//         })
//         .then(response => {
//             // Handle the response, if needed
//             console.log('Form submitted successfully:', response);
//         })
//         .catch(error => {
//             // Handle errors, if any
//             console.error('Error submitting form:', error);
//         });
//     });
// });