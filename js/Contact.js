class AddressBookForm{
   
    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';
    }
    get address() {
        return this._address;
    }
    set address(address) {
        let addressRegex = RegExp('^([A-Z]{1}[a-zA-z0-9]{2,}[; ;])*$'); 
        if(addressRegex.test(address))
        this._address = address;
        else throw 'Incorrect Address Fromat';
    }    
    get city()
    {
        return this._city;
    }
    set city(city)
    {
        this._city=city;
    }

    get state() {
        return this._state;
    }
    set state(state) {
         this._state = state;
    }

    get zip()
    {
       return this._zip;
    }
    set zip(zip)
    {
       let zipRegex = RegExp('[0-9]{6}');
       if(zipRegex.test(zip))
       this._zip = zip;
       else throw 'Invalid zip format';
    }
    get phoneNumber()
    {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber)
    {
        let phoneRegex = RegExp('^[\+]?(([0-9]{2})?)[0-9]{10}$');
        if(phoneRegex.test(phoneNumber))
        this._phoneNumber = phoneNumber;
        else throw 'Incorrect Phone number Format';
    }

    //method 
    toString() {
        return  "name = " + this.name + ",address = " + this.address +
            " ,phoneNumber = " + this.phoneNumber + " ,city = " + this.city +
            " ,state = " + this.state +" ,zip = " + this.zip;
    }
}