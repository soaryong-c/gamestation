import styled from "styled-components";

export const JobsListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  padding: 40px 10px;
`;

export const GamePlayerContainer = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0 auto;
`;

export const GamePlayerIframe = styled.iframe`
  width: 65vw;
  height: 100%;
`;

export const Icon2 = styled.img`
margin-bottom: auto;
`;

export const GamePlayerInfo = styled.div`
  padding: 10px 10px;
  margin: 10px;
  margin-left: 40px;
  width:100%;
`;


export const CloseButton = styled.button`
padding: 0.5rem;
border-radius:50%;
border:0px solid;
`;


export const Rank = styled.span`
padding-left: 0.4rem;
padding-right:0.4rem;
border-radius:50%;
border:0px solid;
background:#ffffff;
color:#111111;
`;
