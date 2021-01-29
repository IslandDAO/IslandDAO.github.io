
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
                    await window.ethereum.enable();




                    // provider = await new ethers.providers.Web3Provider(window.ethereum)
                    // signer = await provider.getSigner();
                    // $scope.address = (await provider.listAccounts())[0];
                
                    // assurance = await new ethers.Contract(AssuranceAddress, AssuranceABI, signer);
                    // island    = await new ethers.Contract(IslandAddress,    IslandABI,    signer);
            
                    // let balance = await provider.getBalance($scope.address)
                    // let balanceIsland = await island.balanceOf($scope.address);
                    // let allowanceIsland = await island.allowance($scope.address, AssuranceAddress);
                    
                    // console.log(balance, balanceIsland.toString(),  allowanceIsland.toString());
            
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

async function init() {

    // let provider = new ethers.providers.InfuraProvider('ropsten');

    await window.ethereum.enable();
    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    account = (await provider.listAccounts())[0]


    provider.getBalance(account).then((balance) => {
        let etherString = ethers.utils.formatEther(balance);
        console.log("Balance: " + etherString);
    });



}

// NO IN PROD
// init();