fetch(
  "https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-electricity/main/data/power-outages.json"
)
  .then((res) => res.json())
  .then((data) => console.log(data.portlouis));
