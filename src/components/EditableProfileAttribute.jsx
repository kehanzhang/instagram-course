import React from 'react';

const EditableProfileAttribute = ({ attribute, state, updateState }) => {
  return (
    <div className="flex w-full">
      <p className="w-1/4">{attribute}</p>
      <input
        type="text"
        value={state}
        onChange={(e) => updateState(e.target.value)}
        className="w-3/4 focus:outline-none"
      />
    </div>
  );
};

export default EditableProfileAttribute;
