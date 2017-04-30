(() => {
    function sliderCarusel() {

        var elem = document.querySelector('.team-carousel');
        var flkty = new Flickity( elem,  {
            // options
            cellAlign: 'left',
            contain: true,
            prevNextButtons: false,
            autoPlay: 3000,
            wrapAround: true
        });
    }



    document.addEventListener('DOMContentLoaded', sliderCarusel);
})();

