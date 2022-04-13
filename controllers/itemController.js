const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Item = require('../models/itemModel');
const factory = require('./handlerFactory');

// exports.getAllItems = catchAsync(async (req, res, next) => {
//   const items = await Item.find();

//   res.status(200).json({
//     status: 'success',
//     results: items.length,
//     data: {
//       items
//     }
//   });
// });
exports.getAllItems = factory.getAll(Item);

exports.getItem = catchAsync(async (req, res, next) => {
  const item = await Item.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      item
    }
  });
});

exports.createItem = catchAsync(async (req, res, next) => {
  const newItem = await Item.create(req.body);

  res.status(200).json({
    status: 'success',
    data: {
      newItem
    }
  });
});

exports.deleteItem = catchAsync(async (req, res, next) => {
  const item = await Item.findByIdAndDelete(req.params.id);
  if (!item) {
    return next(new AppError('No item found with that ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});

exports.updateItem = catchAsync(async (req, res, next) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: 'success',
    data: {
      item
    }
  });
});
