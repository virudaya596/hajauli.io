// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBctgRWKqXevn2NDpEE3TE8O9mvaDKFVCE",
    authDomain: "contact-form-test-db871.firebaseapp.com",
    databaseURL: "https://contact-form-test-db871-default-rtdb.firebaseio.com",
    projectId: "contact-form-test-db871",
    storageBucket: "contact-form-test-db871.appspot.com",
    messagingSenderId: "713311088002",
    appId: "1:713311088002:web:8fbc91d3cd6396dff3b39b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to your Firebase database
const contactFormDB = firebase.database().ref("contactForm");

// Listen for form submission
document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    const photo = document.getElementById("pic").files[0];
    const firstName = getElementVal("fName");
    const lastName = getElementVal("lName");
    const gender = getElementVal("gender");
    const emailId = getElementVal("emailId");
    const mobileNo = getElementVal("mobileNo");
    const about = getElementVal("about");

    if (!photo) {
        alert("Please upload your photo.");
        return;
    }

    // Save the form data to Firebase
    saveMessages(photo, firstName, lastName, gender, emailId, mobileNo, about);

    // Show success message and hide the form
    document.querySelector(".success").style.display = "block";
    document.querySelector(".form-container").style.display = "none";

    // Reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (photo, firstName, lastName, gender, emailId, mobileNo, about) => {
    const newContactForm = contactFormDB.push();

    newContactForm.set({
        pic: photo.name,  // Save the file name; for full storage, you can use Firebase Storage
        fName: firstName,
        lName: lastName,
        gender: gender,
        emailId: emailId,
        mobileNo: mobileNo,
        about: about
    });
};

// Utility function to get element value by ID
const getElementVal = (id) => {
    return document.getElementById(id).value;
};
