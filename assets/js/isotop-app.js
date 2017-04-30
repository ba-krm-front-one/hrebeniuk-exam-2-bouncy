(() => {
    function useIsotope(event) {
        event.preventDefault();

        let isotopeGrid = new Isotope( '.portfolio-images', {
            itemSelector: '.portfolio-images__items',
            percentPosition: true,
            masonry: {
                // use element for option
                gutter: 10,
                horizontalOrder: true,

            }
        });

        let filterGrid = function( event ) {
            let filterValue = this.dataset.filter;
            // use matching filter function
            isotopeGrid.arrange({ filter: filterValue });
            isotopeGrid.shuffle();
        };

       document.querySelectorAll('.portfolio__filters').forEach((filtersButton) => {
            filtersButton.addEventListener('click', filterGrid);

        });

        document.querySelectorAll('.portfolio__filters').forEach((filtersButton) =>  {
            filtersButton.addEventListener( 'click', function( event ) {
                // only work with buttons
                if ( !this.classList.contains('portfolio__filters--in-checked') ) {
                    filtersButton.querySelector('.portfolio__filters--in-checked').classList.remove('portfolio__filters--in-checked');
                    if ( !this.classList.contains('portfolio__filters--in-checked') ) {
                        filtersButton.querySelector('.portfolio__filters--in-checked').classList.remove('portfolio__filters--in-checked');
                        event.target.classList.add('portfolio__filters--in-checked');
                    }
                }

            });
        });

    }

    document.addEventListener('DOMContentLoaded', useIsotope);
})();
