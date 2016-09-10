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

	var POIs = [Watpo, Millennium, Sheraton, Peninsula, MandarinOriental]

	POIs.forEach(function(POI){
		var url = ' "https://api.foursquare.com/v2/venues/" + POI.fourSquareID + "?client_id=VWK3IX5UASRRQTY0NC12DWUZGFJHVQOUNFQ2HW42VVC4UQ0N&client_secret=XACMVAXEIZR3PVG0ACMWSOD0ULGBE5DBMLXQDLTMSEF1LYCU&v=20160908&callback=foursquareData" ';
		$.ajax({
        url: url,
        method: 'GET',
        dataType: 'jsonp'
    	}).done(function(fourQuareData) {
        console.log(fourQuareData);
        articals = data.response.docs;
       	})
	});



    


//VierModel
/*

	var ViewModel01 = {
    	//Ko.observable is updating data change in VM to V 
    	personName: ko.observable('Bob'),
    	personAge: 123
		
   		var myObservableArray = ko.observableArray();    // Initially an empty array
		myObservableArray.push('Watpo');            // Adds the value and notifies observers

		};


	// Activate ViewModel, Search binding in map, Can creat multi ViewModels for different ELement
	ko.applyBindings(ViewModel01. document.getElementById('map'));

	//Read: myViewModel.personName()
	//Write: myViewModel.personName('Mary').personAge(50)
*/



