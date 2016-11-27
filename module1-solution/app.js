(function(){
    'use strict';
    angular.module('LunchCheck',[])
    
    .controller('LunchCheckController',function($scope){
        
        $scope.lc = function(){
            
            var comma = ',';
            var str = document.getElementById("lunch-menu").value;
            var cnt = splitFunction(str,comma);
          
        if(cnt>=1 && cnt<=3)
            {
                $scope.msg = "Enjoy!";
              }
        
            else if(cnt>3)
            {
                    $scope.msg = "Too Much!";
                }
            
            else if(cnt==0)
            {
                    $scope.msg = "Please enter data first";
                }
        };
        
        function splitFunction(stringToSplit, separator){
            
            var arrayOfStrings = stringToSplit.split(separator);
             var cnt = arrayOfStrings.length;
            var n = stringToSplit.includes(",");
            var x = stringToSplit.includes(" ");
                
                if(x==true)
                {
                    return 0;   
                }
            
                if(n==true)
                     {
                         return cnt;
                     }
                
               else if(n==false && stringToSplit!="")
                    {
                        return 1;
                    }
                else
                     {
                         return 0;
                     }
        };
            
    });
})();