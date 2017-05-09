-------------------- INSTALLATION---------------------------------
/*
after checking out "app starter kit" for a new project, please follow the instructions below.
*/
  remove .git folder
/*
run following
*/
  git init

/*
the following is an example, please replace necessary parts.
*/
  git remote add origin http://vmprodtfs:8080/tfs/SompoAmerica/Portal/_git/sompo.someapp


/*
run the following commands
*/
  npm install
  bower install
  npm install -g gulp-cli

-----------------------ONE TIME CHANGES---------------------------
replace strings/texts in the project
sompo.app with your application name like sompo.edelivery
In index.html,
sompo-app.js and sompo-app.css with your application name like sompo-edelivery.js  sompo-edelivery.css

rename sompo.app folder with  your application name

portal.routes.js---->setup function change scoope....

-------------------- RUN THE APP---------------------------------
gulp clean
gulp serve

-------------------- BUILD THE APP---------------------------------
gulp clean

gulp build  //this is for dev / local environment
or
gulp build --qa  //this is for QA environment
or
gulp build --prod  //this is for PRODUCTION environment

you can find the generated files under dist folder.

