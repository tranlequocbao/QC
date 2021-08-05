<?php
if (!isset($_SESSION)) session_start();
if (isset($home_folder)) {
  $url = $home_folder;
} else {
  if (strpos($_SERVER['HTTP_HOST'], 'localhost') == 0) {
    $uri = explode('/', $_SERVER['REQUEST_URI']);
    $url = $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] . '/' . $uri[1] . '/';
  } else {
    $url = $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] . '/';
  }
}

$servername = "localhost";
$username = "root";
$password = "";
$db = "qc_han";
$conn = mysqli_connect($servername, $username, $password, $db);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if (strpos($_SERVER['HTTP_HOST'], 'localhost') == 0) {
  $uri = explode('/', $_SERVER['REQUEST_URI']);
  $url = $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] . '/' . $uri[1] . '/';
} else {
  $url = $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] . '/';
}

?>

<!DOCTYPE html>
<html lang="vi">

<head>
  <meta charset="utf-8" />
  <link rel="apple-touch-icon" sizes="76x76" href="<?= $url . 'Dashboard/assets/img/apple-icon.png' ?>">
  <link rel="icon" type="image/png" href="<?= $url . 'Dashboard/assets/img/favicon.png' ?>">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>
    Trạm 02 xưởng Hàn
  </title>
  <meta content='width=device-width, initial-scale=1.0, shrink-to-fit=no' name='viewport' />
  <!--     Fonts and icons     -->
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
  <!-- CSS Files -->
  <link href="<?= $url . 'Dashboard/assets/css/material-dashboard.css?v=2.1.2' ?>" rel="stylesheet " />
  <!-- CSS Just for demo purpose, don't include it in your project -->
  <link href="<?= $url . 'Dashboard/assets/demo/demo.css' ?>" rel="stylesheet" />
  <link href="<?= $url . 'page/assets/css/home.css' ?>" rel="stylesheet" />
  <link rel="stylesheet" href="<?= $url . 'vendor/owl_carousel/css/owl.carousel.min.css' ?>">

  <link rel="stylesheet" href="<?= $url . 'vendor/owl_carousel/css/owl.theme.default.min.css' ?>">
  <link rel="stylesheet" href="<?= $url . 'vendor/bootstrap/css/bootstrap.min.css' ?>">
</head>

<body class="">

  <div class="row pt-3 pb-3">
    <div class="col-8">
      <div class="form-group m-0 form_input_code d-flex w-100">
        <?php if (isset($_GET['code_user'])) : ?>
          <input type="text" class="form-control" id="car_code" placeholder="Car code" value="<?= $_GET['code_user'] ?>" readonly>
        <?php else :
          $code = 'vin_code';
          if ($_SESSION['Station'] == 'Trạm 2') {
            $sql = 'SELECT DISTINCT(vincode) as vin_code FROM `vin_02` ORDER BY `checked` asc, `updated_at` ASC';
            $result = $conn->query($sql);
          }
          echo '<input type="text" class="form-control" id="vin-car-change" placeholder="Car code" value="" background="White" >';
          echo '<div class="select-group scroll-custom" id="vincode_select_user">';

          while ($code_vin = mysqli_fetch_assoc($result)) {
            echo "<div class='select-item all' data-val='" . $code_vin['vin_code'] . "'>" . $code_vin['vin_code'] . "</div>";
          }
          echo "</div>";
        ?>
        <?php endif; ?>

      </div>
    </div>
    <div class="col-4">
      <div class="row_1">
        <h4 class="d-inline-block">Hi <a href="<?= $url  ?>"><?= $_SESSION['Name'] ?></a>!</h4>
        <a href="<?= $url . 'login/logout.php' ?>" class="pl-1 d-inline-block">Logout</a>
      </div>

    </div>
  </div>
  <div class="content">
    <div class="container-fluid">

      <nav class="navbar navbar-expand-lg navbar-transparent ">
        <button type="button" class="btn btn-primary position-fixed" id="submit" style="top:80px; right:5px; z-index:2; display:none">Lưu</button>
        <div class="container-fluid">

          <div class="navbar-wrapper">
            <a class="navbar-brand" href="javascript:;">Trạm kiểm tra bề mặt, mối hàn Body</a>

          </div>
        </div>

      </nav>


    </div>
  </div>


 
  <section id="bodyer">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8 col-10">
          <div class="car_area __box_shadow"></div>
        </div>
      </div>
    </div>
  </section>
  <section id="footer"></section>
  </div>

  <footer class="footer">
    <div class="container-fluidhide.bs.modal">
      <div class="copyright float-right">
        &copy;
        <script>
          document.write(new Date().getFullYear())
        </script>, made with <i class="material-icons">favorite</i> by
        <a href="" target="_blank"> Bộ phận QTCNTT Khối Lắp ráp xe Du lịch & xe máy.</a>
      </div>
    </div>
  </footer>
  </div>
  </div>
  <div class="modal fade" id="modal_error" tabindex="-1" role="dialog" aria-labelledby="modal_error" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal_error_title">Thêm lỗi mới</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <h6>Loại lỗi</h6>
          </div>
          <div class="form-group">
            <select name="error_type" id="error_type" class="form-control" onchange="$(this).removeAttr('style');"></select>
          </div>
          <div class="form-group error-other-group" style="display: none">
            <label for="err_other">Lỗi cụ thể</label>
            <textarea name="err_other" id="err_other" class="form-control" rows="3" readonly onfocus="$(this).removeAttr('style')"></textarea>
          </div>
          <div class="form-group note-group" style="display: none">
            <label for="note_this_error">Ghi chú</label>
            <textarea name="note_this_error" id="note_this_error" class="form-control" rows="3"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary delete d-none" onclick="car.submit($(this))">Delete</button>
          <button class="btn btn-success checked_btn" onclick="car.doneError($(this),null,true)" style="display: none">Checked</button>
          <button type="button" class="btn btn-primary submit" mv-type="add" onclick="car.submit($(this))">Save</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="modal_note" tabindex="-1" role="dialog" aria-labelledby="modal_note" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal_error_title">Note</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="form-group note-group">
            <label for="note_car">Ghi chú</label>
            <textarea name="note_car" id="note_car" class="form-control" rows="3" placeholder='Write Note For This Car'></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onclick="car.modalNoteButtonSave(this)">Save</button>
        </div>
      </div>
    </div>
  </div>
  <!--   Core JS Files   -->
  <script src="<?= $url . 'Dashboard/assets/js/core/jquery.min.js' ?>"></script>
  <script src="<?= $url . 'Dashboard/assets/js/core/popper.min.js' ?>"></script>
  <script src="<?= $url . 'Dashboard/assets/js/core/bootstrap-material-design.min.js' ?>"></script>
  <script src="<?= $url . 'Dashboard/assets/js/plugins/perfect-scrollbar.jquery.min.js' ?>"></script>
  <!-- Plugin for the momentJs  -->
  <script src="<?= $url . 'Dashboard/assets/js/plugins/moment.min.js' ?>"></script>
  <!--  Plugin for Sweet Alert -->
  <script src="<?= $url . 'Dashboard/assets/js/plugins/sweetalert2.js' ?>"></script>'
  <!-- Forms Validations Plugin -->
  <script src="<?= $url . 'Dashboard/assets/js/plugins/jquery.validate.min.js' ?>"></script>
  <!-- Plugin for the Wizard, full documentation here: https://github.com/VinceG/twitter-bootstrap-wizard -->
  <script src="<?= $url . 'Dashboard/assets/js/plugins/jquery.bootstrap-wizard.js' ?>"></script>
  <!--	Plugin for Select, full documentation here: http://silviomoreto.github.io/bootstrap-select -->
  <script src="<?= $url . 'Dashboard/assets/js/plugins/bootstrap-selectpicker.js' ?>"></script>
  <!--  Plugin for the DateTimePicker, full documentation here: https://eonasdan.github.io/bootstrap-datetimepicker/ -->
  <script src="<?= $url . 'Dashboard/assets/js/plugins/bootstrap-datetimepicker.min.js' ?>"></script>
  <!--  DataTables.net Plugin, full documentation here: https://datatables.net/  -->
  <script src="<?= $url . 'Dashboard/assets/js/plugins/jquery.dataTables.min.js' ?>"></script>
  <!--	Plugin for Tags, full documentation here: https://github.com/bootstrap-tagsinput/bootstrap-tagsinputs  -->
  <script src="<?= $url . 'Dashboard/assets/js/plugins/bootstrap-tagsinput.js' ?>"></script>
  <!-- Plugin for Fileupload, full documentation here: http://www.jasny.net/bootstrap/javascript/#fileinput -->
  <script src="<?= $url . 'Dashboard/assets/js/plugins/jasny-bootstrap.min.js' ?>"></script>
  <!--  Full Calendar Plugin, full documentation here: https://github.com/fullcalendar/fullcalendar    -->
  <script src="<?= $url . 'Dashboard/assets/js/plugins/fullcalendar.min.js' ?>"></script>
  <!-- Vector Map plugin, full documentation here: http://jvectormap.com/documentation/ -->
  <script src="<?= $url . 'Dashboard/assets/js/plugins/jquery-jvectormap.js' ?>"></script>
  <!--  Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ -->
  <script src="<?= $url . 'Dashboard/assets/js/plugins/nouislider.min.js' ?>"></script>
  <!-- Include a polyfill for ES6 Promises (optional) for IE11, UC Browser and Android browser support SweetAlert -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js"></script>
  <!-- Library for adding dinamically elements -->
  <script src="./Dashboard/assets/js/plugins/arrive.min.js"></script>
  <!--  Google Maps Plugin    -->
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
  <!-- Chartist JS -->
  <script src="./Dashboard/assets/js/plugins/chartist.min.js"></script>
  <!--  Notifications Plugin    -->
  <script src="<?= $url . 'Dashboard/assets/js/plugins/bootstrap-notify.js' ?>"></script>
  <!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc -->
  <script src="<?= $url . 'Dashboard/assets/js/material-dashboard.js?v=2.1.2' ?>" type="text/javascript"></script>
  <!-- Material Dashboard DEMO methods, don't include it in your project! -->
  <script src="<?= $url . 'Dashboard/assets/demo/demo.js' ?>"></script>
  <script src="<?= $url . 'page/assets/js/car.js' ?>"></script>
  <script src="<?= $url . 'vendor/owl_carousel/js/owl.carousel.js' ?>"></script>
  <script src="<?= $url . 'page/assets/js/home.js' ?>"></script>
  <script src="<?= $url . 'page/assets/js/error.js' ?>"></script>
  <script>
    var vincode = '';

    var err_option_other_id = err_option_other_id;
    var Dept = '<?= $_SESSION['Dept'] ?>';
    var Create = '<?= $_SESSION['Create'] ?>';
  </script>



  <script>
    $(document).ready(function() {

      $().ready(function() {
        $sidebar = $('.sidebar');

        $sidebar_img_container = $sidebar.find('.sidebar-background');

        $full_page = $('.full-page');

        $sidebar_responsive = $('body > .navbar-collapse');

        window_width = $(window).width();

        fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();

        if (window_width > 767 && fixed_plugin_open == 'Dashboard') {
          if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
            $('.fixed-plugin .dropdown').addClass('open');
          }

        }

        $('.fixed-plugin a').click(function(event) {
          // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
          if ($(this).hasClass('switch-trigger')) {
            if (event.stopPropagation) {
              event.stopPropagation();
            } else if (window.event) {
              window.event.cancelBubble = true;
            }
          }
        });

        $('.fixed-plugin .active-color span').click(function() {
          $full_page_background = $('.full-page-background');

          $(this).siblings().removeClass('active');
          $(this).addClass('active');

          var new_color = $(this).data('color');

          if ($sidebar.length != 0) {
            $sidebar.attr('data-color', new_color);
          }

          if ($full_page.length != 0) {
            $full_page.attr('filter-color', new_color);
          }

          if ($sidebar_responsive.length != 0) {
            $sidebar_responsive.attr('data-color', new_color);
          }
        });

        $('.fixed-plugin .background-color .badge').click(function() {
          $(this).siblings().removeClass('active');
          $(this).addClass('active');

          var new_color = $(this).data('background-color');

          if ($sidebar.length != 0) {
            $sidebar.attr('data-background-color', new_color);
          }
        });

        $('.fixed-plugin .img-holder').click(function() {
          $full_page_background = $('.full-page-background');

          $(this).parent('li').siblings().removeClass('active');
          $(this).parent('li').addClass('active');


          var new_image = $(this).find("img").attr('src');

          if ($sidebar_img_container.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
            $sidebar_img_container.fadeOut('fast', function() {
              $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
              $sidebar_img_container.fadeIn('fast');
            });
          }

          if ($full_page_background.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
            var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

            $full_page_background.fadeOut('fast', function() {
              $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
              $full_page_background.fadeIn('fast');
            });
          }

          if ($('.switch-sidebar-image input:checked').length == 0) {
            var new_image = $('.fixed-plugin li.active .img-holder').find("img").attr('src');
            var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

            $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
            $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
          }

          if ($sidebar_responsive.length != 0) {
            $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
          }
        });

        $('.switch-sidebar-image input').change(function() {
          $full_page_background = $('.full-page-background');

          $input = $(this);

          if ($input.is(':checked')) {
            if ($sidebar_img_container.length != 0) {
              $sidebar_img_container.fadeIn('fast');
              $sidebar.attr('data-image', '#');
            }

            if ($full_page_background.length != 0) {
              $full_page_background.fadeIn('fast');
              $full_page.attr('data-image', '#');
            }

            background_image = true;
          } else {
            if ($sidebar_img_container.length != 0) {
              $sidebar.removeAttr('data-image');
              $sidebar_img_container.fadeOut('fast');
            }

            if ($full_page_background.length != 0) {
              $full_page.removeAttr('data-image', '#');
              $full_page_background.fadeOut('fast');
            }

            background_image = false;
          }
        });

        $('.switch-sidebar-mini input').change(function() {
          $body = $('body');

          $input = $(this);

          if (md.misc.sidebar_mini_active == true) {
            $('body').removeClass('sidebar-mini');
            md.misc.sidebar_mini_active = false;

            $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();

          } else {

            $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar('destroy');

            setTimeout(function() {
              $('body').addClass('sidebar-mini');

              md.misc.sidebar_mini_active = true;
            }, 300);
          }

          // we simulate the window Resize so the charts will get updated in realtime.
          var simulateWindowResize = setInterval(function() {
            window.dispatchEvent(new Event('resize'));
          }, 180);

          // we stop the simulation of Window Resize after the animations are completed
          setTimeout(function() {
            clearInterval(simulateWindowResize);
          }, 1000);

        });
      });

      function renderSelect() {
        let html = '';
        for (let i in err_option) {
          html += "<option value='" + i + "'>" + err_option[i] + "</option>";
        }
        $("#error_type").empty().append(html);
      }
      $("#vincode_select_user").on('click', '.select-item', function() {
        $val = $(this).data('val');
        vincode = $(this).data('val');
        $("#vin-car-change").val($val).attr('disabled', 'true');
        $("#vincode_select_user").hide();
        $('#submit').show();
        $('#vin-car-change').css('display', 'none');
        car.load_img($val);
        renderSelect();
        console.log(err_option);
      })
      $("#vin-car-change").on('keyup', function() {

        let val = $(this).val().trim();
        let item = $("#vincode_select_user").find(".select-item");
        //reset select
        item.removeClass('hidden');

        //set select with input
        item.each(function() {
          if ($(this).text().indexOf(val.toUpperCase()) == -1) {
            $(this).addClass('hidden');
          }
        })
      })
      $('#submit').on('click',function(){
        if(confirm("Xác nhận kiểm xong body này?")){
         car.submitv02(vincode);
         window.location.reload();
        }
      })
      // $('#submit').on('click', function() {
      //   var idArray = [];

      //   var valueArray = ['CG01GapLH', 'CG01GapRH'];
      //   $('.table .form-control').each(function() {
      //     idArray.push(this.id);
      //   });
      //   for (var item = 0; item < idArray.length; item++) {
      //     if ($('#' + idArray[item] + '').val()) {
      //       // console.log(idArray[item]);
      //       // console.log($('#' + idArray[item] + '').val());

      //       car.save_station01_han(vincode, idArray[item], $('#' + idArray[item] + '').val());

      //     }

      //   }
      //   alert('Đã thêm dữ liệu thành công');
      // })
      $("#modal_error").on('change', '#error_type', function() {
        if ($("#error_type").val() == err_option_other_id) {
          $("#modal_error").find('.error-other-group').show();
        } else {
          $("#modal_error").find('.error-other-group').hide().find('#err_other').val('');
        }
      })
    });
  </script>
</body>