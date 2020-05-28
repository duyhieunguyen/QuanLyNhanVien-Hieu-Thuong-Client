

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


