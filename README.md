# Simple MEAN CRUD
This application can be used as a template for your simple MEAN stack CRUD app. It was built using Node, ExpressJS, Angular2 and MongoDB. It is a very simple CRUD app that lets a user make create `posts`, edit `posts` and delete `posts` on a MongoDB database using Mongoose Schemas. This app is ideal from begginners learning to make CRUD apps using the MEAN stack.

Feel free to contact me via email or github if you have any trouble getting this app to run on your machine. Let me know if you have any suggestions as to how we can improve this app.


# Getting started with the Simple-MEAN-CRUD

## Clone the repository from the command line:

  `$ git clone http://github.com/cole-wuilleumier/simple-mean-crud`
  
## Drag and drop the repository into a code editor and change the `config.js` file to include your MongoDB in the following structure:
   
   `module.exports = {
      'secret': '',
      'database': 'mongodb://<path-to-your-mongodb>'
    };`
    
## Then from the command line enter your application folder, npm install, and start the app:

  `$ cd simple-mean-crud`
  
  `$ npm install`
  
  `$ ng build && node server `
  
## Enjoy!

