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
	        for(var pro in scope.data[0]){
	            scope.headerList.push(pro);
	        }
	        console.log(scope.headerList);
	    });
	    
	    var c={name:'sss', id:100};
	    for(var p in c){
	        console.log(p);
	    }
	}
	static builder()	{
		return new helloDirective();
	}
}
export default helloDirective;



