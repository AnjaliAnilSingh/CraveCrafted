import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.jpg';
import carousel3 from '../assets/carousel3.jpg';

const Hero = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (query) {
            navigate(`/search/${query}`);  // Navigate to the search results page
        }
    };

    return (
        <div>
            <div className="relative max-h-[30rem]">
                <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
                    <h1 className="text-3xl font-bold mb-4">Explore Delicious Recipes</h1>
                    <div className="relative space-x-6">
                        <input
                            type="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="px-4 py-2 w-80 bg-white rounded-xl text-black"
                            placeholder="Search for recipes..."
                        />
                        <button
                            onClick={handleSearch}
                            className="bg-[#929974] text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                        >
                            Search
                        </button>
                    </div>
                </div>

                <Carousel
                    showArrows={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    interval={3000}
                >
                    <div>
                        <img src={carousel1} alt="Image 1" className="object-cover max-h-[30rem]" />
                    </div>
                    <div>
                        <img src={carousel2} alt="Image 2" className="object-cover max-h-[30rem]" />
                    </div>
                    <div>
                        <img src={carousel3} alt="Image 3" className="object-cover max-h-[30rem]" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Hero;