import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";

const SomeH1 = styled.h1`
  color: ${(props) => {
    if (props.w > 50) {
      return "red";
    } else {
      return "blue";
    }
  }};
`;

function Main() {
  return (
    <div>
      <div className="wellcome_ment">
        <div className="작가님이신가요">
          작가님이신가요? 빠르게 작품을 등록하고 판매계약까지 맺어보세요!
        </div>
        <div>
          <Button>작품 등록하기</Button>
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
