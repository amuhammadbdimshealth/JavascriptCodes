import BaseCtrl from 'Scripts/Base/BaseCtrl.js';
import Raw from 'Scripts/Components/DemoWidget/Raw.js';

class DemoWidgetCtrl extends BaseCtrl
{
	constructor(scope, svc){
		super(scope);
		this.svc = svc;
		this.title='DemoWidgetbyArif';
        new Raw();
        this.aboutPrototype();
	}
	
	aboutPrototype(){
	    var test=function(){};
	    test.prototype.name='dummy name';
	    test.prototype.print=function(){
	        alert(this.name);
	    };
	    
	    var a=new test();
	    a.name='Sultan Arif mank';
	   // a.print();
	   Array.prototype.myeach=function(arif){
	       for(var i=0; i<this.length; i++){
	           arif(this[i], i);
	       }
	   };
	   
	   console.log('start');
	   [1,2,3].myeach(this.setRef());
	    console.log('end');
	}
	setRef(){
	    return this.printMyItem;
	}
	printMyItem(item, index){
	    console.log(item, index);
	}
}
DemoWidgetCtrl.$inject=['$scope', 'DemoWidgetSvc'];
export default DemoWidgetCtrl;