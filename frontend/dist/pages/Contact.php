<?php
 include_once "footer.php";
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wereldwinkel Nuenen over ons</title>
    <script src="../main.js" defer></script>

</head>

<body>
    <div class="container bg-light p-0 mb-5">
        <div class="row">
            <header class="col-bg-secondary"><img src="../images/Black_on_orange_dotted_world_map_vector2.jpg" class="img-fluid d-none d-sm-none d-md-block"
                    alt=""></header>
        </div>
        <div class="row m-0 sticky-top">
            <nav class="navbar navbar-light flex-fill p-0 border-top border-3 border-dark d-none d-sm-none d-md-block">
                <div class="col">
                    <div class="navbar-nav d-flex flex-row justify-content-evenly w-100">
                        <a class="nav-link text-center p-3 flex-fill " aria-current="page" href="../index.html" target="_self">Home</a>
                        <a class="nav-link text-center p-3 flex-fill " href="products.html" target="_self">Producten</a>
                        <a class="nav-link text-center p-3 flex-fill " href="over-ons.html" target="_self">Over ons</a>
                        <a class="nav-link text-center p-3 flex-fill " href="#">Projecten</a>
                        <a class="nav-link text-center p-3 flex-fill " href="faq.html" target="_self">Veelgestelde vragen</a>
                        <a class="nav-link text-center p-3 flex-fill " href="werken-bij.html" target="_self">Werken
                            bij</a>
                        <a class="nav-link text-center p-3 flex-fill active-nav" href="Contact.html">Contact</a>
                    </div>
                </div>
                
            </nav>
              <nav class="navbar navbar-dark bg-dark d-block d-md-none d-lg-none">
                <div class="container-fluid justify-content-end">
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                </div>
            </nav>
                  <div class="collapse navbar-nav flex-column justify-content-evenly w-100 m-0 p-0" id="navbarToggleExternalContent">
                    <a class="nav-link text-center p-3 flex-fill d-md-none d-lg-none" aria-current="page" href="../index.html" target="_self">Home</a>
                    <a class="nav-link text-center p-3 flex-fill d-md-none d-lg-none" href="products.html" target="_self">Producten</a>
                    <a class="nav-link  text-center p-3 flex-fill d-md-none d-lg-none" href="over-ons.html" target="_self">Over
                        ons</a>
                        <a class="nav-link text-center p-3 flex-fill d-md-none d-lg-none" href="#">Projecten</a>
                    <a class="nav-link text-center p-3 flex-fill d-md-none d-lg-none" href="faq.html" target="_self">Veelgestelde vragen</a>
                    <a class="nav-link text-center p-3 flex-fill d-md-none d-lg-none" href="werken-bij.html" target="_self">Werken
                        bij</a>
                    <a class="nav-link text-center p-3 flex-fill d-md-none d-lg-none active-nav" href="Contact.html">Contact</a>
                
                </div>
              
        </div>        
   



        <div class="row main m-0 justify-content-md-center pt-5 pb-5">
            <div class="background"></div>
            <div class="TekstVrijwillger" id="featured-1">
            <div class="row ">
                    <div class="feature col-lg-6 col col   ">
                        <h2  class="pb-5 text-success" >Contactgegevens</h2>
                        <p class="" >
                            Wij zijn via de volgende mogelijkheden bereikbaar :
                        </p>                            
                        <ul style="list-style-type: none;">
                                <li class="pb-3" >
                                   Email:  wereldwinkelnuenen@gmail.com


                                </li>
                                <li class="pb-3" >
                                    Telefoon : 040-2839195
                                </li>
                                <li class="pb-3" >
                                    Adres : Berg 28B, 5671 CC, Nuenen
                              </li>
                            </ul>
                    </div>
                </div>
                <div class="justify-content-end justify-content-lg-end justify-content-sm-start row">
                    
                    <div class="feature col-lg-6 col col   ">
                        <h2  class="pb-5 text-success" >Locatie</h2>
                        <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" 
                            src="https://maps.google.com/maps?q=Berg%2028-B,%205671%20CC%20Nuenen&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe><a href="https://fmovies-online.net">fmovies</a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style>
                        <a href="https://www.embedgooglemap.net">google maps for websites</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style>
                </div>
                
                </div>
                </div>
            </div>
        </div>
            </div>
            <?=$footer?>
    </div>
</body>

</html>