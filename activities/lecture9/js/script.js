document.addEventListener('DOMContentLoaded', function() {
  
    const inputFields = document.querySelectorAll('#firstName, #lastName, #email');

   
    inputFields.forEach(function(input) {
        
        input.addEventListener('focus', function() {
            input.style.backgroundColor = '#D1ECF0'; 
        });

        input.addEventListener('blur', function() {
            input.style.backgroundColor = ''; 
        });
    });
});

