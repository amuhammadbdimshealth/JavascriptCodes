import BaseCtrl from 'Scripts/Base/BaseCtrl.js';

class DemoWidgetCrudCtrl extends BaseCtrl
{
	constructor(scope, svc){
		super(scope);
		this.svc = svc;
		this.title='DemoWidgetCrud';
		//this.list=[];
		this.count=1;
		svc.getTableData("GetAll",null).success(res=>{
		   // console.log(angular.fromJson(res));
		    this.list=angular.fromJson(res);
		});
		
	}
	addUser(){
	    this.svc.getScalarValue("AddUser",{name:this.title}).success(res=>{
	       console.log(res); 
	       this.list.push({name:this.title, id:res});
	    });
	    
	    
	}
	

	
	updateUser(user){
	    console.log(user);
	    this.updatedUser=user;
	}
	
	deleteUser(user){
	    if(confirm("Are you sure you want to delete : " + user.name)){
    	    var fx=function(x){return x.id==user.id;};
    	    this.svc.getScalarValue("DeleteUser",{id:user.id}).success(res=>{
    	       this.arrayRemove(this.list, fx); 
    	    });
	    }
	    
	}
	
	updateUserDB(){
	    console.log(this.updatedUser);
	    this.svc.getScalarValue("UpdateUser",this.updatedUser).success(res=>{
	        console.log(res);
	        alert("Well Done");
	        
	    });
	}
}
DemoWidgetCrudCtrl.$inject=['$scope', 'DemoWidgetCrudSvc'];
export default DemoWidgetCrudCtrl;