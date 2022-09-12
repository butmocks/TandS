import React from 'react';
import ReactDOM from 'react-dom';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// import App from './App';



// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAgrcbaVP65cQwMW9ne595na4GRQ2sc1_U',
  authDomain: 'tosukr-463d0.firebaseapp.com',
  projectId: 'tosukr-463d0',
  storageBucket: 'tosukr-463d0.appspot.com',
  messagingSenderId: '327269890952',
  appId: '1:327269890952:web:f91ea06bb6756d6199583d',
  measurementId: 'G-4PFE5NESYR',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var messagesRef = firebase.database().ref('TasksUkr');
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase

$('#contactForm').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.fullname').val(),
    email: $('.email').val(),
    subject: $('.subject').val(),
    message: $('.message').val(),
  });

  $('.success-message').show();

  $('#contactForm')[0].reset();
});

messagesRef.once('value').then(snapshot => {
  Object.keys(snapshot.val()).forEach(key => {
    console.log(`Name: ${snapshot.val()[key].name}`);
    console.log(`Email: ${snapshot.val()[key].email}`);
    console.log(`Subject: ${snapshot.val()[key].subject}`);
    console.log(`Message: ${snapshot.val()[key].message}`);
  });
});

ReactDOM.render(<App />, document.getElementById('root'));
