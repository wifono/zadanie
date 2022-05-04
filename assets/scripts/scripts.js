function fetchData() {        
    
    if(window.location.href.match("index.php")) {

           fetch('https://masterfoxbo.digitalfox.sk/api/eshop/getProducts/14')
    .then(res => {
        if(!res.ok) {
            throw Error("error");
        }
       return res.json();
    })		
    
    .then((data) => {
        const html = data.data
            .map((product) => {
                const { images: productImages } = product;
                const thumbnails = Object.keys(productImages)
                    .map((productImage) => {
                     //   console.log(productImages[productImage]);
                        const {
                            image: { thumb },
                            alt,
                        } = productImages[productImage];

                        return `<img id="${product.id}" class="thumbnail" src="${thumb}" alt="${alt}">`;
                    })
                    .join('')
                   
            return `
            <div class="product" id="${product.id}" onClick="clickOnProduct(event);">

                <div class="productHeader">
                    <h2 id="${product.id}"> ${product.internal_name}</h2>
                </div>
                
                <div id="${product.id}" class="productThumbnail">
                    ${thumbnails}
                </div>

                <div id="${product.id}" class="productFooter">
                    <h3>Dostupnosť:<span></span></h3>   
                    <p><strong>Cena: <span>${product.price}</span> €</strong></p>
                        <ul>
                            <li id="${product.id}" ><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                        </ul>
                </div>
            </div>`;

        })
    
        .join(''); 

        document
        .querySelector('#products')
        .insertAdjacentHTML("beforeend", html)
    })

    .catch(error => {
        console.log(error);
    });
    } else{   
        fetch('https://masterfoxbo.digitalfox.sk/api/eshop/getProducts/14')
        .then(res => {
            if(!res.ok) {
                throw Error("error");
            }
           return res.json();
        })		
            
        .then((data) => {
            const html = data.data
                .map((product) => {
                    const { languages : productLanguages } = product;
                    const descriptions = Object.keys(productLanguages)
                  
                        .map((productLanguage) => {
                            const {
                                description: { description }         
                            } = productLanguages[productLanguage];

                            let desc = productLanguages[productLanguage].description;
                            
                            return desc;                             
                        }) 
            .join('')

            const { images: productImages } = product;
            const thumbnails = Object.keys(productImages)
                .map((productImage) => {
                 //   console.log(productImages[productImage]);
                    const {
                        image: { thumb },
                        alt,
                    } = productImages[productImage];

                    return `<img class="thumbnail" src="${thumb}" alt="${alt}">`;
                })
                .join('')

            return `
            <div id='${product.id}' class='productMain'>


            <div class='leftSideOfBox'>
            <div class='productGallery'>
            <div class='mainProductImage'>${thumbnails}</div>
            </div>
            </div>

            <div class='rightSideOfBox'>
            <div class='productHead'><h2>${product.internal_name}</h2></div>
            <div class='productDesc'>${descriptions}</div>
            <div class='productPrice'>Cena: ${product.price} €</div>
            <div class='productAvailablity'>Dostupnosť:</div>

            </div>
            </div>
            
            
            
            `
                    })

            .join('')

            document
            .querySelector('#productInfo')
            .insertAdjacentHTML("afterbegin", html)
            
            
        })
    
        .catch(error => {
            console.log(error);
        });

    }
}

function clickOnProduct(event){
    var x = event.target;
    let productId = x.id;
    window.location.href="product.php?id="+productId;
};  



window.onload = (event) => {

    let list = document.getElementById('productInfo');
    
    if(window.location.href.match("product.php")) {

            function filterClickedProduct(){

                let product = document.getElementsByClassName('productMain');
                let url_str = window.location.href;
                let url = new URL(url_str);

                let search_params = url.searchParams;
                let id = search_params.get('id');

                    if(window.location.href.indexOf('id=') > -1 ){

                        let urlId = location.search.split('id=')[1];
                        
                        console.log(urlId);
                        console.log(product);
                                
                    }
                
                console.log(location);
            }
    filterClickedProduct();
    }
};




fetchData();
