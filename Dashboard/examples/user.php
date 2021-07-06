<?php

$uri = explode('/', $_SERVER['REQUEST_URI']);
$home_folder = $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'] . '/' . $uri[1] . '/';

?>
<!DOCTYPE html>
<html lang="vi">

<head>
  <meta charset="utf-8" />

  <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png">
  <link rel="icon" type="image/png" href="../assets/img/favicon.png">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>
    Quản lý Tài Khoản
  </title>
  <meta content='width=device-width, initial-scale=1.0, shrink-to-fit=no' name='viewport' />
  <!--     Fonts and icons     -->
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
  <!-- <link rel="stylesheet" href="../assets/css/alertify.bootstrap.css">
  <link rel="stylesheet" href="../assets/css/alertify.core.css">
  <link rel="stylesheet" href="../assets/css/alertify.default.css"> -->
  <!-- CSS Files -->
  <link href="../assets/css/material-dashboard.css?v=2.1.2" rel="stylesheet" />
  <!-- CSS Just for demo purpose, don't include it in your project -->
  <link href="../assets/demo/demo.css" rel="stylesheet" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>

<body class="">

  <div class="wrapper ">
    <!-- The Modal -->
    <div class="col-md-12">
      <div class="modal" id="myModal">

        <div class="modal-dialog">
          <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
              <h4 class="modal-title">Modal Heading</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <!-- Modal body -->
            <div class="content">
              <div class="container-fluid">
                <div class="row">

                  <div class="card">
                    <div class="card-header card-header-primary">
                      <h4 class="card-title">Sửa Tài Khoản</h4>
                      <p class="card-category">Hoàn thiện tại khoản của bạn</p>
                    </div>
                    <div class="card-body">
                      <form>
                        <div class="row justify-content-center">
                          <!-- <div class="col-md-3"> -->
                          <div class="form-group w-50 p-3">
                            <label class="bmd-label-floating"></label>
                            <input type="text" class="form-control" id="IDuserUp">
                          </div>
                          <!-- </div> -->
                        </div>
                        <div class="row justify-content-center">
                          <!-- <div class="col-md-5 pull-center"> -->
                          <div class="form-group w-50 p-3">
                            <label class="bmd-label-floating"></label>
                            <input type="text" class="form-control" id="FullnameUp">
                          </div>
                          <!-- </div> -->
                        </div>
                        <div class="row justify-content-center">
                          <!-- <div class="col-md-5 pull-center"> -->
                          <div class="btn-group w-50 p-3">

                            <a class="btn btn-group btn" id="btn_deptUp" href="#"></a>

                            <div class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                            </div>

                            <div class="dropdown-menu" id="IDdept">
                              <a class="dropdown-item" href="#">Admin</a>
                              <a class="dropdown-item" href="#">QC</a>
                              <a class="dropdown-item" href="#">Repair</a>
                            </div>
                          </div>
                          <!-- </div> -->
                        </div>
                        <div class="row justify-content-center">
                          <!-- <div class="col-md-5 pull-center"> -->
                          <div class="btn-group w-50 p-3">

                            <a class="btn btn-group btn" id="btn_typeUp" href="#">Trạm</a>

                            <div class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                            </div>

                            <div class="dropdown-menu" id="IDtype">
                              <a class="dropdown-item" href="#">All</a>
                              <a class="dropdown-item" href="#">Trạm 1</a>
                              <a class="dropdown-item" href="#">Trạm 2</a>
                              <a class="dropdown-item" href="#">Trạm 3</a>
                              <a class="dropdown-item" href="#">Trạm 4</a>
                            </div>
                          </div>
                          <!-- </div> -->
                        </div>
                        <div class="row justify-content-center">
                          <!-- <div class="col-md-5 pull-center"> -->
                          <div class="btn-group w-50 p-3">

                            <a class="btn btn-group btn" id="btn_shopUp" href="#">Xưởng</a>

                            <div class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                            </div>

                            <div class="dropdown-menu" id="IDshop">
                              <a class="dropdown-item" href="#">All</a>
                              <a class="dropdown-item" href="#">Body</a>

                              <a class="dropdown-item" href="#">TCF</a>
                            </div>
                          </div>
                          <!-- </div> -->
                        </div>
                        <div class="row justify-content-center">
                          <!-- <div class="col-md-5 pull-center"> -->
                          <div class="btn-group w-50 p-3">

                            <a class="btn btn-group btn" id="btn_PositionUp" href="#">Vị trí</a>

                            <div class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                            </div>

                            <div class="dropdown-menu" id="Position">
                              <a class="dropdown-item" href="#">All</a>
                              <a class="dropdown-item" href="#">LH</a>

                              <a class="dropdown-item" href="#">RH</a>
                            </div>
                          </div>
                          <!-- </div> -->
                        </div>
                        <div class="row justify-content-center">
                          <!-- <div class="col-md-5 pull-center"> -->
                          <div class="btn-group w-50 p-3">

                            <a class="btn btn-group btn" id="btn_StationUp" href="#">Vị trí</a>

                            <div class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                            </div>

                            <div class="dropdown-menu" id="Station">
                              <a class="dropdown-item" href="#">Có</a>
                              <a class="dropdown-item" href="#">Không</a>

                            </div>
                          </div>
                          <!-- </div> -->
                        </div>



                        <button type="submit" class="btn btn-primary pull-right" id="Update">LƯU</button>
                        <div class="clearfix"></div>
                      </form>
                    </div>
                  </div>


                </div>
              </div>

            </div>
            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
      <!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

        Tip 2: you can also add an image using data-image tag
    -->
      <div class="logo"><a href="" class="simple-text logo-normal">
          Quản lý Tài Khoản
        </a></div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li class="nav-item  ">
            <a class="nav-link" href="./dashboard.html">
              <i class="material-icons">dashboard</i>
              <p>Dashboard</p>
            </a>
          </li>
          <li class="nav-item active ">
            <a class="nav-link" href="./user.php">
              <i class="material-icons">person</i>
              <p>User Profile</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="./tables.html">
              <i class="material-icons">content_paste</i>
              <p>Error Report</p>
            </a>
          </li>
          <!-- <li class="nav-item ">
            <a class="nav-link" href="./typography.html">
              <i class="material-icons">library_books</i>
              <p>Typography</p>
            </a>
          </li> -->
          <li class="nav-item active ">
            <a class="nav-link" href="#" id="export">
              <i class="material-icons">bubble_chart</i>
              <p>Export</p>
            </a>
          <!-- </li>
          <li class="nav-item ">
            <a class="nav-link" href="./map.html">
              <i class="material-icons">location_ons</i>
              <p>Maps</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="./notifications.html">
              <i class="material-icons">notifications</i>
              <p>Notifications</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="./rtl.html">
              <i class="material-icons">language</i>
              <p>RTL Support</p>
            </a>
          </li> -->
          <li class="nav-item ">
            <a class="nav-link" href="<?= $home_folder . 'login/logout.php' ?>">
              <i class="material-icons logout">Logout</i>
              <p>Log Out</p>
            </a>
          </li>

        </ul>
      </div>
    </div>
    <div class="main-panel">
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <a class="navbar-brand" href="javascript:;">User Profile</a>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end">
            <form class="navbar-form">
              <div class="input-group no-border">
                <input type="text" value="" class="form-control" placeholder="Search...">
                <button type="submit" class="btn btn-white btn-round btn-just-icon">
                  <i class="material-icons">search</i>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="javascript:;">
                  <i class="material-icons">dashboard</i>
                  <p class="d-lg-none d-md-block">
                    Stats
                  </p>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="material-icons">notifications</i>
                  <span class="notification">5</span>
                  <p class="d-lg-none d-md-block">
                    Some Actions
                  </p>
                </a>
                <!-- <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">Mike John responded to your email</a>
                  <a class="dropdown-item" href="#">You have 5 new tasks</a>
                  <a class="dropdown-item" href="#">You're now friend with Andrew</a>
                  <a class="dropdown-item" href="#">Another Notification</a>
                  <a class="dropdown-item" href="#">Another One</a>
                </div> -->
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="javascript:;" id="navbarDropdownProfile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="material-icons">person</i>
                  <p class="d-lg-none d-md-block">
                    Account
                  </p>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                  <a class="dropdown-item" href="#">Profile</a>
                  <a class="dropdown-item" href="#">Settings</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="<?= $home_folder . 'login/logout.php' ?>">Log out</a>
                </div>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      <!-- End Navbar -->
      <div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Tạo Tài Khoản</h4>
                  <p class="card-category">Hoàn thiện tại khoản của bạn</p>
                </div>
                <div class="card-body">
                  <form>
                    <div class="row">
                      <div class="col-md-2">
                        <div class="form-group">
                          <label class="bmd-label-floating">ID</label>
                          <input type="text" class="form-control" id="IDuser">
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="bmd-label-floating">Tên</label>
                          <input type="text" class="form-control" id="Fullname">
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="btn-group">

                          <a class="btn btn-group btn" id="btn_dept" href="#">Bộ phận</a>

                          <div class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                          </div>

                          <div class="dropdown-menu" id="IDdept">
                            <a class="dropdown-item" href="#">Admin</a>
                            <a class="dropdown-item" href="#">QC</a>
                            <a class="dropdown-item" href="#">Repair</a>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-3">
                        <div class="btn-group">

                          <a class="btn btn-group btn" id="btn_type" href="#">Trạm</a>

                          <div class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                          </div>

                          <div class="dropdown-menu" id="IDtype">
                            <a class="dropdown-item" href="#">All</a>
                            <a class="dropdown-item" href="#">Trạm 1</a>
                            <a class="dropdown-item" href="#">Trạm 2</a>
                            <a class="dropdown-item" href="#">Trạm 3</a>
                            <a class="dropdown-item" href="#">Trạm 4</a>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="btn-group">

                          <a class="btn btn-group btn" id="btn_shop" href="#">Xưởng</a>

                          <div class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                          </div>

                          <div class="dropdown-menu" id="IDshop">
                            <a class="dropdown-item" href="#">All</a>
                            <a class="dropdown-item" href="#">Body</a>

                            <a class="dropdown-item" href="#">TCF</a>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="btn-group">

                          <a class="btn btn-group btn" id="btn_position" href="#">Vị trí</a>

                          <div class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                          </div>

                          <div class="dropdown-menu" id="Position">
                            <a class="dropdown-item" href="#">LH</a>
                            <a class="dropdown-item" href="#">RH</a>

                            <a class="dropdown-item" href="#">ALL</a>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="btn-group">

                          <a class="btn btn-group btn" id="btn_station" href="#">Tạo lỗi</a>

                          <div class="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown">
                          </div>

                          <div class="dropdown-menu" id="Station">
                            <a class="dropdown-item" href="#">Có</a>
                            <a class="dropdown-item" href="#">Không</a>

                          </div>
                        </div>
                      </div>

                    </div>

                    <button type="submit" class="btn btn-primary pull-right" id="Save">LƯU</button>
                    <div class="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Danh sách Tài Khoản</h4>
                  <p class="card-category">Xưởng Hàn</p>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>
                          ID User
                        </th>
                        <th>
                          Full Name
                        </th>
                        <th>
                          Trạm
                        </th>
                        <th>
                          Quyền truy cập
                        </th>
                        <th>
                          Vị Trí
                        </th>
                        <th>
                          Tạo lỗi
                        </th>

                      </thead>
                      <tbody id="table_han">
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Danh sách Tài Khoản</h4>
                  <p class="card-category">Xưởng Láp ráp</p>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>
                          ID User
                        </th>
                        <th>
                          Full Name
                        </th>
                        <th>
                          Trạm
                        </th>
                        <th>
                          Quyền truy cập
                        </th>
                        <th>
                          Vị trí
                        </th>
                        <th>
                          Tạo lỗi
                        </th>

                      </thead>
                      <tbody id="table_tcf">
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Danh sách Tài Khoản</h4>
                  <p class="card-category">Admin</p>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>
                          ID User
                        </th>
                        <th>
                          Full Name
                        </th>
                        <th>
                          Trạm
                        </th>
                        <th>
                          Quyền truy cập
                        </th>

                      </thead>
                      <tbody id="table_admin">
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <script src="../assets/js/core/jquery.min.js"></script>
    <script src="../assets/js/core/popper.min.js"></script>
    <script src="../assets/js/core/bootstrap-material-design.min.js"></script>
    <script src="../assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
    <!-- Plugin for the momentJs  -->
    <script src="../assets/js/plugins/moment.min.js"></script>
    <!-- <script src="../assets/js/alertify.min.js"></script> -->
    <!--  Plugin for Sweet Alert -->
    <script src="../assets/js/plugins/sweetalert2.js"></script>
    <!-- Forms Validations Plugin -->
    <script src="../assets/js/plugins/jquery.validate.min.js"></script>
    <!-- Plugin for the Wizard, full documentation here: https://github.com/VinceG/twitter-bootstrap-wizard -->
    <script src="../assets/js/plugins/jquery.bootstrap-wizard.js"></script>
    <!--	Plugin for Select, full documentation here: http://silviomoreto.github.io/bootstrap-select -->
    <script src="../assets/js/plugins/bootstrap-selectpicker.js"></script>
    <!--  Plugin for the DateTimePicker, full documentation here: https://eonasdan.github.io/bootstrap-datetimepicker/ -->
    <script src="../assets/js/plugins/bootstrap-datetimepicker.min.js"></script>
    <!--  DataTables.net Plugin, full documentation here: https://datatables.net/  -->
    <script src="../assets/js/plugins/jquery.dataTables.min.js"></script>
    <!--	Plugin for Tags, full documentation here: https://github.com/bootstrap-tagsinput/bootstrap-tagsinputs  -->
    <script src="../assets/js/plugins/bootstrap-tagsinput.js"></script>
    <!-- Plugin for Fileupload, full documentation here: http://www.jasny.net/bootstrap/javascript/#fileinput -->
    <script src="../assets/js/plugins/jasny-bootstrap.min.js"></script>
    <!--  Full Calendar Plugin, full documentation here: https://github.com/fullcalendar/fullcalendar    -->
    <script src="../assets/js/plugins/fullcalendar.min.js"></script>
    <!-- Vector Map plugin, full documentation here: http://jvectormap.com/documentation/ -->
    <script src="../assets/js/plugins/jquery-jvectormap.js"></script>
    <!--  Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ -->
    <script src="../assets/js/plugins/nouislider.min.js"></script>
    <!-- Include a polyfill for ES6 Promises (optional) for IE11, UC Browser and Android browser support SweetAlert -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js"></script>
    <!-- Library for adding dinamically elements -->
    <script src="../assets/js/plugins/arrive.min.js"></script>
    <!--  Google Maps Plugin    -->
    <!-- <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script> -->
    <!-- Chartist JS -->
    <script src="../assets/js/plugins/chartist.min.js"></script>
    <!--  Notifications Plugin    -->
    <script src="../assets/js/plugins/bootstrap-notify.js"></script>
    <!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc -->
    <script src="../assets/js/material-dashboard.js?v=2.1.2" type="text/javascript"></script>
    <!-- Material Dashboard DEMO methods, don't include it in your project! -->
    <script src="../assets/demo/demo.js"></script>
    <script>
      $(document).ready(function() {

        function reloadPage() {
          location.reload(true);
        }

        $().ready(function() {
          // $sidebar = $('.sidebar');

          // $sidebar_img_container = $sidebar.find('.sidebar-background');

          $full_page = $('.full-page');

          // $sidebar_responsive = $('body > .navbar-collapse');

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
        $.ajax({
          url: './connectdatabase/viewdata_body.php',
          type: 'POST',
          cache: false,
          success: function(data) {
            //console.log(data.responseText);
            $('#table_han').html(data);
          },
          error: function(error) {
            console.log(error.responseText);
          },

        });
        $.ajax({
          url: './connectdatabase/viewdata_tcf.php',
          type: 'POST',
          cache: false,
          success: function(data) {
            //console.log(data.responseText);
            $('#table_tcf').html(data);
          },
          error: function(error) {
            console.log(error.responseText);
          },

        });
        $.ajax({
          url: './connectdatabase/viewdata_admin.php',
          type: 'POST',
          cache: false,
          success: function(data) {
            //console.log(data.responseText);
            $('#table_admin').html(data);


            //$('td'[value='Trần Lê Quốc Bảo']).find('.btn').attr("disabled", true);
            //  if($('#table_admin').find('td'[value='Trần Lê Quốc Bảo'])){
            //   $(this).find('.btn').attr("disabled", true);
            //  }
          },
          error: function(error) {
            console.log(error.responseText);
          },

        });
    
        $('#IDdept a').on('click', function() {
          // $('#btn_dept').text($(this).text());
          //alert($(this).text());
          $('#btn_dept').text($(this).text());

        });
        $('#IDtype a').on('click', function() {

          $('#btn_type').text($(this).text());
        });
        $('#IDshop a').on('click', function() {
          $('#btn_shop').text($(this).text());
        })
        $('#Position a').on('click', function() {
          $('#btn_position').text($(this).text());
        })
        $('#Station a').on('click', function() {
          $('#btn_station').text($(this).text());
        })
        $('#Save').on('click', function() {


          $("#Save").attr("disbaled", "disbaled");
          var IDuser = $('#IDuser').val();
          var Fullname = $('#Fullname').val();
          var Dept = $('#btn_dept').text();
          var Type = $('#btn_type').text();
          var Shop = $('#btn_shop').text();
          var Position = $('#btn_position').text();
          var Station = $('#btn_station').text();
          

          if (IDuser != "" && Fullname != "" && Dept != "" && Type != "") {
            $.ajax({
              url: "./connectdatabase/savedata.php",
              type: "POST",
            
              data: {
                IDuser: IDuser,
                Fullname: Fullname,
                Dept: Dept,
                Type: Type,
                Shop: Shop,
                Position: Position,
                Station: Station,
              },
              dataType:'json',
              success: function(dataResult) {
                // alert(IDuser + Fullname + Dept + Type + Shop);
                console.log(dataResult);
                alert("Da insert data thanh cong");
                
            
                reloadPage();

              },
              error: function(error) {
                console.log(error.responseText);
              },
              complete: function() {}
            });
          } else {
            alert("Vui long nhap day du thong tin");
          }

        });
        $("body").on('click', '.delButton', function() {

          let _parent = $(this).closest('tr');
          let id = _parent.data('id');
          var r = confirm("Bạn có muốn xóa user này?");
          if (r == true) {
            $.ajax({
              url: './connectdatabase/Deleteuser.php',
              type: 'POST',
              data: {
                id: id
              },
              cache: false,
              success: function(dataResult) {
                reloadPage();
              },
              error: function(error) {
                console.log(error.responseText);
              },
              complete: function() {

              }
            })
          }
        })

        $("body").on('click', '.modifButton', function() {
          $(this).attr('data-toggle', 'modal');
          $(this).attr('data-target', '#myModal');
          let _parent = $(this).closest('tr');
          let id = _parent.data('id');
          $('#IDdept a').on('click', function() {
            // $('#btn_dept').text($(this).text());
            //alert($(this).text());
            $('#btn_deptUp').text($(this).text());

          });
          $('#IDtype a').on('click', function() {

            $('#btn_typeUp').text($(this).text());
          });
          $('#IDshop a').on('click', function() {
            $('#btn_shopUp').text($(this).text());
          })

          $('#Position a').on('click', function() {
            $('#btn_PositionUp').text($(this).text());
          })
          $('#Station a').on('click', function() {
            $('#btn_StationUp').text($(this).text());
          })

          $.ajax({
            url: './connectdatabase/viewmodifyuser.php',
            type: 'POST',
            dataType: 'json',
            cache: false,
            data: {
              IDuser: id
            },
            success: function(data) {
              $('#IDuserUp').val(data.ID);
              $('#FullnameUp').val(data.Fullname);
              $('#btn_deptUp').text(data.Dept);
              $('#btn_typeUp').text(data.Type);
              $('#btn_shopUp').text(data.Shop);
              $('#btn_PositionUp').text(data.Position);
              $('#btn_StationUp').text(data.Station);
            },
            error: function(error) {
              console.log(error.responseText);
            },
          });
          $('#Update').on('click', function() {
            $("#Save").attr("disbaled", "disbaled");
            var IDuser = $('#IDuserUp').val();
            var Fullname = $('#FullnameUp').val();
            var Dept = $('#btn_deptUp').text();
            var Type = $('#btn_typeUp').text();
            var Shop = $('#btn_shopUp').text();
            var Position = $('#btn_PositionUp').text();
            var Station = $('#btn_StationUp').text();
            console.log(IDuser, Fullname, Dept);

            if (IDuser != "" && Fullname != "" & Dept != "" && Type != "") {
              $.ajax({
                url: "./connectdatabase/updateuser.php",
                type: "POST",
                cache: false,
                data: {
                  IDuser: IDuser,
                  Fullname: Fullname,
                  Dept: Dept,
                  Type: Type,
                  Shop: Shop,
                  Position: Position,
                  Station: Station
                },

                success: function(dataResult) {
                  // alert(IDuser + Fullname + Dept + Type + Shop);
                  alert("Đã cập nhật thành công");
                  reloadPage();

                },
                error: function(error) {
                  console.log(error.responseText);
                },
                complete: function() {

                }
              });
            } else {
              alert("Vui long nhap day du thong tin");
            }

          })
        })
      });
      $('#export').on('click',function(){
       
        window.open("<?=$home_folder.'export'?>", '_blank');
      })
    </script>
    <script>

    </script>
</body>

</html>