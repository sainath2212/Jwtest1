import React from 'react'

export const Header = () => {
  return (
    <>
    <header>
      
    <nav class="navbar navbar-expand-lg navigation-wrap">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img decoding="async" src="images/logo.png"/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-stream navbar-toggler-icon"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#new-arrivals">New Arrivals</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#products">Products</a>
            </li> 
            <li class="nav-item">
              <a class="nav-link" href="#deal">Deal of the day</a>
            </li> 
            <li class="nav-item">
              <a class="nav-link" href="#blog">Blog</a>
            </li> 
          </ul>
        </div>
      </div>
    </nav>

  </header></>
  )
}
