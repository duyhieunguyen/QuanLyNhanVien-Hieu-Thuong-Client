//Phân quyền chuyển views (admin, user)
var object = JSON.parse(localStorage.getItem("user"))
if (object) {
    if (object.Account.Role == "admin") {

    }
}
else {
    document.location.href = "/views/login.html"
}
document.getElementById("FullName_Info").innerHTML = object.FullName