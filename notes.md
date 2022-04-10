For this proyect we will use babel.

Installin;
@babel/core @babel/cli @bable/node @babel/present-env

File:
.babelrc

We will use a concep know has environment varibles
To keep the code cleaner we will keep the config of the environment variables in a 'config.js' file.

We created a gitignore file to not upload to github the files we wont use, in this case '.env' to hide the
conection to the database.

At the end we will build our development code to producction code with babel like this 'babel src -d dist', 
will execute like this node dist/index.js
But to execute it we must install a plugin '@babel/plugin-transform-runtime', and activate it in the
'.babelrc' build.
One very important thing to got in mind is that babel only compiles javascript code, so we must copy
the html, css, icons, etc, files so for that we install 'ncp' module.

To finish we will upload the code to github and then to a server heroku for the app and mongodb atlas
for the database.