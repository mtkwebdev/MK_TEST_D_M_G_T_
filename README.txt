## Hello! I’m Mohammad Kawadri, and this is my technical test submission for DMGT. ##

#### Disclaimer ####

Instructions did not specify usage of a front-end framework, and so I thought to keep the project really simple, and just set up a simple express server using node.js, installed JEST for testing, Gulp for SCSS compilation and automation, and used HTML, CSS, JavaScript for the bulk of the submission. 

 However, 90% of all my work has been done in React and Vue, which can be demonstrated by request, (repo: https://github.com/mtkwebdev). 

## Introduction: ##
This technical test submission has been sent to me by Tashan Chong-Kan and is for the attention of The hiring manager (Tom Mcquillan). 

You can check the progress and the steps taken to finish this technical test by looking at my github commits. I do usually start a new branch, and create pull requests, although, as this test was very simple and structured, I just documented my progress.
Commit history: https://github.com/mtkwebdev/MK_TEST_D_M_G_T_/commits/master

#### Front End Tasks (2,3) ####

1. To begin, download the project from the public GitHub repository I have set up at https://github.com/mtkwebdev/MK_TEST_D_M_G_T_

2. After you have opened the file in a code editor, open up a terminal and type:
`npm i` to install the node modules, required for running this project. 

3. Please then open the package.json file, and you will see three scripts: 

--`start` - starts up the development server and compiles SCSS to CSS upon saving in any SCSS files. 

--`build` - does the same as start.

-- and `test` - which runs all the jest tests found in /src/__tests__/index.tests.js

4. run `npm run start` or `npm run develop` to spin up the server, and type http://localhost:3000/ into the browser to view the HTML and CSS project, for tasks 2 and 3.

5. Styling can be found in src/styles/styles.scss and uses the BEM convention (first time writing in BEM) of styling as requested. 
Upon making any changes and saving the styles.scss, I have set up a gulp automation process to build the scss into css. 
The build destination is in /public so that index.html can make use of it. 
reference: https://css-tricks.com/bem-101/

6. The styling has been made responsive, so that it can be viewed on a screen as small as the Iphone 4 320px x 480px.

#### Javascript tests (1,4,5,6) ####

1. For tasks 1,4,5, and 6, in a new terminal, write `npm run test` to view the tests relevant to the functions created in the brief. 

2. All the functions and data relevant for tasks 1 and 4 can be found in src/app.js

3. The functions and data are set in objects, so that they have a fixed scope, but also to allow for module export, and usage in JEST.

4. Please find the tests in src/__tests/index.test.js

5. Each test should have a description of what it is testing for, and each function and data set is imported at the top of the page.


Please see below the tasks completed, which can be cross referenced with the ___Examiner Instructions____ below. 

To Do: 
[x] Bonus: Include build tools/packages to test JavaScript and compile your SCSS into CSS.
[x] Cover the JavaScript functions in step 1 you have written with unit tests.
[x] Examiner Instructions task 1 
[x] Examiner Instructions task 4 
[x] Examiner Instructions task 2 
[x] Examiner Instructions task 3 

___Examiner Instructions____
This is a quick technical aptitude test for front end development.
There is a src folder included in this package, try to organise your work in this folder.

1.	In JavaScript, build a function that checks if a word is a palindrome (reads the same backwards as forwards, e.g. kayak, rotator, radar etc).
	if the word is a palindrome, function should return true, else, false.

2.	In HTML, build a page that holds a card which contains:
	- An image (you can use a placeholder image from: https://place-hold.it/)
	- The heading "An Introduction to the Biggest Mysteries of the Cosmos"
	- A Description "This course introduces what we know about the universe, before exploring four key mysteries that are the focus of cutting-edge research in cosmology."
	- A price
	- A lesson count on card footer
	
	(To see an example of a card: card.png)

3.	In SCSS, create styling for the card that you have built in task 2. Ideally you will use some sort of naming convention i.e. BEM or use a technical solution that prevents class name clashing.

4.	In JavaScript: given an array of objects:
	
	// code example start
	const people = [
		{
			name: "Bob",
			age: 29
		},
		{
			name: "Alice",
			age: 42,
		},
		{
			name: "Greg",
			age: 23
		},
		{
			name: "Jean",
			age: 50
		}
	];
	// code example end
	
	- 4.1	Order the people by age in decending order
	- 4.2	Order the people by name alphabetically A-Z
	- 4.3	Pull just the ages into a new array

5.	Bonus: Cover the JavaScript functions you have written with unit tests.
6.	Bonus: Include build tools/packages to test JavaScript and compile your SCSS into CSS.

If you are attempting the bonus tasks 5 & 6:
	- Feel free to use any build tools of your choice for compiling SCSS to CSS.
	- Feel free to use any testing frameworks of your choice when unit testing your work.
	- Please make "npm test" run your tests and "npm run build" build your assets.