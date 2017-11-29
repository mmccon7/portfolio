   function myMap() {
       myCenter = new google.maps.LatLng(41.878114, -87.629798);
       var mapOptions = {
           center: myCenter,
           zoom: 12,
           scrollwheel: false,
           draggable: false,
           mapTypeId: google.maps.MapTypeId.ROADMAP
       };
       var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

       var marker = new google.maps.Marker({
           position: myCenter,
       });
       marker.setMap(map);
   }

   // Modal Image Gallery
   function onClick(element) {
       document.getElementById("img01").src = element.src;
       document.getElementById("modal01").style.display = "block";
       var captionText = document.getElementById("caption");
       captionText.innerHTML = element.alt;
   }

   // Change style of navbar on scroll
   window.onscroll = function() { myFunction() };

   function myFunction() {
       var navbar = document.getElementById("myNavbar");
       if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
           navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
       } else {
           navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
       }
   }

   // Used to toggle the menu on small screens when clicking on the menu button
   function toggleFunction() {
       var x = document.getElementById("navDemo");
       if (x.className.indexOf("w3-show") == -1) {
           x.className += " w3-show";
       } else {
           x.className = x.className.replace(" w3-show", "");
       }
   }

   $(document).ready(function() {
       // Add smooth scrolling to all links
       $("a").on('click', function(event) {

           // Make sure this.hash has a value before overriding default behavior
           if (this.hash !== "") {
               // Prevent default anchor click behavior
               event.preventDefault();

               // Store hash
               var hash = this.hash;

               // Using jQuery's animate() method to add smooth page scroll
               // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
               $('html, body').animate({
                   scrollTop: $(hash).offset().top
               }, 800, function() {

                   // Add hash (#) to URL when done scrolling (default click behavior)
                   window.location.hash = hash;
               });
           } // End if
       });
   });

   function scrollTo(to, duration) {
       if (document.body.scrollTop == to) return;
       var diff = to - document.body.scrollTop;
       var scrollStep = Math.PI / (duration / 10);
       var count = 0,
           currPos;
       start = element.scrollTop;
       scrollInterval = setInterval(function() {
           if (document.body.scrollTop != to) {
               count = count + 1;
               currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
               document.body.scrollTop = currPos;
           } else { clearInterval(scrollInterval); }
       }, 10);
   }

   function test(elID) {
       var dest = document.getElementById(elID);
       scrollTo(dest.offsetTop, 500);
   }