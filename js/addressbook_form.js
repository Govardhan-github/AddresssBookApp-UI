let contactList ;

window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function () {
            if (name.value.length == 0) {
                textError.textContent = "";
                return;
            }
            try {
                (new AddressBookForm()).name = name.value;
                textError.textContent = "";
            } catch (e) {
                textError.textContent = e;
            }
        });

    const phone = document.querySelector('#phone');
    const phoneError = document.querySelector('.phone-error');
    name.addEventListener('input',function () {
        if (phone.value.length == 0) {
            phoneError.textContent = "";
            return;
        }
        try {
            (new AddressBookForm()).phoneNumber = phone.value;
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
      try {
            (new AddressBookForm()).zip = zip.value;
            zipError.textContent = "";
        } catch (e) {
        zipError.textContent = e;
        }
    });
        
    });
    
//on submit
const save = () => {
    try{
        let addressBookForm = createAddressBook();
        createAndUpdateStorage(addressBookForm);
        resetForm();
    }catch(e){
        return;
    }
}

const createAddressBook = ()=>{
    let addressBookForm = new AddressBookForm();
    addressBookForm._id = new Date().getTime();
    try{
        addressBookForm._name=document.querySelector('#name').value;
    }catch(e){
        setTextValue('.text-error', e)
        throw e;
    }
    console.log(document.querySelector('#name').value);
    addressBookForm._id = new Date().getTime();
    addressBookForm._address=document.querySelector('#address').value;
    addressBookForm._city=document.querySelector('#city').value;
    addressBookForm._state=document.querySelector('#state').value;
    addressBookForm._zip=document.querySelector('#zip').value;
    addressBookForm._phoneNumber=document.querySelector('#phone').value;
    alert(addressBookForm.toString());
    return addressBookForm;
}
function createAndUpdateStorage (addressBookForm){
    let contactList = JSON.parse(localStorage.getItem("ContactList"));
    if(contactList!=undefined){
        contactList.push(addressBookForm);
    }else{
        contactList=[addressBookForm];
    }
    alert(contactList.toString());
    localStorage.setItem("ContactList",JSON.stringify(contactList));
}

const resetForm = ()=>{
    document.querySelector("#name").value = "";
    document.querySelector('#address').value= "";
    document.querySelector('#city').value = "Select City";
    document.querySelector('#state').value= "Select State";
    document.querySelector('#zip').value= "";
    document.querySelector('#phone').value = "";
    }