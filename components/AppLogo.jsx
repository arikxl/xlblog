import React from 'react';

const AppLogo = ({ color }) => {

  return (
    <h1 className={color === 'sec' ? 'logo color' : 'logo'}>XL<span>blog</span></h1>
  )
}

export default AppLogo