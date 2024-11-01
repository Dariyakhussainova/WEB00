# Construction Website

## Overview
This repository contains the source code for a construction company website designed to showcase services, completed projects, and products available for purchase. With a user-centric design, it features interactive sections for visitors to browse, book services, and purchase materials, enhancing customer engagement and accessibility.

## Features

1. **User Registration and Authentication**
   - Users can register and log in to access personalized features like cart management and order history. Sessions are managed using `localStorage` to enhance the user experience and maintain the logged-in state across pages.

2. **Interactive Shopping Cart**
   - Users can add products to a cart, with items saved to `localStorage` to persist selections across sessions. The cart includes item quantity tracking and a dynamic total price calculation. A checkout modal confirms orders, enhancing the purchase flow.

3. **Product Filtering and Categories**
   - Products are organized into categories (e.g., building materials, tools) and have price-based filters (low, medium, high) for easy browsing. JavaScript dynamically displays filtered results to provide a seamless experience.

4. **Responsive Design with Bootstrap**
   - The website is mobile-responsive using Bootstrap’s grid layout, ensuring a smooth display across different screen sizes. Key sections like the navbar, product grid, and footer adapt for mobile, tablet, and desktop views.

5. **Theme Toggle Functionality**
   - Users can switch between day and night themes, with preferences stored in `localStorage` to persist across sessions, allowing a customizable visual experience.

6. **Dynamic FAQ Accordion**
   - The FAQ section uses an accordion toggle for expanding and collapsing answers, improving readability and letting users quickly find relevant information.

7. **Interactive Animations and Visuals**
   - Subtle background color changes and a brick wall animation triggered by scrolling add visual engagement, creating a more immersive experience as users interact with the site.

8. **Real-time Date and Time Display**
   - The footer includes a live date and time display, updated every second to keep users informed, adding a personalized touch to the interface.

9. **Contact Form with Validation and Submission**
   - A popup contact form allows users to send messages directly. The form includes validation for essential fields and error handling for accurate submissions and user convenience.

10. **Rating System for Products**
    - Each product has an interactive rating system with star selection, allowing users to leave feedback on specific items, enhancing community engagement.

## Technology Stack
- **Frontend:** HTML5, CSS3, JavaScript, Bootstrap 5
- **User Interface:** Modular JavaScript for clean, maintainable code
- **Responsive Design:** Ensures a seamless experience across desktops, tablets, and mobile devices

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/construction-website.git
   ```
2. Navigate to the project folder:
   ```bash
   cd construction-website
   ```
3. Open `index.html` in a browser to view the website.
4. Modify `styles.css` and `script.js` to customize styles and functionality.

## Future Enhancements
- **Payment Gateway Integration:** For complete e-commerce functionality.
- **User Profiles:** Enhanced user profiles for tracking order history and saved preferences.
- **Live Chat Support:** Add real-time chat support to improve customer service.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
