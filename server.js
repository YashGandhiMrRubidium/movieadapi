const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Create an instance of express
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// File paths for the data (located in the 'data' folder)
const videoDataPath = path.join(__dirname, 'data', 'videos.json');
const bannerDataPath = path.join(__dirname, 'data', 'banners.json');
const urlDataPath = path.join(__dirname, 'data', 'urls.json');

// Utility to read data from a file
const readDataFromFile = (filePath) => {
  try {
    const rawData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(rawData);
  } catch (error) {
    return [];
  }
};

// Utility to write data to a file
const writeDataToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing data to file', error);
  }
};

// Routes for Video Data
app.get('/api/videos', (req, res) => {
  const videos = readDataFromFile(videoDataPath);
  res.json(videos);
});

app.post('/api/videos', (req, res) => {
  const newVideo = req.body;
  const videos = readDataFromFile(videoDataPath);
  videos.push(newVideo);
  writeDataToFile(videoDataPath, videos);
  res.status(201).json(newVideo);
});

// Routes for Banner Data
app.get('/api/banners', (req, res) => {
  const banners = readDataFromFile(bannerDataPath);
  res.json(banners);
});

app.post('/api/banners', (req, res) => {
  const newBanner = req.body;
  const banners = readDataFromFile(bannerDataPath);
  banners.push(newBanner);
  writeDataToFile(bannerDataPath, banners);
  res.status(201).json(newBanner);
});

// Routes for URL Data
app.get('/api/urls', (req, res) => {
  const urls = readDataFromFile(urlDataPath);
  res.json(urls);
});

app.post('/api/urls', (req, res) => {
  const newUrl = req.body;
  const urls = readDataFromFile(urlDataPath);
  urls.push(newUrl);
  writeDataToFile(urlDataPath, urls);
  res.status(201).json(newUrl);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
