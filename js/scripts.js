// CONSTRUCTROR FOR ORDER PLACEMENT.
function Orders(pizza_name, pizza_size, crust, topping, numberOfPizzas){
  this.pizza_name = pizza_name;
  this.pizza_size = pizza_size;
  this.crust = crust;
  this.topping = topping;
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
    var selectedPizzaSize = parseInt($("#size").val());
    var selectedCrust = parseInt($("#crust").val());
    var selectedToppings = new Array();
    $('input[name = "topping"]:checked').each(function(){
      selectedToppings.push(this.value);
    })
    //  parseInt($(".topping").val());
    var selectedQuantity = parseInt($("#numberOfPizzas").val());

    var newOrder = new Orders(selectedPizzaName, selectedPizzaSize, selectedCrust, selectedToppings, selectedQuantity);
    alert(newOrder);
    console.log(newOrder)
    // alert(selectedPizzaName);

    // alert(selectedPizzaSize);
    // alert(typeof(selectedPizzaSize));

    // alert(selectedCrust.text());
  })
  // $("ul#your-order").append("<li><span class ='contact'>"+ newOrder + "</span></li>");

})