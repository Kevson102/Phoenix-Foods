// CONSTRUCTROR FOR ORDER PLACEMENT.
function Orders(pizzaName, pizzaSize, costOfPizzaSize, crustName, crustCost, selectedTopping, costOfSelectedTopping, numberOfPizzas){
  this.pizzaName = pizzaName;
  this.pizzaSize = pizzaSize;
  this.costOfPizzaSize = costOfPizzaSize;
  this.crustName = crustName;
  this.crustCost = crustCost;
  this.selectedTopping = selectedTopping;
  this.costOfSelectedTopping = costOfSelectedTopping;
  this.numberOfPizzas = numberOfPizzas;
}
// CONSTRUCTOR FOR DELIVERY FORM.
function Delivery(firstName, secondName, idNumber, phoneNumber){
  this.firstName = firstName;
  this.secondName = secondName;
  this.phoneNumber = phoneNumber;
  this.idNumber = idNumber;
  this.address = [];
}





// USER INTERFACE
$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();

    var selectedPizzaName = $("#pizza-type option:selected").text();
    var selectedPizzaSize = $("#size option:selected").text();
    var CostOfSelectedPizzaSize = parseInt($("#size option:selected").val());
    var selectedCrust = $("#crust option:selected").text();
    var costOfSelectedCrust = parseInt($("#crust option:selected").val());
    var selectedToppings = new Array();
    $('input[name = "topping"]:checked').each(function(){ //EDIT HERE TO DISPLAY THE NAMES OF THE CHOOSEN TOPPINGS.
      selectedToppings.push(this.text);
    })
    var costOfSelectedToppings = new Array();
    $('input[name = "topping"]:checked').each(function(){
      costOfSelectedToppings.push(this.value);
    });
    var costOfSelectedToppings = costOfSelectedToppings.map(Number);
    var selectedQuantity = parseInt($("#numberOfPizzas").val());
    var deliveryFee = 250;

    var newOrder = new Orders(selectedPizzaName, selectedPizzaSize, CostOfSelectedPizzaSize, selectedCrust, costOfSelectedCrust, selectedToppings, costOfSelectedToppings, selectedQuantity);
    alert(newOrder);
    // console.log(newOrder)
    /////////////////////////////////////////////
    const reducer = (firstValue, secondValue)=>firstValue + secondValue;
    var totalToppingPrice = costOfSelectedToppings.reduce(reducer);
    /// THE VARIABLE BELOW HAS BEEN PRESENTED AS A GLOBAL VARIABLE
    totalPizzaCharges = deliveryFee + selectedQuantity*(CostOfSelectedPizzaSize+costOfSelectedCrust+totalToppingPrice)
    alert(totalPizzaCharges)
    ////////////////////////////////////

  });
  $("#delivery").change(function(){
    if(this.checked == true){
      $("#delivery-location").show().css("display", "flex");
    }
  });
  $("#pickup").change(function(){
    if(this.checked == true){
      $("#delivery-location").hide()
    }
  });

  $("form#delivery-location").submit(function(event){
    event.preventDefault();

    var enteredFirstName = $("#first-name").val();
    var enteredSecondName = $("#last-name").text();
    var enteredIdNumber = $("#id-number").val();
    var enteredPhoneNumber = $("#phone-number").val();
    var enteredStreet = $("#street").text();
    var enteredCity = $("#city").text();
    var enteredCounty = $("#county").text();

    var selectedDeliveryLocation = new Delivery(enteredFirstName, enteredSecondName, enteredIdNumber, enteredPhoneNumber, enteredStreet, enteredCity, enteredCounty);
    alert(selectedDeliveryLocation)
    alert(enteredFirstName)
    alert(totalPizzaCharges)
    $("#your-order").html("this is your work")




    /// OUTPUT SECTION

    // $("button#checkout").submit(function(){
    //   $("#your-order"). append("this is your work")
    // })
  });
})