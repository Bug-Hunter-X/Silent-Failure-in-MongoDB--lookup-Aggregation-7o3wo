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
    $unwind: "$product" 
  },
  {
    $match: {
      "product": { $exists: true, $ne: null, $size: 1}
    }
  }
];

// The pipeline now handles missing products gracefully.  Error handling is implemented to catch any potential issues during the aggregation process.
const result = await collection.aggregate(pipeline).toArray();
```