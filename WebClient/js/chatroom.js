var firebaseConfig = {
    apiKey: "AIzaSyB22mfaM9oHh7pAC2tefMlR13MLcCODk9c",
    authDomain: "chatonline-e2373.firebaseapp.com",
    databaseURL: "https://chatonline-e2373.firebaseio.com",
    projectId: "chatonline-e2373",
    storageBucket: "chatonline-e2373.appspot.com",
    messagingSenderId: "397315147769",
    appId: "1:397315147769:web:35cc14fbeb6d71672f9f28"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var myName = prompt("Enter your name")
function sendMessage() {
    // get message
    var message = document.getElementById("messaage").value;
    var scroll = document.getElementById('dataScroll');
    // save in database
    firebase.database().ref("messages").push().set({
        "sender": myName,
        "message": message
    });
    // return false;
    messaage.value = "";
    scroll.scrollTop = scroll.scrollHeight;

}

// listen for incoming messages 
firebase.database().ref("messages").on("child_added", function (snapshot) {
    var html = "";
    // give each message a unique ID
    //  html += "<li id='message-" + snapshot.key + "'>";
    // html += snapshot.val().sender + ": " + snapshot.val().message;


    // Show delete button if message is sent by me
    if (snapshot.val().sender == myName) {
        html += `<div class="media w-50 ml-auto mb-3" id='message-" + snapshot.key + "'>
          <div class="media-body">
            <div class="bg-primary rounded py-2 px-3 mb-2">
              <p class="text-small mb-0 text-white" >${snapshot.val().sender + ": " + snapshot.val().message}</p>
              <button data-id='" + snapshot.key + "' onclick='deleteMessage(this);'>Delete</button>
            </div>
            <p class="small text-muted">12:00 PM | Aug 13</p>
          </div>
        </div>`
    } else {
        html += `
        <div class="media w-50 mb-3"><img
            src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="50"
            class="rounded-circle">
          <div class="media-body ml-3">
            <div class="bg-light rounded py-2 px-3 mb-2">
              <p class="text-small mb-0 text-muted">${snapshot.val().sender + ": " + snapshot.val().message}</p>
            </div>
            <p class="small text-muted">12:00 PM | Aug 13</p>
          </div>
        </div>`
    }
    document.getElementById("messages").innerHTML += html;
});


function deleteMessage(self) {
    // get message ID
    var messageId = self.getAttribute("data-id");

    //delete message
    firebase.database().ref("messages").child(messageId).remove();

    // attach listener for delete message
    firebase.database().ref("messages").on("child_removed", function (snapshot) {
        // remove message node
        document.getElementById("message-" + snapshot.key).innerHTML = "This message has been removed";
    });
}