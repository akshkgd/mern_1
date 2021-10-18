// let users = {
//     'first name': 'ashish',
//     email: 'ashish@gmail.com',
//     address : {
//         address: '385/15 Gaughat',
//         city: 'Allahabad',
//         pin: '211003',
//         state: 'Uttar Pradesh',

//     }
// }

// let userDefinedKey = prompt('please enter the field');
// let userDefinedValue = prompt('Enter the value for ' + userDefinedKey);
let users = {
    name: 'ashish',
    // [userDefinedKey] : userDefinedValue,
    age:24,
    email: 'ashish@gmail.com',

}
delete users.email;
console.log(users)