# Treasure Box
Treasure Box is a web application where users can place media (either photo or desired text) into a treasure box in exchange for a key.  Keys can be used to fetch an item out of the treasure boxes. 

Access the live site [here](treasure-box.herokuapp.com)

## Demo

![demo](demo.gif) 

# Motivations
We aimed to provide an online experience that takes inspiration from Geocaching — an outdoor activity involving searching for hidden containers that are stashed around the world. In one of the variants of Geocaching, the containers house small trinkets that finders can take, but the convention is to leave something in its place. Although we didn't emulate the exploration aspect of geocaching, we developed an application that preserved the essence of a one-for-one exchange. 

# Configuration and Deployment Instructions:
* Download the zip from github
* Open terminal
* `npm install` for Mongoose/Express/AWS dependencies
* `cd frontend` and run `npm install` for React/Node dependencies
*  `cd ..` then `npm run dev` to start frontend and backend servers (note: you will need the proper keys_dev.js in config)
* localhost3000 should auto-generate in your main browser

# Features Overview and Technologies Involved
### MongoDB / Mongoose
MongoDB is a popular document-based NoSQL database. For Treasure Box, we used the database to store collections of treasure documents and user documents. As a setup decision, each treasure document contains two references to two user documents: the owner of the treasure and the uploader of the treasuer. Each treasure also contains a link directing to an image hosted on S3. 

### Express
Express is a web app framework for Node, and the means by which we were able to route our frontend components correctly.   

### Javascript React, Redux & Node.js
React is used to create and render the front end of our application - the UI (user interface). It is an advanced, abstracted version of HTML written in Javascript, which creates a virtual DOM where changes take effect almost instantaneously without a hard refresh. It consists of components that hold mutable state, and allows for changes to render via the use of props (delivered by the container). Redux combines the dispatched actions, reducers, and store altogether to change the state of components in the UI. With these front-end libraries, we are able to provide the user a fast and seamless web browing experience.

### AWS - S3
Amazon Web Services provides many cloud-based services, including picture uploads. We utilized S3 as the main storage for the photo/gif media that were uploaded, and stored the resulting S3 link in Mongo.

# Features and Functionality 
``` javascript
router.get('/new/:id', (req, res) => {
  Treasure.countDocuments({ ownerId: null }).exec(function (err, count) {
    var rand = Math.floor(Math.random() * count)

    Treasure.findOne({ownerId: null, reported: false}).skip(rand)
      .then(treasure => res.json(treasure))
      .then(() => {
        User.findByIdAndUpdate(
          { _id: req.params.id },
          { $inc: { keyCount: -1 } },
          { new: true },
        )
        .catch(err => res.json(err))
      })
      .catch(err => res.json(err))
  });
});
```
We needed to add functionality such that the user could only receive a random treasure if the treasure has never been pulled before. This is consistent with our original goal of mimicking GeoCaching in that once a treasure is claimed only the recipient can access it. We implementented this logic in the backend, by first cycling through documents with no ownerId, then selecting a random document, and finally setting the the owerId to be equal the currentUserId that we pass through the params.

```javascript
const Admin = ({ component: Component, path, loggedIn, user, ...rest }) => (
  <Route {...rest} render={(props) => (
    (loggedIn && (user.email === 'admin@krma.com')) ? <Component {...props} /> : <Redirect to="/treasureisland" />)}
  />
);
```
In addition to the standard Protected and Authorized routes, we had to implemented an Admin route to hide certain functionality from an average user. We built this logic by checking across two criterias: 1) the current user is loggedin and 2) the current user has the approved Admin email.

# UI snippets
### Log in/Sign up page
<img width="891" alt="login" src="https://user-images.githubusercontent.com/58828330/82357874-91f5e700-99ba-11ea-887a-985e6393c96c.png">
To implement user auth securely, we used bcrypt to securely hash a user's password before storing it to Mongo and jsonwebtoken to generate/confirm a users' bearer token.

### Treasure Island Menu
<img width="500" alt="treasureisland" src="https://user-images.githubusercontent.com/58828330/82357821-7db1ea00-99ba-11ea-8e10-4116a92c8c82.png">
Inside the left portion of the Treasure Island page is a menu where you can upload a photo, quote and see your key count. Keys are used to open the treasure chest for various loot.

### All Flagged Reports Page
<img width="1254" alt="Screen Shot 2020-05-14 at 8 03 59 AM" src="https://user-images.githubusercontent.com/58828330/82357968-ab972e80-99ba-11ea-9b53-1ac3594553fb.png">
Admins can see all the flagged content

### Admins can view and delete users with the delete buttons underneath each user.
<img width="1256" alt="Screen Shot 2020-05-14 at 7 59 24 AM" src="https://user-images.githubusercontent.com/58828330/82358198-0892e480-99bb-11ea-94a9-9c939842592d.png">

### Future Implementation
* We want to give the user the ability to pull a treasure based on a criteria, ie pull a random book request or a quote or story, etc. This will require a small refactor of the treasure document model.


## Treasure Box Team
  -----------------------------------------------------------------

### Team Leader: Jenn Huynh
### [LinkedIn](https://www.linkedin.com/in/jenniferanhhuynh/)

  -----------------------------------------------------------------

### Team Member: James Jiang
### [LinkedIn](https://www.linkedin.com/in/jamesjiang13/)
### [Github](https://github.com/jamesjiang13)

  -----------------------------------------------------------------

### Team Member: Michael Murry
### [LinkedIn](https://www.linkedin.com/in/michael-murry-b3746a1a6/)
### [Github](https://github.com/MichaelMurry49)

  -----------------------------------------------------------------

### Team Member: Josh Silva-Roland
### [LinkedIn](https://www.linkedin.com/in/joshua-silva-roland/)
### [Github](https://github.com/jsilvaroland)

 -----------------------------------------------------------------
