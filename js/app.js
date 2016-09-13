// Model

	var LocationPOI = function (venue, lat, lng, fourSquareID){
	this.venue = venue;
	this.location = {};
	this.location.lat = lat;
	this.location.lng = lng;
	this.fourSquareID = fourSquareID;
	};

	//Creat object first then creat the lat and lng

	var Watpo = new LocationPOI('Watpo', 13.746865, 100.494283, '4d97c94161a3a1cd6cfcbe42');
	var Millennium = new LocationPOI('Millennium', 13.746865, 100.511250, '4bc95970b6c49c7442688e91');
	var Sheraton = new LocationPOI('Sheraton', 13.729102, 100.513578, '4b0587f6f964a52022a922e3');
	var Peninsula = new LocationPOI('Peninsula', 13.723005, 100.510949, '4b0587f6f964a52030a922e3');
	var MandarinOriental = new LocationPOI('MandarinOriental', 13.723974, 100.514221, '4c16c642955976b0e31ba5f6');

	// Remenber add '' outside strings, or venue will shown as undefined in the object

	var POIs = [Watpo, Millennium, Sheraton, Peninsula, MandarinOriental];
	var POIsFourQuareData = [];
	var formatedLocations = [];

	var CLIENT_ID = 'VWK3IX5UASRRQTY0NC12DWUZGFJHVQOUNFQ2HW42VVC4UQ0N';
    var	CLIENT_SECRET = 'XACMVAXEIZR3PVG0ACMWSOD0ULGBE5DBMLXQDLTMSEF1LYCU';
    var version = '20160908';
    var base_url = "https://api.foursquare.com/v2/venues";
	POIs.forEach(function(POI){
		var venue_id = POI.fourSquareID,
			url = base_url + '/' + venue_id;

		$.ajax({
      		url: url,
      		dataType: 'json',
      		data: {
        		client_id: CLIENT_ID,
        		client_secret: CLIENT_SECRET,
        		v: version,
        		async: true
      			}
      		}).done(function(fourQuareData) {
      		   	var FourQ = {};
    			FourQ.name = fourQuareData.response.venue.name;
    			FourQ.url = fourQuareData.response.venue.shortUrl;
    			FourQ.Location = {};
    			FourQ.Location.lat = fourQuareData.response.venue.location.labeledLatLngs[0].lat;
    			FourQ.Location.lng = fourQuareData.response.venue.location.labeledLatLngs[0].lng;
				POIsFourQuareData.push(fourQuareData);
				formatedLocations.push(FourQ);
        	});
    });

    console.log(formatedLocations);

//InitMap

var initMap = function() {
  	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 13.737873, lng: 100.516890},
    	scrollwheel: true,
    	zoom: 14  	
 		});

 
		google.maps.event.addDomListener(window, "resize", function() {
 		var center = map.getCenter();
 		google.maps.event.trigger(map, "resize");
 		map.setCenter(center); 
		});

		formatedLocations.forEach(function(loca){
		var marker = new google.maps.Marker({
    		position: loca.Location,
    		animation: google.maps.Animation.DROP,
			});
		marker.setMap(map);
    });

};



/*
// VIewModel
// ViewModel is a function, not a object

var ViewModel = function(){
    	//Ko.observable is updating data change in VM to V 

    	var self = this


// Tested by console.log that can creat observableArray by pass in name of Array.
    	var BKKPOI =  ko.observableArray(formatedLocation);

    	self.SearchContent = ko.observable('');

//Ret http://stackoverflow.com/questions/29667134/knockout-search-in-observable-array    	

		self.searchResults = ko.computed(function() {
			var query = self.SearchContent;
			return POIs.filter(function(i) {
      			return i.venue.toLowerCase().indexOf(query) >= 0;
    		});
		});


	};


	// Activate ViewModel, Search binding in map, Can creat multi ViewModels for different ELement
	ko.applyBindings(ViewModel);

	//Read: myViewModel.personName()
	//Write: myViewModel.personName('Mary').personAge(50)


*/

