import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import doubleArrowIcon from '../../img/icons/double-arrow.svg';

import { Button } from 'react-bootstrap';
import './Pagination.scss';

const Pagination = ({ totalPages }) => {
  const amountVisibleBtns = 3;
  const history = useHistory();
  const { movie } = useParams();
  const [currentBtn, getCurrentBtn] = useState(1);
  const [firstVisibleBtn, getFirstVisibleBtn] = useState(1);

  const amountBtn = amountVisibleBtns > totalPages ? totalPages : amountVisibleBtns;
  const [lestVisibleBtn, getLestVisibleBtn] = useState(null);
  const centerVisibleBtn = Math.floor(amountVisibleBtns / 2) + firstVisibleBtn;
  const arrowBtn = new Array(amountBtn).fill(null);

  const doubleArrowLeftClass = `pagination__double-arrow-left ${
    firstVisibleBtn !== 1 ? "" : "hidden"
    }`;

  const doubleArrowRightClass = `pagination__double-arrow-right ${
    (firstVisibleBtn + amountBtn - 1) !== totalPages ? "" : "hidden"
    }`;

  useEffect(() => {
    history.push(`/search/${movie}/${currentBtn}`);
    paginationOffset();
  }, [currentBtn])

  const paginationOffset = () => {
    const next = currentBtn - centerVisibleBtn;

    if ((firstVisibleBtn + next) < 1) {
      getFirstVisibleBtn(1);
      getLestVisibleBtn(amountBtn);
    } else {
      getFirstVisibleBtn(firstVisibleBtn + next);
      getLestVisibleBtn(firstVisibleBtn + amountBtn - 1);
    }

    if (currentBtn === totalPages) {
      getFirstVisibleBtn(totalPages - amountBtn + 1)
    }

    if (lestVisibleBtn >= totalPages) {
      // console.log(centerVisibleBtn)
      if (currentBtn > centerVisibleBtn) {
        getFirstVisibleBtn(lestVisibleBtn - amountBtn + 1)
      }
    }
  };

  const arrowLeftOnClickHandler = () => {
    getFirstVisibleBtn(1);
    getCurrentBtn(1);
  };

  const arrowRightOnClickHandler = () => {
    getFirstVisibleBtn(totalPages - amountBtn + 1);
    getCurrentBtn(totalPages);
  };

  return (
    <div className="pagination">
      <div className={doubleArrowLeftClass}>
        <img
          src={doubleArrowIcon}
          alt="double arrow left"
          onClick={arrowLeftOnClickHandler}
        />
      </div>

      {arrowBtn.map((item, index) => {
        const titleBtn = index + firstVisibleBtn;
        return (
          <Button
            key={index}
            variant="primary"
            onClick={() => getCurrentBtn(titleBtn)}
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
  )
}

export default Pagination;