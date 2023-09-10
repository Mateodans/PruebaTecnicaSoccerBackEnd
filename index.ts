const express = require('express')
const app = express()
import * as Types from './types'; // Import your TypeScript types
import fs from 'fs';
const port = 3000

app.get('/match', (req : any, res :any) => {
  try {
    const rawData = fs.readFileSync('./match.json'); // Read the JSON file
    const jsonData: Types.Match = JSON.parse(rawData.toString()); // Parse JSON data using the Match interface
    res.json(jsonData); // Send JSON data as a response
  } catch (error) {
    res.status(500).json({ error: 'Error reading JSON file' });
  }
})
app.get('/stats', (req : any, res :any) => {
  try {
    const rawData = fs.readFileSync('./stats.json'); // Read the JSON file
    const jsonData: Types.MatchStats = JSON.parse(rawData.toString()); // Parse JSON data using the Match interface
    res.json(jsonData); // Send JSON data as a response
  } catch (error) {
    res.status(500).json({ error: 'Error reading JSON file' });
  }
})
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })