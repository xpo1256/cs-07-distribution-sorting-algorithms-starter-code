function bucketSort(items, bucketSize) {
  if (items.length === 0) {
    return items
  }

  let minValue = items[0]
  let maxValue = items[0]
  
  for (let i = 0; i < items.length; i++) {
    if (items[i] < minValue) {
      minValue = items[i]
    }else if (items[i] > maxValue){
      maxValue = items[i]
    }
  }

  bucketSize = bucketSize || 5
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
  let buckets = new Array(bucketCount).fill(null).map(() => [])

  for (let i = 0; i < items.length; i++) {
    let bucketIndex = Math.floor((items[i] - minValue) / bucketSize);
    buckets[bucketIndex].push(items[i]);
  }

  items.length = 0
  for (let i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i])  
    items.push(...buckets[i])
  }

  return items;
}

function insertionSort(items) {
  for (let i = 1; i < items.length; i++) {
    let currentValue = items[i];
    let j;
    for (j = i - 1; j >= 0 && items[j] > currentValue; j--) {
      items[j + 1] = items[j];
    }
    items[j + 1] = currentValue;
  }
  
  return items;
}

module.exports = bucketSort;
