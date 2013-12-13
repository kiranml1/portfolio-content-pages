jkefex.directive('jkefexdemo',function(){
	return {
		restrict:'E',
		scope:{
			cont:'='
		},
		replace:true,
		controller:function($scope){
			//$scope.democodeurl = "http://farm6.staticflickr.com/5472/11357325756_89c708923f_m.jpg";
		},
		template:'<div class="3u" ng-repeat="con in cont"><article class="box box-style2"><a href="{{con.tempurl}}" class="various image image-full"><img ng-src="{{con.thumb}}" alt="" /></a>'+
					'<h4><a href="{{con.codeurl}}" style="text-decoration:none" class="various">'+
					'{{con.title}}</a></h4>'+
					'<small>{{con.subtitle}}</small></article></div>'
		};
});