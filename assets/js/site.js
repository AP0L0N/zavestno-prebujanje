(function () {
  "use strict";

  var nav = document.querySelector("[data-nav]");
  var toggle = document.querySelector("[data-nav-toggle]");
  var header = document.querySelector("[data-header]");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("nav-open", open);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
      });
    });
  }

  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  var toTop = document.querySelector("[data-to-top]");
  if (toTop) {
    var toggleTop = function () {
      toTop.classList.toggle("is-visible", window.scrollY > 600);
    };
    toggleTop();
    window.addEventListener("scroll", toggleTop, { passive: true });
    toTop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 864e5);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie =
      name + "=" + encodeURIComponent(value) + expires + "; path=/; SameSite=Lax";
  }

  function getCookie(name) {
    var match = document.cookie.match(
      new RegExp("(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)")
    );
    return match ? decodeURIComponent(match[1]) : null;
  }

  var cookieBar = document.querySelector("[data-cookie]");
  var cookieAccept = document.querySelector("[data-cookie-accept]");
  if (cookieBar && cookieAccept && !getCookie("zp_cookies")) {
    cookieBar.hidden = false;
    cookieAccept.addEventListener("click", function () {
      setCookie("zp_cookies", "1", 365);
      cookieBar.hidden = true;
    });
  }

  document.querySelectorAll("[data-share]").forEach(function (button) {
    button.addEventListener("click", function (event) {
      var url = button.getAttribute("data-share-url");
      if (button.getAttribute("data-share") === "copy" && url) {
        event.preventDefault();
        if (navigator.clipboard) {
          navigator.clipboard.writeText(url).then(function () {
            button.classList.add("is-copied");
            button.setAttribute("aria-label", "Povezava kopirana");
            setTimeout(function () {
              button.classList.remove("is-copied");
            }, 2000);
          });
        }
      }
    });
  });
})();
