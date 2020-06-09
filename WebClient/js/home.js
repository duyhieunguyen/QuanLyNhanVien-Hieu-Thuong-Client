//Phân quyền chuyển views (admin, user)
var object = JSON.parse(localStorage.getItem("user"))
if (object) {
    if (object.Account.Role == "admin") {
        console.log(object.Role);
        load_data();
    }
}
else {
    document.location.href = "/views/login.html"
}

// document.getElementById("Email_out").innerHTML = object.Email
document.getElementById("FullName_Info").innerHTML = object.FullName

function load_data() {
    var html = "";
    Doc_Danh_Sach_Nhan_Vien().forEach(element => {
        html += `<tr>
         <td scope="row">${element.Email}</td>
         <td>${element.Account.Password.substr(0, 40) + "..."}</td>
         <td>${element.FullName}</td>
         <td>${element.Account.Role}</td>
       <td><button class="btn btn-primary btn-xs" onclick="sua('${element.FullName}','${element.Email}','${element.Account.Password}','${element.Account.Role}')" data-toggle="modal" data-target="#modelIdSua"><i class="fa fa-pencil"></i></button></td>
       </tr>`


    });
    content_home_employee.innerHTML = html;
}


function sua(fullname, email, password, role) {
    FullName.value = fullname
    Password.value = password
    Email.value = email
    Role.value = role
}

function DongYSua() {
    var acc = {};
    acc.Password = Password.value;
    acc.Role = Role.value;
    console.log(acc.Role)
    var emp = {};
    emp.Account = acc;
    emp.Email = Email.value;
    emp.FullName = FullName.value;
    document.getElementById("closeSua").click();
    Sua_Tai_Khoan_Nhan_Vien(emp)
    alert("Sửa thành công!!!")
    load_data()
}

function dang_xuat() {
    localStorage.clear()
    document.location.href = "/views/login.html"
}

/// Search thông tin
$(document).ready(function () {
    $("#search_info").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#content_home_employee tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });
  