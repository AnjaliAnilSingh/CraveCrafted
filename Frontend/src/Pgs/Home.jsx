import React from 'react';
import Header from '../Comp/Header.jsx';
import Hero from '../Comp/Hero.jsx';
import CategoryWrapper from './Category.jsx/CategoryWrapper.jsx';
import FeaturedRecipe from '../Comp/FeaturedRecipe.jsx'
import TrendingRecipes from '../Comp/TrendingRecipes.jsx';
import Footer from '../Comp/Footer.jsx'

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CategoryWrapper/>
      <FeaturedRecipe/>
      <TrendingRecipes/>
      <Footer/>
    </div>
  );
};

export default Home;