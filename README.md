# MongoDB Aggregation Pipeline Silent Failure

This repository demonstrates a subtle bug in MongoDB aggregation pipelines where a `$lookup` stage fails silently if no matching documents are found.  The pipeline executes without throwing any error, but the results are unexpectedly empty, making debugging difficult.

The `bug.js` file contains the problematic code, while `bugSolution.js` provides a corrected version.

## Bug Description

The provided aggregation pipeline uses `$lookup` to join collections. If the `localField` specified in the `$lookup` stage does not find any corresponding documents in the foreign collection, the pipeline doesn't return an error. It proceeds to the next stage, resulting in empty arrays in the final output.

## Solution

The solution involves adding a `$match` stage after the `$lookup` and `$unwind` stages to filter out documents where the lookup did not find any results, effectively dealing with the empty arrays caused by the failed lookup.  The solution also demonstrates a technique using $size in order to make sure there is at least 1 result for the lookup.