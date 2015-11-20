import BaseSvc from 'Scripts/Base/BaseSvc.js';

class DemoWidgetCrudClnSvc extends BaseSvc
{
	constructor(http){
		super(http);
		this.http= http;
	}
	static demoWidgetCrudClnFactory(http)	{
		return new DemoWidgetCrudClnSvc(http);
	}
}
DemoWidgetCrudClnSvc.demoWidgetCrudClnFactory.$inject=['$http'];
export default DemoWidgetCrudClnSvc.demoWidgetCrudClnFactory;