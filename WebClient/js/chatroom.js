var object = JSON.parse(localStorage.getItem("user"))
if (object) {
  if (object.Account.Role == "admin") {

  }
}
else {
  document.location.href = "/views/login.html"
}

var html = "";
Doc_Danh_Sach_Nhan_Vien().forEach(element => {
  if(object.Email.trim() != element.Email){
    html += `  <li>
    <a href="chat_room.html">
      <img class="img-circle" src="/images/thuong.jpg" width="32">
      ${element.FullName}

    </a>
  </li>`;
  }
});
iconEmployeeJoin.innerHTML = html;

// document.getElementById("Email_out").innerHTML = object.Email
document.getElementById("FullName_Info").innerHTML = object.FullName

var firebaseConfig = {
  apiKey: "AIzaSyArA1-8jamqtMT_zDMSXuGRcS8uLK4J_wU",
  authDomain: "quanlynhanvien-9c2c0.firebaseapp.com",
  databaseURL: "https://quanlynhanvien-9c2c0.firebaseio.com",
  projectId: "quanlynhanvien-9c2c0",
  storageBucket: "quanlynhanvien-9c2c0.appspot.com",
  messagingSenderId: "469466546874",
  appId: "1:469466546874:web:b138dbbeaf189bc0b3f883"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var myName = object.FullName;
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
firebase.database().ref("messages").on("child_added", function (snapshotMessage) {

  var html = "";
  if (snapshotMessage.val().sender == myName) {


    html += ` <div class="group-rom" id='message-" + ${snapshotMessage.key} + "'>
<div class="third-part">${snapshotMessage.val().time}</div>
<div class="second-part full" style="text-align: right;">
  <div class="font_1" style="color:white;">${snapshotMessage.val().message}</div> </div>
  
  </div>`;


  } else {
    html += `<div class="group-rom" style="background-color: #f7f8fa;">
    <div class="first-part odd">${snapshotMessage.val().sender}</div>
    <div class="second-part" style="text-align: left;">${snapshotMessage.val().message}</div>
    <div class="third-part" style="text-align: right;">${snapshotMessage.val().time}</div>
  </div>`;
  }
  document.getElementById("messages").innerHTML += html;
});

function sendMessage() {

  // get message
  var message = document.getElementById("messaage").value;
  var scroll = document.getElementById('dataScroll');
 
    firebase.database().ref("messages").push().set({
      "sender": myName,
      // "message": message
      "message": message,
      "sender_id": object.Email,
      "time":time
      // "reciver_id": id

    });
    messaage.value = "";
    scroll.scrollTop = scroll.scrollHeight;
}

// function deleteMessage(self) {
//   // Lấy Id message 
//   var messageId = self.getAttribute("data-id");
//   console.log("Delete")
//   console.log(messageId)
//   console.log("1")
//   //Xóa message
//   firebase.database().ref("messages").child(messageId).remove();
//   // list messages
//   console.log("2")
//   firebase.database().ref("messages").on("child_removed", function (snapshot) {
//     // remove message node
//     console.log("3")
//     var x = document.getElementById("message-" + snapshot.key).innerHTML = "Đã xóa";
//     console.log("Hien ne"+x)
//   });
 
// }

// $(document).delegate('.first', 'click', function(e){
//   e.preventDefault();
//   console.log(123);
//   $(this).removeClass('first');
//  $(this).siblings().addClass('first');
// })

