import React from 'react';

const Dropdown = ({ title, options, func }) => {
  return (
    <div className="select">
      <select defaultValue="" onChange={func}
        className='bg-zinc-700'
      >
        <option value="" disabled> 
        {title}

        </option>
        {options.map((o, i) => (
          <option key={i} value={o}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
