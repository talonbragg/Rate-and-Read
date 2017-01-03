app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Books That I Enjoyed'; 
  $scope.promo = 'Rate +1 if You Loved It too!';
  $scope.products = [
  	{ 
    	name: 'iRobot', 
    	price: 7.99, 
    	pubdate: new Date('1950', '12', '02'), 
    	cover: 'http://t2.gstatic.com/images?q=tbn:ANd9GcRPS509nBYjhSI1R263bOi2_EzSqRiD9r4d1rNkemua2iOwuF2y',
    	likes: 0,
      dislikes:0
  	}, 
  	{ 
    	name: 'The Never Ending Story', 
    	price: 7.99, 
    	pubdate: new Date('1979', '09', '01'), 
    	cover: 'http://t1.gstatic.com/images?q=tbn:ANd9GcR__DVP6vus7j75uNdvTvEzBgPHy-yi7jacj2__sMnw3j0YfYGB',
    	likes: 0,
      dislikes: 0
  	}, 
  	{ 
    	name: 'Harry Potter & The Prisoner of Azkaban', 
    	price: 11.99, 
    	pubdate: new Date('1999', '07', '08'), 
    	cover: 'http://t2.gstatic.com/images?q=tbn:ANd9GcToBKyhPRMSM4vUtFly2e-UwOkwXS34AoZZ5nQ1XxExtH_CuplQ',
    	likes: 0,
      dislikes: 0
  	}, 
  	{ 
    	name: 'Ready Player One', 
    	price: 7.99, 
    	pubdate: new Date('2011', '08', '16'), 
    	cover: 'http://upload.wikimedia.org/wikipedia/en/a/a4/Ready_Player_One_cover.jpg',
    	likes: 0,
      dislikes: 0
  	}
  ];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1;
    };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };
}]);

