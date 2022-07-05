import React from "react";
import { Button } from "react-bootstrap";

function ProductCard() {
  return (
    <div>
      <div className="picture_name">작품명</div>
      <img
        width="100%"
        height="100%"
        src="https://phinf.pstatic.net/dbscthumb/3329_000_9/20170315200826092_ZYKBVY02G.jpg/9750605_i1.jpg?type=m2000_2000_fst"
      ></img>
      <div className="price_painter">
        <div>리셀특약가</div>
        <div className="작가명">작가명</div>
      </div>
      <Button className="container__detail-btn" variant="outline-primary">
        자세히 보기
      </Button>
    </div>
  );
}

export default ProductCard;
