import BaseCtrl from 'Scripts/Base/BaseCtrl.js';

class DemoWidgetCrudCtrl extends BaseCtrl
{
	constructor(scope, svc){
		super(scope);
		this.svc = svc;
		this.title='DemoWidgetCrud';
		this.list=[];
		this.count=1;
		svc.get_1("GetAll",null).success(res=>{
		    console.log(res);
		});
	}
	addUser(){
	    this.list.push({name:this.title, id:this.count++});
	}
	
	updateUser(user){
	    console.log(user);
	    this.updatedUser=user;
	}
	
	deleteUser(user){
	    var fx=function(x){return x.id==user.id;};
	    this.arrayRemove(this.list, fx);
	}
}
DemoWidgetCrudCtrl.$inject=['$scope', 'DemoWidgetCrudSvc'];
export default DemoWidgetCrudCtrl;