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
    username=localStorage.getItem("user_name")
    roomname=localStorage.getItem("room_name")
    function send(){
      message=document.getElementById("MSG").value ;
      firebase.database().ref(roomname).push({
            message:message,
            name:username,
            like:0
      });
      document.getElementById("MSG").value="";
    }
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message.data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class = 'user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row= name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
} });  }); }
getData();
function updateLike(message_id){
      button_id=message_id;
      likes =document.getElementById(button_id).value;
      updated_likes=Number (likes)+1;
      firebase.database().ref(roomname).child(message_id).update({
            like:updated_likes
      })
}
