(function (window) {
    'use strict';

    function TestHelpers () {
        var self = this;

        self.checkDone = function () {

        };

        self.expectNCalls = function (n, done) {
            var expected = n;

            return function () {
                expected--;
                if (expected === 0) {
                    setTimeout(function () {
                        if(expected === 0) {
                            done();
                        } else {
                            assert.fail("Expected out of range!");
                        }
                    }, 100);
                }
            };
        }
    }

    window.TestHelpers = new TestHelpers();
})(window);

