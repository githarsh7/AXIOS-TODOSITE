# AXIOS-TODOSITE

A modern React CRUD application built with Axios and MockAPI for persistent user data management. This project provides a responsive and aesthetic user interface with add, edit, update, and delete functionality using React Hooks, Context API, Reducers, and REST API integration.

## Features

- Persistent user data storage using MockAPI
- Add new user cards dynamically
- Edit existing user details
- Delete user records
- Refresh-safe data handling
- Axios API integration
- React Context API state management
- Reducer-based data handling
- Popup form UI for adding users
- Japanese-inspired aesthetic UI design
- Responsive and clean layout
- Stable default profile card display

## Technologies Used

- React JS
- Axios
- MockAPI
- Context API
- React Reducer
- CSS3
- JavaScript (ES6)

## Project Structure

```bash
src/
│
├── components/
│   └── Card.jsx
│
├── context/
│   └── Context.jsx
│
├── reducer/
│   └── Reducers.jsx
│
├── App.jsx
├── App.css
├── index.css
├── main.jsx
```

## Installation

Clone the repository:

```bash
git clone https://github.com/githarsh7/AXIOS-TODOSITE.git
```

Navigate to the project directory:

```bash
cd AXIOS-TODOSITE
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## MockAPI Configuration

This project uses MockAPI for backend data persistence.

Example API Base URL:

```bash
https://6a12b0af78d0434e0d5d5c08.mockapi.io/userDatas
```

Configure the Axios base URL inside:

```bash
src/main.jsx
```

Example:

```javascript
axios.defaults.baseURL =
'https://6a12b0af78d0434e0d5d5c08.mockapi.io/userDatas'
```

## CRUD Operations

### Create
Add new user cards using the popup form.

### Read
Fetch and display user data from MockAPI.

### Update
Edit existing user details with pre-filled form inputs.

### Delete
Remove user cards permanently from the backend.

## UI Design

The application includes:

- Japanese-inspired aesthetic theme
- Soft pink and white color palette
- Responsive card layout
- Elegant popup modal design
- Modern minimal user experience

## Functional Highlights

- Stable default profile card always visible
- Newly added card appears separately
- Data persists after page refresh
- Edit form auto-fills existing user data
- Smooth and user-friendly interactions

## Future Improvements

- Authentication system
- Search and filter functionality
- Dark mode support
- User image upload
- Pagination support
- Form validation enhancements

## Connect with Me 🤝 :
- LinkedIn : [HARSHAA SG](https://www.linkedin.com/in/harshaasg)  
- Gmail : harshaavardhan8@gmail.com

⭐ Feel free to fork this project and improve it!

## Repository

https://github.com/githarsh7/AXIOS-TODOSITE

## License

This project is open source and available under the MIT License.
