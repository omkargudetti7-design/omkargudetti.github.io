/* Small enhancements only. The site works without this file. */
(function () {
  "use strict";

  /* Mobile menu */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "Menu";
      }
    });
  }

  /* Highlight the nav link for the section on screen (home page only) */
  var links = nav ? nav.querySelectorAll('a[href^="#"]') : [];
  if (links.length && "IntersectionObserver" in window) {
    var byId = {};
    links.forEach(function (a) {
      byId[a.getAttribute("href").slice(1)] = a;
    });
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (a) {
            a.removeAttribute("aria-current");
          });
          var link = byId[entry.target.id];
          if (link) link.setAttribute("aria-current", "true");
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    Object.keys(byId).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  /* Image viewer: any link with data-gallery opens in a dialog */
  var anchors = document.querySelectorAll("a[data-gallery]");
  if (!anchors.length || typeof HTMLDialogElement === "undefined") return;

  var dialog = document.createElement("dialog");
  dialog.className = "viewer";
  dialog.setAttribute("aria-label", "Image viewer");
  dialog.innerHTML =
    '<div class="viewer-stage"><img alt=""></div>' +
    '<div class="viewer-bar">' +
    '<button type="button" data-act="prev" aria-label="Previous image">Prev</button>' +
    '<button type="button" data-act="next" aria-label="Next image">Next</button>' +
    '<span class="cap"></span>' +
    '<button type="button" data-act="close">Close</button>' +
    "</div>";
  document.body.appendChild(dialog);

  var img = dialog.querySelector("img");
  var cap = dialog.querySelector(".cap");
  var group = [];
  var index = 0;

  function show(i) {
    index = (i + group.length) % group.length;
    var a = group[index];
    img.src = a.getAttribute("href");
    img.alt = a.getAttribute("data-alt") || "";
    cap.textContent =
      (a.getAttribute("data-caption") || "") +
      (group.length > 1 ? "  (" + (index + 1) + " of " + group.length + ")" : "");
  }

  anchors.forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var name = a.getAttribute("data-gallery");
      group = Array.prototype.slice.call(
        document.querySelectorAll('a[data-gallery="' + name + '"]')
      );
      var multi = group.length > 1;
      dialog.querySelector('[data-act="prev"]').hidden = !multi;
      dialog.querySelector('[data-act="next"]').hidden = !multi;
      show(group.indexOf(a));
      dialog.showModal();
    });
  });

  dialog.addEventListener("click", function (e) {
    var act = e.target.getAttribute && e.target.getAttribute("data-act");
    if (act === "close" || e.target === dialog) dialog.close();
    if (act === "prev") show(index - 1);
    if (act === "next") show(index + 1);
  });

  dialog.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft" && group.length > 1) show(index - 1);
    if (e.key === "ArrowRight" && group.length > 1) show(index + 1);
  });

  dialog.addEventListener("close", function () {
    img.removeAttribute("src");
  });
})();
