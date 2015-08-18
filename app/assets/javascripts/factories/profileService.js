angular.module('redbowl')
.factory('profileService', ['$http', '$q', '$rootScope', 'Auth', function($http, $q, $rootScope, Auth){
    
  if(Auth._currentUser !== null){
    getProfile(); 
  }

  function getProfile(user_id){
    return $q(function(resolve, reject){
      if (typeof user_id === 'undefined') user_id = Auth._currentUser.id; 
      $http.get('/users/'+user_id).then(function(data){
        if (data.status !== 200){
          profile = "not found"
          resolve(profile); 
          }else{
          profile = data.data
          resolve(profile); 
        }
      }).catch(function(err){
        console.log('profileService had trouble loading profile: ' + err.error); 
        reject(err);
      });
    });
  }

  function editProfile(profile){
    $http.post('/profile/edi', profile).success(function(data, status, header, config){
      console.log('editProfile success ', data); 
    }).error(function(data, status, header, config){
      console.log('editProfile fails ', data.error); 
    }); 
  }
  
  return{ 
    getProfile: getProfile, 
    editProfile: editProfile
  }; 

}]);
