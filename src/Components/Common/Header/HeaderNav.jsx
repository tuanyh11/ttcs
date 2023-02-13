import React from "react";
import { Col, Container, Row } from "reactstrap";

const langues = [
  {
    id: 1,
    name: "English"
  },
  {
    id: 2,
    name: "Français"
  }, 
  {
    id: 3,
    name: "Español"
  }
]



const HeaderNav = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div class="top-left">
              {" "}
              <ul id="menu-top-left" class="top-left-menu top-menu">
                <li
                  id="menu-item-698"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-698"
                >
                  {langues.map((langue) => {
                    return (
                      <a
                        href="#"
                        key={langue.id}
                        class="menu-link menu-link-type-custom menu-link-object-custom menu-link-has-children menu-link-698"
                      >
                        {langue.name}
                      </a>
                    );
                  })}
                </li>{" "}
                <li
                  id="menu-item-702"
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-702"
                >
                  <a href="#">USD</a>{" "}
                  <ul class="sub-menu">
                    {" "}
                    <li
                      id="menu-item-704"
                      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-704"
                    >
                      <a href="#">USD</a>
                    </li>{" "}
                    <li
                      id="menu-item-703"
                      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-703"
                    >
                      <a href="#">EUR</a>
                    </li>{" "}
                    <li
                      id="menu-item-705"
                      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-705"
                    >
                      <a href="#">GBR</a>
                    </li>{" "}
                  </ul>{" "}
                </li>{" "}
              </ul>
            </div>
          </Col>

          <Col></Col>

          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderNav;
