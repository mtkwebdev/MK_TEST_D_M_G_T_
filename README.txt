To Do: 
[x] Bonus: Include build tools/packages to test JavaScript and compile your SCSS into CSS.
[x] Cover the JavaScript functions in step 1 you have written with unit tests.
[x] Examiner Instructions task 1 
[] Examiner Instructions task 4 
[] Examiner Instructions task 2 
[] Examiner Instructions task 3 




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