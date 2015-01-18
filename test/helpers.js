(function (window) {
    'use strict';

  function Plan(count, done) {
    this.done = done;
    this.count = count;
  }

  Plan.prototype.ok = function (expression) {
    assert(expression);

    if (this.count === 0) {
      assert(false, 'Too many assertions called');
    } else {
      this.count--;
    }

    if (this.count === 0) {
      this.done();
    }
  };

  window.Plan = Plan;
})(window);

