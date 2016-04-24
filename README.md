# Udacity FrontEnd P4 - MOBILE PORTFOLIO

Welcome to _Dusty's_ online portfolio. This was forked from [Udacity's Original P4] and modified initially to meet the criteria. During the build process I believed it would be more realistic if the Portfolio refects the actual work that I have done. So my goal is to optimize the sites already attached to the Mob Portfolio and then add my own to the portfolio list.

I got a little carried away with the design layout.

## Hosting

The Hosting solution I used to test the distribution code of my project was GitHub Pages.

Check out the site - _[Here]_

If you'd like to follow suit, check out GitHubs' guide to [GitHub Pages]. This will give you a great place to test distribution ready code.

GitHub Pages acts like a separate repository. Once your code is ready, you simply push it to the repository, give it about a minute or 2 to load on their end, and boom you've got a hosted website.

## Folder Layout

As you can see there are just 3 folders within this repository:
  * _Adobe Images_: Which with is where my AI versions of the customer logo and down arrow I created
  * _src_: Contains the source code of my Mobile Profile site. The easy to read and edit version of the site.
  *_dist_: This is the distribution code of my site. All the code here is just the minified versions of the source code.

## What Has been done

1. My own information has been put into the portfolio and I've add a new design style that I like
   * I got inspiration from [Ian]'s portfolio.
   * The logo and down arrow I created both using Adobe Illustrator (I include the image & CSV files in the src folder. The actual AI files are in the Adobe folder)

2. All images have been optimized
   * Images have been dropped in size and saved in the smallest needed formart, optimized for web use, using Adobe Photoshop.
   * All images have been placed locally within the site:
      * This cuts down on time connecting with other servers.
   * The floating pizza image in the back of the Pizzeria shop has been dropped in size, by decreasing it's width & height and using a web optimized version produced by Photoshop.

3. Improvements to the Pizzeria
   * Images have been dropped in size and saved in the smallest formart, optimized for web use, using Adobe Photoshop.
   * Changes to Floating Pizzas in the background:
     * Only enough pizzas are created to cover the screen. How This is done:
       1. The JS gets the width of the screen, then only generates enough pizzas in a row that will be needed.
       2. The JS also grabs the height of the screen, the only generating enough pizza rows to cover the screen.
       * NOW ISSUE: Should the screen size (Width & Height) change, the number of background pizza elements will always stay the same

4. Optimized CSS by inlining only the Critical styles, and asyncing the stylesheet (Ensuring only 1 css file is needed)
    * Found the idea and code at [GO-CSS] page.
      * It was altered to fit my needs
      * This can also be used to load large images / videos that are below the fold after the entire page has loaded.
    * By using JS to load the required CSS file after the page had loaded, allows the above the fold content to load first.

5. All HTML, CSS and JavaScript files have been Minified
    * To minify the HTML I used [Minify-Code]. A  great minification tool website, offer minifcation for a web dev files
    * To minify my CSS and JavaScript in installed an extension to my text editor (Brackets) called [Brackets-Minifier].
       * This minifier created '.min.js' / '.min.css' versions of all my CSS & Javascript files which would then need to be reorganized into my 'dist' folder (or 'Distribution' Folder)



## Creating Distribution Ready Code From Your Source Code

Once you've tweeked your source code to your liking, its  time to minify your HTML, CSS and JS. Also lets not forgot about optimizing your images as well! Don't just minify your source code files! This is very important to leave your source code files in form that is easily readable and edited, should they require it in the future.

The best way to produce your distribution ready site is to use a tool like gulp or grunt which automates this process. The amount of time saved compared to the amount time needed to learn gulp or grunt is exponecially huge!

Pick which ever tool you find works best for you, but for my project, Gulp is used.

### Setting up Gulp.
As I develope on a Windows machine, these instructions are for windows users, but for the  most part I believe they should work on Mac's as well as I use the Git's Bash command line

1. Install npm on your machine
    * The simplest way of doing this is installing [Node JS]

2. Install Gulp Globally - _using command line_
    * Make sure to include the '-g' flag. This tells npm to install it globally.
    ```sh
    $ npm install gulp -g
    ```

3. Run npm install program - _using command line_
  * As you have already downloaded my project, you have my **package.json** file, which has a list of all the dependencies and devdependencies needed for the project. By running 'npm install', your tell npm to run it's 'install' package on all the dependencies & devdependencies located within the package.json file
  * This is quicker than installing each gulp package required seperately
    ```sh
    $ npm install
    ```

4. Create distribution files
  * Run the 'dist' function. This will create the distribution version of your site within the 'dist' folder.
  ```sh
  $ gulp dist
  ```
  * You must run 'dist' before trying to 'serve' your site. As if you don't run 'dist' they'll be nothing within the 'dist' folder for your 'serve' to create a server for

5. Run your local server
  * Using 'gulp serve' you can launch the website. **Serve** will watch to see if any changes are made to the source files, create the distribution version of those file, than update the browser for you.
  ```sh
  $ gulp serve
  ```
  * Should you like to make any changes to the site and make it your own, just start editing the file within the 'src' folder, **Serve** will handle the rest.




## The TO-DO List

1. Make a hamberger mobile menu
    * Not part of the project guidelines but it's good practice!

[Udacity's Original P4]: <https://github.com/udacity/frontend-nanodegree-mobile-portfolio> "Udacity's FrontEnd Mobile Portfolio P4 Source Code"
[Here]: <http://ecdusty.github.io/> "ecDusty's Live Mobile Portfolio"
[GO-CSS]: <https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery> "Google's Optimized CSS Delivery"
[Ian]: <http://ianlunn.co.uk/> "Ian Lunn's Website Portfolio"
[Minify-Code]: <http://minifycode.com/html-minifier/> "Minifycode.com - A great minication resource"
[Brackets-Minifier]: <https://github.com/abagshaw/brackets-minifier> "Brackets Minifier by Andrew Bagshaw"
[GitHub Pages]: <https://pages.github.com/> "GitHub hosting solution GitHub Pages"
[Node JS]: <https://nodejs.org/en/> "Node.JS's main page"
