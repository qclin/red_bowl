angular.module('redbowl')
.factory('contestService', ['$http', '$q', '$rootScope', 'Auth', function($http, $q, $rootScope, Auth){

  var contest; 
  var contests;
  function getContest(contest_id){
    return $q(function(resolve, reject){
      //return one contest with all of the entries 
      if (typeof contest_id === 'undefined') contest_id ="latest"; 
      $http.get('/contests/'+contest_id).then(function(data){
        if(data.status !== 200){
          contest = "not found"
          resolve(contest); 
        }else{
          contest = data.data
          resolve(contest);
        }
      }).catch(function(err){
        console.log('contestService had trouble loading contest: ' + err.error); 
        reject(err); 
      });
    });
  }

  function editContest(contest){
    console.log('editContest ', contest.id); 
    // verifying if admin is login, for housekeeping contest info 
    if(Auth.currentUser().email == 'admin@gameofbowls.com'){

      $http.post('/contests/'+contest.id, contest).success(function(result, status){
        if(status > 200){
          console.log('contest edit failed '+ result); 
        }else{
          console.log('contest edit success');
        }
      }).error(function(err){
        console.log('contest update failed '+ err.error);
      });
    } 
  }
  function getAllContests(){
    //return all the contests with/info [eventual top 3 most voted entries]
    if(contests){
      return $q.when(contests);
    }else{
      return $q(function(resolve, reject){ 
        $http.get('/contests/').then(function(data){
          if(data.status !== 200){
            contests = "not available";
          }else{
            contests = data.data;
            resolve(contests);
          }
        }).catch(function(err){
          console.log('contestService has trouble loading all contest: '+ err.error);
            reject(err);
        }); 
      });
    }
  }

  return{
    getContest: getContest,
    editContest: editContest,
    getAllContests: getAllContests
  }



}]);