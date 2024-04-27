jQuery(document).ready(function($) {
    // Function to reset SVG styles within a radio group
    function resetSvgStyles(radioGroup) {
        radioGroup.find('svg').css({
            'border': 'none', // Reset borders for all SVGs
            'fill': '#000000' // Reset fill color to default
        });
    }

    // Function to apply styles to the selected SVG based on the radio button value
    function applySvgStyles(svg, value) {
        var fillColor = '#EC3492'; // Default color for NO and fallback
        if (value === 'YES') {
            fillColor = '#80cb4a'; // Green for "YES"
        } else if (value === 'ABSTAIN') {
            fillColor = '#FFDF84'; // Wheat for "ABSTAIN"
        }
        svg.css({
            'border': 'none',
            'fill': fillColor
        });
    }
    
    // Function to scroll to the next visible voting item
    function scrollToNextVotingItem(voteInput) {
        // Get the current voting item and find the next all visible voting items
        var currentVotingItem = voteInput.closest('.vote-item');
        var allNextVotingItems = currentVotingItem.nextAll('.vote-item');
        var nextVisibleVotingItem = allNextVotingItems.filter(':visible').first();
        
        if(nextVisibleVotingItem.length) {
            var scrollTarget = nextVisibleVotingItem.offset().top - 100; // Adjust this value to offset the scroll position as needed
            $('html, body').animate({
                scrollTop: scrollTarget
            }, 1000); // Smooth scroll duration
        }
    }

    
    // When an SVG inside a label is clicked or when a radio button changes
    $('.gfield-choice-input').change(function() {
        var radioButton = $(this);
        var labelFor = $('label[for="' + radioButton.attr('id') + '"]');
        var svg = labelFor.find('svg');
        var value = radioButton.val(); // Get the value of the radio button

        // Reset styles for all SVGs in the same group
        resetSvgStyles(svg.closest('.gfield_radio'));

        // Apply styles if the radio button is checked
        if(radioButton.is(':checked')) {
            applySvgStyles(svg, value);
            scrollToNextVotingItem(radioButton); // Scroll to the next voting item
        }
    });

    // Optionally, handle link targets here
    $('a.event-title, a.vote, .event-container a').attr('target', '_blank');
});
