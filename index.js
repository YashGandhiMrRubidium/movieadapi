const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

const ads = {
  affiliate: {
    healthAndFitness: [
      { id: 1, title: 'Nagano Tonic - $5 EPCs', url: 'https://be7887gjrar2bmfarkven07nfx.hop.clickbank.net' },
      { id: 2, title: 'Gluco6 - Now Open To Everyone!', url: 'https://1c9dd1pio7kydu65medfhtdv9m.hop.clickbank.net' },
      { id: 3, title: 'ProvaDent - NEW Doctor Endorsed Dental Offer', url: 'https://04148eb8i6t26zfgxlw5n5-sev.hop.clickbank.net' },
      { id: 4, title: 'The Lost Generator', url: 'https://0d280efjg5yufm8iudzj-mvasf.hop.clickbank.net' },
      { id: 5, title: 'Liv Pure', url: 'https://5512dckat6vtcr6enlxp6d4seu.hop.clickbank.net' },
      { id: 6, title: 'Quietum Plus - Top Offer, Now Even Better', url: 'https://a189a2g9ndstbtfa2gfl4ixiel.hop.clickbank.net' },
      { id: 7, title: 'Java Burn', url: 'https://6f9514ofn3q39m1gemmzyb2wex.hop.clickbank.net' },
      { id: 8, title: 'Neuro-Thrive Brain Support', url: 'https://a05c46okhgxp8z69up5gxay707.hop.clickbank.net' },
    ],
    employmentAndJobs: [
      { id: 1, title: 'Become A Flight Attendant - The Ultimate Cabin Crew Interview Guide', url: 'https://e15aefjehfy2eqf4hs1e0i264w.hop.clickbank.net' },
      { id: 2, title: 'The Raise Phrase', url: 'https://7fdcfcceecq35k5qk6vxjcqv6w.hop.clickbank.net' },
      { id: 3, title: 'Earn From Your Photos! Photo Jobs - Photojobz', url: 'https://0568eeo9i5n-3ld9hgoycc-yhv.hop.clickbank.net' },
      { id: 4, title: 'Ultimate Guide To Job Interview Answers - $20 per sale in Career Niche', url: 'https://16e945obf8oq0kd6xmpgwbji1p.hop.clickbank.net' },
    ],
  },
  bannerAds: [
    { id: 1, title: 'Tech Banner Ad', image: 'https://example.com/tech-banner.jpg', link: 'https://example.com/tech' },
    { id: 2, title: 'Gaming Banner Ad', image: 'https://example.com/gaming-banner.jpg', link: 'https://example.com/gaming' },
  ],
  videoAds: [
    { id: 1, title: 'Car Ad', videoUrl: 'https://example.com/car-ad.mp4', link: 'https://example.com/cars' },
    { id: 2, title: 'Movie Ad', videoUrl: 'https://example.com/movie-ad.mp4', link: 'https://example.com/movies' },
  ],
  directLinks: [
    { id: 1, title: 'Main Website', url: 'https://example.com' },
    { id: 2, title: 'Support Page', url: 'https://example.com/support' },
  ],
};
// Route for all ads
app.get('/api/ads', (req, res) => {
  res.send(ads);
  res.json({ message: 'CORS enabled!' });
});

// Routes for specific sections
app.get('/api/ads/affiliate', (req, res) => {
  res.send(ads.affiliate);
});

app.get('/api/ads/bannerAds', (req, res) => {
  res.send(ads.bannerAds);
});

app.get('/api/ads/videoAds', (req, res) => {
  res.send(ads.videoAds);
});

app.get('/api/ads/directLinks', (req, res) => {
  res.send(ads.directLinks);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
