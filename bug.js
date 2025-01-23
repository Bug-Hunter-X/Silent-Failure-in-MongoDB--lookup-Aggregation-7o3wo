```javascript
const pipeline = [
  {
    $match: {
      active: true,
    }
  },
  {
    $lookup: {
      from: 'products',
      localField: 'product_id',
      foreignField: '_id',
      as: 'product'
    }
  },
  {
    $unwind: '$product'
  }
];

// This aggregation pipeline will throw an error if no matching product is found.
// It will fail silently, without any error message.
const result = await collection.aggregate(pipeline).toArray();
```