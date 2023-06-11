import { useState } from 'react';

const filterList = [
  'all',
  'mine',
  'development',
  'design',
  'marketing',
  'sales',
];

export default function ProjectFilter() {
  const [currentFilter, setCurrentFilter] = useState('all');

  const handleClick = (newFilter) => {
    console.log(newFilter);
    setCurrentFilter(newFilter);
  };

  return (
    <div className='project-filter'>
      <nav>
        <p>Filter by:</p>
        {filterList.map((filter) => (
          <button
            key={filter}
            className={currentFilter === filter ? 'active' : ''}
            onClick={() => handleClick(filter)}
          >
            {filter}
          </button>
        ))}
      </nav>
    </div>
  );
}
