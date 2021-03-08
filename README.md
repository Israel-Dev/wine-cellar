# Frontend case: Wine/beer cellar
## Israel Silva


## To start the app
```
npm install
npm run start
```

### Architecture and organization
For this project I used React since it's the library that I'm the most familiar with and TypeScript cause it gives better IDE support and helps avoiding bugs.

The project is organized by folders that represent different pages, a shared folder for components that are used on multiple pages and an utils folder for global information(HEX colors and CSS classes).

The styling file of the components are located next to the component itself and I used the styled-components library.

### Priorities and steps

- Made a quick draw to get an overview of what components I would need.
- Searched for a remote API that I could use and made a quick read of it's documentation.
- Made the Home page (the complete list) and gave it a basic styling.
- Created the Detail Page listing all the values that the API gave me.
- Created a Loading CSS class to added always that data is being fetched.
- Created a Add Page that would receive the basic information about a bottle, had all fields required with a validation for checking empty strings, displaying an error message when needed and saved the data in a cookie.
- Added the functionallity that allows the List Component to display the Bottles from the cookie.
- Implemented sorting methods in the List Component.
- Implemented the possibility to see more fields in the table.
- Perfomed Unit Tests