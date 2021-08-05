Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
function car() {
    var self = this;
    var type_body = "";
    var car_folder = '';
    var color1;
    // this.loadinfotostation04 = (vincode) => {

    //     $.ajax({
    //       url: 'loadTable01to04.php',
    //       type: 'post',
    //       data: {
    //         vincode: vincode,
    //       },
    //       dataType: 'json',
    //       success: function (data) {
    //         console.log(data);
    //         let arry = data.data;
    //         let level = '';
    //         let html = '';
    //         for (let i in arry) {
    //           if (arry[i].err_level == '0')
    //             level = '<span class="badge badge-danger">Chưa sửa</span>';
    //           else level = '<span class="badge badge-success">Đã sửa</span>';
    //           html += `<tr> $('#img_01').attr("src", "../assets/img/J72K/Body/station01/Hinh01.png");
    //           <td>`+ arry[i].IDval + `</td>
    //           <td>`+ arry[i].value + `</td>
    //           <td>`+ arry[i].user_create + `</td>
    //           <td>`+ arry[i].user_confirm + `</td>
    //           <td>`+ level + `</td>
    //           </tr>`;
    //         }
    //         $('#table-01').append(html);
    //       },
    //       error: function (error) {
    //         console.log(error.responseText);
    //       }
    //     })
    //   }
    this.load_check01_qcbody = (vincode) => {

        var bodytype = vincode.substring(0, 9);
        console.log(bodytype);
        $.ajax({
            url: 'get_bodytype.php',
            type: 'POST',
            cache: false,
            data: {
                bodytype: bodytype,
            },

            dataType: 'json',
            success: function (data) {

                if (data.code == 200) {
                    $('#table-qc').find('td').remove();
                    //self.get_image_01(data.type);
                    self.load_table(data.type);
                    $('input').prop('readonly', true);
                    $('input').keydown(function (e) {
                        key = e.keyCode;
                        // alert(key);
                        var dau = '-'; let str = '';
                        var check = dau.indexOf($(this).val());
                        if (check > -1) {
                            str = $(this).val().substr(1);
                            console.log(str);
                        }

                        else str = $(this).val();

                        str = str.replace('-', '');
                        if (e.which != 8 && str.length == 2) {
                            console.log(str);
                            var index = $(":input").index(this) + 1;
                            $(":input").eq(index).focus();
                        }

                    });
                }

            },
            error: function (error) {
                console.log(error.responseText);
            },
        }

        )

    }
    this.get_image_01 = (bodytype) => {
        $.ajax({
            url: 'loadimg01.php',
            type: 'post',
            data: { vincode: bodytype },
            dataType: 'json',
            success: function (data) {
                console.log(data);
                self.cbLoadImg01(data, bodytype);
            },
            error: function (error) {
                console.log(error.responseText);
            }
        })
    }
    this.load_table = (bodytype) => {
        var html01 = '', html02 = '', html03 = '';
        var table01 = '', table02 = '', table03 = '', table04 = '', table05 = '';

        $('#table-qc').empty();
        $('#table-qc').append(body(bodytype));


    }
    // this.cbLoadImg01 = (result, vincode) => {
    //     let image = result.image;
    //     let bodytype = vincode;
    //     let html = '';
    //     for (let i in image) {
    //       console.log(image[i].image);
    //       // let alt = (image[i].split('.'));
    //       // alt.pop();
    //       // alt = alt[alt.length - 1].split('/');
    //       // alt = alt[alt.length - 1];
    //       html += `<div class="__box_img col-lg-3 col-sm-5 col-12m mt-1 mb-1">
    //       <div class="__img mt-1 mb-1">
    //       <img src=".` + image[i].image + `" alt="` + image[i].image + `" class="w-100 __box_shadow">
    //       </div>
    //     </div>
    //     `;
    //     }

    //     $('.car_area').append("<div class='row'>");
    //     $('.car_area').append(html);
    //     $('.car_area').append("</div>");

    //   }
    this.loadvalue_station01_han = (vincode) => {
        var arryid = [], arryvalue = [];

        $.ajax({
            url: 'getinfo_station01_han.php',
            type: 'POST',
            data: {
                vincode: vincode,

            },
            dataType: 'json', cache: false,

            success: function (data) {
                if (data.code == 200) {
                    let id = data.id;
                    let value = data.value;
                    let level = data.level;
                    for (var i = 0; i < id.length; i++) {
                        $('#' + id[i] + '').val(value[i]);
                    }
                }

            },
            error: function (error) {
                console.log(error.responseText);
            },

        })
    }
    this.cbLoadError = (result, el = ".car_area", boss = '', header = true) => {


        if (result.length == 0) {
            console.log('result error empty!');
            return true;
        }
        let data = result.data;
        console.log(data.vincode);

        for (let i in data) {

            if (typeof data[i].error_position == "undefined") continue;
            if (data[i].error_position == '') continue;

            $(el).find(".__img img[alt=" + data[i].error_position + "]").parent().append(
                '<span class="error_point ' + ((data[i].err_level == '2') ? 'done_lv_2' : data[i].err_level == '3' ? 'done_lv_3' : data[i].err_level == '0' ? 'pending_fix' : '') + ' ' + '" mv-error="' + data[i].error_type + '" mv-position="' + data[i].error_position + '" mv-errother="' + data[i].error_note + '" mv-x="' + data[i].error_x + '" mv-y="' + data[i].error_y + '" style="top: ' + data[i].error_y + '%; left: ' + data[i].error_x + '%;" mv-errid="' + data[i].err_id + '" mv-errnote="' + (typeof data[i].err_note != 'undefined' ? data[i].err_note : '') + '"></span>'
            );

        }

        if (self.car_folder == '' && boss == '') {
            return;
        }
        if (boss != '') {
            self.car_folder = boss.toUpperCase();
        }

        if ($(".showOvlAddNote").length > 0) {
            $(".showOvlAddNote").show();
        }


    }
    this.viewHistory = (el, id) => {
        $user = el.attr('mv-user') != undefined ? el.attr('mv-user') : '';
        $.ajax({
            url: 'history.php',
            type: 'post',
            dataType: 'json',
            data: {
                err_id: id,
                user: $user
            },
            success: function (result) {
                self.cbViewHistory(el, result);
            },
            error: function (error) {
                console.log(error.responseText)
            }
        })
    }
    this.cbViewHistory = (el, result) => {
        console.log(result.type);
        let data = result.data;
        let html = `
            <table class="table table-reponsive">
                 
                <thead class="thead-ligth"<tr>
                        <th scope="col">ID</th>
                        <th scope="col">Error Name</th>
                        <th scope="col">User Change</th>
                        <th scope="col">Time Change</th>
                        <th scope="col">Date Change</th>
                    </tr>
                </thead>
                <tbody>
            `;
        let ii = 1
        for (let i in data) {
            let userChange = data[i]['err_user_fullname'];
            html += `
                    <tr>
                        <th scope="row">` + (ii++) + `</th>
                        <td>`+ err_option[result.type] + `</td>
                        <td>`+ userChange + `</td>
                        <td>`+ data[i]['err_time_change'] + `</td>
                        <td>`+ data[i]['err_date_change'] + `</td>
                    </tr>
            `;
        }
        html += `
                </tbody>
            </table>
        `;

        el.modal("show").find(".modal-body").empty().append(html);
    }
    this.checkDoneAll = async (isNotCheck = false, exportAuto = false) => {
        if (!isNotCheck && $(".car_area").find(".error_point:not(.__no_check):not(.done_lv_3)").length > 0) {
            return true;
        }
        //show overlay waiting load sealer
        $("body").append('<div class="__loading"><div class="lds-dual-ring"></div></div>');
        //load sealer
        await self.loadAll($("#car_code").val().trim(), null, true);
        var pendingLoadImageAll = setInterval(() => {
            if ($(".area-submit").find('.__box_img').length > 0) {
                clearInterval(pendingLoadImageAll);
                convertImg();
            }
        }, 100)
        async function convertImg() {
            $img_qc1k = await self.cbConvertImg(".qc1k_area", isNotCheck, exportAuto);

            self.saveImgIfDoneAll({
                qc1k: $img_qc1k,

            });
        }
        return true;
    }
    this.saveImgIfDoneAll = (img) => {
        var exportByTool = false;
        
       
        if (typeof allowExport != 'undefined') {
            if (allowExport) {
                exportByTool = true;
            }
        }
        $.ajax({
            url:'saveImageDoneAll.php',
            type: 'POST',
            data: {
                'images': img,
                'vin_code': $("#car_code").val(),
                'vin_code_mini': $("#car_code").val().substring(0,9),
                'tool': exportByTool ? '1' : '0'
            },
            cache:false,
            dataType: 'json',
            success: function (result) {
                console.log(result);
                if (exportByTool) {
                    window.location.href = './?all=1';
                    return true;
                }
                window.location.href = window.location.origin + window.location.pathname;
                return true;
            },
            error: function (error) {
                console.log(error.responseText)
                alert('An error hased! please check console or contact admin!');
                if (exportByTool) {
                    window.location.reload(true);
                    return true;
                }
            }
        })
    }
    this.cbConvertImg = (el, exportPage = false, exportAuto = false) => {
        return new Promise(resolve => {
            let img = {};
            $_img = $(el).find(".__img");
           
            $_parent = $(el).find('.__box_img');
            $_parent.each(function () {
                let cls = '__box_img exporting col-6';
                if (exportPage && !exportAuto) {
                    cls = '__box_img exporting col-12';
                }
                console.log(cls);
                $(this).removeAttr('class').attr('class', cls);
            });

            setTimeout(function () {
                $_img.each(function () {
                    var nameImg = $(this).find('img').attr('alt');
                    html2canvas($(this).get(0)).then(function (canvas) {
                        img[nameImg] = canvas.toDataURL("image/png");
                        console.log(nameImg);
                    });
                });
            }, 100);

            let checkDoneEach = setInterval(function () {
                if (Object.size(img) == $_img.length) {
                    clearInterval(checkDoneEach);
                    resolve(img);
                }
            }, 50);
        });
    }
    this.loadAll = (code, location = null, exportFlag = false) => {
        $.ajax({
            url: 'loadAll.php',
            type: 'post',
            dataType: 'json',
            data: {
                type: 'loadall',
                code: code,
                code_min: code.substring(0, length_car_vin)
            },

            success: function (result) {
                console.log(result);
                $userType = $("meta[name=_ps]").attr('content');
                if (result.code == 200) {
                    console.log(result);
                    if ($userType == 'Trạm 4') {
                        self.cbLoadAll_v2(result, location, exportFlag);
                    } else {
                        self.cbLoadAll(result, result.position);

                    }
                } else {
                    console.log(result);
                }
            },
            error: function (error) {
                console.log(error.responseText);

            }
        })
    }
    this.cbLoadAll = (result, location = null) => {

        let errors = result.error;
        let images = result.image;

        let img_append = '';
        if (images.length > 0) {
            $('.car_area_custom').append("<h2 class='text-center d-block w-100'>Khu vực " + location.toUpperCase() + "</h2>").parent().removeClass('d-none');
            console.log(images);
            $(".car_area_custom").append(self.renderImage(images));
            // if(location != null){

            //     $(".car_area_custom").append("<h2 class='text-center d-block w-100'>Khu vực " + location.toUpperCase() + "</h2>").parent().removeClass('d-none');
            //     $(".car_area_custom").append(self.renderImage(location.toUpperCase() == 'RH' ? images_rh : images_lh));
            // } else{
            //     $(".car_area-rh")
            //         .append("<h2 class='text-center d-block w-100'>Khu vực RH</h2>")
            //         .append(self.renderImage(images_rh));
            //     $(".car_area-lh")
            //         .append("<h2 class='text-center d-block w-100'>Khu vực LH</h2>")
            //         .append(self.renderImage(images_lh));
            // }
        } //else {
        //   $(".car_area").append(self.renderImage(images_sealer));
        // }

        console.log(errors);
        for (let i in errors) {
            if (typeof errors[i].error_position == "undefined") continue;
            if (errors[i].error_position == '') { console.log(111132); continue; }
            $(".car_area").find(".__img img[alt=" + errors[i].error_position + "]").parent().append(
                '<span class="error_point ' + ((errors[i].err_level == '2') ? 'done_lv_2' : (errors[i].err_level == '3' ? 'done_lv_3' : '')) + '" mv-error="' + errors[i].error_type + '" mv-errid="' + errors[i].err_id + '" mv-errlv="' + errors[i].err_level + '" mv-errother="' + errors[i].err_note + '" mv-position="' + errors[i].error_position + '" mv-x="' + errors[i].error_x + '" mv-y="' + errors[i].error_y + '" style="top: ' + errors[i].error_y + '%; left: ' + errors[i].error_x + '%;"></span>'
            );
        }

        self.setLocationError();

    }
    this.cbLoadAll_v2 = (result, location = null, exportFlag = false) => {
        let errors = result.error;
        let images_lh = result.image_lh;
        let images_rh = result.image_rh;


        if (exportFlag) {
            $(".area-submit").removeClass('d-none');
            $(".area-default").remove();

            $(".area-submit").find('.car_area_qc1k > .car_area')
                .append("<h2 class='text-center d-block w-100'>Khu vực RH</h2>")
                .append(self.renderImage(images_rh));
            $(".area-submit").find('.car_area_qc1k > .car_area')
                .append("<h2 class='text-center d-block w-100'>Khu vực LH</h2>")
                .append(self.renderImage(images_lh));
            $(".area-submit").find('.car_area_sealer > .car_area')
                .append("<h2 class='text-center d-block w-100'>Khu vực Sealer</h2>")
                .append(self.renderImage(images_sealer));
        } else {
            $(".car_area_custom").parent()
                .prepend('<div class="row mt-3"></div>')
                .removeClass('d-none');

            $(".car_area_custom")
                .append('<h2 class="w-100 text-center mt-4">Khu vực LH</h2>')
                .append(self.renderImage(images_lh));
            $(".car_area_custom")
                .append('<h2 class="w-100 text-center mt-4">Khu vực RH</h2>')
                .append(self.renderImage(images_rh));
        }

        for (let i in errors) {
            if (typeof errors[i].error_position == "undefined") continue;
            if (errors[i].error_position == '') { console.log(111132); continue; }
            $(".car_area").find(".__img img[alt=" + errors[i].error_position + "]").parent().append(
                '<span class="error_point ' + ((errors[i].err_level == '2') ? 'done_lv_2' : (errors[i].err_level == '3' ? 'done_lv_3' : '')) + '" mv-error="' + errors[i].error_type + '" mv-errid="' + errors[i].err_id + '" mv-errlv="' + errors[i].err_level + '" mv-errother="' + errors[i].err_note + '" mv-position="' + errors[i].error_position + '" mv-x="' + errors[i].error_x + '" mv-y="' + errors[i].error_y + '" style="top: ' + errors[i].error_y + '%; left: ' + errors[i].error_x + '%;"></span>'
            );
        }

        self.setLocationError();

    }
    this.setLocationError = () => {
        $(".container-fluid").find(".error_point").each(function () {
            let text = $(this).attr('mv-error');
            let topThis = parseFloat($(this).css('top'));
            let html = '';
            if (topThis < 34) {
                html = '<span style="font-size: 15px;text-align:center;position: absolute;top: 100%;left: -px;font-weight: bold;background: #fff; width: 15px; height: 15px;">' + text + '</span>'
            } else {
                html = '<span style="font-size: 15px;text-align:center;position: absolute;bottom: 120%;left: -1px;font-weight: bold;background: #fff; width: 15px; height: 15px;">' + text + '</span>';
            }
            $(this).empty().append(html);
        })
    }
    this.renderImage = (images) => {
        let result = '';

        for (let i in images) {
            let alt = (images[i].image.split('.'));
            alt.pop();
            alt = alt[alt.length - 1].split('/');
            alt = alt[alt.length - 1];
            // comment vì chưa hiểu change_design là gì ở đây
            // else if(change_design=='REPAIR'){
            //     result += `
            //         <div class="__box_img col-lg-4 col-sm-5 col-10 mt-1 mb-1">
            //             <div class="__title_img text-center">
            //                 <h6>` +  self.translate(alt) + `</h6>
            //             </div>
            //             <div class="__img mt-1 mb-1">
            //                 <img src="` + (typeof localhost != 'undefined' && localhost ? images[i].image.substr(1) : images[i].image) + `" alt="` + alt + `" class="w-100 __box_shadow">
            //             </div>
            //         </div>
            //     `;
            // }
            //else{
            //<h6>` + self.translate(alt) + `</h6>
            // <img src="` + (typeof localhost != 'undefined' && localhost ? images[i].image.substr(1) : images[i].image) + `" alt="` + alt + `" class="w-100 __box_shadow">
            result += `
                    <div class="__box_img col-lg-3 col-sm-5 col-10 mt-1 mb-1">
                        <div class="__title_img text-center">
                        <h6>` + self.translate(alt) + `</h6>              
                        </div>
                        <div class="__img mt-1 mb-1">
                           
                        <img src=".` + (typeof localhost != 'undefined' && localhost ? images[i].image.substr(1) : images[i].image) + `" alt="` + alt + `" class="w-100 __box_shadow">
                        </div>
                    </div>
                `;
            //}

        }
        // console.log(result);
        return result;
    }
};
var car = new car();