// Ensure no conflict mode with jQuery 3.7.1
$.noConflict();
jQuery(document).ready(function ($) {
  // Update for jQuery 3.7.1
  if ($.typer) {
    $.typer.options.highlightColor = "rgba(9,127,255,100)";
    $.typer.options.typerOrder = "sequential";
    $("[data-typer-targets]").typer();
  } else {
    console.error('$.typer is not defined');
  }
});

// This part of the code checks if the device is touch-enabled and adds classes to the HTML element
(function (o, c) {
  var n = c.documentElement,
    t = " w-mod-";
  n.className += t + "js";
  if ("ontouchstart" in o || (o.DocumentTouch && c instanceof DocumentTouch)) {
    n.className += t + "touch";
  }
})(window, document);

// Google Analytics snippet with `gtag`
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "UA-74383838-1", { anonymize_ip: false });