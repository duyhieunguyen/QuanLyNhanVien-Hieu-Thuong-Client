var object = JSON.parse(localStorage.getItem("user"));
if (object) {
    if (object.Account.Role == "admin") {
        console.log(object.Account.Role)
        document.location.href = "/views/home_employee.html"
    }
}

function dang_nhap() {
    var obj = {}
    obj.Email = UserName.value
    obj.Password = Password.value
    var kq = JSON.parse(Dang_Nhap(obj))
    if (kq != 'loginfalse') {
        localStorage.setItem("user", JSON.stringify(kq))
        alert("Đăng nhập thành công!!!")
        document.location.href = "/views/home_employee.html"
    } else {
        alert("Đăng nhập thất bại!!!")
    }
}
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyArA1-8jamqtMT_zDMSXuGRcS8uLK4J_wU",
    authDomain: "quanlynhanvien-9c2c0.firebaseapp.com",
    databaseURL: "https://quanlynhanvien-9c2c0.firebaseio.com",
    projectId: "quanlynhanvien-9c2c0",
    storageBucket: "quanlynhanvien-9c2c0.appspot.com",
    messagingSenderId: "469466546874",
    appId: "1:469466546874:web:f11b7e985a9c9836b3f883"
};


// Initialize Firebase

function loginGoogle() {
    firebase.initializeApp(firebaseConfig);
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().languageCode = 'vi';
    // To apply the default browser preference instead of explicitly setting it.
    // firebase.auth().useDeviceLanguage();

    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        var obj = {}
        obj.Email = user.email
        var kq = JSON.parse(Dang_Nhap_Google(obj));
        if (kq != 'loginGoogleFalse') {
            localStorage.setItem("user", JSON.stringify(kq))
            alert("Đăng nhập thành công!!!")
            document.location.href = "/views/home_employee.html"
        }
        else {
            document.getElementById("modalRegisterGoogle").click();
            EmailGoogle.value = user.email;

        }
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}

function dang_ky_google() {
    var acc = {};
    //acc.Password = md5(Password.value);
    acc.Password = PasswordGoogle.value;
    acc.Role = "user"
    acc.UserName = EmailGoogle.value;
    var sch = {}
    sch.color = "do";
    sch.content = "oke";
    var emp = {};
    emp.Account = acc;
    emp.Email = EmailGoogle.value;
    emp.FullName = FullNameGoogle.value;
    emp.Schedules = [];
    emp.Schedules.push(sch);
    Dang_Ky_Google(emp);
    // var login = {}
    // login.Email = emp.Email;
    var kq = JSON.parse(Dang_Nhap_Google(emp))
    if (kq != 'loginGoogleFalse') {
        localStorage.setItem("user", JSON.stringify(kq))
        alert("Đăng nhập thành công!!!")
        document.location.href = "/views/home_employee.html"
    }

}

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









