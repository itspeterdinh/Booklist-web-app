const catchAsync = require('../utils/catchAsync');
// const AppError = require('../utils/appError');
const Item = require('../models/itemModel');
// const factory = require('./handlerFactory');

exports.addToCart = catchAsync(async (req, res, next) => {
  const slug = req.params.item;
  const { quantity } = req.query;

  await Item.findOne({ slug: slug }, function(err, p) {
    if (err) console.log(err);
    if (typeof req.session.cart === 'undefined') {
      req.session.cart = [];
      req.session.total = 0;

      req.session.cart.push({
        slug: slug,
        name: p.name,
        qty: Number(quantity),
        // price: parseFloat(p.price).toFixed(2),
        price: p.price * quantity,
        image: p.image
      });
    } else {
      // eslint-disable-next-line prefer-destructuring
      const cart = req.session.cart;
      let newItem = true;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].slug === slug) {
          // eslint-disable-next-line no-plusplus
          cart[i].qty += Number(quantity);
          cart[i].price += p.price * quantity;
          newItem = false;
          break;
        }
      }
      if (newItem) {
        cart.push({
          slug: slug,
          name: p.name,
          qty: Number(quantity),
          price: p.price * quantity,
          image: p.image
        });
      }
    }
    req.session.total += p.price * quantity;
    console.log(req.session.cart);
    // res.status(200).json({
    //   status: 'success',
    //   data: {
    //     data: req.session.cart
    //   }
    // });
    res.status(200).json({
      status: 'success'
    });
    // res.redirect('back');
  });
});

exports.getCart = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: {
      data: req.session.cart,
      total: req.session.total
    }
  });
};

// exports.updateCart = (req, res, next) => {
//   const slug = req.params.item;
//   const cart = req.session.cart;
//   const action = req.query.action;

//   for (let i = 0; i < cart.length; i++) {
//     if (cart[i].slug === slug) {
//       switch (action) {
//         case "add":
//           cart[i].qty ++;
//         case ""
//       }
//     }
//   }
// }
