(function ($) {
  "use strict";

  /* =================================
	Preloader
=================================== */

  // if ((".loader")
  // 	.length) {
  // 	// show Preloader until the website ist loaded
  // 	$(window)
  // 		.on('load', function() {
  // 			$(".loader")
  // 				.fadeOut("slow");
  // 		});
  // }

  // modal window "Order a call" - Hat
  // $(window).on('load', function(){
  // 	$('.popup-modal').magnificPopup({
  // 		type: 'inline',
  // 		preloader: false,
  // 		// focus: '#username',
  // 		modal: true
  // 	});
  // 	$(document).on('click', '.popup-modal-dismiss', function (e) {
  // 		e.preventDefault();
  // 		$.magnificPopup.close();
  // 	});
  // });
  // END.modal window "Order a call" - Hat

  //slider for "Choose your desired city" on the main
  //   $(window).on("load", function () {
  //     $(".cover_city_slick").slick({
  //       slidesToShow: 4,
  //       slidesToScroll: 1,
  //       infinite: true,
  //       dots: true,
  //       arrows: true,
  //       responsive: [
  //         {
  //           breakpoint: 992,
  //           settings: {
  //             slidesToShow: 3,
  //             slidesToScroll: 1,
  //           },
  //         },
  //         {
  //           breakpoint: 767,
  //           settings: {
  //             slidesToShow: 2,
  //             slidesToScroll: 1,
  //             arrows: false,
  //           },
  //         },
  //         {
  //           breakpoint: 576,
  //           settings: {
  //             slidesToShow: 1,
  //             slidesToScroll: 1,
  //             arrows: false,
  //           },
  //         },
  //       ],
  //     });
  //   });
  //END.slider for "Choose your desired city" on the main

  //review slider
  //   $(window).on("load", function () {
  //     $(".review_slider").slick({
  //       slidesToShow: 2,
  //       slidesToScroll: 1,
  //       infinite: true,
  //       dots: true,
  //       arrows: true,
  //       responsive: [
  //         {
  //           breakpoint: 767,
  //           settings: {
  //             slidesToShow: 1,
  //             slidesToScroll: 1,
  //             dots: false,
  //           },
  //         },
  //         {
  //           breakpoint: 576,
  //           settings: {
  //             slidesToShow: 1,
  //             slidesToScroll: 1,
  //             dots: false,
  //             adaptiveHeight: true,
  //           },
  //         },
  //       ],
  //     });
  //   });
  //END.review slider

  // adaptive menu
  $(".adpt_icon").click(function (e) {
    $(this).toggleClass("open");
    $(".header_content").toggleClass("header_content_adapt");
    $("body").toggleClass("body_adapt_open");
  });
  // END.adaptive menu

  // adaptive filter
  $("#filter_icon_id").click(function (e) {
    $(".sec_estate_first").toggleClass("open_filter");
    $(".filter_adapt").toggleClass("open_filter");
    $("body").toggleClass("open_filter");
  });
  // END.adaptive filter

  //sidebar - search
  $(".search_adapt").click(function (e) {
    $(this).toggleClass("open");
    $(".search.form_underline").toggleClass("search_adapt");
    $(".sidebar").toggleClass("sidebar_adapt");
    $(".sec_ba_first").toggleClass("sec_ba_first_adapt");
  });
  //END.sidebar - search

  //sidebar category
  $(".categories .title").click(function (e) {
    $(this).toggleClass("open");
    $("ul").toggleClass("categories_adapt");
  });
  //END.sidebar category

  //sidebar tags
  $(".tags .title").click(function (e) {
    $(this).toggleClass("open");
    $(".tags_wrap").toggleClass("tags_adapt");
  });
  //END.sidebar tags

  //Construction - gallery in "our projects"

  if (
    document.getElementById("gall_wrap_construction") ||
    document.getElementById("gall_wrap_city")
  ) {
    // initialization of modal windows for the gallery
    $(".popup-gallery").each(function () {
      $(this).magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Загрузка изображения #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1],
        },
        image: {
          tError:
            '<a href="%url%">Изображение #%curr%</a> не может быть загружено.',
        },
      });
    });
  }

  if (document.getElementById("gall_wrap_construction")) {
    // Construction: showing only the first 5 images
    function gallFirstFive() {
      var list = document.getElementById("gall_wrap_construction");
      var child = list.childNodes;
      var number = [];
      for (let i = 0; i < child.length; i++) {
        if (child[i].className == "gall_link") {
          child[i].classList.add("visib");
          number.push(child[i]);
          if (number.length == 7) {
            break;
          }
        }
      }
    }
    gallFirstFive();
    // END.Construction: showing only the first 5 images

    // Construction: by clicking on the button we show all images
    $("#see_all_construction").click(function (e) {
      $("#gall_wrap_construction a").addClass("visib");
      $(this).addClass("novisible");
    });
    // END.Construction: by clicking on the button we show all images
  }

  //END.Construction - gallery in "our projects"

  if (document.getElementById("gall_wrap_city")) {
    // City: showing only the first 4 images
    function gallFirstFiveCity() {
      var list = document.getElementById("gall_wrap_city");
      var child = list.childNodes;
      var number = [];
      for (let i = 0; i < child.length; i++) {
        if (child[i].className == "gall_link") {
          child[i].classList.add("visib");
          number.push(child[i]);
          if (number.length == 4) {
            break;
          }
        }
      }
    }
    gallFirstFiveCity();
    // END.City: showing only the first 4 images

    // City: by clicking on the button we show all images
    $("#see_all_city").click(function (e) {
      $("#gall_wrap_city a").addClass("visib");
      $(".gall_wrap_city").addClass("visib");
      $(this).addClass("novisible");
      $("#collum_gall_city").removeClass("col-lg-5");
      $("#collum_gall_city").addClass("col-lg-12");
    });
    // END.City: by clicking on the button we show all images
  }

  //Construction - a slider in "our projects"

  $(window).on("resize", function () {
    if ($(window).width() < 767) {
      $(window).on("load", function () {
        $("#gall_wrap_construction").slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              },
            },
          ],
        });
      });
    } else {
    }
  });

  if ($(window).width() < 767) {
    $("#gall_wrap_construction a").addClass("visib");
    $("#see_all_construction").addClass("novisible");
  }

  $(window).ready(function () {
    if ($(window).width() < 767) {
      $(window).on("load", function () {
        $("#gall_wrap_construction").slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
          responsive: [
            {
              breakpoint: 100000,
              settings: "unslick",
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              },
            },
          ],
        });
      });
    } else {
    }
  });

  //END.Construction - a slider in "our projects"

  //slider on the City page - the section "Maybe you will be interested"
  $(window).on("load", function () {
    $("#slick_maybe_interest").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    });
  });
  //END.slider on the City page - the section "Maybe you will be interested"

  if ($(window).width() < 767) {
    $("#gall_wrap_city a").addClass("visib");
    $("#see_all_city").addClass("novisible");
  }

  $(window).on("load", function () {
    $("#gall_wrap_city").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 100000,
          settings: "unslick",
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    });
  });

  // digits in the search form

  $(".sec_estate_first input[type='number']").inputSpinner({
    buttonsWidth: "1px",
    buttonsClass: " ",
  });
  //  END.digits in the search form

  // show all parameters
  $("#all_param_link").click(function (e) {
    $("#row_four_id").toggleClass("visib");
  });
  //END.show all parameters

  //Area sliders
  $("#area-polzunok").slider({
    min: 0,
    max: 200,
    range: true,
    values: [1, 200],
    slide: function (event, ui) {
      $("#area-result-polzunok").text(
        "от " + ui.values[0] + " до " + ui.values[1]
      );
      $("#area-send-result-polzunok").val(ui.values[0] + " - " + ui.values[1]);
    },
  });
  $("#area-result-polzunok").text(
    "от " +
      $("#area-polzunok").slider("values", 0) +
      " до " +
      $("#area-polzunok").slider("values", 1)
  );

  //$("#result-polzunok").text($("#polzunok").slider("value"));
  $("#area-send-result-polzunok").val($("#area-polzunok").slider("value"));
  //END Area sliders

  //Earth range sliders

  $("#ground-polzunok").slider({
    min: 0,
    max: 3000,
    range: true,
    values: [1, 3000],
    slide: function (event, ui) {
      $("#ground-result-polzunok").text(
        "от " + ui.values[0] + " до " + ui.values[1]
      );
      $("#ground-send-result-polzunok").val(
        ui.values[0] + " - " + ui.values[1]
      );
    },
  });
  $("#ground-result-polzunok").text(
    "от " +
      $("#ground-polzunok").slider("values", 0) +
      " до " +
      $("#ground-polzunok").slider("values", 1)
  );

  $("#ground-send-result-polzunok").val($("#ground-polzunok").slider("value"));
  //END. Earth range sliders

  //Price sliders
  $("#price-polzunok").slider({
    min: 100,
    max: 100000,
    range: true,
    values: [100, 100000],
    slide: function (event, ui) {
      $("#price-result-polzunok").text(
        "от " + ui.values[0] + " до " + ui.values[1]
      );
      $("#price-send-result-polzunok").val(ui.values[0] + " - " + ui.values[1]);
    },
  });
  $("#price-result-polzunok").text(
    "от " +
      $("#price-polzunok").slider("values", 0) +
      " до " +
      $("#price-polzunok").slider("values", 1)
  );

  $("#price-send-result-polzunok").val($("#price-polzunok").slider("value"));
  //END. Price sliders

  // reset all search parameters

  $("#reset_button_id").click(function () {
    $(".sec_estate_first input:checked").prop("checked", false);
    $(".sec_estate_first select").prop("selectedIndex", 0);
    $(".sec_estate_first input").val("");
    $(".sec_estate_first #bedrooms_number").val("1");
    $(".sec_estate_first #bath_number").val("1");
    $(".sec_estate_first #number_three").val("1");
    $(".sec_estate_first #number_four").val("1");

    var optionsArea = $("#area-polzunok").slider("option");
    $("#area-polzunok").slider("values", [optionsArea.min, optionsArea.max]);
    $("#area-result-polzunok").text(
      " от " + optionsArea.values[0] + " до " + optionsArea.values[1]
    );

    var optionsGround = $("#ground-polzunok").slider("option");
    $("#ground-polzunok").slider("values", [
      optionsGround.min,
      optionsGround.max,
    ]);
    $("#ground-result-polzunok").text(
      " от " + optionsGround.values[0] + " до " + optionsGround.values[1]
    );

    var optionsPrice = $("#price-polzunok").slider("option");
    $("#price-polzunok").slider("values", [optionsPrice.min, optionsPrice.max]);
    $("#price-result-polzunok").text(
      " от " + optionsPrice.values[0] + " до " + optionsPrice.values[1]
    );
  });

  $("#reset_button_id_adapt").click(function () {
    $(".sec_estate_first input:checked").prop("checked", false);
    $(".sec_estate_first select").prop("selectedIndex", 0);
    $(".sec_estate_first input").val("");
    $(".sec_estate_first #bedrooms_number").val("1");
    $(".sec_estate_first #bath_number").val("1");
    $(".sec_estate_first #number_three").val("1");
    $(".sec_estate_first #number_four").val("1");

    var optionsArea = $("#area-polzunok").slider("option");
    $("#area-polzunok").slider("values", [optionsArea.min, optionsArea.max]);
    $("#area-result-polzunok").text(
      " от " + optionsArea.values[0] + " до " + optionsArea.values[1]
    );

    var optionsGround = $("#ground-polzunok").slider("option");
    $("#ground-polzunok").slider("values", [
      optionsGround.min,
      optionsGround.max,
    ]);
    $("#ground-result-polzunok").text(
      " от " + optionsGround.values[0] + " до " + optionsGround.values[1]
    );

    var optionsPrice = $("#price-polzunok").slider("option");
    $("#price-polzunok").slider("values", [optionsPrice.min, optionsPrice.max]);
    $("#price-result-polzunok").text(
      " от " + optionsPrice.values[0] + " до " + optionsPrice.values[1]
    );
  });
  //END.reset all search parameters
})(jQuery);
