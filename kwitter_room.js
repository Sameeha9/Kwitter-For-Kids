//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDLaV-KtB8AlnuvmJFskNeIx-rOaEn6cr8",
    authDomain: "kwitterproject-bae0e.firebaseapp.com",
    databaseURL: "https://kwitterproject-bae0e.firebaseio.com",
    projectId: "kwitterproject-bae0e",
    storageBucket: "kwitterproject-bae0e.appspot.com",
    messagingSenderId: "1024305224118",
    appId: "1:1024305224118:web:ac560597e36fdb5cfd8917",
    measurementId: "G-QVXJLF68T1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML= "Welcome " + user_name + "!";
  function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"});
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
  }
  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
  
  }
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name")
    window.location = "kwitter.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("room_name - " + room_name);
    row = "<div class= 'room_name' id= " + Room_names + "onclick= 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
    document.getElementById("output").innerHTML += row;
   //Start code

   //End code
   });});}
getData();