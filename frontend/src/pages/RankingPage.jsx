import React from 'react';
import { useState } from 'react';
import './page-css/ranking-page.scss';
import MainDashboard from './MainDashboard';
import Image from './../image/logo_4.jpg'

const RankingPage = () => {
    const [filter, setFilter] = useState('all'); // Initial filter value

    const handleFilterChange = (e) => {
      setFilter(e.target.value);
    };


      // Filtered ranking data based on the selected option

  // const getFilteredRankingData = (filterOption) => {
  //   // Implement your logic to filter the ranking data based on the selected option
  //   // Return the filtered ranking data
  //   // For example:
  //   // if (filterOption === 'gold') {
  //   //   return rankingData.filter((item) => item.category === 'Gold');
  //   // } else if (filterOption === 'silver') {
  //   //   return rankingData.filter((item) => item.category === 'Silver');
  //   // } else if (filterOption === 'bronze') {
  //   //   return rankingData.filter((item) => item.category === 'Bronze');
  //   // } else {
  //   //   return rankingData; // Return all ranking data if no specific filter is selected
  //   // }
  // };

  // const filteredRankingData = getFilteredRankingData(filter);

  const categories = [
    {
      title: 'Category 1',
      rankHolders: [
        {
          name: 'John Doe',
          photo: 'frontend/src/image/logo_4.jpg',
          achievements: '5 Gold Medals',
        },
        {
          name: 'Jane Smith',
          photo: 'frontend/src/image/logo_4.jpg',
          achievements: '3 Silver Medals',
        },
        {
          name: 'Michael Johnson',
          photo: 'frontend/src/image/logo_4.jpg',
          achievements: '2 Bronze Medals',
        },
      ],
    },
    {
      title: 'Category 2',
      rankHolders: [
        {
          name: 'John Doe',
          photo: 'frontend/src/image/logo_4.jpg',
          achievements: '5 Gold Medals',
        },
        {
          name: 'Jane Smith',
          photo: 'frontend/src/image/logo_4.jpg',
          achievements: '3 Silver Medals',
        },
        {
          name: 'Michael Johnson',
          photo: 'frontend/src/image/logo_4.jpg',
          achievements: '2 Bronze Medals',
        },
      ],
    },
    {
      title: 'Category 3',
      rankHolders: [
        {
          name: 'John Doe',
          photo: 'frontend/src/image/logo_4.jpg',
          achievements: '5 Gold Medals',
        },
        {
          name: 'Jane Smith',
          photo: 'frontend/src/image/logo_4.jpg',
          achievements: '3 Silver Medals',
        },
        {
          name: 'Michael Johnson',
          photo: 'frontend/src/image/logo_4.jpg',
          achievements: '2 Bronze Medals',
        },
      ],
    },
  ];

  return (
    <>
    <MainDashboard>
    <div className='ranking-page'>
      <h2>Ranking Page</h2>
      <div className="filter">
        <label htmlFor="filter">Filter:</label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
          <option value="bronze">Bronze</option>
        </select>
      </div>
      {categories.map((category, index) => (
        <div key={index} className='category'>
          <h3>{category.title}</h3>
          <div className="card-container">
            {category.rankHolders.map((rankHolder, rankIndex) => (
              <div className="card" key={rankIndex}>
                <img src={`url(${Image})`} alt={rankHolder.name} style={{width:"80px", height:"80px"}}/>
                <h4>{rankHolder.name}</h4>
                <p>{rankHolder.achievements}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div></MainDashboard></>
  );
};

export default RankingPage;
