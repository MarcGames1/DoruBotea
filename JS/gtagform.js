
// GOOGLE ADS SI ANALYTICS

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-Q1L29K7NK2');
gtag('config', 'AW-667086766');

// FUNCTIE DE TRACKING PT FORMULAR
function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-667086766/6jx7CMCjp5ICEK7fi74C',
        'event_callback': callback
    });
    return false;
  }

 document.getElementById("mainForm").onsubmit = function(){  gtag_report_conversion();}