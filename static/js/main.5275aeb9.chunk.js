(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1068:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(8),i=a.n(l),c=(a(17),a(1)),s=a(2),o=a(4),u=a(3),m=a(5),p=(a(18),a(19),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this))).updateStints=function(e){a.setState({stints:e.target.value})},a.checkCapacity=function(){return a.state.driver.fuelCapacity>=a.state.driver.burnRate*(a.props.race.laps/a.state.stints)},a.getRaceTime=function(){for(var e=a.props.race,t=e.pitTime,r=e.laps,n=a.state.driver,l=n.zeroFuelLaptime,i=n.weightCost,c=(a.state.driver.car.fuelCapacity,a.state.stints),s=(c-1)*t,o=r*l,u=0,m=r/c,p=0;p<m;p++){u+=parseInt((m-p)*i)}return s+o+u},a.componentWillReceiveProps=function(e){a.setState({driver:e.driver})},a.state={driver:e.driver,stints:1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"msToHTime",value:function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return("00"+e).slice(-t)};return t(e/36e5|0)+" : "+t(e%36e5/6e4|0)+" : "+t(e%6e4/1e3|0)+"."+t(e%1e3,3)}},{key:"msToTime",value:function(e){var t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return("00"+e).slice(-t)};return t(e%36e5/6e4|0)+":"+t(e%6e4/1e3|0)+"."+t(e%1e3,3)}},{key:"render",value:function(){var e=this.state.driver;return n.a.createElement("div",{className:"card col-sm-12",style:{width:"18rem",borderColor:e.liveryColor}},n.a.createElement("h5",{className:"card-title"},e.driverName),n.a.createElement("div",{className:"card-body"},n.a.createElement("h6",{className:"card-title"},"Type: ",e.car.makeModel),n.a.createElement("p",null,"Fuel Use: ",e.burnRate," per lap - Maximum Fuel:"," ",e.car.fuelCapacity),n.a.createElement("p",{className:"card-title"},"Average Lap: ",this.msToTime(e.zeroFuelLaptime)),n.a.createElement("form",null,n.a.createElement("label",{htmlFor:"stops"},"How many stints?"),n.a.createElement("br",null),n.a.createElement("input",{style:{textAlign:"center",width:"70%"},type:"number",min:"1",value:this.state.stints,onChange:this.updateStints}),n.a.createElement("hr",null),n.a.createElement("button",{className:"btn btn-success"},"Calculate Result"),n.a.createElement("hr",null)),this.checkCapacity()||this.state.stints<=0?null:n.a.createElement("h6",{style:{color:"red"}},"!! Insufficient Fuel Capacity !!"),n.a.createElement("h5",null,"Estimated Time:"," ",this.state.stints>=1?this.msToHTime(this.getRaceTime()):null)))}}]),t}(n.a.Component)),d=(r.Component,{cars:[{makeModel:"BMW M6 GTLM",fuelCapacity:105},{makeModel:"Ferrari 488 GTLM",fuelCapacity:105},{makeModel:"Chevrolet Corvette GTLM",fuelCapacity:105},{makeModel:"Ford GT Endurance",fuelCapacity:105},{makeModel:"Aston Martin DB Vantage GTE",fuelCapacity:105},{makeModel:"Porsche 911 GTE",fuelCapacity:105}]}),h=a(9),v=a.n(h),f=a(10),g=a.n(f),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this))).changeLaps=function(e){a.setState({laps:e.target.value})},a.changePitTime=function(e){a.setState({pitTime:e.target.value})},a.updateRace=function(e){e.preventDefault(),a.props.onUpdateRace({laps:a.state.laps,pitTime:1e3*a.state.pitTime})},a.state={laps:e.race.laps,pitTime:e.race.pitTime/1e3},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.laps,a=e.pitTime;return n.a.createElement("form",{onSubmit:this.updateRace},n.a.createElement("label",null,"Laps"),n.a.createElement("input",{type:"number",value:t,onChange:this.changeLaps}),n.a.createElement("label",null,"AVG Pitlane Time (seconds) "),n.a.createElement("input",{type:"number",value:a,onChange:this.changePitTime}),n.a.createElement("button",null,"Update"))}}]),t}(n.a.Component),E=a(11);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={driver:a.props.driver,highFuel:0,lowFuel:a.props.driver.zeroFuelLaptime/1e3},a.handleSelectCar=function(e){a.setState({driver:Object.assign({},a.state.driver,{car:JSON.parse(e.target.value)})})},a.handleChangeLow=function(e){a.setState({lowFuel:e.target.value},a.calcWeightCost)},a.handleChangeHigh=function(e){a.setState({highFuel:e.target.value},a.calcWeightCost)},a.setCar=function(){a.props.onUpdateDriver(Object.assign({},function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach(function(t){Object(E.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},a.state.driver),{zeroFuelLaptime:1e3*a.state.lowFuel}))},a.calcWeightCost=function(){console.log("costcalc");var e,t=a.state,r=(1e3*(t.highFuel-t.lowFuel)/(e=a.state.driver.fuelCapacity,.75*e)).toFixed(3);a.setState(function(e){return{driver:Object.assign({},e.driver,{weightCost:r})}})},a.updateBurnRate=function(e){var t=e.target.value;a.setState(function(e){return{driver:Object.assign({},e.driver,{burnRate:t})}})},a.getMaxLaps=function(){var e=a.state.driver,t=e.fuelCapacity,r=e.burnRate;return Math.floor(t/r)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"card card col-sm-12"},n.a.createElement("h5",{className:"card-title"},"Enter Car Testing Data"),n.a.createElement("div",{className:"card-body"},n.a.createElement("label",null,"Select Car"),n.a.createElement("select",{style:{width:"85%"},onChange:this.handleSelectCar},this.props.roster.map(function(e,t){return n.a.createElement("option",{key:t,value:JSON.stringify(e)},e.makeModel)})),n.a.createElement("h6",null,this.state.driver.car.fuelCapacity," liters of fuel"),n.a.createElement("hr",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"card card col-sm-6"},n.a.createElement("h3",null,"Fuel Calculation"),n.a.createElement("h4",{style:{color:"blue"}},"Current Fuel Rate:"," ",(this.state.driver.weightCost/1e3).toFixed(3)," ","seconds/lap/kg"),this.state.driver.weightCost>45&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h6",{style:{color:"red"}},"This is a HIGH fuel-weight impact."),n.a.createElement("h6",{style:{color:"maroon"}},"Only accept this value if you are setting consistant laptimes")),n.a.createElement("p",null,"Enter times in seconds, (ie. 64.395)"),n.a.createElement("div",{className:"form-group",style:{width:"95%",textAlign:"center"}},n.a.createElement("label",null,"Low Fuel Laptime (Start w/ 10 liters):"),n.a.createElement("input",{type:"number",step:".001",min:"0",value:this.state.lowFuel,onChange:this.handleChangeLow})),n.a.createElement("div",{className:"form-group",style:{width:"95%",textAlign:"center"}},n.a.createElement("label",null,"High Fuel Laptime (Start w/ max fuel):"),n.a.createElement("input",{type:"number",step:".001",min:"0",value:this.state.highFuel,onChange:this.handleChangeHigh}))),n.a.createElement("div",{className:"card card col-sm-6"},n.a.createElement("h3",null,"Lap Information"),n.a.createElement("h5",null,"Current Best Laptime = ",this.state.lowFuel),n.a.createElement("div",{className:"form-group",style:{width:"95%",textAlign:"center"}},n.a.createElement("label",null,"Observed Fuel Consumption"),n.a.createElement("input",{type:"number",step:".01",value:this.state.driver.burnRate,onChange:this.updateBurnRate})),n.a.createElement("h6",null,"Max laps on full tank: ",this.getMaxLaps()))),n.a.createElement("hr",null),n.a.createElement("button",{onClick:this.setCar,href:"#",className:"btn btn-warning"},"Update Car")))}}]),t}(n.a.Component),w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).updateDriver=function(t){e.setState(function(e){return{driversReady:!0,driver:t}})},e.updateRace=function(t){e.setState({race:t})},e.showDrivers=function(){return n.a.createElement(p,{driver:e.state.driver,race:e.state.race})},e.state={driversReady:!1,driver:{fuelCapacity:105,zeroFuelLaptime:62376,driverName:"Default Driver",image:g.a.image.image(),weightCost:30,burnRate:2.35,car:{makeModel:"BMW M6 GTLM",fuelCapacity:105},liveryColor:v.a.sample(["blue","red","silver","grey","green","orange","purple"])},race:{laps:55,pitTime:22e3}},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App jumbotron"},n.a.createElement("h1",null,"Race Strategy App"),n.a.createElement(b,{race:this.state.race,onUpdateRace:this.updateRace}),n.a.createElement("div",null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},0==this.state.driversReady?n.a.createElement(C,{onUpdateDriver:this.updateDriver,roster:d.cars,driver:this.state.driver}):this.showDrivers()))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},12:function(e,t,a){e.exports=a(1068)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.5275aeb9.chunk.js.map