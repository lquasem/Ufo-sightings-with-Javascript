// from data.js
var tableData = data;

console.log(data)


// d3.select('tbody')

var tbody = d3.select('tbody')
// Use d3 to update each cell's text with values
data.forEach(function(ufoTable) {
    console.log(ufoTable);
    var row = tbody.append("tr");

    Object.entries(ufoTable).forEach(function([key, value]) {
        console.log(key, value);

    // Append a cell to the row for each value
    
    var cell = row.append("td");

    cell.text(value);
    });
  });

//filter dates
var ufoInfo = data;

// Select the button
var button = d3.select("#filter-btn");

//turn the button on
button.on("click", function() {

     // clears the data of the current table        
     tbody.html("");
     // stop the page from refresh
     d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    
    var inputDate = d3.select("#input-field");
    
    // Get the value property of the input element
    var inputValue = inputDate.property("value");
      
    // print value in console
    console.log(inputValue);

    // use the "field input" to filter the data by "date" only
    var filteredDate = ufoInfo.filter(dt => dt.datetime === inputValue);

    console.log(filteredDate)

    // display in the html page
    filteredDate.forEach((selection) => {
        // for each "element" create a row
        var row = tbody.append("tr");
        //below "object" becomes the new target array (element)
        Object.entries(selection).forEach(([key,value]) => {
            var cell = row.append("td");
            // adds the "value" to each row in the table
            cell.text(value);
        });
    });      
});


    
