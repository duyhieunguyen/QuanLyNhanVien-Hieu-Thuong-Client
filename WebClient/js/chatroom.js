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

var myEmail = object.Email;
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
firebase.database().ref("messages").on("child_added", function (snapshotMessage) {
  var decodeMessage = Base64.decode(snapshotMessage.val().message)  
  var html = "";
  if (snapshotMessage.val().sender_id == myEmail) {

    html += ` <div class="group-rom" id='message-" + ${snapshotMessage.key} + "'>
<div class="third-part">${snapshotMessage.val().time}</div>
<div class="second-part full" style="text-align: right;">
  <div class="font_1" style="color:white;">${decodeMessage}</div> </div>
  
  </div>`;


  } else {
    html += `<div class="group-rom" style="background-color: #f7f8fa;">
    <div class="first-part odd">${snapshotMessage.val().sender}</div>
    <div class="second-part" style="text-align: left;">${decodeMessage}</div>
    <div class="third-part" style="text-align: right;">${snapshotMessage.val().time}</div>
  </div>`;
  }
  document.getElementById("messages").innerHTML += html;
});

function sendMessage() {

  // get message
  var message = document.getElementById("messaage").value;
  if(message.split("").length != 0){
    console.log(message)
    var scroll = document.getElementById('dataScroll');
 
    firebase.database().ref("messages").push().set({
      "sender": object.FullName,
      // "message": message
      "message": Base64.encode(message),
      "sender_id": object.Email,
      "time":time
      // "reciver_id": id

    });
    messaage.value = "";
    scroll.scrollTop = scroll.scrollHeight;
  }
 
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

function sendMess(event){
  
  event.preventDefault();
  sendMessage();
}

//// mã hóa và giải mã Base 64
var Base64 = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function (e) {
    var t = "";
    var n, r, i, s, o, u, a;
    var f = 0;
    e = Base64._utf8_encode(e);
    while (f < e.length) {
      n = e.charCodeAt(f++);
      r = e.charCodeAt(f++);
      i = e.charCodeAt(f++);
      s = n >> 2;
      o = ((n & 3) << 4) | (r >> 4);
      u = ((r & 15) << 2) | (i >> 6);
      a = i & 63;
      if (isNaN(r)) {
        u = a = 64;
      } else if (isNaN(i)) {
        a = 64;
      }
      t =
        t +
        this._keyStr.charAt(s) +
        this._keyStr.charAt(o) +
        this._keyStr.charAt(u) +
        this._keyStr.charAt(a);
    }
    return t;
  },
  decode: function (e) {
    var t = "";
    var n, r, i;
    var s, o, u, a;
    var f = 0;
    e = e.replace(/[^A-Za-z0-9+/=]/g, "");
    while (f < e.length) {
      s = this._keyStr.indexOf(e.charAt(f++));
      o = this._keyStr.indexOf(e.charAt(f++));
      u = this._keyStr.indexOf(e.charAt(f++));
      a = this._keyStr.indexOf(e.charAt(f++));
      n = (s << 2) | (o >> 4);
      r = ((o & 15) << 4) | (u >> 2);
      i = ((u & 3) << 6) | a;
      t = t + String.fromCharCode(n);
      if (u != 64) {
        t = t + String.fromCharCode(r);
      }
      if (a != 64) {
        t = t + String.fromCharCode(i);
      }
    }
    t = Base64._utf8_decode(t);
    return t;
  },
  _utf8_encode: function (e) {
    e = e.replace(/rn/g, "n");
    var t = "";
    for (var n = 0; n < e.length; n++) {
      var r = e.charCodeAt(n);
      if (r < 128) {
        t += String.fromCharCode(r);
      } else if (r > 127 && r < 2048) {
        t += String.fromCharCode((r >> 6) | 192);
        t += String.fromCharCode((r & 63) | 128);
      } else {
        t += String.fromCharCode((r >> 12) | 224);
        t += String.fromCharCode(((r >> 6) & 63) | 128);
        t += String.fromCharCode((r & 63) | 128);
      }
    }
    return t;
  },
  _utf8_decode: function (e) {
    var t = "";
    var n = 0;
    var r = (c1 = c2 = 0);
    while (n < e.length) {
      r = e.charCodeAt(n);
      if (r < 128) {
        t += String.fromCharCode(r);
        n++;
      } else if (r > 191 && r < 224) {
        c2 = e.charCodeAt(n + 1);
        t += String.fromCharCode(((r & 31) << 6) | (c2 & 63));
        n += 2;
      } else {
        c2 = e.charCodeAt(n + 1);
        c3 = e.charCodeAt(n + 2);
        t += String.fromCharCode(
          ((r & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
        );
        n += 3;
      }
    }
    return t;
  },
};

