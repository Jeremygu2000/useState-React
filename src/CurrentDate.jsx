import React from 'react';

function CurrentDate() {
  const currentDate = new Date().toDateString();

  return (
    <div>
      <h2>Date du Jour</h2>
      <p>{currentDate}</p>
    </div>
  );
}

export default CurrentDate;
