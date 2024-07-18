import { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import style from './pagination.module.css';

type PaginationProps = {
  onClickIncrease: (arg: number) => void;
  onClickDecrease: (arg: number) => void;
  onClick: () => void;
};

function Pagination({
  onClickDecrease,
  onClickIncrease,
  onClick,
}: PaginationProps) {
  const maxNumPage = 6;
  const [page, setPage] = useState<number>(
    Number(localStorage.getItem('ATPage')) || 0
  );
  const navigate = useNavigate();
  const { planetId } = useParams();
  const result = Number(planetId?.slice(1));

  const goBack = () => {
    if (result) {
      navigate('/');
    }
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const increasePage = () => {
    if (page < maxNumPage) {
      setPage((prevPage) => prevPage + 1);
    }
    const LSPage = (page + 1).toString();
    localStorage.setItem('ATPage', LSPage);
    setSearchParams({ page: LSPage });
    onClickIncrease(Number(page));
  };

  const searchLS = localStorage.getItem('ATSearch')?.length;

  const changePage = () => {
    if (searchLS) {
      setPage(1);
    }
    onClick();
  };

  const decreasePage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
    const LSPage = (page - 1).toString();
    localStorage.setItem('ATPage', LSPage);
    if (searchParams) {
      setSearchParams({ page: LSPage });
    }
    onClickDecrease(Number(page));
    changePage();
  };

  return (
    <div
      className={style.paginationContainer}
      onClick={goBack}
      role="presentation"
    >
      <button
        className={page === 1 ? style.btn_disabled : style.prevBtn}
        type="button"
        onClick={decreasePage}
      >
        Prev
      </button>
      <div className={style.page}>{page}</div>
      <button
        className={page > 5 ? style.btn_disabled : style.nextBtn}
        type="button"
        onClick={increasePage}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
