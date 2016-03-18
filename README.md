# Udacity FrontEnd P4 - MOBILE PORTFOLIO

Welcome to *Dusty's* online portfolio. This was forked from [Udacity's Original P4] and modified initially to meet the criteria. During the build process I believed it would be more realistic if the Portfolio refects the actual work that I have done. So my goal is to optimize the sites already attached to the Mob Portfolio and then add my own to the portfolio list.

I got a little carried away with the design layout.

## Hosting

The Hosting solution I used to test the distribution code of my project was GitHub Pages.

Check out the site - _[Here]_

If you'd like to follow suit, check out GitHubs' guide to [GitHub Pages]. This will give you a great place to test distribution ready code.

GitHub Pages acts like a separate repository. Once your code is ready, you simiply push it to the repository, give it about a minute or 2 to load on their end, and boom you've got a hosted website.

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

Once you've tweeked your source code to your liking, its  time to minify your HTML, CSS and JS. Don't just minify your source code files! This is very important to leave your source code files as they are.

To start, copy all files in your 'src' folder and move them to the 'dist' folder.

  * If you don't want all these copied files to be moved onto your repository as well you'll need to create a .gitignore file in the base repository folder. In the gitignore file you'll need to have the following:
```
dist/**
```
  * This will tell git to ignore all files within the dist folder, but will still sinc this folder with the repository

### Minifying your code
#### HTML
The next step from here would be to minify your HTML. Use the [Minify-Code] resource to create the minified versions of all your html code, and use your text editor to replace it within the HTML files in your 'dist' folder.

#### CSS & Javascript
There are 2 ways to minify the CSS and JavaScript. First (and more time consuming) would be to go through every file in the dist folder, copy the code into [Minify-Code]'s minifier for CSS & JS and then copy it back into the appropriate file.

A faster way, while using the Brackets Text-Editor, would be to use [Brackets-Minifier] and run 'Minify Project'. This will create a minified version of each file within the entire project (e.g: it creates 'style.min.css'). After running the program, you'll just need to delete all the original css & js files in the dist folder. While doing this, also rename the newly created minifed files (e.g: 'style.min.css' rename to -> 'style.css'). If you've successfully removed the extra '.min' from all the files, and deleted all the original none minified versions then you're good to go with the distribution of your website.


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
