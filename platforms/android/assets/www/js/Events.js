var eventsapp = angular.module("eventsapp", ["firebase"]);
	 
	   
	
      eventsapp.controller("MyControllerEvents", ["$scope", "$firebaseObject", "$firebaseArray",
        function($scope, $firebaseObject, $firebaseArray) {
			
			 var connectedRef = new Firebase("https://resplendent-torch-7771.firebaseio.com/.info/connected");
    connectedRef.on("value", function(snap) {
      if (snap.val() ===  true) {
    
       
			 var refFull = new Firebase("https://resplendent-torch-7771.firebaseio.com/Events");
			 var full=$firebaseArray(refFull);
			 $scope.events=full;
	 
		  
	  
	  }
	  else
	  {
		    navigator.notification.alert(
            'Please connect to your internet and try again to find the updated list!Sorry for the inconvinence',  // message
            alertDismissed,         // callback
            'Internet Error',            // title
            'OK'                  // buttonName
        );
	  }
	  
	  
	  
	  });
	
		}]);
