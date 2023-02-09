let theLink =
  "https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-electricity/main/data/power-outages.json";

async function iAmAPrinter() {
  let response = await fetch(theLink);

  let data = await response.json();
  console.log(data.portlouis);
}

iAmAPrinter();
