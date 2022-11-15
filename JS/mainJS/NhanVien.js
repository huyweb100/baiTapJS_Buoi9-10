function NhanVien(tknv,tenNV,email,matKhau,ngayLam,luongCb,chucVu,gio) {
    // Thuộc tính
    this.tknv = tknv;
    this.tenNV = tenNV;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCb = luongCb;
    this.chucVu = chucVu;
    this.gio = gio;

    this.luong = "";
    this.xl = "";
    // Phuơng thức
    this.tinhLuong = function () {
        if (this.chucVu == 1) {
            this.luong = (this.luongCb*3);
        } else if (this.chucVu == 2) {
            this.luong = (this.luongCb * 2);
        } else {
            this.luong = (this.luongCb);
        }
    }
    this.xepLoai = function () {
        if (this.gio < 160) {
            this.xl = "Trung bình";
        } else if ((this.gio >= 160) && (this.gio < 176)) {
            this.xl = "Khá";
        } else if ((this.gio >= 176) && (this.gio < 192)) {
            this.xl = "Giỏi";
        } else if (this.gio >= 192) {
            this.xl = "Xuất sắc";
        }
    }
}