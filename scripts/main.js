(function() {
    function initializeMaps() {
        var calgaryLatLng = new google.maps.LatLng(51.078767, -114.113933);
        var vancouverLatLng = new google.maps.LatLng(49.269090, -123.081413);

        var calgaryMapOptions = {
            center: calgaryLatLng,
            zoom: 12,
            disableDefaultUI: true,
            draggable: false,
            zoomControl: true,
            scrollwheel: false
        };
        var vancouverMapOptions = {
            center: vancouverLatLng,
            zoom: 12,
            disableDefaultUI: true,
            draggable: false,
            zoomControl: true,
            scrollwheel: false
        };

        var calgaryMap = new google.maps.Map( document.getElementById("calgary-map-canvas"), calgaryMapOptions );
        var vancouverMap = new google.maps.Map( document.getElementById("vancouver-map-canvas"), vancouverMapOptions );

        var calgaryMarker = new google.maps.Marker({
            position: calgaryLatLng,
            map: calgaryMap,
            title: 'Calgary Showroom'
        });
        var vancoverMarker = new google.maps.Marker({
            position: vancouverLatLng,
            map: vancouverMap,
            title: 'Vancouver Showroom'
        });
    }

    google.maps.event.addDomListener(window, 'load', initializeMaps);
})();
