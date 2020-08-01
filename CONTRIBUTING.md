## Contributing
-------------
Contributing in lbry.org is **EASY AS HELL** <br>
So let's get started 😉: <br>

---------
### Prerequisites :
---------
- Markdown Editor [i.e Typora] / Code Editor [i.e VsCode] Or A Simple notepad Editor .
- Some Basic Knowledge in Markdown Syntax [If editing a markdown based Page]
- Some Basic knowledge in HTML Syntax [If editing an HTML based page]
--------------
### Method 1: Through GitHub
--------------
Well You can easily edit any file on github. For example if you want to edit a few words or some typos. <br>
To do that : 
- Create an [GitHub Account](https://github.com/join) 
- Navigate to the file you want to edit [i.e. swarm.md]

![swarm image](https://imgur.com/aAlvsWh.png)
- After clicking on that will open this 👇 Page.
![full swarm](https://imgur.com/wk3ehIX.png)

- Click on the edit 🖊 icon in Top Right
- A fork will be created and you can submit your changes with a [Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests)
----------
### Method 2: Cloning Locally
----------
- To clone locally you need [Git](https://git-scm.com/) . Or for easier Git management you can use [GitKraken](https://www.gitkraken.com/invite/gtG6Etur) <br>
Clone address : <br>
 `https://github.com/LBRYFoundation/lbryorg.git`
 - Open the desired file in your favourite editor
 - Edit and save the changes
 - [Commit and Push](https://help.github.com/en/github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line)
--------
### Understanding Markdown Font Matter
--------
Every MD file contains these [Font Matters](https://jekyllrb.com/docs/front-matter/) :
![Fontmatters](https://imgur.com/10QKsvw.png)

- <u>**title:**</u> Title appears as a Heading on top of every page like this 👇
![Heading](https://imgur.com/37wdP4Y.png)
- <u>**subhead:**</u> Subhead stands for Sub-heading Like this 👇
![subhead](https://imgur.com/u1TLwjp.png) 
You can use emojis which must be in `:emojiname:`format

- <u>**bg-image:**</u> You can add Customized background images for each pages . To do that upload your image in `/img` then copy the relative path and paste it here.
- <u>**layout:**</u> Layout refers to the page layouts included in `_layout` Folder. `Default` is the common layout for most pages.
- <u>**permalink:**</u> Permalink is a relative path to pages. Usually pages exist in root directory. The format is `/Pagename/` For example in Swarm page It's `/swarm/`

----------
### Libs AKA Assets
----------
All assets [Except images] are loaded from `/lib`Folder

- **_includes:** Contains header , head , nav and footer of `default.html`

- **/img** folder contains all the images used in the site

- **/lib/** :

  - <u>**bootstrap:**</u>  Contains all bootstrap ingredients 

  - <u>**css:**</u> Contains all the css used in both homepage and and article pages

  - <u>**fontawesome:**</u> Contains awesome fonts

  - <u>**fonts/oxygen:**</u> Contains "oxygenfonts" from google

  - <u>**jquery:**</u> Of course jquery script :slightly_smiling_face:

  - <u>**JS:**</u> contains all the JS scripts used in the site 

----------
### Editing an existing page
-----
Editing an existing page is as easy as breaking a wall with a Pin [Just a Joke 😉]
- <u>**Markdowns:**</u> <br>
  Most Text rich pages pull their Text contents from Markdown files located in `root directory`. To edit simply Locate the related markdown / .md file and Edit it using a text editor with [Proper Syntaxes](https://www.markdownguide.org/basic-syntax/) 

- <u>**HTML:**</u> <br> Homepage and layout > Default.html [*in ./_layouts*] can be easily edited using a Code Editor . For more    references  those codes are Well-commented.

---

###  Adding New pages

--------

Adding new pages are easy as breathing [Well in most cases :stuck_out_tongue:] . <br>

- <u>**Step 1:**</u> Create

  Create and upload a markdown file using this layout

  ```markdown
  ---
  title : Pagetitle
  subhead : Some funky and simple subheading :emoji:
  bg-image : "../img/pathtoBackGround-Image.png"
  layout : layoutname [default]
  permalink : /filename/
  ---
  Markdown based content and stylings
  blah blah blah
  blah blah blah
  The End
  ```
  
  
  


  
- <u>**Step 2:**</u> Add in `./_includes/navlinks.html`

  Scroll down to `NavLinksPart for HOMEPAGE` section which starts and ends with `<!-- NavLinksPart for HOMEPAGE -->` comment <br>
  
  add a line `<a class="nav-item nav-link" href="./asinpermalink/">PageName</a> ` <br>
  

- <u>**Step 3:**</u> Add in `./_includes/navlinks.html` 

  Scroll down to `NavLinksPart for DefaultLayoutsPages` section which starts and ends with `<!-- NavLinksPart for DefaultLayoutsPages -->` comment <br>
  
  add a line `<a class="nav-item nav-link" href="../asinpermalink/">PageName</a> ` <br>
  
  Save :beer:
  
  ![NavLinks](https://i.imgur.com/fcqeZVy.png)
  
  
  
## Remember : In `NavLinksPart for HOMEPAGE` there is one dot[./] in `<a>---href=""<a>` But in `NavLinksPart for DefaultLayoutsPages` there's TWO DOTS [../] 

So don't  copy paste same thing in two places :wink: .



----

### Adding a new layout

----

All new layouts goes into `_layouts` folder . Try to keep it's name case insensitive and easily readable.

Head to jekyll docs for more detailed explaination about  [creating layouts](https://jekyllrb.com/docs/step-by-step/04-layouts/) .

Which ever layout you create make sure **NOT TO CREATE NEW CODES THAT ARE ALREADY MADE ** in `_includes` Most importantly the **Nav bar** 

  
