jQuery(document).ready(function($) {
    // Define a class that will be used to hide elements
    const hiddenClass = 'is-hidden'; // Ensure this class sets `display: none !important;`

    // Function to filter events based on the selected location filters
    function filterEvents() {
        var selectedLocations = [];
        // Collect all checked locations
        $('#input_43_35 .gfield-choice-input:checked').each(function() {
            var locationValue = $(this).val();
            switch(locationValue) {
                case "Tamarindo & Langosta":
                    selectedLocations.push("Tamarindo", "Langosta");
                    break;
                case "Potrero & Flamingo":
                    selectedLocations.push("Potrero", "Flamingo");
                    break;
                case "All Others":
                    selectedLocations.push("All Others"); // Handle "All Others" as needed
                    break;
            }
        });

        // Show or hide events based on selected locations
        $("span[data-itemprop='addressNeighbourhood']").each(function() {
            var eventNeighborhood = $(this).text();
            var eventContainer = $(this).closest('.vote-item');

            // Determine visibility based on selected locations
            if (selectedLocations.includes(eventNeighborhood) || (selectedLocations.includes("All Others") && !["Tamarindo", "Langosta", "Potrero", "Flamingo"].includes(eventNeighborhood))) {
                eventContainer.removeClass(hiddenClass);
            } else {
                eventContainer.addClass(hiddenClass);
            }
        });
    }

    // Listen for changes on location filter checkboxes
    $('#input_43_35 .gfield-choice-input').change(function() {
        filterEvents(); // Apply filters whenever a checkbox is changed
    });

    filterEvents(); // Apply filters on initial load
});
