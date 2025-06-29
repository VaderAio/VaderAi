/**
 * Dark Light Mode
 * Header Connect
 * Loadmore Item
 * headerFixed
 * retinaLogo
 * ajaxContactForm
 * mobileNav
 * ajaxSubscribe
 * alertBox
 * loadmore
 */

(function ($) {
  "use strict";

  var themesflatTheme = {
    // Main init function
    init: function () {
      this.config();
      this.events();
    },

    // Define vars for caching
    config: function () {
      this.config = {
        $window: $(window),
        $document: $(document),
      };
    },

    // Events
    events: function () {
      var self = this;

      // Run on document ready
      self.config.$document.on("ready", function () {
        // Retina Logos
        self.retinaLogo();
      });

      // Run on Window Load
      self.config.$window.on("load", function () {});
    },

    // Retina Logos
    retinaLogo: function () {
      var retina = window.devicePixelRatio > 1 ? true : false;
      var $logo = $("#site-logo img");
      var $logo2 = $("#logo-footer img");
      var $logo_retina = $logo.data("retina");

      if (retina && $logo_retina) {
        $logo.attr({
          src: $logo.data("retina"),
          width: $logo.data("width"),
          height: $logo.data("height"),
        });
      }
      if (retina && $logo_retina) {
        $logo2.attr({
          src: $logo.data("retina"),
          width: $logo.data("width"),
          height: $logo.data("height"),
        });
      }
    },
  }; // end themesflatTheme

  // Start things up
  themesflatTheme.init();

  var ajaxContactForm = function () {
    $("#contactform,#commentform").each(function () {
      $(this).validate({
        submitHandler: function (form) {
          var $form = $(form),
            str = $form.serialize(),
            loading = $("<div />", { class: "loading" });

          $.ajax({
            type: "POST",
            url: $form.attr("action"),
            data: str,
            beforeSend: function () {
              $form.find(".form-submit,comment-form").append(loading);
            },
            success: function (msg) {
              var result, cls;
              if (msg === "Success") {
                result =
                  "Message Sent Successfully To Email Administrator. ( You can change the email management a very easy way to get the message of customers in the user manual )";
                cls = "msg-success";
              } else {
                result = "Error sending email.";
                cls = "msg-error";
              }

              $form.prepend(
                $("<div />", {
                  class: "flat-alert " + cls,
                  text: result,
                }).append(
                  $('<a class="close" href="#"><i class="fa fa-close"></i></a>')
                )
              );

              $form.find(":input").not(".submit").val("");
            },
            complete: function (xhr, status, error_thrown) {
              $form.find(".loading").remove();
            },
          });
        },
      });
    }); // each contactform
  };

  // Dark Light Mode
  $(".dark").on("click", function (e) {
    e.preventDefault();
    $(".body").addClass("is_dark");
    $(".light").removeClass("is_active");
    $(".dark").addClass("is_active");

    $(".tf-text").removeClass("style");
    $(".tf-text").addClass("s1");
    document.getElementById("logo_header").src =
      "assets/images/logo/logo_dark.png";
    document.getElementById("logo_footer").src =
      "assets/images/logo/logo_dark.png";
    document.getElementById("moon_dark").src = "assets/images/icon/moon-2.png";
  });

  $(".light").on("click", function (e) {
    e.preventDefault();
    $(".body").removeClass("is_dark");
    $(".light").addClass("is_active");
    $(".dark").removeClass("is_active");

    $(".tf-text").addClass("style");
    $(".tf-text").removeClass("s1");
    document.getElementById("logo_header").src = "assets/images/logo/logo.png";
    document.getElementById("logo_footer").src = "assets/images/logo/logo2.png";
    document.getElementById("moon_dark").src = "assets/images/icon/moon.png";
  });

  // Header Connect

  var avatar_popup1 = function () {
    $(".popup-notification")
      .find(".notification")
      .on("click", function (event) {
        event.stopPropagation();
      });
    $(".popup-notification")
      .find(".notification")
      .on("click", function (event) {
        if (!$(".avatar_popup2").hasClass("visible")) {
          $(".avatar_popup2").addClass("visible");
          event.preventDefault();
        } else $(".avatar_popup2").removeClass("visible");
      });
  };

  var avatar_popup2 = function () {
    $(".popup-user")
      .find(".avatar")
      .on("click", function (event) {
        event.stopPropagation();
      });
    $(".popup-user")
      .find(".avatar")
      .on("click", function (event) {
        if (!$(".avatar_popup").hasClass("visible")) {
          $(".avatar_popup").toggleClass("visible");
          event.preventDefault();
        } else $(".avatar_popup").removeClass("visible");
      });
  };
  var sortBy = function () {
    $(".tf-soft")
      .find(".btn-sort-by")
      .on("click", function (event) {
        event.stopPropagation();
      });
    $(".tf-soft")
      .find(".btn-sort-by")
      .on("click", function (event) {
        if (!$(".sortby-content").hasClass("visible")) {
          $(".sortby-content").toggleClass("visible");
          event.preventDefault();
        } else $(".sortby-content").removeClass("visible");
      });
  };

  // var loadmore = function () {
  //     $(".fl-item").slice(0, 8).show();
  //     $(".fl-blog.fl-item2").slice(0, 6).show();
  //     $(".fl-collection.fl-item3").slice(0, 3).show();
  //     $(".fl-item.fl-item4").slice(0, 15).show();
  //     $(".fl-item.fl-item5").slice(0, 7).show();

  //     $("#loadmore").on("click", function(e){
  //       e.preventDefault();

  //       $(".fl-item:hidden").slice(0, 4).slideDown();
  //       $(".fl-item2:hidden").slice(0, 3).slideDown();
  //       $(".fl-item3:hidden").slice(0, 3).slideDown();
  //       $(".fl-item4:hidden").slice(0, 5).slideDown();
  //       $(".fl-item5:hidden").slice(0, 13).slideDown();
  //       if($(".fl-item:hidden").length == 0) {
  //         $("#loadmore").hide();
  //       }
  //       if($(".fl-item2:hidden").length == 0) {
  //         $("#loadmore").hide();
  //       }
  //       if($(".fl-item3:hidden").length == 0) {
  //         $("#loadmore").hide();
  //       }
  //       if($(".fl-item4:hidden").length == 0) {
  //         $("#loadmore").hide();
  //       }
  //       if($(".fl-item5:hidden").length == 0) {
  //         $("#loadmore").hide();
  //       }
  //     });
  // };

  // Header Fixed
  var headerFixed = function () {
    if ($("body").hasClass("header-fixed")) {
      var nav = $("#header_main");
      if (nav.length) {
        var offsetTop = nav.offset().top,
          // headerHeight = nav.height(),
          injectSpace = $("<div />", {
            // height: headerHeight
          }).insertAfter(nav);
        $(window).on("load scroll", function () {
          if ($(window).scrollTop() > 200) {
            nav.addClass("is-fixed");
            injectSpace.show();
          } else {
            nav.removeClass("is-fixed");
            injectSpace.hide();
          }

          if ($(window).scrollTop() > 300) {
            nav.addClass("is-small");
          } else {
            nav.removeClass("is-small");
          }
        });
      }
    }
  };

  // Mobile Navigation
  var mobileNav = function () {
    var mobile = window.matchMedia("(max-width: 991px)");
    var wrapMenu = $("#site-header-inner .wrap-inner");
    var navExtw = $(".nav-extend.active");
    var navExt = $(".nav-extend.active").children();

    responsivemenu(mobile);

    mobile.addListener(responsivemenu);

    function responsivemenu(mobile) {
      if (mobile.matches) {
        $("#main-nav")
          .attr("id", "main-nav-mobi")
          .appendTo("#header_main")
          .hide()
          .children(".menu")
          .append(navExt)
          .find("li:has(ul)")
          .children("ul")
          .removeAttr("style")
          .hide()
          .before('<span class="arrow"></span>');
      } else {
        $("#main-nav-mobi")
          .attr("id", "main-nav")
          .removeAttr("style")
          .prependTo(wrapMenu)
          .find(".ext")
          .appendTo(navExtw)
          .parent()
          .siblings("#main-nav")
          .find(".sub-menu")
          .removeAttr("style")
          .prev()
          .remove();

        $(".mobile-button").removeClass("active");
        $(".mobile-button-style2").removeClass("active");
        $(".sub-menu").css({ display: "block" });
      }
    }
    $(document).on("click", ".mobile-button", function () {
      $(this).toggleClass("active");
      $("#main-nav-mobi").slideToggle();
    });
    $(document).on("click", ".mobile-button-style2", function () {
      $(this).toggleClass("active");
      $("#main-nav-mobi").slideToggle();
    });
    $(document).on("click", "#main-nav-mobi .arrow", function () {
      $(this).toggleClass("active").next().slideToggle();
    });
  };
  var ajaxSubscribe = {
    obj: {
      subscribeEmail: $("#subscribe-email"),
      subscribeButton: $("#subscribe-button"),
      subscribeMsg: $("#subscribe-msg"),
      subscribeContent: $("#subscribe-content"),
      dataMailchimp: $("#subscribe-form").attr("data-mailchimp"),
      success_message:
        '<div class="notification_ok">Thank you for joining our mailing list! Please check your email for a confirmation link.</div>',
      failure_message:
        '<div class="notification_error">Error! <strong>There was a problem processing your submission.</strong></div>',
      noticeError: '<div class="notification_error">{msg}</div>',
      noticeInfo: '<div class="notification_error">{msg}</div>',
      basicAction: "mail/subscribe.php",
      mailChimpAction: "mail/subscribe-mailchimp.php",
    },

    eventLoad: function () {
      var objUse = ajaxSubscribe.obj;

      $(objUse.subscribeButton).on("click", function () {
        if (window.ajaxCalling) return;
        var isMailchimp = objUse.dataMailchimp === "true";

        if (isMailchimp) {
          ajaxSubscribe.ajaxCall(objUse.mailChimpAction);
        } else {
          ajaxSubscribe.ajaxCall(objUse.basicAction);
        }
      });
    },

    ajaxCall: function (action) {
      window.ajaxCalling = true;
      var objUse = ajaxSubscribe.obj;
      var messageDiv = objUse.subscribeMsg.html("").hide();
      $.ajax({
        url: action,
        type: "POST",
        dataType: "json",
        data: {
          subscribeEmail: objUse.subscribeEmail.val(),
        },
        success: function (responseData, textStatus, jqXHR) {
          if (responseData.status) {
            objUse.subscribeContent.fadeOut(500, function () {
              messageDiv.html(objUse.success_message).fadeIn(500);
            });
          } else {
            switch (responseData.msg) {
              case "email-required":
                messageDiv.html(
                  objUse.noticeError.replace(
                    "{msg}",
                    "Error! <strong>Email is required.</strong>"
                  )
                );
                break;
              case "email-err":
                messageDiv.html(
                  objUse.noticeError.replace(
                    "{msg}",
                    "Error! <strong>Email invalid.</strong>"
                  )
                );
                break;
              case "duplicate":
                messageDiv.html(
                  objUse.noticeError.replace(
                    "{msg}",
                    "Error! <strong>Email is duplicate.</strong>"
                  )
                );
                break;
              case "filewrite":
                messageDiv.html(
                  objUse.noticeInfo.replace(
                    "{msg}",
                    "Error! <strong>Mail list file is open.</strong>"
                  )
                );
                break;
              case "undefined":
                messageDiv.html(
                  objUse.noticeInfo.replace(
                    "{msg}",
                    "Error! <strong>undefined error.</strong>"
                  )
                );
                break;
              case "api-error":
                objUse.subscribeContent.fadeOut(500, function () {
                  messageDiv.html(objUse.failure_message);
                });
            }
            messageDiv.fadeIn(500);
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          alert("Connection error");
        },
        complete: function (data) {
          window.ajaxCalling = false;
        },
      });
    },
  };

  var alertBox = function () {
    $(document).on("click", ".close", function (e) {
      $(this).closest(".flat-alert").remove();
      e.preventDefault();
    });
  };

  $(function () {
    $(".fl-item").slice(0, 8).show();
    $(".fl-item2").slice(0, 6).show();
    $(".fl-item3").slice(0, 3).show();
    $("#loadmore").on("click", function (e) {
      e.preventDefault();
      $(".fl-item:hidden").slice(0, 4).slideDown();
      $(".fl-item2:hidden").slice(0, 3).slideDown();
      $(".fl-item3:hidden").slice(0, 3).slideDown();
      if ($(".fl-item:hidden").length == 0) {
        $(".loadmore").hide();
      }
      if ($(".fl-item2:hidden").length == 0) {
        $(".loadmore").hide();
      }
      if ($(".fl-item3:hidden").length == 0) {
        $(".loadmore").hide();
      }
      $("html, body").animate(
        { scrollTop: $(".themesflat-container").offset().top + 500 },
        "slow"
      );
    });
  });

  // Dom Ready
  $(function () {
    headerFixed();
    mobileNav();
    ajaxSubscribe.eventLoad();
    ajaxContactForm();
    alertBox();
    avatar_popup1();
    avatar_popup2();
    sortBy();
    // loadmore();
  });
})(jQuery);
