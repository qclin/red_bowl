angular.module('redbowl')
.controller('newEntryCtrl', ['$http','$scope', '$state', 'contestService', '$stateParams', 'FileUploader','Auth', function($http, $scope, $state, contestService, $stateParams, FileUploader, Auth){


  var contest_id = $stateParams.contest_id; 
  var current_userID = Auth._currentUser.id;
  var csrfToken = angular.element('meta[name=csrf-token]').attr('content');
  console.log("cookie csrf token : ", csrfToken); 

  $scope.submitNewEntry = function(){
    // $('#modalNewEntry').closeModal(); 
    // sending user & contest id along with entry model
    $scope.entry.user_id = current_userID; 
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

  $scope.uploader = new FileUploader({
    url: '/entries/new', 
    headers:{
      'X-CSRF-Token': csrfToken
    }
  }).onSuccess function(response, status, headers) {
    console.log("uploader no conflicts yet: ", response); 
  }).onError function(response, status, headers) {
    console.log("uploader failed: ", response); 
  });

  // $scope.uploadFile = function(files){
  //   var fd = new FormData(); 
  //   //Take the first selected file

  //   if(files[0].type.match('image.*')){
  //     fd.append("image", files[0]);
  //     $http.post('/photoUpload', fd, {
  //       withCredentials: true,
  //       headers:{'Content-Type': undefined},
  //       // undefined trigger browser to fill in needed details
  //       transformRequest: angular.identity
  //     }).success(function(url){
  //       console.log('uploaded', url); 
  //       $scope.entry.photo = url; 
  //     }).error(function(err){
  //       alert('error w/ photo upload in contestCtrl ' + err); 
  //     });

    
    }else{
      alert('not an image file'); 
    }
  };

}]); 