import RcInput from "./ui/rc-input/RcInput";
import RcSelect from "./ui/rc-select/RcSelect";
import React from "react";

const PostFilter = ({ filter, setFilter }) => {
    const sortListOptions = [
        {
            name: 'Title',
            value: 'title'
        },
        {
            name: 'Description',
            value: 'body'
        }
    ]

    return (
        <div className="post-filter">
            <RcInput type="text"
                     value={filter.searchQuery}
                     onChange={event => setFilter({ ...filter, searchQuery: event.target.value})}
                     placeholder="Search...">
            </RcInput>

            <RcSelect options={sortListOptions}
                      defaultValue='Title'
                      value={filter.sort}
                      onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}>
            </RcSelect>
        </div>
    );
};

export default PostFilter;