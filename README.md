# Upe Vote

## Overview
Upe Vote is a simple voting system built with WordPress and Gravity Forms. It enables community members to participate in weekly votes to decide on events to be featured in the Upe Email/WhatsApp Digest and displayed on community pages.

## Features
- **Weekly Voting**: Allows community members to vote once a week on their preferred events.
- **Gravity Forms Integration**: Utilizes Gravity Forms for easy and efficient form management.
- **Email/WhatsApp Digest Integration**: Syndicates the most voted events into the Upe Email and WhatsApp digest.
- **Community Page Display**: Shows the top-voted events on dedicated community pages.

## Requirements
- **WordPress**: Upe Vote runs on any standard WordPress installation.
- **Gravity Forms Plugin**: Ensure you have the Gravity Forms plugin installed and activated in your WordPress site.

## Installation
1. **Install WordPress**: Ensure you have a WordPress site set up.
2. **Install Gravity Forms**: Purchase and install the Gravity Forms plugin from [Gravity Forms Website](https://www.gravityforms.com/).
3. **Import Forms**: Import the provided form templates into Gravity Forms.
4. **Set Up Pages**: Create pages in WordPress to display the voting form and results.
5. **Upload or Insert JS into Voting Page**:
   - `location-sort.js`: This script enhances the user experience by allowing voters to sort event locations on the voting page according to their preferences. If a user prefers to see and vote on events in their local area, they can configure the script to hide events located elsewhere. This feature is particularly useful for communities spread across large geographic areas, ensuring that users can focus on relevant local activities.
   
   - `vote-scroll-svg.js`: This script handles two main functionalities. Firstly, it applies basic styling to SVG elements used for radio button vote options, ensuring a consistent and visually appealing interface across all devices and browsers. Secondly, it implements auto-scrolling behavior during the voting process. When a user casts a vote, the page will automatically scroll to the next item, eliminating the need for manual scrolling and thus enhancing the user experience by providing a smooth and seamless voting interaction.


## Configuration
- **Gravity Forms Setup**: Configure your forms according to the provided templates to ensure proper data collection and processing.
- **Voting Logic Setup**: Set up the logic in Gravity Forms to handle weekly voting limits and data aggregation.
- **Digest Integration**: Configure the integration with the email and WhatsApp systems to send out weekly digests.

## Usage
1. **Voting**: Community members can vote by accessing the voting page during the open voting period each week.
2. **View Results**: Results are exported  and can be viewed on the community page dedicated to event results.

## Contributing
Interested in contributing to the Upe Vote project? Reach out to us on [u.pe](https://u.pe/)

## License
Upe Vote is open-source and is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgements
Thanks to everyone who has contributed to the development of Upe Vote, especially the dedicated community members who participate in the voting each week.

