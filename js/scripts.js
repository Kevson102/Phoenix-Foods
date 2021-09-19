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

    var newOrder = new Orders(selectedPizzaName, selectedPizzaSize, CostOfSelectedPizzaSize, selectedCrust, costOfSelectedCrust, selectedToppings, costOfSelectedToppings, selectedQuantity);
    alert(newOrder);
    console.log(newOrder)
    // alert(selectedPizzaName);

    // alert(selectedPizzaSize);
    // alert(typeof(selectedPizzaSize));

    // alert(selectedCrust.text());
  })
  // $("ul#your-order").append("<li><span class ='contact'>"+ newOrder + "</span></li>");

})