import Navbar2 from '../../components/Navbar2'
import React, { useState, useRef, useEffect } from 'react';
import './MentorList.css'
import '../../components/miscellenius/css/DropDown.css';
import { Footer, MentorCard } from '../../components';
import { Link } from 'react-router-dom';

const itemsData = [
    { id: 1, title: 'All', imageUrl: 'all' },
    { id: 2, title: 'Fin Tech', imageUrl: 'fintech' },
    { id: 3, title: 'Ed Tech', imageUrl: 'edtech' },
    { id: 4, title: 'SAAS', imageUrl: 'saas' },
    { id: 5, title: 'Tech', imageUrl: 'tech' },
    { id: 6, title: 'Automobile', imageUrl: 'automobile' },
    { id: 7, title: 'Proptech', imageUrl: 'proptech' },
    { id: 8, title: 'BioTech', imageUrl: 'biotech' },
    { id: 9, title: 'Health Tech', imageUrl: 'healthtech' },
    { id: 10, title: 'Food Tech', imageUrl: 'foodtech' },
    { id: 12, title: 'Agriculture', imageUrl: 'agriculture' },
    { id: 13, title: 'Game', imageUrl: 'game' },
    { id: 14, title: 'Hardware', imageUrl: 'hardware' },
    { id: 15, title: 'Wealth Tech', imageUrl: 'wealthtech' },
    { id: 16, title: 'Insurance Tech', imageUrl: 'insurancetech' },
    { id: 17, title: 'E-commerce', imageUrl: 'e-commerce' },
    { id: 18, title: 'Travel Tech', imageUrl: 'traveltech' },
    { id: 19, title: 'AI/ML', imageUrl: 'ai-ml' },
    { id: 20, title: 'Green/Clean Tech', imageUrl: 'greentech' },
    { id: 21, title: 'Transportation Tech', imageUrl: 'transportationtech' },
    { id: 22, title: 'NGO', imageUrl: 'ngo' },
    { id: 23, title: 'Fashion Tech', imageUrl: 'fashiontech' },
    { id: 24, title: 'Marketing/Media', imageUrl: 'media' },
    { id: 25, title: 'Sports', imageUrl: 'sports' },
    { id: 26, title: 'Manufacturing', imageUrl: 'manufacturing' },
    { id: 27, title: 'B2B', imageUrl: 'b2b' },
    { id: 28, title: 'B2C', imageUrl: 'b2c' },
    { id: 29, title: 'D2C', imageUrl: 'd2c' },
];

const Scrollbar = () => {
    const [selectedItem, setSelectedItem] = useState('All');
    const scrollbarRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState(0);
    const [scrollStartX, setScrollStartX] = useState(0);

    const handleItemClick = (itemId) => {
        setSelectedItem(itemId);
    };

    const handleScrollLeft = () => {
        scrollbarRef.current.scrollLeft -= 100; // Adjust the scroll amount based on your needs
    };

    const handleScrollRight = () => {
        scrollbarRef.current.scrollLeft += 100; // Adjust the scroll amount based on your needs
    };

    const handleMouseDown = (event) => {
        setIsDragging(true);
        setDragStartX(event.clientX);
        setScrollStartX(scrollbarRef.current.scrollLeft);
    };

    const handleMouseMove = (event) => {
        if (!isDragging) return;
        const dx = event.clientX - dragStartX;
        scrollbarRef.current.scrollLeft = scrollStartX - dx;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (

        <div
            className="mentorlist__scrollable-tabs-container"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div className="mentorlist__left-arrow" onClick={handleScrollLeft}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </div>
            <ul ref={scrollbarRef}>
                {itemsData.map((item) => (
                    <li
                        key={item.id}
                        className={`mentorlist__scrollable-item ${selectedItem === item.title ? 'selected' : ''}`}
                        onClick={() => handleItemClick(item.title)}
                        type="button"
                        onDragStart={(e) => e.preventDefault()}
                    >
                        <img src={`./assets/mentorlist-${item.imageUrl}.svg`} alt={item.title} />
                        <h3>{item.title}</h3>
                    </li>
                ))}
            </ul>
            <div className="mentorlist__right-arrow" >
                <svg onClick={handleScrollRight} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </div >
    );
};

// const SearchInput = ({ onSearch }) => {
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearch = (event) => {
//         setSearchTerm(event.target.value);
//         onSearch(event.target.value);
//     };

//     return (

//     );
// };


const Filters = ({ region, handleSearch, handleSelect }) => {
    return (
        <div className='filter-wrapper'>

            <select className='filter-select' value={region} onChange={handleSelect}>
                <option value=''>Price</option>
                <option value='₹499 - ₹2499'>₹499 - ₹2499</option>
                <option value='₹2500 - ₹4999'>₹2500 - ₹4999</option>
                <option value='₹5000 - ₹9999'>₹5000 - ₹9999</option>
                <option value='More than ₹9999'>More than ₹9999</option>
            </select>
        </div>
    );
};



const MentorList = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState('Mid Range');
    const [region, setRegion] = useState('');

    const handleSelect = (event) => {
        setRegion(event.target.value);
    };

    const handleSearch = (searchTerm) => {
        setSearchResults([]);
    };

    return (<>
        <Navbar2 />
        <div className='mentorlist__container-main'>
            <div className="mentorlist__container">
                <div className="mentorlist__nav">

                    <Scrollbar />

                    <div className="mentorlist__filter">
                        <div className="mentorlist__filter-search">
                            {/* <input
                                type="text"
                                placeholder="Search..."
                                // value={searchTerm}
                                onChange={handleSearch}
                            /> */}
                        </div>
                        <div className="mentorlist__filter-right">

                            <div className='mentorlist__filter-price'>
                                {/* <Filters
                                region={region}
                                handleSelect={handleSelect}
                            /> */}


                            </div>
                            <div className='mentorlist__filter-area'>
                            </div>
                        </div>
                    </div>
                    <div className="mentorlist__nav-filter">

                        {/* <SearchInput onSearch={handleSearch} /> */}

                    </div>
                </div>
                <div className="mentorlist__contact">Can’t decide on a mentor? Don’t worry, we will help you out. <span><Link>Talk with Us</Link></span></div>
                <div className='mentorlist__card-container'>
                    <MentorCard />
                    <MentorCard />
                    <MentorCard />
                    <MentorCard />
                    <MentorCard />
                </div>

            </div>
        </div>
        <Footer/>
    </>

    )
}
export default MentorList

const priceOptions = [
    { id: 1, title: 'All' },
    { id: 2, title: '₹499 - ₹2499' },
    { id: 3, title: '₹2500 - ₹4999' },
    { id: 4, title: '₹5000 - ₹9999' },
    { id: 5, title: 'More than ₹9999' },
];