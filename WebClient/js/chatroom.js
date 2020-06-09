// var firebaseConfig = {
//     apiKey: "AIzaSyB22mfaM9oHh7pAC2tefMlR13MLcCODk9c",
//     authDomain: "chatonline-e2373.firebaseapp.com",
//     databaseURL: "https://chatonline-e2373.firebaseio.com",
//     projectId: "chatonline-e2373",
//     storageBucket: "chatonline-e2373.appspot.com",
//     messagingSenderId: "397315147769",
//     appId: "1:397315147769:web:35cc14fbeb6d71672f9f28"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// var myName = prompt("Enter your name")
// function sendMessage() {
//     // get message
//     var message = document.getElementById("messaage").value;
//     var scroll = document.getElementById('dataScroll');
//     // save in database
//     firebase.database().ref("messages").push().set({
//         "sender": myName,
//         "message": message
//     });
//     // return false;
//     messaage.value = "";
//     scroll.scrollTop = scroll.scrollHeight;

// }

// // listen for incoming messages
// firebase.database().ref("messages").on("child_added", function (snapshot) {
//     var html = "";
//     // give each message a unique ID
//     //  html += "<li id='message-" + snapshot.key + "'>";
//     // html += snapshot.val().sender + ": " + snapshot.val().message;

//     // Show delete button if message is sent by me
//     if (snapshot.val().sender == myName) {
//         html += `<div class="media w-50 ml-auto mb-3" id='message-" + snapshot.key + "'>
//           <div class="media-body">
//             <div class="bg-primary rounded py-2 px-3 mb-2">
//               <p class="text-small mb-0 text-white" >${snapshot.val().sender + ": " + snapshot.val().message}</p>
//               <button data-id='" + snapshot.key + "' onclick='deleteMessage(this);'>Delete</button>
//             </div>
//             <p class="small text-muted">12:00 PM | Aug 13</p>
//           </div>
//         </div>`
//     } else {
//         html += `
//         <div class="media w-50 mb-3"><img
//             src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50"
//             class="rounded-circle">
//           <div class="media-body ml-3">
//             <div class="bg-light rounded py-2 px-3 mb-2">
//               <p class="text-small mb-0 text-muted">${snapshot.val().sender + ": " + snapshot.val().message}</p>
//             </div>
//             <p class="small text-muted">12:00 PM | Aug 13</p>
//           </div>
//         </div>`
//     }
//     document.getElementById("messages").innerHTML += html;
// });

// function deleteMessage(self) {
//     // get message ID
//     var messageId = self.getAttribute("data-id");

//     //delete message
//     firebase.database().ref("messages").child(messageId).remove();

//     // attach listener for delete message
//     firebase.database().ref("messages").on("child_removed", function (snapshot) {
//         // remove message node
//         document.getElementById("message-" + snapshot.key).innerHTML = "This message has been removed";
//     });
// }

function sendMessage() {
  getConnectionWebSocket(myMessage.value);
  var scroll = document.getElementById("dataScroll");

  html += `        <div class="group-rom">
  <div class="third-part">12:30</div>
  <div class="second-part full" style="text-align: right;">
    <div class="font_1">Hi Mark, have a minute  </div> </div>
</div>`;

  content_chat.innerHTML = html;
  myMessage.value = "";
  scroll.scrollTop = scroll.scrollHeight;
}

function getConnectionWebSocket(studentCode) {
  //var connection = new WebSocket("wss://dv-webtracnghiem.herokuapp.com/");
  var connection = new WebSocket("ws://localhost:3000/");
  connection.onopen = function (message) {
    connection.send(studentCode);
    //gửi đi
  };

  connection.onmessage = function (message) {
    try {
      //gửi đến
      var obj = {};
      obj = JSON.parse(message.data);
      html += `<div class="d-flex justify-content-start mb-4">
            <div class="img_cont_msg">
              <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                class="rounded-circle user_img_msg">
            </div>
            <div class="msg_cotainer">
              ${obj.data}
              <span class="msg_time">8:40 AM, Today</span>
            </div>
          </div>`;
      content_chat.innerHTML = html;
    } catch (error) {}
  };
}

$(document).ready(function () {
  $("#action_menu_btn").click(function () {
    $(".action_menu").toggle();
  });
});

for (var i = 0; i < 2; i++) {
  html += `<li class="active">
              <div class="d-flex bd-highlight">
                <div class="img_cont">
                  <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                    class="rounded-circle user_img">
                  <span class="online_icon"></span>
                </div>
                <div class="user_info">
                  <span>Khalid</span>
                  <p>Kalid is online</p>
                </div>
              </div>
            </li>`;
  icon_user.innerHTML = html;
}
var html = "";
for (var i = 0; i < obj.length; i++) {
  if (i % 2 == 0) {
    html += `<div class="d-flex justify-content-start mb-4">
            <div class="img_cont_msg">
              <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                class="rounded-circle user_img_msg">
            </div>
            <div class="msg_cotainer">
              ${i}
              <span class="msg_time">8:40 AM, Today</span>
            </div>
          </div>`;
  } else {
    html += ` <div class="d-flex justify-content-end mb-4">
            <div class="msg_cotainer_send">
              ${i}
              <span class="msg_time_send">8:55 AM, Today</span>
            </div>
            <div class="img_cont_msg">
              <img
                src="/images/logo-dai-hoc-gia-dinh.png"
                class="rounded-circle user_img_msg">
            </div>
          </div>`;
  }
}
content_chat.innerHTML = html;
