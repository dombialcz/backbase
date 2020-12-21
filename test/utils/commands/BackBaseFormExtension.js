module.exports = {
    isTouched: function () {
        classes = this.getAttribute("class").split(" ");

        for (var c of classes) {
            if (c === "ng-touched") {
                return true;
            }
        }

        return false;

       // return this.getAttribute("class").contains(); // waitUntil condition failed with the following reason: this.getAttribute(...).contains is not a function
    },

    isValid: function () {
        classes = this.getAttribute("class").split(" ");

        for (var c of classes) {
            if (c === "ng-valid") {
                return true;
            }
        }

        return false;
    },
};
