

//xử lý ẩn hiển password
const pass_field = document.querySelector(".pass-key");
const showBtn = document.querySelector(".show");
showBtn.addEventListener("click", function () {
  if (pass_field.type === "password") {
    pass_field.type = "text";
    showBtn.textContent = "HIDE";
    showBtn.style.color = "#3498db";
  } else {
    pass_field.type = "password";
    showBtn.textContent = "SHOW";
    showBtn.style.color = "#222";
  }
});

// localStorege giúp trang giữ trạng thái đăng nhập
var obj =JSON.parse(localStorage.getItem("users")) ;
console.log(obj)
if(obj)
{
  if(obj.Role=="employee");
  document.location.href="../view/home.html"
}

//xử lý login

flag = false;
employee = {};
function xu_ly_login() {
  var UserNameInput = document.getElementById("userName").value;
  var PasswordInput = document.getElementById("password").value;
  console.log(Doc_Danh_sach())
  Doc_Danh_sach().forEach((employees) => {
     console.log(employees.Account.UserName)
   if (employees.Account.UserName == UserNameInput) {
      if (employees.Account.Password == PasswordInput) {
			flag = true;
			employee=employees;
			console.log(employee);
			localStorage.setItem("users",JSON.stringify(employee));
			document.location.href="../view/home.html"
		  }
   }
  });
  if (flag == true) {
    alert("Đăng nhập thành công");
  } else {
    alert("Đăng nhập thất bại");
  }
}
var firebaseConfig = {
  apiKey: "AIzaSyDt8336IDbpjOdqHPGwOuPTscXXCKKMcSA",
  authDomain: "quanlynhanvien-136ee.firebaseapp.com",
  databaseURL: "https://quanlynhanvien-136ee.firebaseio.com",
  projectId: "quanlynhanvien-136ee",
  storageBucket: "quanlynhanvien-136ee.appspot.com",
  messagingSenderId: "413852244452",
  appId: "1:413852244452:web:4c9ff415105ed92fe5cff1"
}
function login_google()
{

      // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().languageCode = 'pt';
  // To apply the default browser preference instead of explicitly setting it.
  // firebase.auth().useDeviceLanguage();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
};




