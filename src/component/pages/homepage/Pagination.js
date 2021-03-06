import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import "./../../../css/style.css";

const Example = (props) => {
  return (
    <Pagination aria-label="Page navigation example" className="pagi">
      <PaginationItem disabled>
        <PaginationLink first href="#" />
      </PaginationItem>

      <PaginationItem disabled>
        <PaginationLink previous href="#" />
      </PaginationItem>

      <PaginationItem active className='pagi-act'>
        <PaginationLink href="#">
          1
        </PaginationLink>
      </PaginationItem>
      
      <PaginationItem>
        <PaginationLink href="#">
          2
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink href="#">
          3
        </PaginationLink>
      </PaginationItem>
      
      <PaginationItem>
        <PaginationLink href="#">
          4
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink href="#">
          5
        </PaginationLink>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      
      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
  );
}

export default Example;