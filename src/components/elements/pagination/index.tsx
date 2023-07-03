import React from "react";
import {Link} from "gatsby";
import './styles.scss';

type Page = {
  currentPage: number;
  totalPages: number;
}
export default function Pagination ({currentPage, totalPages}: Page) {
  const newer = currentPage === 2 ? '/articles' : '/articles' + (currentPage - 1);
  return (
    <div className={'wrapper'}>
      <div className={'pagination'}>
        { currentPage !== 1 &&
            <Link to={newer} className={'newer'}>Newer</Link>
        }
        { currentPage === 1 &&
            <span className={'newer'}>Newer</span>
        }

        {currentPage !== totalPages &&
            <Link
                className={'previous'}
                to={'/articles/' + (currentPage + 1)}
            >Previous</Link>
        }
        { currentPage === totalPages &&
            <span className={'previous'}>Previous</span>
        }
      </div>
    </div>
  );
}
