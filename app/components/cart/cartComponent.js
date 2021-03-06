;(function () {
  angular.module('angularPlayground')

    .component('cartComponent', {
      controller: CartController,
      templateUrl: '/app/components/cart/cart.html'
    })

  function CartController () {
    this.cartStatus = 'Working'
    // The cart is an array of items that we are adding to from our view
    this.cart = []
    // The StoreData.js is the information we are using to populate our page
    this.store = {
      items: StoreData
    }
    // *** No Need to edit anything above this line ****

    this.name = 'My BɼokƏn Cart!'

    this.getCartCount = function () {
      // return the length of our cart
    }

    /*
    * Write a calculateCartTotal function
    * make it assesible to our view
    * this function should return the total cost
    * of each item that is in our cart
    */


    this.removeItemFromCart = function (item) {
      // Item gets passed in from our view when the user clicks the x button

      /*
      * This function should be able to remove the passed in item
      * from our cart. You will have to first identify where the passed
      * in item is in the array. Then you will need to use the correct
      * Array.method to remove 1 item ... hint: method(i, 1)
      */
    }

    this.addItemToCart = function (item) {
      // item gets passed in to this function from the view

      /*
      *Our cart demands that items being added to it must have the following properties
      *var newItem = {
      *  name:'',
      *  color:'',
      *  size: '',
      *  quantity: 1,
      *  price:'',
      *}
      *console.log the item being passed in from the view 
      *to figure out which properties from the item need to be 
      *re-maped to the newItem object. 
      *After building the newItem, add it to the cart. 
      */

    }
  }
}())
