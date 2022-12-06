<template>
  <!-- Start Banner Hero -->
  <div id="template-mo-zay-hero-carousel" class="carousel slide" data-bs-ride="carousel">
    <ol class="carousel-indicators">
      <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" class="active"></li>
      <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="1"></li>
      <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" style="">
      <div class="carousel-item active">
        <div class="container">
          <div class="row p-5">
            <img class="slider-img" src="nru-img1.PNG">
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
          <div class="row p-5">
            <img class="slider-img" src="nru-gallery.JPG">
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
          <div class="row p-5">
            <img class="slider-img" src="nru-gallery1.jpg">
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev text-decoration-none w-auto ps-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="prev">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a class="carousel-control-next text-decoration-none w-auto pe-3" href="#template-mo-zay-hero-carousel" role="button" data-bs-slide="next">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>

  <section class="bg-light">
    <div class="container py-5">
      <div class="row text-center py-3">
        <div class="col-lg-6 m-auto">
          <h1 class="h1">New Beverage</h1>
          <p>
            새로운 커피에 대한 소개글 대충~~~
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4 mb-4">
          <div class="card h-100">
            <a href="shop-single.html">
              <img src="../../public/assets/img/americano.jpg" class="product-img">
            </a>
            <div class="card-body">
              <a href="shop-single.html" class="h2 text-decoration-none text-dark">AMERICANO</a>
              <p class="card-text">
                This is Ice Americano!!
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-4">
          <div class="card h-100">
            <a href="shop-single.html">
              <img src="../../public/assets/img/malchalatte.jpg" class="product-img">
            </a>
            <div class="card-body">
              <a href="shop-single.html" class="h2 text-decoration-none text-dark">MALCHA LATTE</a>
              <p class="card-text">
                This is Ice Malch Latte~~!!!
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-4">
          <div class="card h-100">
            <a href="shop-single.html">
              <img src="../../public/assets/img/banillalatte.jpg" class="product-img">
            </a>
            <div class="card-body">
              <a href="shop-single.html" class="h2 text-decoration-none text-dark">BANILLA LATTE</a>
              <p class="card-text">
                This is Ice Banilla Latte~!~!~!
              </p>
              <p class="text-muted">Reviews (74)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MainPage"
}
</script>

<style scoped>
.slider-img {
  max-width: 100%;
  height: 500px;
}
.product-img {
  width: 100%;
  height: 300px;
}
</style>
