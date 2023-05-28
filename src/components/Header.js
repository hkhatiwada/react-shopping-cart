import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillAmazonCircle, AiFillDelete } from "react-icons/ai";
import "../App.css"

import {
  Badge,
  Button,
  Container,
  Dropdown,
  Form,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
            <Link to ="/">
            <Navbar.Brand>
            <AiFillAmazonCircle
              fontSize={35}
              style={{ marginRight: 10 }}
            ></AiFillAmazonCircle>
             Shopping Cart
          </Navbar.Brand>
            </Link>
          
           
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Products"
              className="me-2"
              aria-label="Search"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </Form>

          <Dropdown align="end">
            <Dropdown.Toggle variant="success" >
              <FaShoppingCart style={{ marginRight: 4 }} />
              <Badge bg="success">{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{backgroundColor:"rgb(13,110,253)", color:"white", border:"4px solid white"}}>
            {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <div className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>Rs. {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </div>
                  ))}
                   <Link to="/cart">
                    <Button  variant="success" style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
              
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
