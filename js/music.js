// Initialize Parse app
Parse.initialize("PWS3QPzW6irRXxaZIvIe2cKbZJqLfhTApjMLLojf", "fAkjpb6smxMFDoM5kjakbkEx0L9IKHDyL07dIqki");

// Create a new sub-class of the Parse.Object, with name "Music"
 var Music = Parse.Object.extend('Music');

// // Create a new instance of your Music class 
// var song = new Music();

// Set a property 'band' equal to a band name
// song.set('band', 'Taking Back Sunday');

// // Set a property 'website' equal to the band's website
// song.set('website', 'www.takingbacksunday.com');
    
// // Set a property 'song' equal to a song
// song.set('song', 'Make Damn Sure');

// // Save your instance of your song -- and go see it on parse.com!
// song.save(); 

// Click event when form is submitted
$('form').submit(function() {

	// Create a new instance of your Music class 
	var song = new Music();
	//var inputs = {}; 
	$('.form-group input').map(function() {
		song.set($(this).attr('id'), $(this).val()); 
	});
	// For each input element, set a property of your new instance equal to the input's value
	//var inputs = {'band' : $('#band').val(), 'website' : $('#website').val(), 'song' : $('#song').val()};

	// After setting each property, save your new instance back to your database
	//song.set(inputs); 
	song.save(); 
	
	return false
})



// Write a function to get data
var getData = function() {
	

	// Set up a new query for our Music class


	// Set a parameter for your query -- where the website property isn't missing


	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
}

// A function to build your list
var buildList = function(data) {
	// Empty out your unordered list
	
	// Loop through your data, and pass each element to the addItem function

}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function

	
	// Append li that includes text from the data item


	
	// Time pending, create a button that removes the data item on click
	
}

// Call your getData function when the page loads


