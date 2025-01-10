// Serve the HTML page
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

// Save the grades and GWA to the Google Sheet
function saveGradesToSheet(data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const lastRow = sheet.getLastRow() + 1;

  sheet.appendRow([
    data.name,
    data.grades[0], data.units[0],
    data.grades[1], data.units[1],
    data.grades[2], data.units[2],
    data.grades[3], data.units[3],
    data.grades[4], data.units[4],
    data.grades[5], data.units[5],
    data.grades[6], data.units[6],
    data.grades[7], data.units[7],
    data.grades[8], data.units[8],
    data.grades[9], data.units[9],
    data.gwa, data.status
  ]);
}
