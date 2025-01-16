# Contact List Web App

This project is a full-stack web application for managing a contact list. It allows users to perform basic CRUD (Create, Read, Update, Delete) operations to view, add, update, and delete contacts. The backend is built with Flask, while the frontend is developed with React.

## Features

- **View Contacts**: Display all saved contacts in an organized list.

- **Add Contacts**: Add new contacts with relevant details.

- **Update Contacts**: Edit the information of existing contacts.

- **Delete Contacts**: Remove unwanted contacts.

- **Responsive Design**: Provides a seamless user experience across devices.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- [Python](https://www.python.org/) (v3.8 or later)

- [Node.js](https://nodejs.org/) (v14 or later)

- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/contact-list-app.git
   cd contact-list-app
   ```

2. Set up the backend:

   - Navigate to the backend directory:

     ```
     cd backend
     ```

   - Create a virtual environment and activate it:

     ```
     python -m venv venv
     source venv/bin/activate  # On Windows: venv\Scripts\activate
     ```

   - Install dependencies:

     ```
     pip install -r requirements.txt
     ```

   - Run the Flask server:

     ```
     flask run
     ```

3. Set up the frontend:

   - Navigate to the frontend directory:

     ```
     cd ../frontend
     ```

   - Install dependencies:

     ```
     npm install
     ```

   - Start the React development server:
     ```
     npm start
     ```

The app will be accessible at [http://localhost:3000](http://localhost:3000/), with the backend running at [http://localhost:5000](http://localhost:5000/).

## Credits

This project was created by following along with the [tutorial](https://www.youtube.com/watch?v=PppslXOR7TA) from [TechWithTim](https://www.youtube.com/@TechWithTim). The code and implementation are based on his instructional video as part of my learning journey with Flask and React.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [Flask](https://flask.palletsprojects.com/) for the backend framework.

- [React](https://reactjs.org/) for the frontend framework.

- [TechWithTim](https://www.youtube.com/@TechWithTim) for the tutorial and guidance.
