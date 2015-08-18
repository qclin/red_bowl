angular.module('redbowl')
  .factory('voteService', ['$q','$http','$rootScope','Auth', function($q, $http, $rootScope, Auth){
  var votes; 

  function getVotes(){
    if(votes){
      // if votes is already loaded, wrap & return in a promise 
      return $q.when(votes); 
    }else{
      // retrieve votes from server 
      return $q(function(resolve, reject){
        $http.get('/votes/').success(function(data, status){
          votes = {}; 
          if(statius > 200){
            console.log(data); 
          }else{
            data.forEach(function(e){ votes[e.entry_id] = true; });
          }
          resolve(votes); 
        }).error(function(err){
          reject(err); 
        });
      });
    }
  }

  function addVote(entry_id){
    console.log('addVote: ', entry_id); 
    votes[entry_id] = true; 
    var newVote = {
      user_id: Auth.currentUser().id, 
      entry_id: entry_id 
    }; 
    $http.post('/votes', newVote).success(function(result, status){
      if(status > 200){
        console.log('vote failed '+ result); 
      }else{
        console.log('voted success'); 
      }
    }).error(function(err){
      console.log('vote failed ' + err.error); 
    }); 
  }

  return{
    getVotes: getVotes, 
    addVote: addVote
  }


}]);