import 'bootstrap';
import "./scss/custom.scss";


$(document).ready(function() {
    let allLinks = $(".nav-link").map(function() {
        return this; // Fetch all elements that have the .nav-link class and add them to our list.
    }).get();

    // Iterate through each of the links we fetched.
    $.each(allLinks, function(key, value) {
        if (value.href == document.URL) { // If the href attribute for this link matches the current page URL.
            if(screen.width > 768)
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