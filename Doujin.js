class Doujin {
    /**
     * Constructor for the doujin object, takes a url and image url as strings
     * @param {String} url 
     * @param {String} image_url 
     */
    constructor(url, image_url){
        this.url = url;
        this.image_url = image_url;
    }
}

module.exports = Doujin;