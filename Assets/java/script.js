// changing the value of thext area
$('#textarea1').val('New Text');
M.textareaAutoResize($('#textarea1'));

// dropdown on homepage
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });
