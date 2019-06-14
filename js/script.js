/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
******************************************/

/***
Put the first field in focus.
***/
$("#name").focus();

/***
Add an "Other" option to the Job Role section. Hides the "Other" input field initially.
***/
$("#other-title").hide();

$('#title').change(function(){
  if($(this).val() == 'other'){
    $("#other-title").show();
  }
  else{
    $("#other-title").hide();
  }
})



/***
T-Shirt section.
***/

/***
Activity section.
***/


/***
Create an element to display the total activity cost.
***/

/***
Listening for changes in the activity section.
***/

/***
Update and display the total activity cost part 1.
***/

/***
Update and display the total activity cost part 2.
***/

/***
Disabling conflicting activities part 1.
***/

/***
Displaying conflicting activities part 2.
***/

/***
Payment section.
***/

/***
Form Validation and Validation Messages.
***/
