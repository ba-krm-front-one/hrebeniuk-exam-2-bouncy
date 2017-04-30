(() => {
    function inicializeMap() {

        let mapLocation = {lat: 48.742899, lng: 37.588399};

        var map = new google.maps.Map(document.querySelector("#map-canvas"), {
            center: mapLocation,
            zoom: 17,
            disableDefaultUI: true
        });

        var marker = new google.maps.Marker({
            position: mapLocation,
            map: map,
            icon: "assets/images/map-marker.png"
        });
    }

    document.addEventListener('DOMContentLoaded', inicializeMap);
})();
