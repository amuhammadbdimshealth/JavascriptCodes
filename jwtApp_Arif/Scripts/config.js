
export default function config(stateprovider, routeProvider){
	routeProvider.otherwise('login');

	stateprovider.state('root',{url:'/root',templateUrl:'template/root__LAYOUT__',controller:'rootCtrl as vm'});
	stateprovider.state('root.complex',{abstract:false,url:'/complex',templateUrl:'template/complex__LAYOUT__',controller:'complexCtrl as vm'});

	stateprovider.state('root.home',{url:'/home',templateUrl:'template/home',controller:'homeCtrl as vm'});
	stateprovider.state('login',{url:'/login',templateUrl:'template/login',controller:'loginCtrl as vm'});
	stateprovider.state('signup',{url:'/signup',templateUrl:'template/signup',controller:'signupCtrl as vm'});
	stateprovider.state('associate',{url:'/associate',templateUrl:'template/associate',controller:'associateCtrl as vm'});
	stateprovider.state('root.chartNav',{url:'/chartNav',templateUrl:'template/chatWidget',controller:'chatWidgetCtrl as vm'});
	stateprovider.state('root.WidgetViewNav',{url:'/WidgetViewNav',templateUrl:'template/WidgetViewRights',controller:'WidgetViewRightsCtrl as vm'});
	stateprovider.state('root.userInRoles',{url:'/userInRoles',templateUrl:'template/userInRoles',controller:'userInRolesCtrl as vm'});
	stateprovider.state('root.Person',{url:'/Person',templateUrl:'template/Person',controller:'PersonCtrl as vm'});
	stateprovider.state('root.products',{url:'/products',templateUrl:'template/Products',controller:'ProductsCtrl as vm'});
	stateprovider.state('root.DemoNav',{url:'/DemoNav',templateUrl:'template/DemoWidget',controller:'DemoWidgetCtrl as vm'});
	stateprovider.state('CrudNav',{url:'/CrudNav'});
	stateprovider.state('root.complex.complexNav',{url:'/complexNav',views:{'leftWidget':{templateUrl:'template/DemoWidgetCrud',controller:'DemoWidgetCrudCtrl as vm'},'rightWidget':{templateUrl:'template/DemoWidgetCrud',controller:'DemoWidgetCrudCtrl as vm'}}});
	stateprovider.state('root.complex.complexNavCln',{url:'/complexNavCln',views:{'leftWidget':{templateUrl:'template/DemoWidgetCrudCln',controller:'DemoWidgetCrudClnCtrl as vm'},'rightWidget':{}}});
}
config.$inject=['$stateProvider', '$urlRouterProvider'];
