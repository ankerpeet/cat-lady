var id = 1;
// var petCount = 0;

function Cat(name, picture) {
    this.id = id;
    this.name = name,
    this.picture = picture,
    this.status = ["Happy", "Bitey"],
    this.petCount = 0

    id++
}
var catLady = {
    cats: []
}

var cat1 = new Cat("Mr.Snibbly", "https://duckduckgrayduck.files.wordpress.com/2015/01/top-hat-cat.jpg");
var cat2 = new Cat("Snuffles", "http://i.imgur.com/KaFJJ.jpg");
var cat3 = new Cat("Mittens", "http://i190.photobucket.com/albums/z32/deetratafoy/Cats/TopHatCat.jpg");
catLady.cats.push(cat1, cat2, cat3);

function draw(catsArr) {
    var template = ''
    for (var i = 0; i < catsArr.length; i++) {
        var cat = catsArr[i];
        var statusIndex = 0;
        if (cat.petCount > 5) {
            statusIndex = 1;
        }
        template += `
            <div class="cat img-responsive col-xs-4">
                <img src='${cat.picture}' alt="cat">
                <h3>Name: ${cat.name}</h3>
                <p>Status: ${cat.status[statusIndex]}</p>
                <p>Pet Count: ${cat.petCount}</p>
                <button class="btn btn-default" type="button" onclick="pet(${cat.id})">Pet Me!</button>
            </div>  
        `
    }
    document.getElementById('cats').innerHTML = template;
}
draw(catLady.cats)

function pet(catId){
    var catToPet = findCatById(catLady.cats, catId);
    catToPet.petCount++;
    draw(catLady.cats);
}

function findCatById(catArray, catId){
    for (var i = 0; i < catArray.length; i++) {
        var cat = catArray[i];
        if (catId === cat.id){
            return cat;
        }
    }
}