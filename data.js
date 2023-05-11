let brooklynMain = document.getElementById('Brooklyn');
let manhattanMain = document.getElementById('Manhattan');
let bronxMain = document.getElementById('Bronx');
let statenIslandMain = document.getElementById('statenIsland');
let queensMain = document.getElementById('Queens');

let brooklynInv = 0;
let queensInv = 0;
let manhattanInv = 0;
let bronxInv = 0;
let statenIslandInv = 0;

$.ajax({
  url: "https://data.cityofnewyork.us/resource/jr24-e7cr.json",
  type: "GET",
  data: {
    "$limit" : 5000,
    "$$app_token" : "OMlJeaRsURHi7bppIFsEqLUXo"
  }
})
.done(function(data) {

  for(let i =0; i < data.length; i++){

let entryDiv = document.createElement('div');
let consumption = parseInt(data[i].consumption_kw)+parseInt(data[i].consumption_kwh)
entryDiv.id = data[i].current_charges
entryDiv.classList.add('windows')

if (consumption < 5000) { 
	entryDiv.style.backgroundColor = `rgb(148, 198, 125)`
} // Light Green
else if(consumption < 10000) { 
	entryDiv.style.backgroundColor =`rgb(66, 99, 51)`
}// Green
else if(consumption < 20000) { 
	entryDiv.style.backgroundColor =`rgb(70, 80, 134)`
}// Blue
else if(consumption < 30000) { 
	entryDiv.style.backgroundColor =`rgb(50, 83, 255)` 
}// Dark Blue
else if(consumption < 40000) { 
	entryDiv.style.backgroundColor =`rgb(216, 87, 187)` 
}// Purple
else if(consumption < 50000) { 
	entryDiv.style.backgroundColor =`rgb(255, 255, 206)` 
}// Beige
else if(consumption < 60000) { 
	entryDiv.style.backgroundColor =`rgb(231, 208, 126)`  
}// Yellow
else if(consumption < 70000) { 
	entryDiv.style.backgroundColor =`rgb(255, 210, 50)` 
}// Dark Yellow 
else if(consumption < 80000) { 
	entryDiv.style.backgroundColor =`rgb(255, 132, 18)` 
}// Orange
else if(consumption < 90000) { 
	entryDiv.style.backgroundColor = `rgb(255, 92, 0)`
}// Dark Orange
else if(consumption < 100000) { 
	entryDiv.style.backgroundColor = `rgb(255, 89, 89)` 
}// Light Red
else if(consumption < 200000) { 
	entryDiv.style.backgroundColor =`rgb(202, 56, 56)` 
}// Red
else if(consumption < 300000) { 
	entryDiv.style.backgroundColor =`rgb(174, 0, 0)` 
}// Dark Red
else if(consumption < 600000) { 
	entryDiv.style.backgroundColor =`rgb(0, 0, 0)` 
	entryDiv.style.color =`rgb(255, 255, 255)` 
}// Black





if(data[i].revenue_month === '2023-01'){ 

    if(data[i].borough == 'BROOKLYN'){ 
      brooklynInv = parseInt(data[i].current_charges)+parseInt(data[i].other_charges);
      brooklynMain.append(entryDiv);
      entryDiv.append(brooklynInv);

	  

      // Add CSS class based on total charges
      if (brooklynInv < 5000) {
        entryDiv.classList.add('entryDiv-small');
      } else if (brooklynInv < 10000) {
        entryDiv.classList.add('entryDiv-medium');
      } else if (brooklynInv < 15000) {
        entryDiv.classList.add('entryDiv-large');
      } else {
        entryDiv.classList.add('entryDiv-xlarge');
      }
    } 
  }

  else if (data[i].borough == 'QUEENS') { 
	queensInv = parseInt(data[i].current_charges)+parseInt(data[i].other_charges);
	queensMain.append(entryDiv);
	entryDiv.append(queensInv);

	if (queensInv < 5000) {
	  entryDiv.classList.add('entryDiv-small');
	} else if (queensInv < 10000) {
	  entryDiv.classList.add('entryDiv-medium');
	} else if (queensInv < 15000) {
	  entryDiv.classList.add('entryDiv-large');
	} else {
	  entryDiv.classList.add('entryDiv-xlarge');
	} 

} else if(data[i].borough == 'MANHATTAN'){ 
	manhattanInv = parseInt(data[i].current_charges)+parseInt(data[i].other_charges);
	manhattanMain.append(entryDiv);
	entryDiv.append(manhattanInv); 

	if (manhattanInv < 5000) {
		entryDiv.classList.add('entryDiv-small');
	  } else if (manhattanInv < 10000) {
		entryDiv.classList.add('entryDiv-medium');
	  } else if (manhattanInv < 15000) {
		entryDiv.classList.add('entryDiv-large');
	  } else {
		entryDiv.classList.add('entryDiv-xlarge');
	  } 
	
	} else if(data[i].borough == 'BRONX'){ 
		bronxInv = parseInt(data[i].current_charges)+parseInt(data[i].other_charges);
		bronxMain.append(entryDiv);
		entryDiv.append(bronxInv); 

		if (bronxInv < 5000) {
			entryDiv.classList.add('entryDiv-small');
		  } else if (bronxInv < 10000) {
			entryDiv.classList.add('entryDiv-medium');
		  } else if (bronxInv < 15000) {
			entryDiv.classList.add('entryDiv-large');
		  } else {
			entryDiv.classList.add('entryDiv-xlarge'); 
		  }

	} else if(data[i].borough == 'STATEN ISLAND'){
			statenIslandInv = parseInt(data[i].current_charges)+parseInt(data[i].other_charges);
			statenIslandMain.append(entryDiv);
			entryDiv.append(statenIslandInv)
		  
			if (statenIslandInv < 5000) {
				entryDiv.classList.add('entryDiv-small');
			  } else if (statenIslandInv < 10000) {
				entryDiv.classList.add('entryDiv-medium');
			  } else if (statenIslandInv < 15000) {
				entryDiv.classList.add('entryDiv-large');
			  } else {
				entryDiv.classList.add('entryDiv-xlarge'); 
			  }
		}



  // Format total charges as currency
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const value = parseFloat(entryDiv.innerText);
  const formattedValue = formatter.format(value);
  entryDiv.innerText = formattedValue;
}



console.log(brooklynTotal)
});

let menu = document.getElementById('menu');
let bottom = document.getElementById('bottom');
let content1 = document.getElementById('Queens');
let content2 = document.getElementById("Manhattan");
let content3 = document.getElementById("Bronx");
let content4 = document.getElementById('Brooklyn');
let content5 = document.getElementById("statenIsland");

menu.addEventListener('change', function() {
  if (menu.value === 'option1') {
    content1.style.display = 'flex';
    content2.style.display = 'none';
    content3.style.display = 'none';
	content4.style.display = 'none';
	content5.style.display = 'none';

  } else if (menu.value === "option2") {
	content1.style.display = 'none';
    content2.style.display = 'flex';
    content3.style.display = 'none';
	content4.style.display = 'none';
	content5.style.display = 'none';

  } else if (menu.value === "option3") {
	content1.style.display = 'none';
    content2.style.display = 'none';
    content3.style.display = 'flex';
	content4.style.display = 'none';
	content5.style.display = 'none';
  }
  else if (menu.value === "option4") {
	content1.style.display = 'none';
    content2.style.display = 'none';
    content3.style.display = 'none';
	content4.style.display = 'flex';
	content5.style.display = 'none';
  }
  else if (menu.value === "option5") {
	content1.style.display = 'none';
    content2.style.display = 'none';
    content3.style.display = 'none';
	content4.style.display = 'none';
	content5.style.display = 'flex';
  }
});


  
// // Get all the divs with the class "hover-text"
// var hoverDivs = document.querySelectorAll('.windows');

// // Add event listeners to each div
// hoverDivs.forEach(function(div) {
//   div.addEventListener('mouseover', function(e) {
//     // Get the ID of the element
//     var id = this.id;

//     fetch("https://data.cityofnewyork.us/resource/jr24-e7cr.json")
//       .then((response) => response.json())
//       .then((data) => {
//         for (let i = 0; i < data.length; i++) {
//           if (data[i].current_charges == id) {
//             console.log(data[i].current_charges);
//             // Show the text
//             var textElement = this.getElementById('entryDiv.id');
//             textElement.innerHTML = data[i].current_charges;
//             textElement.style.display = "block";
//           }
//         }
//       });
//   });


  
