//Phân quyền chuyển views (admin, user)
var object = JSON.parse(localStorage.getItem("user"))
if (object) {
    if (object.Account.Role == "admin") {
  
    }
}
else {
    document.location.href = "/views/login.html"
}

function Dong_Y_Doi_Mat_Khau() {
    if (Password.value == null || Password.value.trim() == "") {
        alert("Vui lòng nhập Password cũ !!!");
    } else if (Password_New.value == null || Password_New.value.trim() == "") {
        alert("Vui lòng nhập Password mới !!!");
    } else if (Re_Password_New.value == null || Re_Password_New.value.trim() == "") {
        alert("Vui lòng nhập Re_Password mới !!!");
    } else if (Password_New.value.trim() != Re_Password_New.value.trim()) {
        alert("Mật khẩu không khớp !!!")
    }
    else {
        var acc = {};
        acc.Password = Password_New.value;
        var emp = {};
        emp.Account = acc;
        emp.Email = object.Email;
        Doi_Mat_Khau(emp)
        alert("Đổi mật khẩu thành công !!!")
    }


}

function dang_xuat() {
    localStorage.clear()
    document.location.href = "/views/login.html"
}