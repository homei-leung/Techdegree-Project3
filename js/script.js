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
T-Shirt section - initial load.
Hide the "Select Theme" option element,
update the "Color" field to read "Please select a T-shirt theme",
hide the colors in the "Color" drop down menu.
***/
$("#design").find("option:eq(0)").hide();
$("#color").prepend('<option disabled selected value="">Please select a T-shirt theme</option>');
$("#color").children().hide();

/***
T-Shirt section - theme selection.
Only appropriate colors show in "Color" drop down menu.
"Color" field updates to the first available color.
***/
$("#design").change(function(){
  if($(this).val() == 'js puns'){
    $("#color").children().hide();
    $("#color").find("option:eq(1)").show();
    $("#color").find("option:eq(2)").show();
    $("#color").find("option:eq(3)").show();
    $("#color").val('cornflowerblue');
  }
  if($(this).val() == 'heart js'){
    $("#color").children().hide();
    $("#color").find("option:eq(4)").show();
    $("#color").find("option:eq(5)").show();
    $("#color").find("option:eq(6)").show();
    $("#color").val('tomato');
  }
});

/***
Activity section.
Create an element to display the total activity cost.
Create a DOM element and store in a global variable appended to '.activity'
Create a global variable to store total activity cost initially set to 0.
***/
let activity = document.createElement('p');
let totalCost = 0;
activity.innerHTML = "Total Activity Cost: " + totalCost;
$(".activities").append(activity);

/***
Listening for changes in the activity section.
***/
$("input[type='checkbox']").click(function(event){
  let clickedInput = $(event.target);
  let checkedlabel = clickedInput.parent().text();
  /***
  Update and display the total activity cost part 1.
  Index of the dollar sign in the label text from the variable above.
  Cost of the activity that was just clicked. Turn Cost string to numbers.
  ***/
  let dollarSign = checkedlabel.indexOf("$");
  let labelCost = checkedlabel.slice(-3);
  let selectedCost = parseFloat(labelCost);
  /***
  Update and display the total activity cost part 2.
  Check if the clicked imput element is checked and add the cost of the activity to the total cost.
  ***/
  if (clickedInput.is(":checked")){
    totalCost += selectedCost;
  }
  else {
    totalCost -= selectedCost;
  }
  console.log(totalCost);
});

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
