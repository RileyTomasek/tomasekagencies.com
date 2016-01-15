(function() {
    function initializeMaps() {
        var calgaryLatLng = new google.maps.LatLng(51.078767, -114.113933);

        var calgaryMapOptions = {
            center: calgaryLatLng,
            zoom: 12,
            disableDefaultUI: true,
            draggable: false,
            zoomControl: true,
            scrollwheel: false
        };

        var calgaryMap = new google.maps.Map( document.getElementById("calgary-map-canvas"), calgaryMapOptions );

        var calgaryMarker = new google.maps.Marker({
            position: calgaryLatLng,
            map: calgaryMap,
            title: 'Calgary Showroom'
        });
    }

    google.maps.event.addDomListener(window, 'load', initializeMaps);
})();
