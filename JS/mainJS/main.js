
const dsnv = new DanhSachNhanVien();
const validation = new Validation();

// Tạo hàm viết ngắn gọn cho cú pháp 
function getELE(id) {
    return document.getElementById(id);
}


function setLocalStorage() {
    //?lưu mảng SV xuống localStorage
    //? dữ liệu của localStorage hay BE là dữ liệu JSON
    //?input: array (mangSV) => JSON

    //localStorage, JSON: đối tượng cung cấp sẵn của JS
    //stringify : array, object => JSON
    //setItem("tên local", JSON)
    localStorage.setItem("dsNhanVien", JSON.stringify(dsnv.mangNV));
}

function getLocalStorage() {
    //? 1 .getItem("tên local") => trả kết là JSON
    //? 2. parse: JSON => mảng
    //? 3. lưu vào dssv.mangSV

    // mangSV = [] => push, for
    //!mangSV  = null/undefine => không dùng được push, for
    if (localStorage.getItem("dsNhanVien") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("dsNhanVien"));
        hienthi(dsnv.mangNV);
    }

}
// chạy khi load trang
getLocalStorage();


function themNhanVien() {


    var tknv = getELE('tknv').value;
    var tenNV = getELE('name').value;
    var email = getELE('email').value;
    var matKhau = getELE('password').value;
    var ngayLam = getELE('datepicker').value;
    var luongCb = Number(getELE('luongCB').value);
    var chucVu = getELE('chucvu').value;
    var gio = Number(getELE('gioLam').value);

    tknv = tknv.replace(/\s/g, "");

    isValid &= validation.checkEmpty(tknv, "Tài khoản nhân viên không được để trống", "tbTKNV") && validation.checkIDNV(tknv, "Mã nNV không được trùng", "tbTKNV", dsnv.mangNV);
 
    isValid &= validation.checkEmpty(tenNV, "Tên NV không được để trống", "tbTen") && validation.checkName(tenNV, "Tên NV chưa đúng định dạng", "tbTen");

    isValid &= validation.checkEmail(email, "Email NV chưa đúng định dạng", "tbEmail");

    isValid &= validation.checkPass(matKhau, "MK phải có ít nhất 1 ký tự, 1 in hoa, 1 số, 1 đặc biệt, từ 6-10 ký tự", "tbMatKhau");

    isValid &= validation.checkDate(ngayLam, "Hãy nhập ngày làm cho NV!", "tbNgay");

    isValid &= validation.checkLuongCB(luongCb, "Lương cơ bản không đúng định dạng", "tbLuongCB");

    isValid &= validation.checkDropdown('chucvu', "Bạn chưa chọn chức vụ", "tbChucVu");

    isValid &= validation.checkGioLam(gio, "Giờ không đúng định dạng", "tbGiolam");

    if (isValid) {
        var nv = new NhanVien(tknv, tenNV, email, matKhau, ngayLam, luongCb, chucVu, gio);
        nv.tinhLuong();
        nv.xepLoai();
        dsnv.themNV(nv);

        hienthi(dsnv.mangNV);
        setLocalStorage();

    }

console.log("moi ne!");
}

function hienthi(mang) {
    var noidung = "";
    mang.map(function (nv, index) {
        noidung += `<tr>
        <td>${nv.tknv}</td>
        <td>${nv.tenNV}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.luongCb}</td>
        <td>${nv.xl}</td>
        <td>
        <button class="btn btn-danger mb-2" onclick="xoaNhanVien('${nv.tknv}')" >Xóa</button>

                <button class="btn btn-success" data-toggle="modal" data-target="#myModal" onclick="xemChiTiet('${nv.tknv}')" >Xem</button>
        </td>
        </tr>`
    });

    getELE('tableDanhSach').innerHTML = noidung;
}

function xoaNhanVien(maNVXoa) {
    dsnv.xoaNV(maNVXoa);
    setLocalStorage();
    getLocalStorage();
}

function xemChiTiet(maNVXem) {
    console.log("chay");
    var viTri = dsnv.timVT(maNVXem);
    if (viTri > -1) {
        //tìm thấy
        console.log(dsnv.mangNV[viTri]);

        getELE("tknv").value = dsnv.mangNV[viTri].tknv;
        getELE("tknv").disabled = true;
        getELE("name").value = dsnv.mangNV[viTri].tenNV;
        getELE("email").value = dsnv.mangNV[viTri].email;
        getELE("password").value = dsnv.mangNV[viTri].matKhau;
        getELE("datepicker").value = dsnv.mangNV[viTri].ngayLam;
        getELE("luongCB").value = dsnv.mangNV[viTri].luongCb;
        getELE("chucvu").value = dsnv.mangNV[viTri].chucVu;
        getELE("gioLam").value = dsnv.mangNV[viTri].gio;
        
    }
}

//cập nhật sinh viên
function capNhatSinhVien() {
    var tknv = getELE('tknv').value;
    var tenNV = getELE('name').value;
    var email = getELE('email').value;
    var matKhau = getELE('password').value;
    var ngayLam = getELE('datepicker').value;
    var luongCb = Number(getELE('luongCB').value);
    var chucVu = getELE('chucvu').value;
    var gio = Number(getELE('gioLam').value);

    var svCapNhat = new NhanVien(tknv, tenNV, email, matKhau, ngayLam, luongCb, chucVu, gio);
    svCapNhat.tinhLuong();
    svCapNhat.xepLoai();
    console.log(svCapNhat);
    dsnv.capNhatNV(svCapNhat);
    setLocalStorage();
    getLocalStorage();

}

function resetForm() {
 
    getELE("formQLNV").reset();
    getELE("tknv").disabled = false;
}


function timLoaiNV() {
    console.log("tim ne");
    var tuKhoaLoai = getELE("searchName").value;
    var mangKQ = dsnv.timKiemNV(tuKhoaLoai);
    hienthi(mangKQ);
}
getELE("btnTimNV").onclick = timLoaiNV;
getELE("searchName").onkeyup = timLoaiNV;
