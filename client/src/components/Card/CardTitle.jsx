import React from 'react';

const CardTitle = ({ title }) => {
  const maxCountLetters = 55;

  const trimTitle = () => {
    if (title.length > maxCountLetters) {
      let shortTitle = title.slice(0, maxCountLetters);
      if (shortTitle[shortTitle.length - 1] === ' ') {
        shortTitle = shortTitle.slice(0, maxCountLetters - 1);
      }
      return shortTitle + '...';
    }
    return title;
  };

  return (
    <h3
      className="card-title"
      title={title}
    >
      {trimTitle()}
    </h3>
  )
};

export default CardTitle;
