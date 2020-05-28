/// xử lý localStorage lấy dữ liệu xuống
var obj =JSON.parse(localStorage.getItem("users")) ;
console.log(obj)
if(obj)
{
  if(obj.Role=="employee");
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
console.log(obj.FullName)
function dang_xuat(){
  localStorage.clear();
  document.location.href="../view/login.html"
}



