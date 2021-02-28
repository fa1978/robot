import React from 'react';

function SearchBox({searchfield,searchChange}) {
  return (
  	<div className='pa2'>
        <input className='ba3 pa b--green bg-lightest-blue' 
        type='search'  placeholder='search robots' 
        onChange={searchChange}
        />
    </div>
  	   );
}

export default SearchBox;