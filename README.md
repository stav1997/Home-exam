# Home-exam
This project contains 4 main folders:
1. server folser-this folder contains 4 sub folders:
  1.1. controller folder- this folder contains the exported functions such as-
    -findAll- to find all the users in the database.
    -create- to create a new user.
    -findById- to find specific user.
    -update- to update user's details.
    -delete- to delete a user from the database.
  1.2. database folder- contains the connection to the database file.
  1.3. routes folder- contains the index.js file and the router.js file, which has          all the get and post to the APIs and services.
  1.4. services folder- contains a render.js file which redirect to specific routes        such as homeRoutes, addUserRoutes and updateUserRoutes to the APIs using axios.
2. Users folder- contains the database manipulations which are accessed from the        controller. 
3. views folder- contains 3 ejs files- index.ejs that represents the main page,          addUser.ejs that represents the add user action, and updateUser.ejs that              repressents  the user udate action.
4. assets folder- has a sub folder "css" wich contains the css file.

In addition, the project contains an app.js file which connect to the server.

The package.json file contains all the depandencies of the project and the start comand which is "node app.js".

