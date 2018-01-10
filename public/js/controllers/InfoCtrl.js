angular.module('InfoCtrl', []).controller('InfoController', function ($scope, Nerd) {

    angular.element(document).ready(function () {
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15, // Creates a dropdown of 15 years to control year,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: false // Close upon selecting a date,
        });

        $(document).ready(function () {
            $('select').material_select();
        });
    });

    $scope.choices = [{id: 'choice1'}];

    $scope.addNew = function () {
        var newItemNo = $scope.choices.length + 1;
        $scope.choices.push({'id': 'choice' + newItemNo});
    };

    $scope.remove = function () {
        var lastItem = $scope.choices.length - 1;
        $scope.choices.splice(lastItem);
    };

});