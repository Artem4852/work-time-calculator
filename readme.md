# Work Time Calculator

## Introduction

The Work Time Calculator is an interactive web application designed to help members of Hack Club's Arcade to estimate the amount of work time needed to earn various rewards.

## Live Demo

You can try out the no-backend version of the Work Time Calculator here: https://artem4852.github.io/work-time-calculator/.

## Features

- Interactive interface to select desired products
- Real-time calculation of required work hours
- Responsive design for various screen sizes
- Cool raccoon providing feedback
- Backend version for dynamic product updates
- No-backend version for easy deployment and offline use

## How It Works

1. Choose the products you want from the available options
2. Enter the number of tickets (work hours) you've already accumulated
3. Specify the number of days you won't be able to work or the number of hours you can work per day
4. Click the "Calculate" button to see the results

## Tech Stack

### No-Backend Version

- HTML5
- CSS3 (with SASS)
- JavaScript
- Custom font - Slackey

### Backend Version

- Python (Flask)
- HTML5 (Jinja2 templates)
- CSS3 (with SASS)
- JavaScript
- Custom font - Slackey

## Project Structure

### No-Backend Version

- `index.html`: Main HTML file
- `static/css/style.sass`: SASS styles
- `static/css/style.css`: Compiled CSS styles
- `static/js/script.js`: JavaScript for calculations and interactivity

### Backend Version

- `app.py`: Flask application file
- `templates/indexTemplate.html`: HTML template for dynamic rendering
- `static/`: Directory containing CSS, JavaScript, and asset files
- `products.json`: JSON file for storing scraped product data

## Local Development

To run the no-backend version locally:

1. Clone the repository:
   ```
   git clone https://github.com/artem4852/work-time-calculator.git
   ```
2. Navigate to the project directory:
   ```
   cd work-time-calculator
   ```
3. Open `index.html` in your preferred web browser

To run the backend version locally:

1. Install Python and pip if not already installed
2. Install the required dependencies:
   ```
   pip install flask requests
   ```
3. Run the Flask application:
   ```
   python app.py
   ```
4. Open a web browser and navigate to `http://localhost:5050`

## Backend Functionality

The backend version (`app.py`) includes the following features:

- Scrapes product data from the Hack Club Arcade API
- Stores the data in a JSON file for caching
- Dynamically renders the product list in the HTML template

## License

This project is open source and available under the MIT License.
