import 'bootstrap';
import "./scss/custom.scss";


$(document).ready(function() {
    let allLinks = $(".nav-link").map(function() {
        return this;
    }).get();
    
    let ddLinks = $(".dropdown-item").map(function() {
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
    $.each(ddLinks, function(key, value) {
        if (value.href == document.URL) {
            if(window.innerWidth > 992)
            {
                $(".dropdown a").addClass("active");
            }
            else
            {
                $(".dropdown a").addClass("active-nav-mob");               
            }
        }
    });
});
