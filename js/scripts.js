var registeredUsers = []; // this array stores valid usernames until the next pageload

function validateForm(e) {
  e.preventDefault(); // stop the submit button from refreshing the page
  console.log("validating....");

  console.log("user name: " + validateUsername());
  console.log("firstname: " + validateFirstname());
  console.log("lastname: " + validateLastname());
  console.log("phonenumber: " + validatePhonenumber());
  console.log("email: " + validateEmail());
  console.log("password: " + validatePassword());

  if (
    validateUsername() &&
    validateFirstname() &&
    validateLastname() &&
    validatePhonenumber() &&
    validateEmail() &&
    validatePassword()
  ) {
    var _newUser = {
      username: getUserName(),
      email: getEmail(),
      pass: getPassword()
    };
    // add code to update registeredUsers array with new user and call render function
    // TODO
    registeredUsers.push(_newUser);
    renderRegisteredUsers();

    if (registeredUsers.length > 4) {
      registeredUsers.shift(_newUser);
    }

    document.registration.reset(); // reset form input fields
  }
}

function renderRegisteredUsers() {
  document.getElementById("registered-users").innerHTML = " ";
  registeredUsers.forEach(function(registeredUser) {
    var _newUser = document.createElement("li");
    //_newUser.innerHTML = registeredUser.username;
    _newUser.innerHTML =
      registeredUser.username +
      " " +
      registeredUser.email +
      " " +
      registeredUser.pass;
    // _newUser.innerHTML = `${registeredUser.username}, ${registeredUser.email}, ${registeredUser.pass}`
    document.getElementById("registered-users").appendChild(_newUser);
  });
}

/**
 * this function supposely validates submitted username
 * @returns [Boolean] true when valid, false otherwise
 */
function validateUsername() {
  var _userName = getUserName();

  return !checkSpace(_userName);
}

function validateFirstname() {
  var firstName = getFirstName();
  return firstName;
}

function validateLastname() {
  var lastName = getLastName();
  return lastName;
}

function validatePhonenumber() {
  var phoneNumber = getPhoneNumber();
  var onSymbol = phoneNumber.indexOf("+");
  if (onSymbol > -1) {
    return false;
  }
  return phoneNumber;
}

/**
 * this function supposely validates submitted email
 * @returns [Boolean] true when valid, false otherwise
 */
function validateEmail() {
  var _email = getEmail();

  if (checkSpace(_email) === true) {
    return false;
  }

  // check for @
  var atSymbol = _email.indexOf("@");
  if (atSymbol < 1) {
    return false;
  }

  // check if there is a dot located less than 2 symbols away from the @ sign
  var dot = _email.indexOf(".");
  if (dot <= atSymbol + 2) {
    return false;
  }

  // check that the dot is not at the end
  if (dot === _email.length - 1) {
    return false;
  }

  return true;
}

/**
 * this function supposely validates submitted password
 * if password and confirmPassword do not match, return false
 *
 * @returns [Boolean] true when valid, false otherwise
 */
function validatePassword() {
  var _password = getPassword();
  var _confirmPassword = getConfirmPassword();

  if (_password.search(/[A-Z]/) < 0) {
    return false;
  }
  if (_password.search(/[0-9]/) < 0) {
    return false;
  }

  if (_password.length < 8) {
    return false;
  }
  if (_password !== _confirmPassword) {
    return false;
  }

  return true;
}

/**
 * this function supposely checks whether the sample is an empty string
 * or there is space within it
 * @param [String] sample text to be evaluated
 * @returns [Boolean] true when valid, false otherwise
 */
function checkSpace(sample) {
  return sample === "" || sample.indexOf(" ") > -1;
}

/**
 * this function looks under the form with name "registration"
 * look under the "username" input field and returns the value of it
 * returns nothing if no value is found
 *
 * @returns [Boolean] true when valid, false otherwise
 */
function getUserName() {
  if (typeof document.registration.username.value === "undefined") {
    return "";
  } else {
    return document.registration.username.value;
  }
}

function getFirstName() {
  if (typeof document.registration.firstname.value === "undefined") {
    return "";
  } else {
    return document.registration.firstname.value;
  }
}

function getLastName() {
  if (typeof document.registration.lastname.value === "undefined") {
    return "";
  } else {
    return document.registration.lastname.value;
  }
}

function getPhoneNumber() {
  if (typeof document.registration.phonenumber.value === "undefined") {
    return "";
  } else {
    return document.registration.phonenumber.value;
  }
}
function getEmail() {
  // TODO
  if (typeof document.registration.email.value === "undefined") {
    return "";
  } else {
    return document.registration.email.value;
  }
}

function getPassword() {
  // TODO
  if (typeof document.registration.password.value === "undefined") {
    return "";
  } else {
    return document.registration.password.value;
  }
}

function getConfirmPassword() {
  // TODO
  if (typeof document.registration.password_confirm.value === "undefined") {
    return "";
  } else {
    return document.registration.password_confirm.value;
  }
}
