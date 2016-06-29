// A simple log for the output
var csvLocation = ds.getModelFolder().path + "data/data.csv";
var log = "before: " + ds.Beer.length;

ds.Beer.all().remove();
ds.Brewery.all().remove();
// Main function
function doImport() {
  var lines = loadText(csvLocation).split("\n");
  var columns = [],
    newBeer = {},
    brewery = {};

  lines.forEach(function(oneLine) {
    columns = oneLine.split(",");

    brewery = ds.Brewery.query("name == :1", columns[3]);
    if (brewery.length < 1) {
      brewery = new ds.Brewery({
        name: columns[3],
        url: columns[4]
      });
      brewery.save();
    }
    newBeer = new ds.Beer({
      position: columns[0],
      name: columns[1],
      url: columns[2],
      brewery: brewery,
      tags: columns[5],
      tagsUrl: columns[6],
      alcohol: columns[7],
      rating: columns[8],
      score: columns[9],
      image: columns[10]
    });
    newBeer.save();
  });
}
// Call the function 
doImport();

// Log result
log += " / after: " + ds.Beer.length;