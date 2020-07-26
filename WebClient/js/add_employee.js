var kq;
//Phân quyền chuyển views (admin, user)
var object = JSON.parse(localStorage.getItem("user"))
if (object) {
    if (object.Role == "admin") {
        console.log(object.Role);
    }
}
else {
    document.location.href = "/views/login.html"
}
document.getElementById("FullName_Info").innerHTML = object.FullName

function DongYTao() {
    if (FullName.value == null || FullName.value.trim() == "") {
        alert("Vui lòng nhập FullName!!!");
    } else if (Email.value == null || Email.value.trim() == "") {
        alert("Vui lòng nhập Email!!!");
    } else if (Password.value == null || Password.value.trim() == "") {
        alert("Vui lòng nhập Password!!!");
    } else if (Confirm_password.value == null || Confirm_password.value.trim() == "") {
        alert("Vui lòng nhập Re_Password!!!");
    } else {

        var acc = {};
        acc.Password = Password.value;
        acc.Role = Role.value;
        acc.UserName = Email.value;
        var sch = {}
        sch.color = "red";
        sch.content = "Helloworld";
        var emp = {};
        emp.Account = acc;
        emp.Address = ""
        emp.BirthDate = ""
        emp.DepartmentName = ""
        emp.Email = Email.value;
        emp.EmployeeId = ""
        emp.FullName = FullName.value;
        emp.Image = ""
        emp.PhoneNumber = ""
        emp.PositionName = ""
        emp.Schedules = [];
        emp.Schedules.push(sch);
        kq = Them_Tai_Khoan_Nhan_Vien(emp);
        console.log(kq)
        if (kq.trim() == 'emailExist') {
            alert("Email đã tồn tại!!!")
        }else{
            alert("Tạo thành công!!!")
        }
    }
}

function LamMoi(){
    FullName.value = "";
    Email.value = "";
    Password.value = "";
    Confirm_password.value = "";
}