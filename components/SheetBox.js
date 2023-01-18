import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

const SheetBox = ({ sheet }) => {
  return (
    <>
      <Container>
        <div className="box">
          <div className="content">
            <div className="author">{sheet.name}</div>
            <img src={sheet.img} alt="dsa" />
            <p>Number Of Problems : {sheet.length}</p>
            <Link href={`/sheets/${sheet.id}`}>
              <button>SOLVE</button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 350px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1rem;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  color: var(--fourth);
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    overflow: hidden;
    background: var(--box);
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    transition: 0.5s;
    &:hover {
      transform: translateY(-40px);
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: rgba(255, 255, 255, 0.03);
    }

    .content {
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      .author {
        font-size: 24px;
        text-align: center;
        text-transform: uppercase;
        color: var(--fourth);
      }
      img {
        padding: 0.5rem;
        height: 170px;
        width: 260px;
        box-shadow: 0 0 4px 4px white inset;
      }
      p {
        text-align: justify;
      }
      a {
        width: 80%;
        button {
          padding: 16px;
          width: 100%;
          background: transparent;
          border: 2px solid var(--third);
          color: var(--fourth);
          cursor: pointer;
          transition: 0.5s ease-in-out;
          &:hover {
            background: var(--hover);
          }
        }
      }
    }
  }
`;

export default SheetBox;
