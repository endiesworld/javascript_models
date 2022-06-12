/**
 * The "this" keyword refers to the current object the code is being written inside
 */

let person = {
    firstname: 'Emmanuel',
    surname: 'Okoro',
    introduce_self() {
      return  console.log(`Hi there, my name is ${this.firstname} ${this.surname}`)
    }
}

// let property_1 = 'firstname'
// let property_2 = 'surname'

// person[property_1] = 'Emmanuel'
// person[property_2] = 'Okoro'

person.introduce_self()
