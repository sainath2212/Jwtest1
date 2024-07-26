import React from 'react'

export const Item = (props) => {
  return (
    <div class="col-md-3 col-sm-6 mb-3">
    <div class="item-product">
      <a href="#" class="product-thumb-link">
        <img decoding="async" src={props.img} class="img-fluid"/>
      </a>
    </div>
    <div class="product-info">
      <div class="d-flex justify-content-between py-3">
        <a href="#" class="cat-parent">Women</a>
        <a href="#" class="wishlist">
          <i class="fa fa-heart"></i>
        </a>
      </div>
      <h4 class="product-title">
        <a href="#">Titanium ring in ged palladiumfinish metal</a>
      </h4>
      <div class="product-price">
        <ins><span class="money text-white">$300.00</span></ins>
      </div>
      <div class="d-flex align-items-center justify-content-between py-1">
        <div class="rating">
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <div class="basket">
          <a href="#"><i class="fas fa-shopping-basket"></i></a>
        </div>
      </div>
    </div>
  </div>
  )
}
