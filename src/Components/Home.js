import React from "react";
import Body from "./Body";
import BookList from "./Booklist";
import { Row,Col } from "reactstrap";
import web1 from "./img.png";
import web2 from "./img1.png";
import web3 from "./sellnow.png";
import web4 from "./girl.png";

function Home() {
    return(
        <div>
          <div className="container">
    <Row>
      {/* <div className="image">
        <img src={web1} alt="Image" />
      </div> */}
      <Col>
      <div className="image">
        <img src={web2} alt="Image" />
      </div>
      </Col>

      <Col>
      <div className="image">
        <img src={web1} alt="Image" />
      </div>
      </Col>

      <Col>
      <div className="image">
        <img src={web3} alt="Image" />
      </div>
      </Col>
      <Col>
      <div className="image">
        <img src={web4} alt="Image" />
      </div>
      </Col>
      </Row>

          </div>
              <div
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  height: '15vh'
                }}
              >
                <div className="jumbotron-container">
                  <p className="jumbotron-text">Recently Added Books</p>
                </div>
              </div>
         
              <BookList />
         
          </div>

    );
}
export default Home