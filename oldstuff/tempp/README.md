# Professional Site Using Bootstrap

Welcome! In this assignment, you will create a three-page **professional or business-related web site** using the front-end framework, [Bootstrap](https://getbootstrap.com).

## Requirements

### Minimal requirements

- Create 3 new pages of content with a consistent styles and layouts
- Use a single Bootstrap [Navbar](https://getbootstrap.com/docs/4.5/components/navbar/) component on all pages to allow visitors to browse among the 3 pages. Remove any elements in Bootstrap's example Navbar code that are not relevant to your site. The navbar title (the element within the navbar that has the class `navbar-brand`) must link to the main page of this assignment, which is the file you will make named `professional_site.html`.
- Create at least 2 different layouts using Bootstrap's responsive design '[grid system](https://getbootstrap.com/docs/4.5/layout/grid/)' features: one layout for small and extra-small devices, and another layout that is different in some way for medium-sized devices and larger. The layouts should make sense for the browser widths to which they apply.
- Use Bootstrap's [Carousel](https://getbootstrap.com/docs/4.5/components/carousel/) component, including at least 3 images cropped to the same dimensions. The source images must be as wide as Bootstrap's largest breakpoint, and no wider.
- Customize at least 3 different user interface components on each page by first applying one of Bootstrap's special CSS classes to them to give them a Bootstrap-provided style, and then overriding some features of Bootstrap's styles in your own custom CSS. These components can be [buttons](https://getbootstrap.com/docs/4.5/components/buttons/), [images](https://getbootstrap.com/docs/4.5/content/images/), [display headings](https://getbootstrap.com/docs/4.5/content/typography/#display-headings), [alerts](https://getbootstrap.com/docs/4.5/components/alerts/), [lists](https://getbootstrap.com/docs/4.5/content/typography/#lists), etc - anything for which Bootstrap provides CSS classes.

### Extra credit

Up to 20% extra credit points may be awarded for extraordinary quality of the final design, as judged subjectively by the grader and professor.

## Set up the project

### Copy existing web site files

The work you do in this assignment will be published to the same directory where your current web site currently exists. To prevent you from accidentally deleting any of your existing web site files, copy all the files from your existing web site into the main project directory for this assignment. This means copying any existing HTML, CSS, images, and other files and directories so a copy exists within this project directory. Then we will be able to upload everything in this directory to the web server and replace all existing files without worry about losing anything.

### Install Bootstrap

- Install Bootstrap. This is simply a matter of downloading a copy of the Bootstrap CSS and JS files and placing them into your project directory in css and js sub-directories, respectively. Use the compressed/minified version of the Bootstrap files.

### Create the first HTML page

- create an HTML document named `professional_site.html`
- add `link` and `script` elements to the `head` of this document eso the Bootstrap CSS and Javascript files you saved when you installed Bootstrap. These must be loaded by the browser when it loads the page.
- add a `link` to another CSS file from the `head` of this document that will hold your own custom CSS code. This custom CSS file will be named `css`/`custom.css`
- in the `body` of this HTML document, create a `div` element with the class `container`

### Create a custom CSS file

- create the file `css`/`custom.css` - this will hold your own custom CSS code.
- make sure it loads correctly in the browser when the page loads

### Make sure Bootstrap is working

- open the HTML page you made in your web browser, and make sure the bootstrap CSS and Javascript files are loading correctly and that your custom CSS file is loading correctly.

- If you don't know how to do this, or cannot get this to work, get help.

### Do the assignment

Now follow the requirements of the assignment for this HTML document, and repeat for the other 2 HTML documents.

## Submit your work

In order to submit this assignment, you must publish all modified files to the web and upload the code to GitHub.

### Upload the web page to a web server

Upload all files you have created to a web server. Your instructor will have given you instructions for how to do this.

Take note of the web address (URL) of your web page - this is the address that can be plugged into the address bar of any web browser for the web browser to load and display your web page.

### Update the settings.json file

Make sure your name, NYU Net ID, and the exact URL of your web site's home page are placed into the `settings.json` file in the appropriate places. Make sure the URL works when plugged into a web browser beforehand.

### Submit your work on GitHub

You are now ready to submit this assignment. You can do so directly from Visual Studio Code with the following steps, in the indicated order:

1. Switch to the Source Control view in Visual Studio Code - this view will show you a list of the files you have modified.
1. In the "`Message`" text field towards the top-left, enter a unique message to yourself about what you have changed and, while still with the text field selected, type `Command`-`Enter` on Mac OS X, or `Control`-`Enter` on Windows, to "commit" the changes you've made with this custom message. If you forget to hit `Command`-`Enter` after typing the message, you can instead click the "`...`" button above the message field and click the "`Commit all`" option in the menu that appears.
1. Now, click the "`...`" button above the message field and click the "`Push`" option in the menu that appears - this will upload your changes to your personal code repository on GitHub.

You have now submitted your completed assignment. Your changes are now posted to GitHub.com, where the instructor and graders can access it. Your `settings.json` file has information about who you are and where we can view your page on the web.

You can verify all this yourself manually by visiting your repository on GitHub.com and making sure the code displayed there is what you submitted.
