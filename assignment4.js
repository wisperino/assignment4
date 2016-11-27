(function() {
  console.log('Keepin\'n it clean with an external script!');
  //Something was wrong with the code for the connection so I had to hardcode it.
  var $url    = 'http://www.mattbowytz.com/simple_api.json?data=all';
  $('#mainForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      url: $url,
      method: 'GET'
    }).success(function(data) {
      console.log(data);
	  var interestsArray = data.data.interests;
	  var programsArray = data.data.programming;
	  //http://stackoverflow.com/questions/31514909/jquery-ajax-how-to-loop-through-array-as-part-of-ajax-success-function
	  //var interestArray = JSON.stringify(data.data.interests)
	  var finalString = ' ';
	  //loop through the array:
	  $.each(interestsArray, function( i ) 
	    {
		//console.log(val);
		//I am too tired to figure out how to change the data to a string form so I can have the value in the function loop so just input the value straight up
		finalString =  finalString + ('<li>'+interestsArray[i]+'</li>');
		//console.log(finalString);
		});
		
      document.getElementById('interestList').innerHTML = finalString;
	  finalString = ' ';
	  
	  $.each(programsArray, function( i ) 
	    {
		//console.log(val);
		//I am too tired to figure out how to change the data to a string form so I can have the value in the function loop so just input the value straight up
		finalString =  finalString + ('<li>'+programsArray[i]+'</li>');
		//console.log(finalString);
		});
	  document.getElementById('programingList').innerHTML = finalString;
	  
	  
	  
    }).fail(function(data) 
	{
      console.log(data);
    });
  });
})();