"use client"
import React, { useState, useEffect } from 'react';
import Banner from '../Banner/page'; // Adjust the path as needed

// Sample gemstones data with images and descriptions
interface Gemstone {
  id: number;
  name: string;
  color: string;
  type: string;
  hardness: number;
  rarity: string;
  image: string;
  description: string;
}

const gemstones: Gemstone[] = [
  { id: 1, name: 'Ruby', color: 'Red', type: 'Precious', hardness: 9, rarity: 'Rare', image: '/images/ruby.jpg', description: 'Ruby is a pink to blood-red colored gemstone.' },
  { id: 2, name: 'Pokhraj', color: 'Yellow', type: 'Precious', hardness: 8, rarity: 'Rare', image: '/images/pokhraj.jpeg', description: 'Pokhraj, also known as yellow sapphire, is a highly precious, yellow-colored gemstone.' },
  { id: 3, name: 'Nilam', color: 'Blue', type: 'Precious', hardness: 9, rarity: 'Rare', image: '/images/neelam.jpeg', description: 'Nilam, also known as blue sapphire, is a precious gemstone known for its stunning blue color.' },
  { id: 4, name: 'Emerald', color: 'Green', type: 'Precious', hardness: 7.5, rarity: 'Rare', image: '/images/emerald.jpeg', description: 'Emerald is a precious gemstone known for its rich green color.' },
  { id: 5, name: 'Red-Coral', color: 'Red', type: 'Semi-precious', hardness: 3.5, rarity: 'Common', image: '/images/red-coral.jpeg', description: 'Red coral is a semi-precious gemstone known for its deep red color.' },
  { id: 6, name: 'Pearl', color: 'White', type: 'Semi-precious', hardness: 2.5, rarity: 'Common', image: '/images/pearl.jpeg', description: 'Pearl is a semi-precious gemstone formed within the soft tissue of a living shelled mollusk.' },
  { id: 7, name: 'Gomed', color: 'Brown', type: 'Semi-precious', hardness: 7.5, rarity: 'Common', image: '/images/gomed.jpeg', description: 'Gomed, also known as Hessonite, is a semi-precious gemstone that comes in a variety of brown and yellow hues.' },
  { id: 8, name: 'Topaz', color: 'Yellow', type: 'Semi-precious', hardness: 8, rarity: 'Common', image: '/images/topaz.jpeg', description: 'Topaz is a semi-precious gemstone known for its hardness and range of colors, including yellow.' },
  { id: 9, name: 'Catseye', color: 'Green', type: 'Semi-precious', hardness: 8.5, rarity: 'Common', image: '/images/catseye.jpeg', description: 'Catseye is a semi-precious gemstone known for its unique optical effect, resembling the eye of a cat.' },
];

interface Filters {
  colors: string[];
  types: string[];
  rarity: string[];
}

const GemstoneList: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    colors: [],
    types: [],
    rarity: [],
  });
  const [filteredGemstones, setFilteredGemstones] = useState<Gemstone[]>(gemstones);
  const [description, setDescription] = useState<string>('');

  const handleFilterChange = (filterType: keyof Filters, value: string) => {
    if (filters[filterType].includes(value)) {
      // Remove the filter value if already selected
      setFilters((prevFilters) => ({
        ...prevFilters,
        [filterType]: prevFilters[filterType].filter((item) => item !== value),
      }));
    } else {
      // Add the filter value if not already selected
      setFilters((prevFilters) => ({
        ...prevFilters,
        [filterType]: [...prevFilters[filterType], value],
      }));
    }
  };

  useEffect(() => {
    // Filter gemstones based on selected filters
    let filteredList = gemstones.filter((gemstone) => {
      const matchesColor = filters.colors.length === 0 || filters.colors.includes(gemstone.color);
      const matchesType = filters.types.length === 0 || filters.types.includes(gemstone.type);
      const matchesRarity = filters.rarity.length === 0 || filters.rarity.includes(gemstone.rarity);
      return matchesColor && matchesType && matchesRarity;
    });
    setFilteredGemstones(filteredList);
  }, [filters]);

  // Helper function to get Tailwind CSS class for color circle
  const getColorClass = (color: string) => {
    switch (color) {
      case 'Red':
        return 'bg-red-500';
      case 'Blue':
        return 'bg-blue-500';
      case 'Green':
        return 'bg-green-500';
      case 'Purple':
        return 'bg-purple-500';
      case 'Yellow':
        return 'bg-yellow-500';
      case 'White':
        return 'bg-gray-300';
      case 'Brown':
        return 'bg-orange-900';
      default:
        return 'bg-gray-300';
    }
  };

  const handleDescriptionClick = (desc: string) => {
    setDescription(desc);
  };

  const resetDescription = () => {
    setDescription('');
  };

  return (
    <div>
      <Banner onDescriptionClick={handleDescriptionClick} />
      <div className="container mx-auto p-4">
        {description && (
          <div className="bg-white p-4 mb-4 border border-gray-300 rounded">
            <button className="text-sm text-gray-600 hover:text-gray-800 float-right" onClick={resetDescription}>
              Close
            </button>
            <p className="text-lg font-semibold text-black">{description}</p>
          </div>
        )}
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:space-x-12  md:items-start mt-4">
          {/* Colors Filter */}
          <div className="flex flex-col mb-4 md:w-1/4">
  <h3 className="text-lg font-bold mb-2">Colors</h3>
  <div className="grid grid-cols-3 gap-2">
    {['Red', 'Blue', 'Green', 'Yellow', 'White', 'Brown'].map((color) => (
      <button
        key={color}
        className={`px-3 py-2 rounded-full text-sm font-semibold focus:outline-none flex items-center justify-center space-x-1 ${
          filters.colors.includes(color)
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
        onClick={() => handleFilterChange('colors', color)}
        style={{ minWidth: '60px' }} // Adjust as needed for button width
      >
        <span
          className={`w-3 h-3 rounded-full ${getColorClass(color)} ${
            filters.colors.includes(color) ? 'border-white' : 'border-gray-300'
          }`}
        ></span>
        <span>{color}</span>
      </button>
    ))}
  </div>
</div>


          {/* Types Filter */}
          <div className="flex flex-col  mb-4 md:w-1/4">
            <h3 className="text-lg font-bold mb-2">Types</h3>
            <div className="flex items-center space-x-2">
              {['Precious', 'Semi-precious'].map((type) => (
                <button
                  key={type}
                  className={`px-3 py-2 rounded-full text-sm font-semibold focus:outline-none ${
                    filters.types.includes(type)
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                  onClick={() => handleFilterChange('types', type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Rarity Filter */}
          <div className="flex flex-col mb-4 md:w-1/4">
            <h3 className="text-lg font-bold mb-2">Rarity</h3>
            <div className="flex items-center space-x-2">
              {['Rare', 'Common', 'Very Rare'].map((rarity) => (
                <button
                  key={rarity}
                  className={`px-3 py-2 rounded-full text-sm font-semibold focus:outline-none ${
                    filters.rarity.includes(rarity)
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                  onClick={() => handleFilterChange('rarity', rarity)}
                >
                  {rarity}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Display Filtered Gemstones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
  {filteredGemstones.map((gemstone) => (
    <div key={gemstone.id} className="border border-gray-300 rounded p-4 bg-white flex flex-col">
      <div className="relative flex-1">
        <img
          src={gemstone.image}
          alt={gemstone.name}
          className="rounded-lg shadow-lg"
          style={{ width: '100%', height: '250px', objectFit: 'cover' }}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 text-white">
          <h2 className="text-lg font-bold">{gemstone.name}</h2>
          <p className="text-sm">{gemstone.description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center space-x-2">
          
        </div>
        <button
          className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-semibold focus:outline-none"
      
        >
          View Product
        </button>
      </div>
    </div>
  ))}
</div>




      </div>
    </div>
  );
};

export default GemstoneList;


