import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`;

function Products() {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <Container>
      {popularProducts.map((item) => (
        <Link to="/product" style={linkStyle}>
          <Product item={item} key={item.id} />{" "}
        </Link>
      ))}
    </Container>
  );
}

export default Products;
