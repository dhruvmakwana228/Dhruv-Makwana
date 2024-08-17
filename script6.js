document.addEventListener('DOMContentLoaded', function () {
    const productContainer = document.getElementById('prod');
    async function fetchProducts(url) {
        let data = await fetch(url);
        let products = await data.json();
        console.log(products);
        products.forEach(function (product) {
            productContainer.innerHTML += `
            <div class="card col-lg-4 p-3 shadow text-center" style="width: 18rem;">

                <img src="${product.category.image}" class="card-img-top img-fluid" alt="...">

                <div class="card-body">
                  <h5 class="card-title">${product.title}</h5>
                  <h3>${product.description}</h3>
                  <p>${product.category.name}</p>
                  <p>₹${product.price}</p>
                  <a href="#" class="btn btn-lg  btn-primary">Buy</a>
                </div> <!--card-body-->

              </div> <!--card col-lg-4-->

            `;
        });
    }
    fetchProducts('https://api.escuelajs.co/api/v1/products');

})