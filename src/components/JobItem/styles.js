import styled from "styled-components";
import { rgba, darken } from "polished";

export const JobItemContainer = styled.a`
  background: #404a42;
  border-radius: 20px;
  height: 380px;
  overflow: hidden;
  color: #fff;
  transition: 0.4s;
  

  &:hover {
    filter: brightness(1.2);
    transform: scale(0.98);
  }
  
  > section {
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    height: calc(100% - 50px);
  }
`;

export const JobBanner = styled.div`
  width: 100%;
  background-color: ${(props) => props.bgColor};
  background-image: url("https://www.transparenttextures.com/patterns/dark-mosaic.png");
  height: 50px;
`;

export const JobDetails = styled.section`
  strong,
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  strong {
    font-size: 18px;
    -webkit-line-clamp: 3;
  }

  p {
    margin-top: 15px;
    opacity: 0.6;
    font-size: 14px;
    line-height: 20px;
    -webkit-line-clamp: 2;
  }
`;

export const JobTags = styled.section`
  margin-top: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 3px;
  margin-bottom: auto;
`;

export const Icon = styled.img`
margin-bottom: auto;
`;

export const JobTag = styled.span`
  color: ${(props) => props.color};
  background: ${(props) => darken(0.2, rgba(props.color, 0.1))};
  padding: 3px 8px;margin-bottom: 10px;
  font-size: 12px;
  border-radius: 999px;
  font-weight: 700;
  border: 2px solid ${(props) => props.color};
`;

export const PlayButton = styled.button`
padding: 0.8rem;
border-radius:30px;
border:0px solid;
background:#00d690;
bottom:0px;
color:#111111;
font-weight: 700;
`;
