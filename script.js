const firebaseConfig = {
  apiKey: "AIzaSyBctgRWKqXevn2NDpEE3TE8O9mvaDKFVCE",
  authDomain: "contact-form-test-db871.firebaseapp.com",
  databaseURL: "https://contact-form-test-db871-default-rtdb.firebaseio.com",
  projectId: "contact-form-test-db871",
  storageBucket: "contact-form-test-db871.firebasestorage.app",
  messagingSenderId: "713311088002",
  appId: "1:713311088002:web:8fbc91d3cd6396dff3b39b"
};

// initialize firebase 
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactFormtest");

document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();

    var firstName = getElementVal("firstName");
    var lastName = getElementVal("lastName");
    var description = getElementVal("description");
    var email = getElementVal("email");
    var mobileNo = getElementVal("mobile");

    saveMessages (firstName, lastName, description, email, mobileNo);
  }

  const saveMessages = (firstName, lastName, description, email, mobileNo) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
      firstName: firstName,
      lastName: lastName,
      description: description,
      email: email,
      mobileNo: mobileNo,
    });
  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
