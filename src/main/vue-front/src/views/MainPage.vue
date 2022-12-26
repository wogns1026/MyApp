<template>
  <section class="bg-light">
    <div class="container py-5">
      <div class="row text-center py-3">
        <div class="col-lg-6 m-auto">
          <h1 class="h1">My App List</h1>
          <p>
            <br>
            나에게 필요한 것들을 한 곳에서!!!
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4 mb-4">
          <div class="card h-100">
            <a href="#" onclick="location.href='/todolist'">
              <img src="../../public/assets/img/todolist.jpg" class="product-img">
            </a>
            <div class="card-body">
              <a href="#" onclick="location.href='/todolist'" class="h2 text-decoration-none text-dark">To Do List</a>
              <p class="card-text">
                <br>
                매일 까먹는 나를 도와줘...
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-4">
          <div class="card h-100">
            <a href="#" onclick="location.href='/financial-ledger'">
              <img src="../../public/assets/img/financial-ledger.jpg" class="product-img">
            </a>
            <div class="card-body">
              <a href="#" onclick="location.href='/financial-ledger'" class="h2 text-decoration-none text-dark">Financial Ledger</a>
              <p class="card-text">
                <br>
                자꾸만 사라지는 내 돈의 행방을 찾아서~
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-4">
          <div class="card h-100">
            <a href="#" onclick="location.href='/lotto'">
              <img src="../../public/assets/img/lotto.jpg" class="product-img">
            </a>
            <div class="card-body">
              <a href="#" onclick="location.href='/lotto'" class="h2 text-decoration-none text-dark">Lotto</a>
              <p class="card-text">
                <br>
                나도 부자가 좀 되보자!!!
              </p>
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
