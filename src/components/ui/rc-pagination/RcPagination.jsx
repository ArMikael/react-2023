import {getPagesArray} from "../../../utils/pagination";

const RcPagination = ({ totalPages, page, changePage }) => {
    let pagesArray = getPagesArray(totalPages);

    return (
        <div className="pagination-container">
            {pagesArray.map(pageItem =>
                <span
                    onClick={() => changePage(pageItem)}
                    key={pageItem}
                    className={pageItem === page
                        ? 'page-button page-button--active'
                        : 'page-button'}
                >
                    {pageItem}
                </span>
            )}
        </div>
    )
};

export default RcPagination;