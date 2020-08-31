<h1 align='center'><img width='900' height='450' src='https://fanart.tv/fanart/movies/16441/moviethumb/the-beastmaster-5427fe90c9874.jpg'><br>


**<h1 align = 'center'>Movie Finder**


*<h2 align ='center'>An application for compliling a list of your favorite movies, July 1st, 2020.*


<h3 align ='center'>•<a href='#requirements'> Requirements</a> •<a href='#setup'> Setup</a> •<a href='#technologies-used'> Technologies</a> •<a href='#❤️contributors'> Contributors</a> •<a href='#known-bugs'> Bugs</a> •<a href='#protecting-your-data'> Protecting Data</a> •<a href='#cloning'> Cloning</a> •<a href='#postman-api-requests'> API</a></h3>


<h3 align='center'>An application using an API allowing the user to create lists of their favorite movies.</h3>

# **Specs**

| Spec   |    Input    |  Output | Completed |
|:----------|:-------------|:------| :-------- |
| The program should take in a movie title request | "Movie Title" | no output |    |
| The program should match the movie request with an API call | "Beastman" | "Beastman" |  |
| The program should return the movie title (and synopsis) | "Terminator"  | "Terminator" "He kills everyone"  |   
| The program should add the movie title to the user's "favorites" list | "Favorites" | "Beastmaster" | "Terminator"  |
| The program should display the user's favorites movie list | "Favorites" | "Beastmaster" | "Terminator"  |

# **REQUIREMENTS**

_[Postman](https://www.postman.com/)_

_[Visual Studio Code](https://code.visualstudio.com/)_

_[Node.js](https://nodejs.org/en/)_

# **SETUP**

## **CLONING**

* Copy the repo link as shown in the image below

![cloning](https://coding-assets.s3-us-west-2.amazonaws.com/img/clone.gif 'How to clone repo')

* Paste the link in the field provided by VsCode as thown in the image below

* You will be prompted to open the directory once you have cloned it. Select 'open'

![cloning](https://coding-assets.s3-us-west-2.amazonaws.com/img/clone-github2.gif 'Cloning from Github within VSCode')

<br>

# **PROTECTING YOUR DATA**

* Step 1: create a .gitignore file in the top level of your project directory. populate the file as shown in step 1 of the image below.

* Step 2: commit that .gitignore file (this prevents your sensitive information like your API key being shown to others). **DO NOT PROCEED UNTIL YOU DO THIS!**

![setup](https://coding-assets.s3-us-west-2.amazonaws.com/img/readme-image-3.jpg 'Set up instructions')

<br>

# **POSTMAN API REQUESTS**

## TO GET AN ITEM

* Open Postman

* Set your request to type 'GET'

* http://localhost:5000/api/items/ (for index of all)

* http://localhost:5000/api/items/id (for specific item details)

* Hit Send

## TO ADD AN ITEM

* Open Postman

* Set your request to type 'POST'

* http://localhost:5000/api/items/

* Select Body Tab

* Select Raw Radio Button

* Select JSON from dropdown

* Write your addition to the database in the following format

<br>

``{itemId: 1, itemName: 'Mark', itemDate: '8/13/2020', itemDetails: 'big''}``

* Hit Send

## TO EDIT AN ITEM

* Open Postman

* Make a GET request for the id you wish to edit

* http://localhost:5000/api/items/id

* You can select the returned item data and paste that into your request body section for editing.

* Once you have completed your edits.

* Set your request to Put

* Hit Send

## TO DELETE AN ITEM

* Open Postman

* Set your route in Postman to the id you wish to delete

* Set your request to Delete

* Hit Send

<br>

# **TECHNOLOGIES USED**

_[Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)_

_[CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)_

_[Bootstrap](https://getbootstrap.com/)_

_[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)_

_[Node.js](https://nodejs.org/en/)_

_[Jquery](https://jquery.com/)_

_[Visual Studio Code](https://code.visualstudio.com/)_

<br>

# **KNOWN BUGS**


_**No known bugs as of:** 7.2.2020_

<br>

# **INSTALL**

## **INSTALLING WITH NODE**


with the root project folder open in your code editor, execute the following in your terminal:

``cd ProjectName``

``npm install``

``npm run build``

<br>

# **❤️Contributors**

[<img src='https://coding-assets.s3-us-west-2.amazonaws.com/linked-in-images/joseph-pearce.jpeg' width='160px;'/><br /><sub><b>Joseph Pearce</b></sub>](https://www.linkedin.com/in/pjosephpearce/)<br />

[<img src='https://coding-assets.s3-us-west-2.amazonaws.com/linked-in-images/mariel-hamson.jpeg' width='160px;'/><br /><sub><b>Mariel Hamson</b></sub>](https://www.linkedin.com/in/marielhamson/)<br />

[<img src='https://coding-assets.s3-us-west-2.amazonaws.com/linked-in-images/thomas-glenn.jpeg' width='160px;'/><br /><sub><b>Thomas Glenn</b></sub>](https://www.linkedin.com/in/glennergy/)<br />

<br>

<br>

![alt text][logo]

[logo]: https://img.shields.io/bower/l/bootstrap 'MIT License'


Copyright © 2020 **_Thomas Glenn, Mariel Hamson, Joseph Pearce_**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
