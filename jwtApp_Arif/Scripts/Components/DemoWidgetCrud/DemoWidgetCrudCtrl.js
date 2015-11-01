import BaseCtrl from 'Scripts/Base/BaseCtrl.js';

class DemoWidgetCrudCtrl extends BaseCtrl
{
	constructor(scope, svc){
		super(scope);
		this.scope=scope;
		this.svc = svc;
		this.title='DemoWidgetCrud';
		this.list=[];
		this.departmentList = [
		        {deptId:1,deptName:"EEE"}
		        ,{deptId:2,deptName:"MCE"}
		        ,{deptId:3,deptName:"CSE"}
		    ];
		this.currentDept = "---";
		this.count=1;
		
		svc.getTableData("GetAll",null).success(res=>{
		   // console.log(angular.fromJson(res));
		    this.list=angular.fromJson(res); //convert json data to list of objects
		});
		
		svc.getTableData("GetDepartments",null).success(res=>{
		   // console.log(angular.fromJson(res));
		    this.departmentList=angular.fromJson(res); //convert json data to list of objects
		});
	}
	addUser(){
	    this.svc.getScalarValue("AddUser",{name:this.title, deptId:this.currentDept}).success(res=>{
	       console.log(res); 
	       this.list.push({name:this.title, id:res, deptId:this.currentDept});
	    });
	    
	    
	}
	

	updateUser(user){
	    console.log(user);
	    user.isUpdate=true;
	    this.user1=angular.copy(user);
	    this.updatedUser=user;
	    
	}
	
	cancelUpdate(user){
	   user.isUpdate=false;
	   user.name=this.user1.name;
       
	}
	
	deleteUser(user){
	    if(confirm("Are you sure you want to delete : " + user.name)){
    	    var fx=function(x){return x.id==user.id;};
    	    this.svc.getScalarValue("DeleteUser",{id:user.id}).success(res=>{
    	       this.arrayRemove(this.list, fx); 
    	    });
	    }
	    
	}
	
	updateUserDB(user){
	    /*console.log(this.updatedUser);
	    this.svc.getScalarValue("UpdateUser",this.updatedUser).success(res=>{
	        console.log(res);
	        alert("Well Done");
	        this.updatedUser.isUpdate=false;
	    });*/
	    
	    console.log(user);
	    this.svc.getScalarValue("UpdateUser",user).success(res=>{
	        console.log(res);
	        alert("Well Done");
	        user.isUpdate=false;
	    });
	}
	
}
DemoWidgetCrudCtrl.$inject=['$scope', 'DemoWidgetCrudSvc'];
export default DemoWidgetCrudCtrl;