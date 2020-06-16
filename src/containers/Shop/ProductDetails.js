import React from "react";
import img1 from "../../assets/images/img1.jpg";

export default function ProductDetails() {
  return (
    <div class="container">
      <div class="row">
        <main class="col-12 mb-3">
          <div class="row">
            <div class="col-lg-5 img-product">
              <img
                src="../img/menu/menu-img.jpg"
                class="w-100 img-hover"
                alt="sandwich"
              />
            </div>

            <div class="col-lg-7 info-product">
              <h3 class="pb-2 pt-2 m-0 title-food">Burger Mix</h3>
              <div class="pt-3 pb-3 rate-food">
                <div class="d-inline-block pr-3 rate">
                  <p class="d-inline-block m-0">
                    <i class="fas fa-star"></i>
                  </p>
                  <p class="d-inline-block m-0">
                    <i class="fas fa-star"></i>
                  </p>
                  <p class="d-inline-block m-0">
                    <i class="fas fa-star"></i>
                  </p>
                  <p class="d-inline-block m-0">
                    <i class="fas fa-star-half-alt"></i>
                  </p>
                  <p class="d-inline-block m-0">
                    <i class="far fa-star"></i>
                  </p>
                </div>
                <p class="d-inline-block pr-3 m-0">1 reviews</p>
                <p class="d-inline-block m-0">
                  <i class="fas fa-pencil-alt"></i> Write a review
                </p>
              </div>

              <div class="pb-3 pt-3 info-food">
                <p class="m-0">
                  Product code: <span>Product 14</span>
                </p>
                <p class="m-0">
                  Availability: <span>In Stock</span>
                </p>

                <form class="pt-2 pb-2" action="#" method="post">
                  <div class="row">
                    <div class="col-4 m-0 form-group">
                      <select
                        class="form-control form-control-sm"
                        id="exampleFormControlSelect1"
                      >
                        <option>Small</option>
                        <option>Mid</option>
                        <option>Big</option>
                      </select>
                    </div>
                    <div class="col-3 m-0 form-group">
                      <input
                        type="number"
                        class="form-control form-control-sm"
                        min="1"
                        max="10"
                        placeholder="1"
                        required
                      />
                    </div>
                  </div>
                </form>

                <div class="custom-control custom-checkbox pt-1">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheck1"
                  />
                  <label class="custom-control-label" for="customCheck1">
                    Ut egestas placerat finibus
                  </label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="customCheck2"
                  />
                  <label class="custom-control-label" for="customCheck2">
                    Aliquam malesuada tortor vel
                  </label>
                </div>
              </div>

              <div class="pt-3 pb-3 mr-4 cmimi-food float-left">
                <h4 class="m-0">2.10 &euro;</h4>
                <p class="m-0">Ex Tax: 0.60 &euro;</p>
              </div>

              <div class="pt-3 pb-4 button-cart">
                <button class="d-inline-block btn" type="submit">
                  add to cart
                </button>
                <span class="d-inline-block ">
                  <i class="far fa-heart"></i>
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
