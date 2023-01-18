import styled from "@emotion/styled";
import React from "react";
import { GrInstagram, GrLinkedin, GrGithub } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <Container>
        <div className="author a1">
          <span>Devendra Bedwal</span>
          <div className="row">
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <GrLinkedin />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <GrInstagram />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <GrGithub />
            </a>
          </div>
        </div>
        <div className="author a2">
          <span>Ankur Yadav</span>
          <div className="row">
            <a
              href="https://www.linkedin.com/in/ankur-yadav-aky/"
              target="_blank"
              rel="noreferrer"
            >
              <GrLinkedin />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <GrInstagram />
            </a>
            <a
              href="https://github.com/Ankur-Ydv"
              target="_blank"
              rel="noreferrer"
            >
              <GrGithub />
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: 0 1rem;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: transparent;
  color: var(--primary);
  border-top: 2px solid var(--primary);
  .author {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    span {
      font-size: 20px;
      color: var(--third);
    }
    .row {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      a {
        font-size: 20px;
        &:hover {
          color: var(--third);
        }
      }
    }
  }
  .a2 {
    border-left: 2px solid var(--primary);
  }
`;

export default Footer;
