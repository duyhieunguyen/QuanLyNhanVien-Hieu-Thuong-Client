/// xử lý localStorage lấy dữ liệu xuống
var obj =JSON.parse(localStorage.getItem("users")) ;
console.log(obj)
if(obj)
{
  if(obj.Role=="employee");
  load_data();
}
else{
  document.location.href="../view/login.html"
} 


$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
document.getElementById("FullName_out").innerHTML=obj.FullName;
document.getElementById("Email_out").innerHTML=obj.Email;
///xử lý đăng xuất 
console.log(obj)
function dang_xuat(){
  localStorage.clear();
  document.location.href="../view/login.html"
}

//load Data cho Employee
function load_data()
{
  var html="";
  Doc_Danh_sach().forEach(employees => {
    html +=`<tr>
    <td scope="row">${employees.Account.UserName}</td>
    <td>${employees.Account.Password}</td>
    <td>${employees.Email}</td>
    <td>${employees.Account.Role}</td>
    <td>d</td>
    </tr>`
  });
  myTable.innerHTML=html;

}
function Dong_y_them() {
  var account = {};
  account.Password=addPassword.value;
  account.Role=addRole.value;
  account.UserName=addUserName.value;

  var obj = {};
  obj.Account=account;
 
  obj.Email = addEmail.value;
  document.getElementById("Close_item").click();
  Them_Nguoi_Dung(obj);
  load_data();
}



