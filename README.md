# E-commerce_Amazon

##SECTION 1: ##Introduction
           <p>Amazon_clone </p>
##SECTION 2: ##<h1>React</h1>
             1. create folder frontend
             2. create Navbar(install npx create-react-app frontend) and Listproducts
##SECTION 3: ##<h1>Home Screen</h1>
             ##List_Products
             <h2>
             1. create Products array
             2. add product images
             3. render images
             4. style products </h2>
             Note: <p>A "key" is a special string attribute you need to include creating list of elements
             key give the element a stable identity
             keys help React which item changed, added or deleted
             Help in efficient update of user interface
             Here {product.slug} is unique so use that </p>
 ##Add_routing
    1. npm i react-router-dom
    2. create Route for HomeScreen
    3. create Router fo ProductScreen           
           
  ##Note: 1.useParams is a hook from react-router-dom . It helps in get the slug from URL and show it in ProductScreen.
                      2. Remove anchor tag and replace with <link>
                         -Link is a component from react-router-dom 
                         -There is no page refresh whle using <link to="/"> </Link>             
             
   ##Create Node.JS Server
                    1. run npm init in root folder
                    2. Update package.json set type: module
                       type => module because we are going to use import instead of require for importing packages(using ES6)
                    3. Add .js to imports
                    4. npm install express
                    5. create server.js
                    6. add start command as node backend/server.js
                    7. require express
                    8. create route for / return backend is ready.
                    9. move products.js from frontend to backend
                   10. create route for /api/products
                   11. return products
                   12. run npm start
                      (here we install "npm install nodemon --save-dev" because this package shouldn't be shift to
                      the production its just for development, when development is done am not going to use it anymore)
                      In package.json add 
                                     "scripts": {  "start": "nodemon server.js" }
                                     to start nodemon.js automatically ,Now we use command "npm start" to get result.         
          ## Fetch Products From Backend
                   1. set proxy in package.json
                   2. npm install axios
                   3. use state hook
                   4. use effect hook
                   5. use reducer hook  
#usereducer - replace useState with usereducer to manage complex state in HomeScreen Components.
           ##SECTION_4 : REACT_BOOTSTRAP
                      1.Add Bootstrap.                   
                                                    
              