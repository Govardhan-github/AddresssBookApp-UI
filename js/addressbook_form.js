window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new Contact()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
    
    const phoneNumber = document.querySelector('#phoneNumber');
    const phoneError = document.querySelector('.address-error');
    phoneNumber.addEventListener('input',function () {
        if (phoneNumber.value.length == 0) {
            phoneError.textContent = "";
            return;
        }
        try {
            (new Contact()).phoneNumber = phoneNumber.value;
            phoneError.textContent = "";
        } catch (e) {
            phoneError.textContent = e;
        }
    }); 

    const zip = document.querySelector('#zip');
    const zipError = document.querySelector('.zip-error');
    zip.addEventListener('input',function () {
        if (zip.value.length == 0) {
            zipError.textContent = "";
            return;
        }
        try{
            (new Contact()).zip = zip.value;
            zipError.textContent = "";
        }catch (e) {
            zipError.textContent = e;
        }
    });                              
});
