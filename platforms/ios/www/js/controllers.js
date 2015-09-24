  <!-- 'use strict';
  
  /* Controllers */
  /*
  var phonecatControllers = angular.module('phonecatControllers', {});
  
  phonecatControllers.controller('PhoneListCtrl', {'$scope', 'Phone',
  function($scope, Phone) {
  $scope.phones = Phone.query();
  $scope.orderProp = 'age';
  }});
  
  phonecatControllers.controller('PhoneDetailCtrl', {'$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
	$scope.mainImageUrl = phone.images{0};
  });
  
  $scope.setImage = function(imageUrl) {
	$scope.mainImageUrl = imageUrl;
  }
  }});
  */
  
  
  var DPApp = angular.module("DPApp", ["firebase"]);
  
  DPApp.controller('PhoneListCtrl', function ($scope, $firebaseArray, $rootScope) {
  
  console.log("loading phone list controller");
  var count;
  console.log("Count is"+count)
  
  // download the data into a local object
  
  
  $scope.DPMGLossary = $firebaseArray(ref);
  for(i=0;i<DPMGlossary.$ID;i++)
   console.log($scope.DPMGLossary.$ID);
  $scope.myVar = true;
  $scope.toggle = function() {
	  $scope.myVar = !$scope.myVar;
  }
  
  // download the data into a local object
  $scope.getname=function()
  {
  if(count==undefined)
  {
	  count=1;
  }
  else
$scope.getcount();
  
  $scope.getcount=function()
  {
	  count++;
	  $scope.count=count;
  }
	  

  }
  
  
  });
  
  
  DPApp.controller('FormCtrl', function ($scope, $firebaseArray) {
  
  
   console.log("loading form controller");
   
      
  if(count='undefined')
  {
	  $scope.count=1;
	
  }
  
  
  
  var refAgain=new Firebase("https://resplendent-torch-7771.firebaseio.com/CADPQuiz/0");
  
  refAgain.once("value",function(snap)
  {

  // console.log("displaying"+snap.val().Answer);
  $('pre').text(JSON.stringify(snap.val().Question, null, 2).replace(/\"/g, ""));
  //  $('ok').text(JSON.stringify(snap.val().Answer, null, 2).replace(/\"/g, ""));
  
  //if(snap.val().Answer=="TRUE"){
  //$scope.ANS="yes";
  //}
  

  
  
  })
  
  
  // console.log("formadata "+$scope.formData.answer.val());
  
  //------- radio button
  


  
  });
  
     DPApp.controller('Radio',function ($scope) {
  
  console.log("loading result radio controller");

 // $scope.cache=$cacheFactory('myCache');
 	console.log("value of i="+i);
 var i;

$scope.submitbutton=true;
  var result='';
  var marked; 
  var a;
  $scope.user={};
 
     
  if(count='undefined')
  {
	  $scope.count=1;
	
  }
	console.log("value of i="+i);
    if(i='undefined')
	{
		 $scope.i=0;  
	}
	$scope.i++;

var refAgain=new Firebase("https://resplendent-torch-7771.firebaseio.com/CADPQuiz/1");
	console.log("value of i="+$scope.i);
   var refAgain1=new Firebase("https://resplendent-torch-7771.firebaseio.com/CADPQuiz");
    	
	refAgain1.once("value", function(snapshot) {
  var questions = snapshot.exportVal();
 
 // console.log(questions["Options"]);  // 500
  console.log(questions.toString().length);
  
  
});
	
   
  refAgain.once("value",function(snap)
  {

   $('pre').text(JSON.stringify(snap.val().Question, null, 2).replace(/\"/g, ""));
 a=JSON.stringify(snap.val().Answer,null,2).replace(/\"/g, "");

  $scope.ActualAnswer=a;
  
   
	 $scope.submitForm=function() 
{
	marked=$scope.user.answer; //this is to save the answer of the code in a variable 
  	if(($scope.user.answer).toUpperCase()==$scope.ActualAnswer)
	{
		$scope.result="correct";
		$scope.submitbutton=false;
	
	}	
		else
	{
		$scope.result="Wrong";	
			$scope.submitbutton=false;
	
	}
			
   };	
   
     
	 $scope.count++;
	 	$scope.i++;

})

 
   function NextQ()
   
   
{
	 var refAgain=new Firebase("https://resplendent-torch-7771.firebaseio.com/CADPQuiz/1");
  
	  refAgain.once("value",function(snap)
	  {
	
	  // console.log("displaying"+snap.val().Answer);
	  $('pre').text(JSON.stringify(snap.val().Question, null, 2).replace(/\"/g, ""));
	  //  $('ok').text(JSON.stringify(snap.val().Answer, null, 2).replace(/\"/g, ""));
	  
	  //if(snap.val().Answer=="TRUE"){
	  //$scope.ANS="yes";
	  //}
	
	  
	  
	  })
		
	}
  
		
			
   
  
  });
  
  
  
  


