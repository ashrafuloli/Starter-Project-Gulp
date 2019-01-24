
## Requeriments
This project have some requeriments you need to meet in order to compile it. First of all, you need NodeJS in order to run javascript on the console, you can go to the [NodeJS](http://nodejs.org) site and follow trough the installation process. After you get the `node` command on the console you will have the node package manager `npm` as well. Now you need to install Gulp with the following command.

```
npm install -g gulp
```
Gulp is the one that will run all the compilation, watchers and others tasks. To learn more about Gulp and all it's magical abilities check out there website [here.](https://gulpjs.com/)

***

## Install
In order to start using the project you need to clone it to your computer. You can download the the zip version.

After you have it on you pc, you need to go in the console to the project folder and execute the following command to gather all the dependencies.
```
npm install
```

***

## How to use
Once you have the project open you should be able to open your terminal and type gulp in the command line and magic will take place. Here are the command you can run.

* **default**: Compile and watch for changes
* **styles**: Copy the newer to the build folder
* **scripts**: Compile the JavaScript files
* **sass**: Compile the Sass styles
* **images**: Copy the newer to the build folder
* **fonts**: Copy the newer to the build folder
* **vendors**: Copy the vendors to the build folder
* **watch**: Watch for any changes on the each section


The `gulp` command is the best choice for you most likley. Go to the project folder in the console and execute `gulp`, it will compile the project and start a server that will refresh every time you change something in the code. Gulp will be watching for changes and will tell you how to access the project from local and public url. Every browser that point to that url will be auto refreshed. As an extra feature for testing purpose any interaction on one browser will be reflected on any others. Try it on a phone, tablet and pc at the same time.

Once you have the project running in the terminal you can delete the partial
```
sources/sass/6-pages.sass
```
It's purpose is purley to get you started and have something "schmancy" on the screen when it launches. delete it and start writing your very own "schmancy" code for your project.

If you want to use SCSS or LESS feel free to make that change in the file types and update the gulpfile to look for the right file types also.

***

## Home Page

*Go Build Folder Make Dir (index.html)* 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Starter Project</title>
    <link rel="stylesheet" href="assets/css/animate.css">
    <link rel="stylesheet" href="assets/css/fontawesome.min.css">
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/main.min.css">
</head>
<body>
    <section class="pt-100 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <h1>Starter Project With Gulp</h1>
                </div>
            </div>
        </div>
    </section>
    <script src="assets/js/vendors.js"></script>
    <script src="assets/js/app.js"></script>
</body>
</html>
```


Feel free to add onto this project by forking it and making it your own, This is just a basic start but work for most basic project without a lot of fancy bells and whistles.

Cheers 👍🏼

