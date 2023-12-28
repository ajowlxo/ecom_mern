import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 50px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
  align-items: center;
`;
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  display: flex;
  padding: 5px;
  align-items: center;
  border: 0.5px solid gray;
  border-radius: 5px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
function Navbar() {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ fontSize: 18, color: "lightgray" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to="/" style={linkStyle}>
              GARMS.
            </Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/login" style={linkStyle}>
              LOGIN{" "}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/register" style={linkStyle}>
              REGISTER{" "}
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cart" style={linkStyle}>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
