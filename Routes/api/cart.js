const express = require("express");
const router = express.Router();

const CartItem = require("../../models/CartItems");

/////////////////////////////////////// get all items from cartItemsSchema to the cart //////////////////////////////////////////
/* after user went to the shopping cart */
router.get('/view/:email', async (req, res) => {

console.log('Front req  ',req.params);

  try {
    let cartItems = await CartItem.find({addedUserEmail:req.params.email});
    if(!cartItems)
      res.status(404).json({msg:'No Items Found'})
    else{
      res.status(200).json(cartItems)
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Sever Error" });
  }
});


/////////////////////////////////////////////// add item to the cartItemsSchema //////////////////////////////////////////////////
/* once user click button add to cart */
router.post('/add', async (req, res) => {

console.log('Add req body : ',req.body);

  console.log(req.body)
  try {
    let cartItem = {
      itemName:req.body.itemName,
      price:req.body.price,
      category:req.body.category,
      itemImage:req.body.itemImage,
      size:req.body.size,
      color:req.body.color,
      brand:req.body.brand,
      stockQuantity:req.body.stockQuantity,
      discount:req.body.discount,
      addedUserFirstName:req.body.addedUserFirstName,
      addedUserLastName:req.body.addedUserLastName,
      addedUserEmail:req.body.addedUserEmail,
      addedDate:req.body.addedDate,
      rating:req.body.rating,
      isApproved:req.body.isApproved,
      quantity:req.body.quantity,
      company:req.body.company,
      isSelectedItem:req.body.isSelectedItem,
      totalPrice:req.body.totalPrice
  }

  CartItem.create(cartItem ,(err)=>{
      if(err){
          return res.status(400).send({ msg: err });
      }else{
          return res.status(201).send(cartItem);
      }
  })
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Sever Error" });
  }
});


/////////////////////////////////////////// remove items from the cartItemsSchema ////////////////////////////////////////////////
/* user can remove item from shopping cart */
router.delete('/remove/:id', async (req, res) => {
  try {
    console.log("remove a item from cart");
    console.log(req.params.id);
    // rest
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Sever Error" });
  }
});

// optional
//////////////////////////////////////////// update items in the cartItemsSchema /////////////////////////////////////////////////
/* user can change the number of quantity of items in the shopping cart
if user increase or decrease the number of quantity of a item, automatically update the necessary record in the database */
router.patch('/setQuantity', async (req, res) => {
  try {
    console.log("set item quantity");
    console.log(req.body);
    // rest
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Sever Error" });
  }
});



module.exports = router;