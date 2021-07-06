function car() {
  var self = this;
  var type_body = "";
  var car_folder = '';
  var color1;
  this.load_check01_qcbody = (vincode) => {

    var bodytype = vincode.substring(0, 9);
    console.log(bodytype);
    $.ajax({
      url: '../get_bodytype.php',
      type: 'POST',
      cache: false,
      data: {
        bodytype: bodytype,
      },

      dataType: 'json',
      success: function (data) {

        if (data.code == 200) {
          $('#table-qc').find('td').remove();
          self.get_image_01(data.type);
          self.load_table(data.type);
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
            // if (e.which === 13) {
            //   // console.log('aaa');
            //   //   $(this).parent('td').nextAll().eq(0).find(":input").focus();
            //   var index = $(":input").index(this) + 1;
            //   $(":input").eq(index).focus();
            //   //OR
            //   //$(this).closest('td').next().next().find('.inputs').focus()
            // }
          });
        }

      },
      error: function (error) {
        console.log(error.responseText);
      },
    }

    )

  }
  this.getcolor = (vincode) => {
    $.ajax({
      url: '../get_color.php',
      type: 'POST',
      cache: false,
      data: {
        vincode: vincode,
      },

      dataType: 'json',
      success: function (data) {

        if (data.code == 200) {
          ;
          $('.showvin').empty();
          $('.showvin').text(vincode);
          $('.infoBody').empty();
          $('.infoBody').text('Loại BODY :' + data.type + ' - Mã Màu: ' + data.color);

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
      url: '../loadimg01.php',
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
  this.cbLoadImg01 = (result, vincode) => {
    let image = result.image;
    let bodytype = vincode;
    let html = '';
    for (let i in image) {
      console.log(image[i].image);
      // let alt = (image[i].split('.'));
      // alt.pop();
      // alt = alt[alt.length - 1].split('/');
      // alt = alt[alt.length - 1];
      html += `<div class="__box_img col-lg-3 col-sm-5 col-12m mt-1 mb-1">
      <div class="__img mt-1 mb-1">
      <img src=".` + image[i].image + `" alt="` + image[i].image + `" class="w-100 __box_shadow">
      </div>
    </div>
    `;
    }
    console.log(html);
    $('.car_area').append("<div class='row'>");
    $('.car_area').append(html);
    $('.car_area').append("</div>");

  }
  this.load_table = (bodytype) => {
    var html01 = '', html02 = '', html03 = '';
    var table01 = '', table02 = '', table03 = '', table04 = '', table05 = '';
  
    $('#table-qc').empty();
    $('#table-qc').append(body(bodytype));


  }

  this.save_station01_han = (vincode, id, value, button) => {

    let result111 = "";
    $.ajax({
      url: '../insert_01_han.php',
      type: 'POST',
      cache: false,
      data: {
        vincode: vincode,
        id: id,
        value: value,
        button: button,
      },
      dataType: 'json',
      success: function (data) {

        if (data.statusCode == 200 || data.button == 'create') {


        }
        else if (data.statusCode == 200 || data.button == 'confirm') {

        }
        if (data.statusCode == 201) {

        }
        if (data.statusCode == 202) {

        }
        if (data.statusCode == 203) {

        }
      },
      error: function (error) {
        console.log(error.responseText);
      },


    })
    return result111;
  }
  this.loadvalue_station01_han = (vincode) => {
    var arryid = [], arryvalue = [];

    $.ajax({
      url: '../getinfo_station01_han.php',
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
  this.getinfo_station01_han = (vincode, id) => {
    alert(vincode + id);

  }
  this.loadinfotostation04 = (vincode) => {

    $.ajax({
      url: '../loadTable01to04.php',
      type: 'post',
      data: {
        vincode: vincode,
      },
      dataType: 'json',
      success: function (data) {
        console.log(data.data);
        let arry = data.data;
        let level = '';
        let html = '';
        for (let i in arry) {
          if (arry[i].err_level == '0')
            level = '<span class="badge badge-danger">Chưa sửa</span>';
          else level = '<span class="badge badge-success">Đã sửa</span>';
          html += `<tr> $('#img_01').attr("src", "../assets/img/J72K/Body/station01/Hinh01.png");
          <td>`+ arry[i].IDval + `</td>
          <td>`+ arry[i].value + `</td>
          <td>`+ arry[i].user_create + `</td>
          <td>`+ arry[i].user_confirm + `</td>
          <td>`+ level + `</td>
          </tr>`;
        }
        $('#table-01').append(html);
      },
      error: function (error) {
        console.log(error.responseText);
      }
    })
  }
  this.load_img = (vincode) => {
    $.ajax({
      url: '../getimg.php',
      type: 'POST',
      data: {
        vincode: vincode
      },
      dataType: 'json',
      success: function (data) {
        console.log(data.path)
        self.cbLoadImg(data, vincode);

      },
      error: function (error) {
        console.log(error.responseText);
      }
    })
  }
  this.cbLoadImg = (result, code) => {
    let images = result.img;
    let img_append = '';
    let url = result.path;
    console.log(images);
    for (let i in images) {

      img_append += `
              <div class="__box_img">
                  <div class="__title_header text-center"><h4></h4></div>
                  <div class="__img mt-3 mb-3">
                      <img src="` + url + `/` + images[i].image + `" alt="` + ((images[i].image.split('.'))[0]) + `" class="w-100">
                  </div>
                  <div class="__title_img text-center">
                        <h4>` + ((images[i].image.split('.'))[0]) + `</h4>              
                  </div>
              </div>
          `;

    }
    self.emptyImg();
    $(".car_area").append(img_append);
    // setTimeout(function () {
    //   self.setOwlCarousel();
    // }, 500);
    // if (loadError) {
    self.loadError(code);
    // }
    self.car_folder = result.folder.toUpperCase();
  }

  this.emptyImg = () => {
    $parent = $('.car_area').parent();
    $('.car_area').remove();
    $parent.append("<div class='car_area'></div>");
  }
  this.setOwlCarousel = () => {
    $('.car_area').addClass('owl-carousel').owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      touchDrag: false,
      mouseDrag: false,
      items: 1,
      autoHeight: true
    })
  }
  this.submit = (el) => {

    //$(this).toggleClass("red-cell")
    // $('.error_point').removeClass('none_choice_error')
    // $('#modal_error').modal('hide');

    let parent = el.parents('#modal_error')
    let type = el.attr('mv-type');
    let typeError = parent.find('#error_type').val();
    let err_other = $("#err_other").length > 0 ? $("#err_other").val() : '';
    let car_code = $('#car_code').length > 0 ? $('#car_code').val() : $("#vin-car-change").val();
    if (type == 'delete' && self.this_error != null) {
      if (self.this_error.hasClass('none_choice_error')) {
        self.this_error.remove();
        $("#modal_error").modal('hide');
        return false;
      }
    }

    if (typeError == '-1' || typeError == null) {
      parent.find("#error_type").css({ 'border-color': 'red' })
      return false;
    }

    if (typeError == err_option_other_id && err_other == '') {
      parent.find("#err_other").css({ 'border-color': 'red' })
      return false;
    }

    // if (car_code.length < length_car_code) {
    //   parent.modal('hide');
    //   $('#car_code').css({ 'border-color': 'red' })
    //   return false;
    // }
    let result = null;
    if (type == 'add') {
      result = self.setAllPendingError(typeError, err_other);
    }
    else if (type == 'edit' || type == 'delete') {
      result = {
        'toadoX': el.attr('mv-x'),
        'toadoY': el.attr('mv-y'),
        'type_error': typeError,
        'err_other': el.attr('mv-errother')
      }
    }
    $.ajax({
      url: '../submitCarHan.php',
      type: 'post',
      dataType: 'json',
      data: { error_code: car_code, type: type, error: result },
      success: function (result) {
        self.cbSubmit(result, type);

      },
      error: function (error) {
        console.log(error.responseText);
      },
      complete: function () {
        $("#modal_error").modal('hide');
      }
    })
  }
  this.cbSubmit = (result, type) => {
    if (type == 'delete') {
      self.this_error.remove();
      self.this_error = null;
    }
    if (type == 'edit') {


      $('body').removeClass('.error_point  ');
      console.log(1111);
      // self.this_error.remove();
      //self.this_error.attr('mv-error', result.data.error.type_error);
      //if(result.data.error.type_error != '1' && result.data.error.type_error != '2'){
      //    self.this_error.addClass('other_type_error');
      //}else{
      //    self.this_error.removeClass('other_type_error');
      //}
    }
    self.loadError(result.code, true, false);
  }
  this.setAllPendingError = (typeError, err_other = '') => {
    let result = [];
    $("#bodyer").find(".__img").find('.none_choice_error').each(function () {
      let temp = {
        'toadoX': $(this).attr('mv-x'),
        'toadoY': $(this).attr('mv-y'),
        'error_position': $(this).attr('mv-position'),
        'type_error': typeError,
        'err_other': err_other
      }
      if (typeError != '1' && typeError != '2') {
        //$(this).addClass('other_type_error');
      }
      result.push(temp);
      $(this).attr('mv-error', typeError).attr('mv-errother', err_other).removeClass('none_choice_error');
    })
    return result;
  }
  this.loadError = (code, sealer = false, header = true) => {

    if ($(".car_area").find(".__img").length == 0) {
      self.loadImg(code);
      return true;
    }
    $.ajax({
      url: '../loadError.php',
      type: 'post',
      dataType: 'json',
      data: {
        code: code,

      },
      success: function (result) {
        if (result.code == 200) {

          self.cbLoadError(result, ".car_area", '', header, code);
          console.log(result);
        }
        else {
          console.log(result.message);
        }
      },
      error: function (error) {
        console.log(error.responseText);
      }
    })
  }
  this.cbLoadError = (result, el = ".car_area", boss = '', header = true, code = '') => {
    let vincode = code;
    let vin = '';
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
    $box_img = $(el).find(".__box_img");

    if (vincode.length >= 16) vin = vincode.substr(11, 6);
    console.log(vin);
    if (header) {
      $box_img.each(function () {
        $title = $(this).find('.__title_header h4');
        $val_title = $title.text();
        $new_text = vin + "-" + result.type + " - " + result.color + "<br>" + $val_title;
        $title.empty().append($new_text);
      })
    }
    if ($(".showOvlAddNote").length > 0) {
      $(".showOvlAddNote").show();
    }


  }
  this.loadAll = (code, location = null, exportFlag = false) => {
    $.ajax({
      url: '../loadAll.php',
      type: 'post',
      dataType: 'json',
      data: {
        type: 'loadall',
        code: code,
        code_min: code.substring(0, length_car_vin)
      },

      success: function (result) {
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
  this.translate = (message) => {
    if (typeof __translate == 'undefined' || typeof __translate[message] == 'undefined') {
      return message;
    }
    return __translate[message];
  }
  this.saveNote = (note_car) => {
    $car_code = 'Error get car note';

    $car_code = $("#vin-car-change").val();


    $.ajax({
      url: '../addNote.php',
      type: 'POST',
      dataType: 'json',
      data: {
        car_code: $car_code,
        note_car: note_car,
        loadNote: '0'
      },
      success: (result) => {
        console.log(result);
      },
      error: (error) => {
        console.log(error.responseText);
      }
    });
  }
  this.inArray = (item, array) => {
    for (let i in array) {
      if (item == array[i]) return true;
    }
    return false;
  }
  this.polishSubmit = (location = null, usercode = null, el = null) => {
    $userType = $("meta[name=_ps]").attr('content');
    if (!self.inArray($userType, ['Trạm 4', 'Trạm 3'])) {
      if (usercode == null) {
        $("meta[name=_polish]").attr('content', el.attr('mv-polish'))
        $(".__overlay").show()
          .attr('mv-el', el.attr('mv-class'))
          .attr('mv-type', 'submit');
        return;
      }
      if (usercode == '') {
        alert('Hãy nhập mã nhân viên trước khi submit!');
        return;
      }
    }
    if (!confirm('Submit this car?')) {
      return false;
    }
    let _node = location == null ? $(".car_area") : location;
    let errFind = null;
    if ($userType == 'Trạm 4') {
      errFind = _node.find(".error_point:not(.__no_check):not(.done_lv_3)");
    } else {
      errFind = _node.find(".error_point:not(.__no_check):not(.done_lv_2):not(.done_lv_3)");
    }

    let errError = [];
    errFind.each(function () {
      let temp = {
        err_id: $(this).attr('mv-errid'),
        level: $("meta[name=_level]").attr('content'),
        usercode: usercode
      }

      errError.push(temp);

    })
    self.doneError(null, errError);
  }
  this.doneError = (el = null, array = null, sealer = false) => {
    let err_id = el != null ? el.attr('mv-errid') : '0';
    let level = $("meta[name=_level]").attr('content');
    let arrError = array != null ? array : [];
    let noteError = $('#modal_error').find('#note_this_error').length > 0 ? $('#modal_error').find('#note_this_error').val().trim() : '';
    let err_code = $("#vin-car-change").val();


    let polish = '';
    let usercode = '';
    if (arrError.length > 0) {
      usercode = arrError[0].usercode;
    }
    if (typeof noteError == 'undefined' || noteError == undefined) {
      noteError = '';
    }
    if (array != null) {
      polish = $("meta[name=_polish]").attr('content');
    }
    $.ajax({
      url: '../changeLevelError.php',
      type: 'POST',
      dataType: 'json',
      data: {
        id: err_id,
        err_code: err_code,
        level: level,
        arrError: arrError,
        sealer: sealer ? 'true' : 'false',
        noteError: noteError,
        polish: polish,
        usercode: usercode
      },
      success: function (result) {
        console.log(result);

        if (result.type == 'error') {
          console.log(result.res);
        } else {
          if (array == null) {
            if (result.res.code == 200) {
              $(".car_area").find('.error_point[mv-errid=' + err_id + ']').addClass(level == '2' ? "done_lv_2" : "done_lv_3").attr('mv-errlv', level).attr('mv-errnote', result.res.note);
            }
          } else {
            for (let i in arrError) {
              $(".car_area").find('.error_point[mv-errid=' + arrError[i]['err_id'] + ']').addClass(level == '2' ? "done_lv_2" : "done_lv_3").attr('mv-errlv', level);
            }
            $(".car_area").find(".error_point.__no_check").removeClass('__no_check');
          }
          if ($('meta[name=_ps]').attr('content') == 'Trạm 04') {
            self.checkDoneAll().then(r => {
              console.log(r)
            });
          }
        }
      },
      error: function (error) {
        console.log(error.responseText);
      },
      complete: function () {
        $("#modal_error").modal('hide');
        $(".__overlay").find('.cancelOverlayButton').click();
      }
    })
  }
  this.showNote = (vincode) => {

    $.ajax({
      url: '../showNote.php',
      type: 'post',
      dataType: 'json',
      data: { vincode: vincode },

      success: function (result) {

        $('#note_car').val(result.note);
      },
      error: function (error) {
        console.log(error.responseText);
      },
    }
    )
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
      $img_sealer = await self.cbConvertImg(".sealer_area", isNotCheck, exportAuto);
      self.saveImgIfDoneAll({
        qc1k: $img_qc1k,
        sealer: $img_sealer
      });
    }
    return true;
  }
  this.viewHistory = (el, id) => {
    $user = el.attr('mv-user') != undefined ? el.attr('mv-user') : '';
    $.ajax({
      url: '../history.php',
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
  this.translate = (message) => {
    if (typeof __translate == 'undefined' || typeof __translate[message] == 'undefined') {
      return message;
    }
    return __translate[message];
  }
  this.submitv02 = (vincode) => {
    $.ajax({
      url: '../submitv02.php',
      type: 'post',
      data: { vincode: vincode },
      dataType: 'json',
      success: function (data) {
        console.log(data);
      },
      error: function (error) {
        console.log(error.responseText);
      }
    })
  }
  this.fullScreen = () => {
    //     if($("#_body").length == 0){
    //         $(this).attr('id', '_body');
    //     }
    //     var elem = document.getElementById("_body");
    //     if (elem.requestFullscreen) {
    //         elem.requestFullscreen();
    //     } else if (elem.mozRequestFullScreen) { /* Firefox */
    //         elem.mozRequestFullScreen();
    //     } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    //         elem.webkitRequestFullscreen();
    //     } else if (elem.msRequestFullscreen) { /* IE/Edge */
    //         elem.msRequestFullscreen();
    //     }
  }
};
var car = new car();