angular.module('redbowl')
.controller('newEntryCtrl', ['$http','$scope', '$state', 'contestService', '$stateParams', function($http, $scope, $state, contestService, $stateParams){

  console.log('stateParams contest_id: ', $stateParams.contest_id); 
  var contest_id = $stateParams.contest_id; 


  $scope.submitNewEntry = function(){
    // $('#modalNewEntry').closeModal(); 
    // sending user & contest id along with entry model
    $scope.entry.user_id = $scope.user.id; 
    $scope.entry.contest_id = contest_id; 
    $http.post('/entries', $scope.entry).success(function(data, status, header, config){
      console.log("image_upload success!")
      $scope.entry = {}; 
      // do we need a placeholder for image preview ? 
      // $('#imagePreview').attr('src', 'images/placeholder.png'); 
    }).error(function(data, status, header, config){
      alert("entry failed to post on client side: "+ data.error); 
    });
  }

  $scope.uploadFile = function(files){
    var fd = new FormData(); 
    //Take the first selected file

    if(files[0].type.match('image.*')){
      fd.append("image", files[0]);
      $http.post('/imageUpload', fd, {
        withCredentials: true,
        headers:{'Content-Type': undefined},
        // undefined trigger browser to fill in needed details
        transformRequest: angular.identity
      }).success(function(url){
        console.log('uplaoded', url); 
        $scope.entry.photo = url; 
      }).error(function(err){
        alert('error w/ photo upload in contestCtrl ' + err); 
      });
    }else{
      alert('not an image file'); 
    }
  };

}]); 