$.searchButton.addEventListener('click', function(e) {
	var keysearch = $.textField.getValue();

	var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+keysearch+"&page=1&sort=newest&api-key=d730590d1855d4a228ee8184f59d8538:11:70307060";
	var xhr = Ti.Network.createHTTPClient({
	    onload: function(e) {
	  		var jsonObject = JSON.parse(this.responseText);

	  		var resultArray = []
	  		for ( var i=0 ; i < jsonObject.response.docs.length; i++) {
	  			    resultArray.push({
	  			    	snippet : jsonObject.response.docs[i].snippet,
	  			    	headline : jsonObject.response.docs[i].headline.main
				    });
	  		};
	  		var article = resultArray ;
	        Ti.API.debug(this.responseText);
	        Alloy.createController('list', {article : resultArray} ).getView().open();
	    },
	    onerror: function(e) {
	 // this function is called when an error occurs, including a timeout
	        Ti.API.debug(e.error);
	        alert('error');
	    },
	    timeout:5000 /* in milliseconds */
	});
	xhr.open("GET", url);
	xhr.send();	

});
$.search.open();


