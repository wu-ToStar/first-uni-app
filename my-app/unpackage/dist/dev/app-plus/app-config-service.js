
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/user/user","pages/personal/personal","pages/news/news","pages/friend/friend","pages/city/city","pages/follow/follow","pages/changeCity/changeCity","pages/changeInfo/changeInfo","pages/modify/modify","pages/player/player"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","navigationStyle":"custom"},"tabBar":{"color":"#7A7E83","selectedColor":"#3cc51f","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index"},{"pagePath":"pages/follow/follow"},{"pagePath":"pages/friend/friend"},{"pagePath":"pages/news/news"},{"pagePath":"pages/personal/personal"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"my-app","compilerVersion":"3.1.2","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"index"}},{"path":"/pages/user/user","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/personal/personal","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/friend/friend","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/city/city","meta":{},"window":{}},{"path":"/pages/follow/follow","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"follow"}},{"path":"/pages/changeCity/changeCity","meta":{},"window":{}},{"path":"/pages/changeInfo/changeInfo","meta":{},"window":{}},{"path":"/pages/modify/modify","meta":{},"window":{}},{"path":"/pages/player/player","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
