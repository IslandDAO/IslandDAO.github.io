
var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: function($scope, $q) {
                $scope.team = TEAM;
                $scope.advisors = ADVISORS;
                $scope.memery = MEMERY;

                $scope.enable = async function() {
                    console.log("ENABLE ETHEREUM");

                    await window.ethereum.enable()
                    provider = new ethers.providers.Web3Provider(window.ethereum);
                    signer = provider.getSigner();
                
                    address = await signer.getAddress()
                
                
                    balance = await provider.getBalance(address);
                
                    console.log(ethers.utils.formatEther(balance.toString()));



                
                    assurance = await new ethers.Contract(AssuranceAddress, AssuranceABI, signer);
                    island    = await new ethers.Contract(IslandAddress,    IslandABI,    signer);
            
                    let balanceIsland = await island.balanceOf(address);
                    console.log(balanceIsland.toString());



                    // let allowanceIsland = await island.allowance(address, AssuranceAddress);
                    
            
                    // $scope.balance = ethers.utils.formatEther(balance.toString());
                    // $scope.balanceIsland = ethers.utils.formatEther(balanceIsland.toString());
                    // $scope.allowanceIsland = ethers.utils.formatEther(allowanceIsland.toString());

                    $scope.$apply();
                }
            


            }
        })
        .when('/bank', {
            templateUrl: 'pages/bank.html',
        })
        .when('/trip', {
            templateUrl: 'pages/trip.html',
        })

        .otherwise('/')
});

app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });