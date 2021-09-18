// CONSTRUCTROR FOR ORDER PLACEMENT.
function Orders(pizza_name, pizza_size, crust){
  this.pizza_name = pizza_name;
  this.pizza_size = pizza_size;
  this.crust = crust;
  this.topping = [];
}
// CONSTRUCTOR FOR DELIVERY FORM.
function Delivery(firstName, secondName, idNumber, phoneNumber){
  this.firstName = firstName;
  this.secondName = secondName;
  this.phoneNumber = phoneNumber;
  this.idNumber = idNumber;
  this.address = [];
}