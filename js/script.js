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
activity.innerHTML = "Total Activity Cost: $" + totalCost;
$(".activities").append(activity);

/***
Listening for changes in the activity section.
***/
let boxes = $("input[type='checkbox']");
boxes.click(function(event){
  let clickedInput = $(event.target);
  let checkedLabel = clickedInput.parent().text();
  /***
  Update and display the total activity cost part 1.
  Index of the dollar sign in the label text from the variable above.
  Cost of the activity that was just clicked. Turn Cost string to numbers.
  ***/
  let dollarSign = checkedLabel.indexOf("$");
  let labelCost = checkedLabel.slice(-3);
  let selectedCost = parseFloat(labelCost);
  /***
  Update and display the total activity cost part 2.
  Check if the clicked imput element is checked and add the cost of the activity to the total cost.
  ***/
  if (clickedInput.is(":checked")){
    totalCost += selectedCost;
    activity.innerHTML = "Total Activity Cost: $" + totalCost;
  }
  else {
    totalCost -= selectedCost;
    activity.innerHTML = "Total Activity Cost: $" + totalCost;
  }
  /***
  Disabling conflicting activities part 1.
  Index of em dash in checkedlabel. Index of comma in checkedLabel.
  Day and time of the activity that was clicked.
  ***/
  let emDash = checkedLabel.indexOf("—");
  let comma = checkedLabel.indexOf(",");
  let dayTime = checkedLabel.slice(emDash+2, comma);
  /***
  Displaying conflicting activities part 2.
  When activity is checked, disables conflicting activities without disabling checked activity.
  When activity is unchecked, enable conflicting activities.
  ***/
  boxes.each(function(i){
    let currentText = boxes.eq(i).parent().text();
      if (currentText.includes(dayTime) && currentText !== checkedLabel){
        if(clickedInput.is(":checked")){
          boxes.eq(i).attr("disabled", true);
          boxes.eq(i).css("color", "gainsboro");
        }
        else {
          boxes.eq(i).attr("disabled", false);
          boxes.eq(i).css("color", "gainsboro");
        }
      }
  })
});

/***
Payment section.
Hide the "Select Payment Method" option in drop down menu.
Get value of payment select element. If equal to "credit card", set show CC payment form, hide others.
Do the same with PayPal and BitCoin options.
***/
$("#payment").find("option:eq(0)").hide();
$("#credit-card").next().attr('id', 'paypal');
$("#credit-card").next().next().attr('id', 'bitcoin');
$("#payment").change(function(){
  if($(this).val() == 'credit card'){
    $("#credit-card").children().show();
    $("#paypal").children().hide();
    $("#bitcoin").children().hide();
  }
  if($(this).val() == 'paypal'){
    $("#credit-card").children().hide();
    $("#paypal").children().show();
    $("#bitcoin").children().hide();
  }
  if($(this).val() == 'bitcoin'){
    $("#credit-card").children().hide();
    $("#paypal").children().hide();
    $("#bitcoin").children().show();
  }
});

/***
Form Validation and Validation Messages.
Name Validation - cannot be blank.
Email Validation - formatted like "dave@teamtreehouse.com"
Credit Card Validation: CCN - 13-16 digit num, Zip Code - 5 digit num, CVV - 3 digit num
***/

function validate(input, regex){
  if(regex.test(input.val()) === false){
    input.addClass('error');
    input.after('<p class="invalid">Field input is invalid. Please check the field above.</p>');
    return false;
  }
  else{
    input.removeClass('error');
    $('.invalid').remove();
    return true;
  }
};

const nameR = /(?!^ +$)^.+$/;
const emailR = /\w+@\w+\.\w+/;
const ccR = /^\d{13,16}$/;
const zipR = /^\d{5}$/;
const cvvR = /^\d{3}$/;

//Activity Validation - at least one checkbox selected. Prompt appears in red text if no boxes are checked.
let promptAct = document.createElement('p');
promptAct.innerHTML = "Please select at least one activity.";
$(".activities").append(promptAct);
$(".activities p").last().css("color", "red");
$(".activities p").last().hide();

function validateAct(){
  let numChecked = 0;
  boxes.each(function(i){
    if (boxes[i].checked){
      numChecked += 1;
    }
  })
  if (numChecked == 0) {
    $(".activities p").last().show();
  }
  else{
    $(".activities p").last().hide();
  }
};

// Click event listener that validates all fields.
$("button").click((e) =>{
  let nameVal = validate($("#name"), nameR);
  let mailVal = validate($("#mail"), emailR);
  let actVal = validateAct();
  let ccVal = validate($("#cc-num"), ccR);
  let zipVal = validate($("#zip"), zipR);
  let cvvVal = validate($("#cvv"), cvvR);
  if($('#payment').val() == 'credit card'){
    if(nameVal && mailVal && actVal && ccVal && zipVal && cvvVal){
      $('form').submit();
    }
    else{
      e.preventDefault();
    }
  }
  else{
    if(nameVal && mailVal && actVal){
      $('form').submit();
    }
    else{
      e.preventDefault();
    }
  }
});
