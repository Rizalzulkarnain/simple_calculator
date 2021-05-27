import React from 'react';

const Checkbox = ({ value, onChange }) => {
  return (
    <>
      <input type="checkbox" value={value} onChange={onChange} />
    </>
  );
};

export default Checkbox;
