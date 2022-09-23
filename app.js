function render() {
    const getData = new Promise((resolve, reject) => {
        fetch(
            `https://newsapi.org/v2/top-headlines?country=in&apiKey=4e25357bcf60489984c6c02834a856dd`
        )
            .then((res) => res.json())
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    });
    var mainDiv = document.getElementById("main2")
    var inner1 = document.getElementById("inner1")
    var inner2 = document.getElementById("inner2")
    async function abc() {
        try {
            let data = await getData;
            console.log(data.articles);
            for (var i = 0; i < 1; i++) {
                if (data.articles[i].urlToImage !== null) {
                    var image = data.articles[i].urlToImage
                } else {
                    var image = "images/black.jpg"
                }
                if (data.articles[i].description !== null) {
                    var description = data.articles[i].description
                } else {
                    var description = "Description Not Available"
                }
                if (data.articles[i].title) {
                    var title = data.articles[i].title
                }
                else {
                    var title = "Title Not Available"
                }
                inner1.innerHTML += `
                <div class="first_card card text-bg-dark">
                <img src="${image}" class="card-img" alt="...">
                <div class="card-img-overlay">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <p class="card-text"><small>${data.articles[i].publishedAt}</small></p>
                <a href="${data.articles[i].url}" target="_blank" >
                <button type="button" class="btn btn-outline-light">Read More</button>
                </a>
                </div>
                </div>
                `
            } for (var i = 1; i <= 2; i++) {
                if (data.articles[i].urlToImage !== null) {
                    var image = data.articles[i].urlToImage
                } else {
                    var image = "images/black.jpg"
                }
                if (data.articles[i].description !== null) {
                    var description = data.articles[i].description
                } else {
                    var description = "Description Not Available"
                }
                if (data.articles[i].title) {
                    var title = data.articles[i].title
                }
                else {
                    var title = "Title Not Available"
                }
                inner2.innerHTML += `
                <div class="second_card card text-bg-dark">
                <img src="${image}" class="card-img" alt="...">
                <div class="card-img-overlay">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <p class="card-text"><small>${data.articles[i].publishedAt}</small></p>
                <a href="${data.articles[i].url}" target="_blank" >
                <button type="button" class="btn btn-outline-light">Read More</button>
                </a>
                </div>
                </div>
                `
            }
            for (var i = 3; i < data.articles.length; i++) {
                if (data.articles[i].urlToImage != null) {
                    var image = data.articles[i].urlToImage
                } else {
                    var image = "images/black.jpg"
                }
                if (data.articles[i].description !== null) {
                    var description = data.articles[i].description
                } else {
                    var description = "Description Not Available"
                }
                if (data.articles[i].title) {
                    var title = data.articles[i].title
                }
                else {
                    var title = "Title Not Available"
                }
                mainDiv.innerHTML += `
                <div style="width:80%" class="card3 card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${image}" style="height:100%" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${description}</p>
                            <p class="card-text"><small class="text-muted">${data.articles[i].publishedAt}</small></p>
                            <a href="${data.articles[i].url}" target="_blank" >
                            <button type="button" class="btn btn-outline-dark">Read More</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                `
            }
        }
        catch (err) {
            console.log(err);
            swal("Data Not Found!", "Data you requested did not found. Please check your API!", "error");
        }
    }
    abc();
}
render();