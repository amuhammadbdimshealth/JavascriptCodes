import BaseSvc from 'Scripts/Base/BaseSvc.js';

class DemoWidgetCrudSvc extends BaseSvc
{
	constructor(http){
		super(http);
		this.http= http;
	}
	static demoWidgetCrudFactory(http)	{
		return new DemoWidgetCrudSvc(http);
	}
}
DemoWidgetCrudSvc.demoWidgetCrudFactory.$inject=['$http'];
export default DemoWidgetCrudSvc.demoWidgetCrudFactory;