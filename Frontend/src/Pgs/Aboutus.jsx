import React from 'react'
import Header from './../Comp/Header'
import Footer from './../Comp/Footer'
import aboutimg from '.././assets/aboutimg.png'

const Aboutus = () => {
  return (
    <div>
      <Header/>
      <div className="max-w-6xl mx-auto p-6 mt-10 bg-white rounded-3xl flex flex-col lg:flex-row items-center lg:items-start">
      {/* Text Content */}
      <div className="lg:w-2/3">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to <strong>CraveCrafted</strong> – a place where food lovers unite! Whether you're a seasoned chef or just stepping into the kitchen for the first time, we're here to inspire and guide you on your culinary journey.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          At <strong>CraveCrafted</strong>, we believe that cooking is more than just a necessity – it's a way to connect, create, and celebrate the flavors of life. Our mission is to provide easy-to-follow, delicious recipes that anyone can make at home, regardless of experience level.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="text-lg mb-4">
          We're a team of passionate home cooks and food enthusiasts who believe in the joy of sharing great meals with loved ones. Our recipes are crafted with care, tested thoroughly, and designed to bring out the best in everyday ingredients.
        </p>

        <p className="text-lg">Thank you for stopping by, and happy cooking!</p>
      </div>

      {/* Image on the Right */}
      <div className="mt-[50px]">
        <img
          src={aboutimg}
          alt="About Us"
          className="w-full h-auto"
        />
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Aboutus

