import React from 'react';

const EditableProfileAttribute = ({ attribute, state, updateState }) => {
  return (
    <div className="flex w-full">
      <p className="w-1/4">{attribute}</p>
      <div className='w-3/4 border-b border-gray-100 pb-2'>
        <input
            type="text"
            value={state}
            onChange={(e) => updateState(e.target.value)}
            className="focus:outline-none"
        />
      </div>

    </div>
  );
};

export default EditableProfileAttribute;
