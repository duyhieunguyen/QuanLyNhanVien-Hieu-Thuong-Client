var kq;
function forget_Password() {

    if (Email.value == null || Email.value.trim() == "") {
        alert("Vui lòng nhập Email!!!");

    } else {
        var obj = {}
        obj.Email = Email.value;
        kq = Forgot_Password(obj)
        console.log(kq)
        if (kq.trim() != 'emailNotExist') {
            
            alert("Email đã được gửi đến cho ban. Bạn hãy check Email!!!")
            document.getElementById("closeEmail").click();
        }else{
            alert("Email không tồn tại!!!")
        }
    }
}

function reset_Password(){
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get('email')
    if (Password.value == null || Password.value.trim() == "") {
        alert("Vui lòng nhập Password mới !!!");
    } else if (Re_Password.value == null || Re_Password.value.trim() == "") {
        alert("Vui lòng nhập Re_Password mới !!!");
    }else if(Password.value.trim() != Re_Password.value.trim()){
        alert("Mật khẩu không khớp !!!")
    }
     else{
        var acc = {};
        acc.Password = Password.value;
        var emp = {};
        emp.Email = email;
        emp.Account = acc;
        console.log(emp)
        document.getElementById("closeResetPassword").click();
        Sua_Tai_Khoan_Nhan_Vien(emp)
        alert("Reset Password thành công !!!")     
    }
   
}

