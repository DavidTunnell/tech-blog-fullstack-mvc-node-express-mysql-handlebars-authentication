# Tech Blog - MVC, Node.js, Express.js, Handlebars.js, MySQL, Bulma

Describe functionality here.

* Create accounts.... login/logout
* Create, Read, Update and Delete Blog Posts
* The Ability to Comment on Blog Posts
* Client-Side API Consumption and AJAX DOM Manipulation
* API, what the server does...

This full stack project is a blog with the following technologies/methodologies. 

* [MVC Architecture](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
* Designed with Extensibility in Mind (Notice the Controller Routes, Client-Side JavaScript and Handlebar Views)
* [Node.js](https://nodejs.org/en/) and [Express.js](https://expressjs.com/) as the Server for API and HTTP requests
* Custom [MySQL](https://www.mysql.com/) Database Schema
* [Sequelize.js](https://sequelize.org/) for [Object Relational Mapping](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping), Database Interaction, [Routing](https://expressjs.com/en/guide/routing.html) and Schema Generation and Seeding
* [Dotenv](https://www.npmjs.com/package/dotenv) for Database Connection Settings
* [Handlebars.js](https://handlebarsjs.com/) for Dynamic View Templating and Server Side HTML Rendering
* [Bulma](https://bulma.io/) and the [Blog 2 Template](https://github.com/BulmaTemplates/bulma-templates/blob/master/templates/blog-tailsaw.html) as a CSS Style Framework
* [Nodemon](https://www.npmjs.com/package/nodemon) for Easier Server Development
* ADD UNIT TESTS????

The project uses [Node.js](https://nodejs.org/en/) and [Express.js](https://expressjs.com/) as its server along with [Handlebars.js](https://handlebarsjs.com/) as its view/templating engine. The file to run it is `./server.js`. More details in the installation section. The ar

## Installation

## Screenshots

### Homepage

### View Post and Comments

### Sign up

### Login

### Dashboard / CRUD for Posts

### Edit Post

### Logout


==========================

//quality readme - url to repo
//project comments
//deployed to heroku - url to application
// Application loads with no errors. - w2 nu checker
//use: node/express/handlebars/mysql2?/sequelize/dotenv/express-session/connect-session-sequelize/bcrypt


-work on readme once this is done for what you have done so far^


//table ideas
-Users
-posts - fk users and comments tables
-comments fk posts


=====

## Acceptance Criteria

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage

WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in

WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site

WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site

THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard

WHEN I click on the logout option in the navigation
THEN I am signed out of the site

WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

the [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, and the [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

**Note**: The [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior and you do not have to do anything to your application other than implement the npm package.
