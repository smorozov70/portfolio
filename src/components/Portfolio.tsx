import React, { useState } from 'react';
import Toolbar from "./Toolbar";


const Portfolio: React.FC = () => {

    const filters = ["All", "Websites", "Flayers", "Business Cards"];
    const [selectedFilter, setSelectedFilter] = useState<string>(filters[0]);    

    return (
        <div className="Portfolio">
          <Toolbar
            filters={filters}
            selected={selectedFilter}
            onSelectFilter={(filter) => {
              setSelectedFilter(filter);
            }}/>
        </div>
      );
};

export default Portfolio;