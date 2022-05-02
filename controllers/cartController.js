const catchAsync = require('../utils/catchAsync');
// const AppError = require('../utils/appError');
const Item = require('../models/itemModel');
// const factory = require('./handlerFactory');

exports.addToCart = catchAsync(async (req, res, next) => {
  const slug = req.params.item;
  await Item.findOne({ slug: slug }, function(err, p) {
    if (err) console.log(err);
    if (typeof req.session.cart === 'undefined') {
      req.session.cart = [];
      req.session.total = 0;

      req.session.cart.push({
        slug: slug,
        name: p.name,
        qty: 1,
        // price: parseFloat(p.price).toFixed(2),
        price: p.price,
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
          cart[i].qty++;
          cart[i].price += p.price;
          newItem = false;
          break;
        }
      }
      if (newItem) {
        cart.push({
          slug: slug,
          name: p.name,
          qty: 1,
          price: p.price,
          image: p.image
        });
      }
    }
    req.session.total += p.price;
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
