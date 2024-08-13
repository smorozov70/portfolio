//import React, { useState } from 'react';
import './Toolbar.css';


interface ToolbarProps {
  filters: string[];
  selected: string;
  onSelectFilter: (filter: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ filters, selected, onSelectFilter }) => {

  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`toolbar-button ${filter === selected ? 'active' : ''}`}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );

};

export default Toolbar;