import { useState } from 'react';

const Footer = () => {
  const [selectedTab, setSelectedTab] = useState('home');

  return (
    <div className="bg-white z-50 flex mx-5 mb-5 flex-row px-[11px] py-[9px] justify-between items-center border border-solid border-[ #9300FF] shadow-custom-1 rounded-[41px]">
      <div
        className={`rounded-[54px] px-[24px] py-[8px] cursor-pointer ${
          selectedTab === 'home' ? 'bg-[#9300FF] ' : ''
        }`}
        onClick={() => setSelectedTab('home')}
      >
        <img className={` ${selectedTab === 'home' ? 'filter-white' : 'image-brown'}`} src="home.svg" />
      </div>
      <div
        className={`rounded-[54px] px-[24px] py-[8px] cursor-pointer ${
          selectedTab === 'search' ? 'bg-[#9300FF] ' : ''
        }`}
        onClick={() => setSelectedTab('search')}
      >
        <img className={` ${selectedTab === 'search' ? 'filter-white' : ''}`} src="mdi_search.svg" />
      </div>
      <div
        className={`rounded-[54px] px-[24px] py-[8px] cursor-pointer ${
          selectedTab === 'user' ? 'bg-[#9300FF]' : ''
        }`}
        onClick={() => setSelectedTab('user')}
      >
        <img className={`${selectedTab === 'user' ? 'filter-white' : ''}`} src="lucide_user.svg" />
      </div>
    </div>
  );
};

export default Footer;
