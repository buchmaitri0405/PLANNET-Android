   

	
	 var myAppMain = angular.module("myAppMain", ["firebase"]);
	 
	   
	
      myAppMain.controller("MyControllerDash", ["$scope", "$firebaseObject", "$firebaseArray",
        function($scope, $firebaseObject, $firebaseArray) {
			
	  
	 var connectedRef = new Firebase("https://resplendent-torch-7771.firebaseio.com/.info/connected");
    connectedRef.on("value", function(snap) {
      if (snap.val() === true) {
       
				
			
			 var refFull = new Firebase("https://resplendent-torch-7771.firebaseio.com/DashboardData");
			 var full=$firebaseArray(refFull);
			
			
			full.$loaded().then(function (full) {
				
					var len=0;
					
					//calculating length of Array
					angular.forEach(full, function(value, key) {
						len++;
					});
					
										
					var id=Math.floor(Math.random() * ((len-1) - 0 + 1)) + 0; //Math.floor(Math.random() * (max - min + 1)) + min;	
					
      				var q = $firebaseObject(refFull.child(id));
					
		  	 		q.$loaded().then(function() {
					$scope.quote=q.Quote;
	

					});//	/get length of the whole array, then save it upar only. then here get child ref and do random number wala
					
				});

	
      } else {
		  
		 $scope.quote="This is a test quote";
		 
		 	
		    navigator.notification.alert(
            'Please connect to your internet and try again!Sorry for the inconvinence',  // message
            alertDismissed,         // callback
            'Internet Error',            // title
            'OK'                  // buttonName
        );
	
      }
	   
	  
	  
    });
	
		}]);
