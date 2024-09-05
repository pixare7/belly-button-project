// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    let results = metadata.filter(object => object.id==sample);
    let newresult = results[0];
    console.log(newresult);

    // Use d3 to select the panel with id of `#sample-metadata`
    let panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    for (key in newresult) {
      panel.append('h6').text(`${key.toUpperCase()}:${newresult[key]}`);

    }
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let samples = data.samples;

    // Filter the samples for the object with the desired sample number
    let results = samples.filter(object => object.id==sample);
    let newresult = results[0];
    console.log(results);

    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = newresult.otu_ids;
    let otu_labels = newresult.otu_labels;
    let sample_values = newresult.sample_values;

    // Build a Bubble Chart
    let bubbleTrace = {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        color: otu_ids,
        size: sample_values,
        colorscale: 'Earth'
      }
    };
    
    let bubbleData = [bubbleTrace];
    
    let bubbleLayout = {
      title: 'Bacteria Cultures Per Sample',
      xaxis: { title: 'OTU ID' },
      yaxis: { title: 'Number of Bacteria' },
      showlegend: false,
      height: 600,
      width: 1300
    };    

    // Render the Bubble Chart
    Plotly.newPlot('bubble', bubbleData, bubbleLayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    let topN = 10;
    let yticks = otu_ids.slice(0, topN).map(id => `OTU ${id}`).reverse();

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    let barTrace = {
      x: sample_values.slice(0, topN).reverse(),
      y: yticks,
      type: 'bar',
      orientation: 'h'
    };

    let barData = [barTrace];

    let barLayout = {
      title: 'Top 10 OTUs',
      xaxis: { title: 'Number of Bacteria' },
      yaxis: { title: 'OTU IDs' }
};
    // Render the Bar Chart
    Plotly.newPlot('bar', barData, barLayout);

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    let names = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    let dropdown = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    for (let i = 0; i < names.length; i++) {
      dropdown
        .append("option")
        .text(names[i])
        .property("value", names[i]);

    }

    // Get the first sample from the list
    let first = names[0];

    // Build charts and metadata panel with the first sample
    buildCharts(first);
    buildMetadata(first);
  });
}

// Function for event listener
function optionChanged(newSample) {

  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
