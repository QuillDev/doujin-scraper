# doujin-scraper by @QuillDev
## How to install
```text
git clone https://github.com/QuillDev/doujin-scraper.git
```

### Usage
```js
const doujinscraper = require("doujin-scraper");

//get top 5 doujins for the query "bakemonogatari"
const doujins = doujinscraper.getTop("bakemonogatari");

console.log(doujins);
```
### Expected Output
```json
[
  Doujin {
    url: 'https://nhentai.net/g/330290/',
    image_url: 'https://t.nhentai.net/galleries/1741816/thumb.jpg'
  },
  Doujin {
    url: 'https://nhentai.net/g/330252/',
    image_url: 'https://t.nhentai.net/galleries/1741631/thumb.jpg'
  },
  Doujin {
    url: 'https://nhentai.net/g/330224/',
    image_url: 'https://t.nhentai.net/galleries/1741443/thumb.jpg'
  },
  Doujin {
    url: 'https://nhentai.net/g/330016/',
    image_url: 'https://t.nhentai.net/galleries/1740225/thumb.jpg'
  },
  Doujin {
    url: 'https://nhentai.net/g/329952/',
    image_url: 'https://t.nhentai.net/galleries/1737513/thumb.jpg'
  }
]
```