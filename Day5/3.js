class Person {
    constructor(name, age, address, phoneNumber) {
        this.name = name || '';
        this.age = age || 0;
        this.address = address || '';
        this.phoneNumber = phoneNumber || '';
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    getAddress() {
        return this.address;
    }

    setAddress(address) {
        this.address = address;
    }

    getPhoneNumber() {
        return this.phoneNumber;
    }

    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    toString() {
        return `Person[name=${this.name}, age=${this.age}, address=${this.address}, phoneNumber=${this.phoneNumber}]`;
    }
}

const person = new Person('Venkat', 23, 'pondicherry', '1234567890');
console.log(person.toString());
