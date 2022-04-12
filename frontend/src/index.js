import 'bootstrap';
import "./scss/custom.scss";


$(document).ready(function() {
    let allLinks = $(".nav-link").map(function() {
        return this;
    }).get();

    
    $.each(allLinks, function(key, value) {
        if (value.href == document.URL) {
            if(window.innerWidth > 992)
            {
                $(this).addClass("active");
            }
            else
            {
                $(this).addClass("active-nav-mob");               
            }
        }
    });
});