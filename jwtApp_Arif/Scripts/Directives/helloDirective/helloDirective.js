class helloDirective
{
	constructor(){
		this.restrict='ECA'; 
		this.templateUrl='Scripts/Directives/helloDirective/helloDirective.html';
		this.scope={
		    data:'=', options:'='
		};
		
	}
	controller($scope){
	     $scope.myClick=function(){
		        $scope.options.onClick();
		    };
		    $scope.headerList=[];
	}
	link(scope, element, attr){  //link function will trigger when the element will be rendered 
	    console.log(scope, element, attr);
	    scope.$watch('data', function(){
	        console.log(scope.data);
	        if(scope.data.length>0)
	        for(var prop in scope.data[0]){
	            if(!(prop == "$$hashKey"))
	            scope.headerList.push(prop);
	        }
	        console.log(scope.headerList);
	    });
	    
	    
	}
	static builder()	{
		return new helloDirective();
	}
}
export default helloDirective;



