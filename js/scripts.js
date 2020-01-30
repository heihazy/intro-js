var registeredUsers = []; // this array stores valid usernames until the next pageload

$(document).ready(function() {
  $("#registedBtn").on("click", validateForm);
});
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
  $("registed-users").empty();
  registeredUsers.forEach(function(registeredUser) {
    //var _newUser = document.createElement("li");
    //_newUser.innerHTML = registeredUser.username;
    //_newUser.innerHTML =
    //registeredUser.username +
    //" " +
    //registeredUser.email +
    //" " +
    //registeredUser.pass;
    // _newUser.innerHTML = `${registeredUser.username}, ${registeredUser.email}, ${registeredUser.pass}`
    //_newUser.innerHTML = JSON.stringify(registeredUser);
    $("<li>")
      .text(JSON.stringify(registeredUser))
      .appendTo("#registered-users");
    //document.getElementById("registered-users").appendChild(_newUser);
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
  if (typeof $('[name="username"]').val() === "undefined") {
    return "";
  } else {
    return $('[name="username"]').val();
  }
}

function getFirstName() {
  if (typeof $('[name="firstname"]').val() === "undefined") {
    return "";
  } else {
    return $('[name="firstname"]').val();
  }
}

function getLastName() {
  if (typeof $('[name="lastname"]').val() === "undefined") {
    return "";
  } else {
    return $('[name="lastname"]').val();
  }
}

function getPhoneNumber() {
  if (typeof $('[name="phonenumber"]').val() === "undefined") {
    return "";
  } else {
    return $('[name="phonenumber"]').val();
  }
}
function getEmail() {
  if (typeof $('[name="email"]').val() === "undefined") {
    // TODO
    return "";
  } else {
    return $('[name="email"]').val();
  }
}

function getPassword() {
  // TODO
  if (typeof $('[name="password"]').val() === "undefined") {
    return "";
  } else {
    return $('[name="password"]').val();
  }
}

function getConfirmPassword() {
  if (typeof $('[name="password_confirm"]').val() === "undefined") {
    return "";
  } else {
    return $('[name="password_confirm"]').val();
  }
}
