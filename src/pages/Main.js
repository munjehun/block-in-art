import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "./Main.css";

function Main() {
  return (
    <div className="main">
      <div className="wellcome_ment">
        <div className="작가님이신가요">
          작가님이신가요? 빠르게 작품을 등록하고 판매계약까지 맺어보세요!
        </div>
        <div>
          <Button>
            <Link to="workregister">작품 등록하기 </Link>
            {/* 로그인 안돼있으면 로그인페이지로 이동
                로그인 돼있으면 작품등록페이지로 이동 */}
          </Button>
        </div>
      </div>

      <div className="pictures_list">
        <div className="picture">
          <ProductCard />
        </div>

        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

        {/* <Container>
        <Row>
          <Col lg={4}>
            <ProductCard />
            <div className="container__detail-container">
              <Button
                className="container__detail-btn"
                variant="outline-primary"
              >
                자세히 보기
              </Button>
            </div>
          </Col>
          <Col lg={4}>
            <ProductCard />
            <Button variant="outline-primary">자세히 보기</Button>
          </Col>
          <Col lg={4}>
            <ProductCard />
            <Button variant="outline-primary">자세히 보기</Button>
          </Col>
        </Row>
      </Container> */}
      </div>
    </div>
  );
}

export default Main;
