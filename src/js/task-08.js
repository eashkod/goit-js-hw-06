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
    event.target.reset()
}








//form.addEventListener('submit', (event)=> {
//    event.preventDefault();
//    const {
//        elements: { email, password},
//    } = event.currentTarget;
//    const inputValue = {
//        email,
//        password
//    }
//    console.log(inputValue)
//    if (`${email.value}` === '' || `${password.value}` === '') {
//        window.alert('Всі поля повинні бути заповнені!');
//    }
//    event.target.reset()
//});

