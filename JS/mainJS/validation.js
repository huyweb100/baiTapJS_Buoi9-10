function Validation() {
    //thuộc tính  (lưu dữ liệu) => không cần tạo ở Validation

    //phương thức (các chức năng xử lý data)
    //kiểm tra rỗng
    //TODO: input: valueInput, msgErr, spanID (id của thẻ hiển thi thông báo) ; output: true/false => loai hàm
    this.checkEmpty = function (valInput, msgErr, spanID) {
        //valInput == ""
        //? trim() => "   SV001   ".trim() => "SV001"
        //? "    ".trim() => ""


        if (valInput.trim() == "") {
            //!không hợp lệ
            document.getElementById(spanID).innerHTML = msgErr;
            document.getElementById(spanID).style.display = "block";
            return false;
        }

        //?Hợp lệ
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;


    }

    //kiểm tra mã có trùng không
    //TODO: input: valueInput, msgErr, spanID, mangSV ; output: true/false 
    this.checkIDNV = function (valueInput, msgErr, spanID, mangNV) {
        // some() => duyệt mảng, kiểm tra theo đk, trả về true/false (sẽ dừng khi phát hiện có sv bị trùng mã) 

        var isExist = mangNV.some(function (nv) {
            //sv từng đối tượng sinh viên trong mảng
            return nv.tknv === valueInput;//kiểm tra có mã bị trùng ko?
        });

        if (isExist) {
            //!mã bị trùng => không hợp lệ
            document.getElementById(spanID).innerHTML = msgErr;
            document.getElementById(spanID).style.display = "block";
            return false;
        }

        //?Hợp lệ
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;

    }

    //kiểm tra mã có trùng không
    //TODO: input: valueInput, msgErr, spanID ; output: true/false 
    this.checkName = function (valueInput, msgErr, spanID) {
        // regex (Biểu thức chính quy)
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/;

        if (valueInput.match(pattern)) {
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }

        //! không hợp lệ
        document.getElementById(spanID).innerHTML = msgErr;
        document.getElementById(spanID).style.display = "block";
        return false;

    }


    this.checkEmail = function (valueInput, msgErr, spanID) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (valueInput.match(pattern)) {
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        //! không hợp lệ
        document.getElementById(spanID).innerHTML = msgErr;
        document.getElementById(spanID).style.display = "block";
        return false;

    }

    this.checkPass = function (valueInput, msgErr, spanID) {
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/

        if (valueInput.match(pattern)) {
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        //! không hợp lệ
        document.getElementById(spanID).innerHTML = msgErr;
        document.getElementById(spanID).style.display = "block";
        return false;

    }

    this.checkLuongCB = function (valueInput, msgErr, spanID) {

        if (valueInput >= 1000000 && valueInput <= 20000000 && isFinite(valueInput)) {
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }

        //! không hợp lệ
        document.getElementById(spanID).innerHTML = msgErr;
        document.getElementById(spanID).style.display = "block";
        return false;
    }
    this.checkGioLam = function (valueInput, msgErr, spanID) {
        if (valueInput >= 80 && valueInput <= 200 && isFinite(valueInput) ) { 
            //hợp lệ
            document.getElementById(spanID).innerHTML = "";
            return true;
        }

        //! không hợp lệ
        document.getElementById(spanID).innerHTML = msgErr;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkDropdown = function (selectID, msgErr, spanID) {
        var index = document.getElementById(selectID).selectedIndex;
        if (index == 0) {
            //! không hợp lệ
            document.getElementById(spanID).innerHTML = msgErr;
            document.getElementById(spanID).style.display = "block";
            return false;
        }

        //hợp lệ
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    }

    this.checkDate = function (birthday, msgErr,  spanID) {
        //Ngày lam
        var dob = new Date(birthday);
        
        if (isNaN(dob)) {
            //! không hợp lệ
            document.getElementById(spanID).innerHTML = msgErr;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
        //hợp lệ
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    }


}