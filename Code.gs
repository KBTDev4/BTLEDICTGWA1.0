function doPost(e) {
  // Parse the incoming data
  const data = JSON.parse(e.postData.contents);
  
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

  // Return a success response
  return ContentService.createTextOutput(
    JSON.stringify({ result: "success" })
  ).setMimeType(ContentService.MimeType.JSON);
}
