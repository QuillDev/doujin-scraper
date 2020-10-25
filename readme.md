# doujin-scraper by @QuillDev
## How to install
```text
git clone https://github.com/QuillDev/doujin-scraper.git
cd doujin-scraper
npm install
```

### Example Usage
```js
const doujinscraper = require("./doujin-scraper/nhentaiscraper");

//the method is async so you need to await it
async function getDoujins(){
  //get top 5 doujins for the query "bakemonogatari"
  const doujins = await doujinscraper.getTop("bakemonogatari");

  console.log(doujins);
}

```
### Expected Output
```js
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