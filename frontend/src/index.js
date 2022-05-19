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
    if ($('#facebook').length){
        $.ajax("https://graph.facebook.com/me?fields=id,name,posts{full_picture,message,story,permalink_url}",
        {
            headers: {
                Authorization: `Bearer ${process.env.FACEBOOK_TOKEN}`
            },
            dataType: 'json'
        })
        $(document).ajaxSuccess(function(event, xhr) {
            const data = JSON.parse(xhr.responseText) 
            $('#facebook').find('img').attr('src', data.posts.data[0].full_picture);
            $('#facebook').find('blockquote').html(data.posts.data[0].message);
          });
          
    }

});
