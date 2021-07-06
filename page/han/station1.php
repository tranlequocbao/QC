<?php
session_start();

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
    Trạm 01 xưởng Hàn
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
  <link href="<?= $url . 'page/assets/css/bootstrap.min.css' ?>" rel="stylesheet" />
</head>

<body class="">
  <!-- <div class="showHeader" style="display: none" onclick="$('#header').toggleClass('top');"></div> -->

  <!-- <section id="header" class="mb-4">
    <div class="container">

    </div>
  </section> -->

  <!-- Navbar -->


  <!-- End Navbar -->
  <div class="row pt-3 pb-3">
    <div class="col-8">
      <div class="form-group m-0 form_input_code d-flex w-100">
        <?php if (isset($_GET['code_user'])) : ?>

        <?php else :
          $code = 'vin_code';
          if ($_SESSION['Station'] == 'Trạm 1') {
            $sql = 'SELECT DISTINCT(vincode) as vin_code FROM `plan_vin` ORDER BY `checked` asc, `datetime` ASC';
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
        <button type="button" class="btn btn-primary position-fixed" id="confirm" style="top:80px; left:5px; z-index:2; display:none">Xác nhận</button>
        <div class="container-fluid">

          <div class="navbar-wrapper">
            <a class="navbar-brand" href="javascript:;">Trạm đo khe hở độ phẳng - Xưởng Hàn</a>

          </div>
          <!-- hiển thị cho menu khi nó bị thu nhỏ lại -->
          <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
          </button> -->
        </div>

      </nav>

      <div class="col-md-12">
      <div class="row car_area align-items-start pt-2 pb-2" style="border-right: 1px solid #ddd; overflow: auto;position: relative"></div>
      </div>
      
      <div class="col-md-12">
        <div class="card tram1-qchan">
          <div class="card-header card-header-primary">
            <h4 class="card-title showvin" id="">Đo khe hở độ phẳng</h4>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table" style="width: 100%">
                <colgroup>
                  <col span="1" style="width: 10%;">
                  <col span="1" style="width: 5%;">
                  <col span="1" style="width: 5%;">
                  <col span="1" style="width: 10%;">
                  <col span="1" style="width: 10%;">
                  <col span="1" style="width: 45%;">
                </colgroup>
                <thead class=" text-primary">
                  <th>
                    Khu vực đo
                  </th>
                  <th>
                    No
                  </th>
                  <th>
                    Items
                  </th>
                  <th>
                    ITD/Tiêu chuẩn
                  </th>
                  <th>
                    Min-Max
                  </th>
                  <th>
                   Thông số
                  </th>
                </thead>
                <tbody id='table-qc'>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

  <footer class="footer">
    <div class="container-fluid">
      <div class="copyright float-right">
        &copy;
        <script>
          document.write(new Date().getFullYear())
        </script>, made with <i class="material-icons">favorite</i> by
        <a href="https://www.creative-tim.com" target="_blank"> Bộ phận QTCNTT Khối Lắp ráp xe Du lịch & xe máy.
      </div>
    </div>
  </footer>
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
  <script src="<?= $url . 'page/assets/js/table_type.js' ?>"></script>
  <script src="<?= $url . 'page/assets/js/car.js' ?>"></script>
  
  <script>
    $(document).ready(function() {
      var vincode = '';
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
     
      $("#vincode_select_user").on('click', '.select-item', function() {
        $val = $(this).data('val');
        vincode = $(this).data('val');
        $("#vin-car-change").val($val).attr('disabled', 'true');
        car.load_check01_qcbody($val);
        car.getcolor($val);
        $("#vincode_select_user").hide();
        $('#submit').show();
        // $('#confirm').show();
        $('#vin-car-change').css('display', 'none');
        car.loadvalue_station01_han($val);
        //car.fullScreen();
        
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

      
      $('#submit').on('click', function() {
        var idArray = [];
        var valueArray = ['CG01GapLH', 'CG01GapRH'];
        $('.table .form-control').each(function() {
          idArray.push(this.id);
        });
        for (var item = 0; item < idArray.length; item++) {
          if ($('#' + idArray[item] + '').val()) {
            // console.log(idArray[item]);
            // console.log($('#' + idArray[item] + '').val());

            car.save_station01_han(vincode, idArray[item], $('#' + idArray[item] + '').val(), 'create');

          }

        }
        alert("Đã thêm dữ liệu thành công");
        window.location.reload();
      })
      $('#confirm').on('click', function() {
        var idArray = [];

        $('.table .form-control').each(function() {
          idArray.push(this.id);
        });
        for (var item = 0; item < idArray.length; item++) {
          if ($('#' + idArray[item] + '').val()) {
            // console.log(idArray[item]);
            // console.log($('#' + idArray[item] + '').val());

            car.save_station01_han(vincode, idArray[item], $('#' + idArray[item] + '').val(), 'confirm');

          }

        }
        alert("Đã thêm dữ liệu thành công");
        window.location.reload();
      })
    });
  </script>
</body>

</html>