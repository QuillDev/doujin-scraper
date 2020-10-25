const got = require("got");
const jsdom = require("jsdom");
const Doujin = require("./Doujin");
const { JSDOM } = jsdom;

/**
 * Get the top 5 or less results for a given hentai query.
 * @param {String} query the query to search for
 */
async function getTop(query){
    //scrape doujins for that query
    const doujins = await scrapePopular(query);

    //if the doujins fucked up return null
    if(!doujins || doujins.length === 0){
        return null;
    }

    //if the doujins length is less than or equal to 5 just return it
    if(doujins.length <= 5){
        return doujins;   
    }

    //return the top 5 doujins from the list
    return doujins.slice(0, 5);
}

/**
 * Gets a random doujin from the query
 * @param {String} query the query to search for
 * @returns {Doujin} a doujin result
 */
async function getRandom(query) {
    //if there was no query get a completely random doujin
    if (!query) {
        const doujin = await got.get("https://nhentai.net/random/")
            .then(function (r) {
                const dom = new JSDOM(r.body);
                const url = r.url;
                const image_url = dom.window.document.querySelector("img.lazyload").getAttribute("data-src");
                return new Doujin(url, image_url);
            });

        //if the doujin is null, return null
        if (!doujin) {
            return null;
        }

        //return the doujin otherwise
        return doujin;
    }

    try {
        //if there was a query get a random doujin using that query
        const doujins = await scrapePopular(query);

        //if the doujin fucked up return null;
        if (!doujins || doujins.length === 0) {
            return null;
        }

        return doujins[Math.floor(Math.random() * doujins.length)];
    } 
    catch {
        return null;
    }

}
/**
 * Scrapes n-hentai for doujin data namely the cover image and the url.
 * @param {String} query
 * @returns {Doujin[]} Array of doujin results
 */
async function scrapePopular(query) {

    //Create the url depending on whether there was a query or not
    let url = "";
    if (!query) {
        url = "https://nhentai.net/";
    } else {
        url = `https://nhentai.net/search/?q=${query}`;
    }

    const body = await got.get(url)
        .then(res => res.body)
        .catch(() => null);

    //if body was null, return null
    if (!body) {
        return null;
    }

    //Array for doujin URLS to go into
    const doujins = [];

    try {

        //Create the dom from the body
        const dom = new JSDOM(body);

        //get the doujin container
        const doujinContainers = dom.window.document.querySelectorAll("div div.container");

        //iterate through the doujin containers
        for (doujinContainer of doujinContainers) {

            //get the gallery tag which gives us the urls
            const galleries = doujinContainer.querySelectorAll("div.gallery");

            //get all of the urls from the doujins loaded
            for (const gallery of galleries) {

                const url = `https://nhentai.net${gallery.querySelector("a.cover").href}`;
                const image_url = gallery.querySelector("a.cover img").getAttribute("data-src");

                //if the image_url or the url is null, continue
                if (!url || !image_url) {
                    continue;
                }

                //push the doujins info into the doujins array
                doujins.push(new Doujin(url, image_url));
            }
        }

    }
    //if there was an error return null
    catch {
        return null;
    }

    return doujins;
}

module.exports = {
    getTop: getTop,
    getRandom: getRandom,
    scrapePopular: scrapePopular
}