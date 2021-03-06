
photoRecogApp.controller('uploadController', function uploadController($window,$scope,$rootScope,$http,Upload,$location){

	console.log('inside uploadController');
	$rootScope.isUserLoggedIn = $window.sessionStorage.isUserLoggedIn;
    $rootScope.fName = $window.sessionStorage.fName;
    $rootScope.lName = $window.sessionStorage.lName;
	$scope.isPhotoSelected = false;

	$scope.uploadFile = function(){
		$scope.isPhotoSelected = false;
		console.log('Inside uploadFile of upload controller')
		console.log($scope.myfile);
		var finalurl = '/uploadfile/' + $rootScope.studentId;
		console.log('url is : ' + finalurl);
		$scope.upload = Upload.upload({
			url: finalurl,
			data: {
				file: $scope.myfile
			}
		}).then(function (resp) {
			$location.path('/compare');
        	$location.replace();
        	console.log('successful');
		}, function (resp) {
			console.log('successful');
		}, function (evt) {
			// var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
			// console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
		});
	};

    $scope.onChange = function (files) {
          if(files[0] == undefined) return;
          $scope.fileExt = files[0].name.split(".").pop()
          $scope.myfile = files[0];
		  $scope.isPhotoSelected = true;


        }

});
