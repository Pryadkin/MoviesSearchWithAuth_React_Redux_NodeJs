import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import doubleArrowIcon from '../../img/icons/double-arrow.svg';

import { Button } from 'react-bootstrap';
import './Pagination.scss';

const Pagination = ({ amountBtns = 10, totalPages }) => {
  const history = useHistory();
  const { movie } = useParams();
  const [currentBtn, setCurrentBtn] = useState(1);
  const [firstBtn, setFirstBtn] = useState(1);

  const finalAmountBtns = amountBtns > totalPages ? totalPages : amountBtns;
  const centerBtn = Math.floor(amountBtns / 2) + firstBtn;
  const beginBtn = 1;
  const endBtn = totalPages - finalAmountBtns + 1;

  const arrowBtn = new Array(finalAmountBtns).fill(null);

  const doubleArrowLeftClass = `pagination__double-arrow-left ${
    firstBtn !== 1 ? "" : "hidden"
    }`;

  const doubleArrowRightClass = `pagination__double-arrow-right ${
    (firstBtn + finalAmountBtns - 1) !== totalPages ? "" : "hidden"
    }`;

  useEffect(() => {
    history.push(`/search/${movie}/${currentBtn}`);
    paginationOffset();
  }, [currentBtn]);

  useEffect(() => {
    setCurrentBtn(1);
  }, [movie]);

  const paginationOffset = () => {
    const offset = currentBtn - centerBtn;
    const firstBtnOffset = firstBtn + offset;

    if (offset < 0) {
      setFirstBtn(Math.max(firstBtnOffset, beginBtn))
    }
    if (offset > 0) {
      setFirstBtn(Math.min(firstBtnOffset, endBtn))
    }
  };

  const arrowLeftOnClickHandler = () => {
    setFirstBtn(beginBtn);
    setCurrentBtn(beginBtn);
  };

  const arrowRightOnClickHandler = () => {
    setFirstBtn(endBtn);
    setCurrentBtn(totalPages);
  };

  return (
    <div className="pagination">
      <div className="pagination__container">
        <div className={doubleArrowLeftClass}>
          <img
            src={doubleArrowIcon}
            alt="double arrow left"
            onClick={arrowLeftOnClickHandler}
          />
        </div>

        {arrowBtn.map((item, index) => {
          const titleBtn = index + firstBtn;
          return (
            <Button
              key={index}
              variant="primary"
              onClick={() => setCurrentBtn(titleBtn)}
              className={titleBtn === currentBtn ? "currentBtn" : null}
            >
              {titleBtn}
            </Button>
          )
        }
        )}

        <div className={doubleArrowRightClass}>
          <img
            src={doubleArrowIcon}
            alt="double arrow right"
            onClick={arrowRightOnClickHandler}
          />
        </div>
      </div>
    </div>
  )
}

export default Pagination;