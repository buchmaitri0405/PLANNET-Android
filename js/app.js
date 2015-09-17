var app = angular.module("myContactApp", ['firebase']).value('FIREBASE_URL', 'https://resplendent-torch-7771.firebaseio.com/ContactForm/')
    .factory('User',function(FIREBASE_URL,$firebaseArray)
{
    return $firebaseArray(new Firebase(FIREBASE_URL));
});

angular.module('myContactApp')
    .controller('formCtrl', function ($scope, User) {
        $scope.add = function() {
            var save = User.$add({

                    Name: $scope.user.Name,
                    Email: $scope.user.Email,
                    Company:$scope.user.Company,
                    Comment:$scope.user.Comment,
                    Date:Date()

            });


            if(save) {
				document.getElementById("contact").reset();
                document.getElementById("outputDiv").innerHTML = "<strong>Hello!Thank you for connecting to Demand Planning LLC! We will get back to you shortly!</strong>  ";


            } else {
                document.getElementById("outputDiv").innerHTML="Sorry for the inconvinence.Kindly try again!";
            }
        }
        });
