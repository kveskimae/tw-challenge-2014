/**
 * Created by kristjanveskimae on 29/11/14.
 */
angular.module('djoisajdoijdsApp')
  .controller('FriendsCtrl', function ($scope) {
    /*
     $scope.awesomeThings = [
     'HTML5 Boilerplate',
     'AngularJS',
     'Karma'
     ];*/


    $scope.insertedUser = '';



    $scope.addingUser = function(){
      if($scope.insertedUser !=='friend@friend.com'){
        $scope.error = true;
        $scope.friendsList.push({name: "Balbo", email: "wrongfriend@friend.com", verified: true});

      }
      else{
        $scope.succ = true;
        $scope.friendsList.push({name: "Balbo", email: "friend@friend.com", verified: true});

      }


    }


    $scope.friendsList = [
      {name: "Ivar Guy", email: "ivar@example.com", verified: true},
      {name: "Quagmire", email: "sexybeast@example.com", verified: false},
      {name: "Peter Griffin", email: "peter@example.com", verified: true}
    ];

    $scope.friendsSearch = [
      {name: 'John Rambo', email: 'john@example.com', verified: true},
      {name: 'Mary Poppins', email: 'mary@example.com', verified: true},
      {name: 'Mike Tyson', email: 'mike@example.com', verified: true},
      {name: 'Juliette Jolly', email: 'juliette@example.com', verified: true}];

    $scope.moveToFriends = function(friend) {
      // console.log(friend);
      $scope.friendsList.push(friend);
      // $scope.friendsSearch.remove(friend);
      var index = $scope.friendsSearch.indexOf(friend);
      if (index > -1) {
        $scope.friendsSearch.splice(index, 1);
      }
    };

  });
