const form = document.querySelector('.login-form');
form.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password},
    } = event.currentTarget;
    const inputValue = {
        email,
        password
    }
    console.log(inputValue)
    if (`${email.value}` === '' || `${password.value}` === '') {        window.alert('Всі поля повинні бути заповнені!');
    }

    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
        console.log('onFormSubmit -> name', name);
        console.log('onFormSubmit -> value', value);
    })

    event.target.reset()
}


