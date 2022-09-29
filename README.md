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
             <h2>
             1. npm i react-router-dom
             2. create Route for HomeScreen
             3. create Router fo ProductScreen
              </h2>
              ##Note: 1.useParams is a hook from react-router-dom . It helps in get the slug from URL and show it in ProductScreen.
                      2. Remove anchor tag and replace with <link>
                         -Link is a component from react-router-dom 
                         -There is no page refresh whle using <link to="/"> </Link>
            
