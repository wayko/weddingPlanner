(function(){


var app = angular.module("wedding",[]);


app.controller("navController", function(){
	this.navItems = navigation;
});
var navigation =[
{
name: "Home",
url: "#home",
text: "Home"
},
{
name: "Packages",
url: "#packages",
text: "Packages"
},
{
name: "About",
url: "#about",
text: "About Us"
},
{
name: "Contact",
url: "#contact",
text: "Contact Us"
},
{
name: "Why",
url: "#whyus",
text: "Why Choose Us"
}
];

app.controller("mainController", function(){
	
	this.contentItems = contentArea;
});
app.filter("unsafe", function($sce){
	return function(val){
		return $sce.trustAsHtml(val);
		
	};
	
});

var contentArea = [
{
articleTitle: "Home",
text: "<p>Lorem ipsum dolor sit amet, fames nibh congue convallis leo vitae erat, mattis arcuerat tortor penatibus risus, ultrices a nam vivamus, donec lectus justo. Ut per tristique, turpis ipsum eget diam. Sodales facilisi erat sagittis tortor porttitor sapien, erat potenti, ut risus nec. Turpis parturient sollicitudin vestibulum maecenas, mauris litora nec laoreet consectetuer consectetuer. Ipsum ipsum in arcu aliquam suspendisse urna, neque torquent praesent vivamus, quis nisl lacus accumsan erat.</p><p>In massa sed praesent non aptent, tortor sagittis mi lacus id. Morbi euismod nunc auctor sapien mauris dui, in sapien nunc a ullamcorper ut, morbi euismod nulla eos, eget volutpat. Ornare quis volutpat dui proin, aenean pede pulvinar suspendisse lectus, ultricies ligula dolor consequat. Viverra perspiciatis tristique nibh, aenean fringilla. Sit et vulputate, dolor orci augue in. Ut massa rutrum aliquet curabitur vivamus eu, mauris sed ante inceptos in conubia consequat, nam pede. Natoque hymenaeos ac at nisl, neque mi arcu sed et libero, sed vel laoreet amet arcu arcu eget, curabitur eget.</p><p>Pede in enim suscipit massa eget facilisi, sit nullam a, dui cras adipiscing porta bibendum congue lectus, rutrum facilisis gravida. Neque risus pede nulla habitasse velit, integer ullamcorper eu morbi cras sit, hymenaeos class lobortis eu massa, purus hendrerit vitae mauris mauris, quod ligula cursus. Neque convallis, varius sed. Malesuada eros vitae pede urna nascetur, ut eget vehicula mi phasellus, rhoncus velit sapien enim metus donec, ipsum erat leo orci eget mi est. Faucibus interdum massa adipiscing nec ut diam, ridiculus commodo ipsum donec adipiscing, mi semper ornare cubilia vel in integer, elit tempus ultricies mi donec in neque. Volutpat montes adipiscing posuere leo aliquet. Leo nulla facilisis ipsum at tincidunt, scelerisque et pellentesque viverra fermentum bibendum, nulla veniam, aliquet ridiculus magna integer platea, pede congue auctor maiores varius quam eget. Quam elementum et id, suspendisse sodales est blandit praesent lectus vel, sed eaque lectus a. Lectus venenatis dolor proin faucibus, mauris magna mollis, at suscipit. Aenean viverra risus, nam in donec vel dolor sed etiam. Diam volutpat integer praesent elit dignissim.</p><p >Tristique magna sed. Arcu in ut mi lorem urna, aspernatur a mi, sapien et ac. Fusce quis nunc, ligula sed, arcu nascetur dis, cras vitae urna integer, sed eu morbi. Amet turpis, vel dictumst amet, tempor dictum conubia, elementum maxime et elit mi integer blandit. Phasellus integer sapien, molestie aliquam dui, justo sed, wisi sed dolor, non dolor ac sit maecenas suspendisse in.</p>",
idName:"home"
},
{
articleTitle: "Packages",
text: "<p>Lorem ipsum dolor sit amet, fames nibh congue convallis leo vitae erat, mattis arcuerat tortor penatibus risus, ultrices a nam vivamus, donec lectus justo. Ut per tristique, turpis ipsum eget diam. Sodales facilisi erat sagittis tortor porttitor sapien, erat potenti, ut risus nec. Turpis parturient sollicitudin vestibulum maecenas, mauris litora nec laoreet consectetuer consectetuer. Ipsum ipsum in arcu aliquam suspendisse urna, neque torquent praesent vivamus, quis nisl lacus accumsan erat.</p><p>In massa sed praesent non aptent, tortor sagittis mi lacus id. Morbi euismod nunc auctor sapien mauris dui, in sapien nunc a ullamcorper ut, morbi euismod nulla eos, eget volutpat. Ornare quis volutpat dui proin, aenean pede pulvinar suspendisse lectus, ultricies ligula dolor consequat. Viverra perspiciatis tristique nibh, aenean fringilla. Sit et vulputate, dolor orci augue in. Ut massa rutrum aliquet curabitur vivamus eu, mauris sed ante inceptos in conubia consequat, nam pede. Natoque hymenaeos ac at nisl, neque mi arcu sed et libero, sed vel laoreet amet arcu arcu eget, curabitur eget.</p><p>Pede in enim suscipit massa eget facilisi, sit nullam a, dui cras adipiscing porta bibendum congue lectus, rutrum facilisis gravida. Neque risus pede nulla habitasse velit, integer ullamcorper eu morbi cras sit, hymenaeos class lobortis eu massa, purus hendrerit vitae mauris mauris, quod ligula cursus. Neque convallis, varius sed. Malesuada eros vitae pede urna nascetur, ut eget vehicula mi phasellus, rhoncus velit sapien enim metus donec, ipsum erat leo orci eget mi est. Faucibus interdum massa adipiscing nec ut diam, ridiculus commodo ipsum donec adipiscing, mi semper ornare cubilia vel in integer, elit tempus ultricies mi donec in neque. Volutpat montes adipiscing posuere leo aliquet. Leo nulla facilisis ipsum at tincidunt, scelerisque et pellentesque viverra fermentum bibendum, nulla veniam, aliquet ridiculus magna integer platea, pede congue auctor maiores varius quam eget. Quam elementum et id, suspendisse sodales est blandit praesent lectus vel, sed eaque lectus a. Lectus venenatis dolor proin faucibus, mauris magna mollis, at suscipit. Aenean viverra risus, nam in donec vel dolor sed etiam. Diam volutpat integer praesent elit dignissim.</p><p >Tristique magna sed. Arcu in ut mi lorem urna, aspernatur a mi, sapien et ac. Fusce quis nunc, ligula sed, arcu nascetur dis, cras vitae urna integer, sed eu morbi. Amet turpis, vel dictumst amet, tempor dictum conubia, elementum maxime et elit mi integer blandit. Phasellus integer sapien, molestie aliquam dui, justo sed, wisi sed dolor, non dolor ac sit maecenas suspendisse in.</p>",
idName:"packages"
},
{
articleTitle: "About Us",
text: "<p>Lorem ipsum dolor sit amet, fames nibh congue convallis leo vitae erat, mattis arcuerat tortor penatibus risus, ultrices a nam vivamus, donec lectus justo. Ut per tristique, turpis ipsum eget diam. Sodales facilisi erat sagittis tortor porttitor sapien, erat potenti, ut risus nec. Turpis parturient sollicitudin vestibulum maecenas, mauris litora nec laoreet consectetuer consectetuer. Ipsum ipsum in arcu aliquam suspendisse urna, neque torquent praesent vivamus, quis nisl lacus accumsan erat.</p><p>In massa sed praesent non aptent, tortor sagittis mi lacus id. Morbi euismod nunc auctor sapien mauris dui, in sapien nunc a ullamcorper ut, morbi euismod nulla eos, eget volutpat. Ornare quis volutpat dui proin, aenean pede pulvinar suspendisse lectus, ultricies ligula dolor consequat. Viverra perspiciatis tristique nibh, aenean fringilla. Sit et vulputate, dolor orci augue in. Ut massa rutrum aliquet curabitur vivamus eu, mauris sed ante inceptos in conubia consequat, nam pede. Natoque hymenaeos ac at nisl, neque mi arcu sed et libero, sed vel laoreet amet arcu arcu eget, curabitur eget.</p><p>Pede in enim suscipit massa eget facilisi, sit nullam a, dui cras adipiscing porta bibendum congue lectus, rutrum facilisis gravida. Neque risus pede nulla habitasse velit, integer ullamcorper eu morbi cras sit, hymenaeos class lobortis eu massa, purus hendrerit vitae mauris mauris, quod ligula cursus. Neque convallis, varius sed. Malesuada eros vitae pede urna nascetur, ut eget vehicula mi phasellus, rhoncus velit sapien enim metus donec, ipsum erat leo orci eget mi est. Faucibus interdum massa adipiscing nec ut diam, ridiculus commodo ipsum donec adipiscing, mi semper ornare cubilia vel in integer, elit tempus ultricies mi donec in neque. Volutpat montes adipiscing posuere leo aliquet. Leo nulla facilisis ipsum at tincidunt, scelerisque et pellentesque viverra fermentum bibendum, nulla veniam, aliquet ridiculus magna integer platea, pede congue auctor maiores varius quam eget. Quam elementum et id, suspendisse sodales est blandit praesent lectus vel, sed eaque lectus a. Lectus venenatis dolor proin faucibus, mauris magna mollis, at suscipit. Aenean viverra risus, nam in donec vel dolor sed etiam. Diam volutpat integer praesent elit dignissim.</p><p >Tristique magna sed. Arcu in ut mi lorem urna, aspernatur a mi, sapien et ac. Fusce quis nunc, ligula sed, arcu nascetur dis, cras vitae urna integer, sed eu morbi. Amet turpis, vel dictumst amet, tempor dictum conubia, elementum maxime et elit mi integer blandit. Phasellus integer sapien, molestie aliquam dui, justo sed, wisi sed dolor, non dolor ac sit maecenas suspendisse in.</p>",
idName:"about"
},
{
articleTitle: "Contact Us",
text: "<p>Lorem ipsum dolor sit amet, fames nibh congue convallis leo vitae erat, mattis arcuerat tortor penatibus risus, ultrices a nam vivamus, donec lectus justo. Ut per tristique, turpis ipsum eget diam. Sodales facilisi erat sagittis tortor porttitor sapien, erat potenti, ut risus nec. Turpis parturient sollicitudin vestibulum maecenas, mauris litora nec laoreet consectetuer consectetuer. Ipsum ipsum in arcu aliquam suspendisse urna, neque torquent praesent vivamus, quis nisl lacus accumsan erat.</p><p>In massa sed praesent non aptent, tortor sagittis mi lacus id. Morbi euismod nunc auctor sapien mauris dui, in sapien nunc a ullamcorper ut, morbi euismod nulla eos, eget volutpat. Ornare quis volutpat dui proin, aenean pede pulvinar suspendisse lectus, ultricies ligula dolor consequat. Viverra perspiciatis tristique nibh, aenean fringilla. Sit et vulputate, dolor orci augue in. Ut massa rutrum aliquet curabitur vivamus eu, mauris sed ante inceptos in conubia consequat, nam pede. Natoque hymenaeos ac at nisl, neque mi arcu sed et libero, sed vel laoreet amet arcu arcu eget, curabitur eget.</p><p>Pede in enim suscipit massa eget facilisi, sit nullam a, dui cras adipiscing porta bibendum congue lectus, rutrum facilisis gravida. Neque risus pede nulla habitasse velit, integer ullamcorper eu morbi cras sit, hymenaeos class lobortis eu massa, purus hendrerit vitae mauris mauris, quod ligula cursus. Neque convallis, varius sed. Malesuada eros vitae pede urna nascetur, ut eget vehicula mi phasellus, rhoncus velit sapien enim metus donec, ipsum erat leo orci eget mi est. Faucibus interdum massa adipiscing nec ut diam, ridiculus commodo ipsum donec adipiscing, mi semper ornare cubilia vel in integer, elit tempus ultricies mi donec in neque. Volutpat montes adipiscing posuere leo aliquet. Leo nulla facilisis ipsum at tincidunt, scelerisque et pellentesque viverra fermentum bibendum, nulla veniam, aliquet ridiculus magna integer platea, pede congue auctor maiores varius quam eget. Quam elementum et id, suspendisse sodales est blandit praesent lectus vel, sed eaque lectus a. Lectus venenatis dolor proin faucibus, mauris magna mollis, at suscipit. Aenean viverra risus, nam in donec vel dolor sed etiam. Diam volutpat integer praesent elit dignissim.</p><p >Tristique magna sed. Arcu in ut mi lorem urna, aspernatur a mi, sapien et ac. Fusce quis nunc, ligula sed, arcu nascetur dis, cras vitae urna integer, sed eu morbi. Amet turpis, vel dictumst amet, tempor dictum conubia, elementum maxime et elit mi integer blandit. Phasellus integer sapien, molestie aliquam dui, justo sed, wisi sed dolor, non dolor ac sit maecenas suspendisse in.</p>",
idName:"contact"
},
{
articleTitle: "Why Choose Us",
text: "<p>Lorem ipsum dolor sit amet, fames nibh congue convallis leo vitae erat, mattis arcuerat tortor penatibus risus, ultrices a nam vivamus, donec lectus justo. Ut per tristique, turpis ipsum eget diam. Sodales facilisi erat sagittis tortor porttitor sapien, erat potenti, ut risus nec. Turpis parturient sollicitudin vestibulum maecenas, mauris litora nec laoreet consectetuer consectetuer. Ipsum ipsum in arcu aliquam suspendisse urna, neque torquent praesent vivamus, quis nisl lacus accumsan erat.</p><p>In massa sed praesent non aptent, tortor sagittis mi lacus id. Morbi euismod nunc auctor sapien mauris dui, in sapien nunc a ullamcorper ut, morbi euismod nulla eos, eget volutpat. Ornare quis volutpat dui proin, aenean pede pulvinar suspendisse lectus, ultricies ligula dolor consequat. Viverra perspiciatis tristique nibh, aenean fringilla. Sit et vulputate, dolor orci augue in. Ut massa rutrum aliquet curabitur vivamus eu, mauris sed ante inceptos in conubia consequat, nam pede. Natoque hymenaeos ac at nisl, neque mi arcu sed et libero, sed vel laoreet amet arcu arcu eget, curabitur eget.</p><p>Pede in enim suscipit massa eget facilisi, sit nullam a, dui cras adipiscing porta bibendum congue lectus, rutrum facilisis gravida. Neque risus pede nulla habitasse velit, integer ullamcorper eu morbi cras sit, hymenaeos class lobortis eu massa, purus hendrerit vitae mauris mauris, quod ligula cursus. Neque convallis, varius sed. Malesuada eros vitae pede urna nascetur, ut eget vehicula mi phasellus, rhoncus velit sapien enim metus donec, ipsum erat leo orci eget mi est. Faucibus interdum massa adipiscing nec ut diam, ridiculus commodo ipsum donec adipiscing, mi semper ornare cubilia vel in integer, elit tempus ultricies mi donec in neque. Volutpat montes adipiscing posuere leo aliquet. Leo nulla facilisis ipsum at tincidunt, scelerisque et pellentesque viverra fermentum bibendum, nulla veniam, aliquet ridiculus magna integer platea, pede congue auctor maiores varius quam eget. Quam elementum et id, suspendisse sodales est blandit praesent lectus vel, sed eaque lectus a. Lectus venenatis dolor proin faucibus, mauris magna mollis, at suscipit. Aenean viverra risus, nam in donec vel dolor sed etiam. Diam volutpat integer praesent elit dignissim.</p><p >Tristique magna sed. Arcu in ut mi lorem urna, aspernatur a mi, sapien et ac. Fusce quis nunc, ligula sed, arcu nascetur dis, cras vitae urna integer, sed eu morbi. Amet turpis, vel dictumst amet, tempor dictum conubia, elementum maxime et elit mi integer blandit. Phasellus integer sapien, molestie aliquam dui, justo sed, wisi sed dolor, non dolor ac sit maecenas suspendisse in.</p>",
idName:"whyus"
}
];
app.controller("footerController", function(){
	
	this.footerItems = footers;
})

var footers = [
{
socialMedia: "facebook.com",
linkedTo: "weddingPlanner"
},
{
socialMedia: "twitter.com",
linkedTo: "weddingPlanner"
},
{
socialMedia: "instagram.com",
linkedTo: "weddingPlanner"
},
];
})();