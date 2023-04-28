
// The reference to the section in our HTML
let parentElement = document.getElementById('parent')

//This is some of the JQUERY code that will easily let use use this API. 
	$.ajax({
		url: "https://data.cityofnewyork.us/resource/jr24-e7cr.json?$query=SELECT%0A%20%20%60borough%60%2C%0A%20%20%60revenue_month%60%2C%0A%20%20%60current_charges%60%2C%0A%20%20%60consumption_kwh%60%2C%0A%20%20%60kwh_charges%60%2C%0A%20%20%60consumption_kw%60%2C%0A%20%20%60kw_charges%60%2C%0A%20%20%60other_charges%60%0AWHERE%20%60revenue_month%60%20%3D%20%222023-01%22%0AORDER%20BY%20%60revenue_month%60%20DESC%20NULL%20LAST",
		type: "GET",
		data: {
		  "$limit" : 5000,
		  "$$app_token" : "OMlJeaRsURHi7bppIFsEqLUXo"
		}
	})
	
	.done(function(data) {
		
		console.log(data[0].streetname)

		for(let i =0; i < data.length; i++){

			let newDiv = document.createElement ('div')


			let red = data[i].current_charges / 100
			let blue = data[i].consumption_kwh /300
			let green = data[i].kwh_charges / 300

	
			newDiv.innerHTML =` 
				<h4>${data[i].current_charges}</h4>
				<p>${data[i].consumption_kwh}</p>
				<p>${data[i].kwh_charges}</p>
				`
				newDiv.style.backgroundColor = `rgb(${red}, 220, ${blue})`

			parentElement.append(newDiv)

			// Use same code for desiphering color of the fill based on the key of consumption 
			if (data[i].streetname == 'Avenue') {
				newDiv.style.backgroundColor = `rgb(${red}, 220, ${blue})`
			} else if (data[i].zipcode>'10300.0') {
				newDiv.style.backgroundColor = `220, ${green}, ${blue})`
			} else {
				newDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
				}
	}});

