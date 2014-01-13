jkefex.directive('jkefexdemo',function(){
	return {
		restrict:'E',
		scope:{
			cont:'='
		},
		replace:true,
		template:'<div class="2u" ng-repeat="con in cont"><article class="box box-style2"><a href="{{con.tempurl}}" class="various image image-full"><img ng-src="{{con.thumb}}" alt="" /></a>'+
					'<h6 style="font-size:0.8em;"><a href="{{con.codeurl}}" style="text-decoration:none" class="various">'+
					'{{con.title}}</a></h6>'+
					'</article></div>'
		};
});