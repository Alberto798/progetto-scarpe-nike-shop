const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(cors());
const data = require("./src/assets/nike.json");

// Endpoint per filtrare i dati
app.get("/product", (req, res) => {
  const { id } = req.query;

  let filteredData = data.prodotti;

  if (id) {
    filteredData = filteredData.filter((item) => item.id === +id);
  }
  res.json(filteredData);
});


app.get("/products", (req, res) => {
  const {category, color, sport} = req.query;

  let filteredData = data.prodotti;

  if ( category === "nuovo_arrivi" ){
    
    filteredData = filteredData.filter((item) => item.nuovo_arrivi === true);
  }
  if (category === "best_seller"){
   
    filteredData = filteredData.filter((item) => item.best_seller > 4);
  }
  if(color != undefined){

    filteredData = filteredData.filter((item) => item.colori_disponibili.includes(color))
  }
  if(sport!= undefined){

    filteredData = filteredData.filter((item) => item.categoria === sport)
  }

  res.json(filteredData);
});

 


// Avvio del server
app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});


