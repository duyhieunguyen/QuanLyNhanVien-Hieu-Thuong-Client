var Dia_chi_Dich_vu=`http://localhost:1200/`
//https://server-quanlynhanvien.herokuapp.com/
// var Dia_chi_Dich_vu="https://server-quanlynhanvien.herokuapp.com/"

function Doc_Danh_sach() {
    var Du_lieu = {}
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Doc_Danh_sach_Nguoi_dung`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    Xu_ly_HTTP.send("")
    var Chuoi_JSON = Xu_ly_HTTP.responseText
    if (Chuoi_JSON != "")
        Du_lieu = JSON.parse(Chuoi_JSON)
    return Du_lieu;
}
function Them_Nguoi_Dung(De_thi){
    var kq="";
    var Xu_ly_HTTP = new XMLHttpRequest()
    var Tham_so = `Ma_so_Xu_ly=Them_Du_Lieu`
    var Dia_chi_Xu_ly = `${Dia_chi_Dich_vu}?${Tham_so}`
    Xu_ly_HTTP.open("POST", Dia_chi_Xu_ly, false)
    var Chuoi_Goi = JSON.stringify(De_thi)
    Xu_ly_HTTP.send(Chuoi_Goi)
    kq = Xu_ly_HTTP.responseText
    return kq;
}

