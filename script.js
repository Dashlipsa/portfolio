// Toggle menu icon on click
document.getElementById('menu-icon').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
  });
  
  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 200) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
  
  // Animate progress bars on skills section
  const skillsContent = document.querySelectorAll('.skills-content');
  skillsContent.forEach((content) => {
    const progressBar = content.querySelector('.bar span');
    const progressValue = progressBar.style.width;
    progressBar.style.width = '0%';
    content.addEventListener('mouseover', () => {
      progressBar.style.width = progressValue;
    });
  });
  
  
  
  
  //2nd phase 
  // Toggle menu icon on click
document.getElementById('menu-icon').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
  });
  
  // Sticky header on scroll
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 200) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
  
  
  
  
  // Make buttons functional
  const buttons = document.querySelectorAll('.btn');
  
  // Home section buttons
  const homeButtons = document.querySelectorAll('.home .btn');
  homeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.textContent === 'Let\'s Talk') {
        console.log('Let\'s talk button clicked!');
        // Add functionality for Let's talk button
      } else if (button.textContent === 'Hire Me') {
        console.log('Hire me button clicked!');
        // Add functionality for Hire me button
      }
    });
  });
  
  // Contact section button
  const contactButton = document.querySelector('.contact .btn');
  contactButton.addEventListener('click', () => {
    console.log('Contact button clicked!');
    // Add functionality for Contact button
  });
  
  // Animate circle spin on about section
  var circleSpin = document.querySelector('.circle-spin');
  circleSpin.addEventListener('mouseover', () => {
    circleSpin.style.transform = 'rotate(360deg)';
    circleSpin.style.transition = 'transform 2s ease-in-out';
  });
  circleSpin.addEventListener('mouseout', () => {
    circleSpin.style.transform = 'rotate(0deg)';
    circleSpin.style.transition = 'transform 2s ease-in-out';
  });


//API 
// document.getElementById('contactForm').addEventListener('submit', function(event) {
//   // Prevent the default form submission
//   event.preventDefault();

//   // Get form data
//   const formData = new FormData(this);
//   const formObject = {};
//   formData.forEach((value, key) => {
//       formObject[key] = value;
//   });

//   // Log form data to the console (for debugging)
//   console.log('Form Data Submitted:', formObject);

//   // Replace with your actual server endpoint
//   const apiEndpoint = 'https://example.com/api/submit-form';

//   // Send form data to the server
//   fetch(apiEndpoint, {
//       method: 'POST',
//       body: JSON.stringify(formObject),
//       headers: {
//           'Content-Type': 'application/json'
//       }
//   })
//   .then(response => response.json())
//   .then(data => {
//       // Handle success
//       console.log('Success:', data);
//       alert('Your message has been sent successfully!');
//   })
//   .catch(error => {
//       // Handle error
//       console.error('Error:', error);
//       alert('There was an error sending your message. Please try again.');
//   });
// });



document.getElementById('contactForm').addEventListener('submit', function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get form data
  const formData = new FormData(this);
  const formObject = {};
  formData.forEach((value, key) => {
      formObject[key] = value;
  });

  // Log form data to the console (for debugging)
  console.log('Form Data Submitted:', formObject);

  // Replace with your actual server endpoint
  const apiEndpoint = 'http://localhost:3000/api/submit-form';

  // Send form data to the server
  fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(formObject),
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then(response => response.json())
  .then(data => {
      // Handle success
      console.log('Success:', data);
      alert('Your message has been sent successfully!');
      document.getElementById('contactForm').reset(); // Optional: Reset the form fields
  })
  .catch(error => {
      // Handle error
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
  });
});
