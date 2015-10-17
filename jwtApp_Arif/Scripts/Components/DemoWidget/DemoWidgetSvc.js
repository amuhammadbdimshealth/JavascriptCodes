import BaseSvc from 'Scripts/Base/BaseSvc.js';

class DemoWidgetSvc extends BaseSvc
{
	constructor(http){
		super(http);
		this.http= http;
	}
	static demoWidgetFactory(http)	{
		return new DemoWidgetSvc(http);
	}
}
DemoWidgetSvc.demoWidgetFactory.$inject=['$http'];
export default DemoWidgetSvc.demoWidgetFactory;