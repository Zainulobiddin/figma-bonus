import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Container from "./components/container/container";
import Button from "./components/button/button";
import arrowR from "#/arrowR.svg";
import i1 from "#/i1.svg";
import i2 from "#/i2.svg";
import imgMain1 from "#/imgMain1.svg";
import imgMain2 from "#/imgMain2.svg";
import prod1 from "#/prod1.svg";
import prod2 from "#/prod2.svg";
import prod3 from "#/prod3.svg";
import sitora from "#/sitora.svg";
import dah from "#/dah.svg";
import star1 from "#/star1.svg";
import star2 from "#/star2.svg";
import star3 from "#/star3.svg";
import star4 from "#/star4.svg";
import star5 from "#/star5.svg";
import computer from "#/computer.svg";
import tim from "#/tim.svg";
import CardProduct, { Star } from "./components/card/card";
import Footer from "./components/footer/footer";
import product1 from '#/product1.svg'
import product2 from '#/product2.svg'
import product3 from '#/product3.svg'
import product4 from '#/product4.svg'
import product5 from '#/product5.svg'
import product6 from '#/product6.svg'
import product7 from '#/product7.svg'
import product8 from '#/product8.svg'
import product9 from '#/product9.svg'
import product10 from '#/product10.svg'
import product11 from '#/product11.svg'
import product12 from '#/product12.svg'

const App = () => {
  const products = [
    {
      id: 1,
      src: product1,
      company: "Sony",
      title: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
      price: "$29.80",
    },
    {
      id: 2,
      src: product2,
      company: "Google",
      title: "Cancelling Headset Music Sport Deep Bass",
      price: "$39.80",
    },
    {
      id: 3,
      src: product3,
      company: "Apple",
      title: "T500BT Original Wireless Bluetooth Headphone",
      price: "$69.80",
    },
    {
      id: 4,
      src: product4,
      company: "Toshiba",
      title: "Black Walnut Wood & Aluminum Headphone Stand",
      price: "$70.80",
    },
    {
      id: 5,
      src: product5,
      company: "Sony",
      title: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
      price: "$29.80",
    },
    {
      id: 6,
      src: product6,
      company: "Google",
      title: "Cancelling Headset Music Sport Deep Bass",
      price: "$39.80",
    },
    {
      id: 7,
      src: product7,
      company: "Apple",
      title: "T500BT Original Wireless Bluetooth Headphone",
      price: "$69.80",
    },
    {
      id: 8,
      src: product8,
      company: "Toshiba",
      title: "Black Walnut Wood & Aluminum Headphone Stand",
      price: "$70.80",
    },
    {
      id: 9,
      src: product9,
      company: "Sony",
      title: "4K TV Game Mini Arcade Rocker Console 32GB/64GB",
      price: "$29.80",
    },
    {
      id: 10,
      src: product10,
      company: "Google",
      title: "Cancelling Headset Music Sport Deep Bass",
      price: "$39.80",
    },
    {
      id: 11,
      src: product11,
      company: "Apple",
      title: "T500BT Original Wireless Bluetooth Headphone",
      price: "$69.80",
    },
    {
      id: 12,
      src: product12,
      company: "Toshiba",
      title: "Black Walnut Wood & Aluminum Headphone Stand",
      price: "$70.80",
    },
  ];

  return (
    <div>
      <Container>
        <Header />

        <section className="main">
          <div className="left">
            <div className="texts">
              <p className="ipsum WorkSans">Exclusive Smart Watch</p>
              <h1 className="WorkSans">
                Let go of the Challenge See yourself better
              </h1>
              <p className="lorem Merriweather">
                Connect your conversations with the tools and services that you
                use to get the job done. With over 1,500 apps and a robust API
              </p>
            </div>

            <div style={{ display: "flex", gap: "20px" }} className="">
              <Button>Get Started ➡ </Button>
              <div className="btn2">
                <p>How it works</p>
                <img src={arrowR} alt="" />
              </div>
            </div>

            <div className="nums">
              <div className="num1">
                <img src={i1} alt="" />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3>+12k</h3>
                  <p style={{ marginTop: "-10px" }}>Projects done</p>
                </div>
              </div>
              <div className="num1">
                <img src={i2} alt="" />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h3>68k</h3>
                  <p style={{ marginTop: "-10px" }}>Custommers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="divImg">
            <img className="img1" src={imgMain1} alt="" />
            <img className="img2" src={imgMain2} alt="" />
          </div>
        </section>

        <section className="divProducts">
          <CardProduct
            src={prod1}
            title={"4K TV Game Mini Arcade Rocker Console 32GB/64GB"}
            price={"$29.80"}
          />
          <CardProduct
            src={prod2}
            title={"Cancelling Headset Music Sport Deep Bass"}
            price={"$420.00"}
          />
          <CardProduct
            src={prod3}
            title={"T500BT Original Wireless Bluetooth Headphone Deep"}
            price={"$96.50"}
          />
        </section>

        <section className="main3">
          <h1 style={{ textAlign: "center" }}>
            Featured Products For Pre-Order
          </h1>

          <div className="allProducts">
            {products.map((el) => {
              return (
                <div key={el.id} className="cardOfMap">
                  <img className="imgOfCard" src={el.src} alt="" />
                  <div>
                    <p>{el.company}</p>
                    <h4 style={{ color: "#323A4B", fontWeight: "600" }}>
                      {el.title}
                    </h4>
                    <img src={sitora} alt="" />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h3 style={{ color: "#006D77", fontWeight: "600" }}>
                        {el.price}
                      </h3>
                      <p className="add">Add +</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <div className="texts">
            <h2>Explore by Categories.</h2>
            <p className="lorem Merriweather">
              We provide many categories, choose a category according to your
              expertise to make it easier to find a job.
            </p>
          </div>

          <section className="popular ">
            <div className="computer ">
              <h2>Popular Categories</h2>

              <div className="number">
                <p className="lorem WorkSans">Computer - Laaptop</p>
                <img src={dah} alt="" />
              </div>

              <div className="number">
                <p className="lorem WorkSans">Smart phone & Tablets</p>
                <img src={dah} alt="" />
              </div>

              <div className="number">
                <p className="lorem WorkSans">Fashion & Accessories</p>
                <img src={dah} alt="" />
              </div>

              <div className="number">
                <p className="lorem WorkSans">Halth & Beauty</p>
                <img src={dah} alt="" />
              </div>
            </div>

            <div className="computer2">
              <div className="comp">
                <img src={computer} alt="" />
                <p>Computer for Designer, Art</p>
              </div>

              <div className="comp">
                <img src={computer} alt="" />
                <p>Sport, Home, Outdoor</p>
              </div>

              <div className="comp">
                <img src={computer} alt="" />
                <p>Laptop for office, students</p>
              </div>

              <div className="comp">
                <img src={computer} alt="" />
                <p>Software, card, book</p>
              </div>

              <div className="comp">
                <img src={computer} alt="" />
                <p>Explore More</p>
              </div>
            </div>
          </section>

          <section style={{ margin: "100px auto" }}>
            <h2 style={{ textAlign: "center" }}>
              Cross-border ordering has never been easier
            </h2>
            <div className="colors">
              <Star
                bgColor={"#FFF3EA"}
                src={star1}
                title={"Start Plan"}
                desk={"Choose any ofour packages"}
              />
              <Star
                bgColor={"#FDE2E4"}
                src={star2}
                desk={"Receive concepts In 24 hours"}
                title={"Connect"}
              />
              <Star
                bgColor={"#DBECE5"}
                src={star3}
                desk={"Development Stage"}
                title={"Match"}
              />
              <Star
                bgColor={"#DBECE5"}
                src={star4}
                desk={"After-release Support"}
                title={"Complete"}
              />
              <Star
                bgColor={"#D1ECFD"}
                src={star5}
                desk={"Project launch and checkout"}
                title={"Review"}
              />
            </div>
          </section>
        </section>

        <section className="apple">
          <div>
            <h2>Subscribe our newsletter</h2>
            <p>
              By clicking the button, you are agreeing with our Term &
              Conditions
            </p>
            <input type="text" placeholder="Enter you mail..." />
          </div>

          <img src={tim} alt="" />
        </section>

        <footer>
            <Footer/>
        </footer>
      </Container>
    </div>
  );
};

export default App;
