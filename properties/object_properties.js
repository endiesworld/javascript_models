// Object properties operations

let emmanuel = {
  surname: 'Okoro',
  address: { city: 'Ikeja' },
};

let adaobi = {
  surname: 'Okoro',
  address: emmanuel.address
};

adaobi.surname = 'Okorocha';
adaobi.address.city = 'Okota';

console.log(`Emmanuel's surname is: ${emmanuel.surname}`); // Okoro
console.log(`Emmanuel's address is: ${emmanuel.address.city}`); // Okota
console.log(`Adaobi's surname is: ${adaobi.surname}`); // Okorocha
console.log(`Adaobi's address is: ${adaobi.address.city}`); // Okota


// Test
console.log(`Emmanuel's firstname is: ${emmanuel.firstname}`); // undefined

// Test
console.log(`Emmanuel's surname is: ${emmanuel.firstname.class}`); // TypeError cannot read property of undefined