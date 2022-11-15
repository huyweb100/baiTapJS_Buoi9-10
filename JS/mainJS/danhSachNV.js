function DanhSachNhanVien(){
    // Thuộc tính
    this.mangNV = [];

    this.themNV = function (nv) {
        this.mangNV.push(nv);
    }

    this.timVT = function (maNVxoa) {
        var vt = -1;

        vt = this.mangNV.findIndex(function(nv) {
            return maNVxoa == nv.tknv;
        })
        return vt;
    }
    
    this.xoaNV = function(maNVxoa) {
        var vt = this.timVT(maNVxoa);
        if (vt != -1) {
            this.mangNV.splice(vt,1);
        }
    }
    this.capNhatNV = function(nvCapNhat){
        var viTri = this.timVT(nvCapNhat.tknv);
        if(viTri > -1){
            //tìm thấy
            dsnv.mangNV[viTri] = nvCapNhat;
        }
    }

}

DanhSachNhanVien.prototype.timKiemNV = function(tuKhoaTK) {
    var mangKetQua = []; //Mảng tìm kiếm được từ từ khoá
    var tuKhoa = tuKhoaTK.toLowerCase().replace(/\s/g,"");

    this.mangNV.map(function(nv) {
        var tenxl = nv.xl.toLowerCase().replace(/\s/g,"");
        var viTri = tenxl.indexOf(tuKhoa);
        if (viTri > -1) {
            mangKetQua.push(nv);
        }
    })
    return mangKetQua;
}