const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            showMessage();
            form.reset();
        }
    });

    function validateForm() {
        const name = document.getElementById('uname').value;
        const orderid = document.getElementById('order').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name.trim() === ''){
            alert('Name is required.');
            return false;
        }else if( orderid.trim() === ''){
            alert('Order Id is required.');
            return false;
        }else if (email.trim() === ''){
            alert('Email is required.');
            return false;
        }else if ( message.trim() === '') {
            alert('Feedback is required.');
            return false;
        }
        return true;
    }

    function showMessage(){
        alert('Form submitted successfully!');
    }