import BaseCtrl from 'Scripts/Base/BaseCtrl.js';

class DemoWidgetCrudCtrl extends BaseCtrl
{
	constructor(scope, svc){
		super(scope);
		this.scope=scope;
		this.svc = svc;
		this.title='DemoWidgetCrud';
		this.list=[];
		this.departmentList = [];
		this.currentDept = {};
		this.count=1;
		
		svc.getTableData("GetAll",null).success(res=>{
		   //console.log(angular.fromJson(res));
		    this.list=angular.fromJson(res); //convert json data to list of objects
		});
		
		svc.getTableData("GetDepartments",null).success(res=>{
		   // console.log(angular.fromJson(res));
		    this.departmentList=angular.fromJson(res); //convert json data to list of objects
		});
		
	
		this.d_options={ msg:' sad sdasd asd asd asd ',
		    onClick:()=>{alert('hello');}
		    
		};
	}
	dClick(){
	    alert('i am listener of hello directive');
	}
	addUser(){
	    this.svc.getScalarValue("AddUser",{name:this.title, deptId:this.currentDept.deptId}).success(res=>{
	       console.log(res); 
	       this.list.push({name:this.title, id:res, deptId:this.currentDept.deptId, deptName:this.currentDept.deptName});
	       console.log(this.list);
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
	   user.name=this.user1.name; //to reset the userName
	   user.deptId=this.user1.deptId; //to reset the dropdown
       
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
	    this.svc.getScalarValue("UpdateUser",{id:user.id, name:user.name, deptId:user.deptId}).success(res=>{
	        console.log(res);
	        alert("Well Done");
	        user.isUpdate=false;
	        user.deptName = this.departmentList.find(x=>x.deptId==user.deptId).deptName;
	        //user.deptName = this.departmentList.find(function(x){x.deptId==user.deptId;}).deptName;
	    });
	}
	
}
DemoWidgetCrudCtrl.$inject=['$scope', 'DemoWidgetCrudSvc'];
export default DemoWidgetCrudCtrl;