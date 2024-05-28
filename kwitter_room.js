const firebaseConfig = {
      apiKey: "AIzaSyA17iVyQ7bjisINsppj-vdx6UZUysKAxXc",
      authDomain: "kwitter-23f77.firebaseapp.com",
      databaseURL: "https://kwitter-23f77-default-rtdb.firebaseio.com",
      projectId: "kwitter-23f77",
      storageBucket: "kwitter-23f77.appspot.com",
      messagingSenderId: "177185705239",
      appId: "1:177185705239:web:f8ca1baf12d82db7a67b52"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+username +"!";
    function addroom(){
      room_name=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_room_name"
      })
      localStorage.setItem("room_name" , room_name);
      window.location="kwitter_page.html"
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     console.log("room_names:"+Room_names);
     row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML +=row;
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}