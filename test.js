let clientData = {
  id: 1111,
  fullName: 'Not Set',
  setUserName: function (firstName, lastName) {
    this.fullName = firstName + ' ' + lastName;
  }
};

function getUserInput(firstName, lastName, callback) {
  callback(firstName, lastName)
}


getUserInput('Barack', 'Obama', clientData.setUserName.bind(clientData));

console.log(clientData.fullName);