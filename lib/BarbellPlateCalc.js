module.exports = (function () {
  var _US = [45, 35, 25, 10, 5, 2.5];
  var _OLYMPIC_BARBELL = 45;

  return function (weight) {
    if (weight < 45) {
      throw new Error('Weight must be at least ' + _OLYMPIC_BARBELL);
    }

    var remainingWeight = (weight - _OLYMPIC_BARBELL) / 2;
    var plates = {};

    for (var i = 0; i < _US.length && remainingWeight > 0; i++) {
      var currentWeight = _US[i];
      var numPlates = Math.floor(remainingWeight / currentWeight);

      if (numPlates) {
        remainingWeight -= currentWeight * numPlates;
        plates[currentWeight] = numPlates;
      }
    }

    if (remainingWeight > 0) {
      plates['remainingWeight'] = remainingWeight;
    }

    return plates;
  }
})();
