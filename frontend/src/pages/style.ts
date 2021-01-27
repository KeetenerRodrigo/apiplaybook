import styled from 'styled-components';

export const Title = styled.h1` font-size: 48px;
color: #3a3a3a;
max-width: 450px;
line-height: 56px;

margin-top: 80px;
`;

export const Form = styled.form` margin-top: 40px;
max-width: 700px;

display:flex;

input {
  flex: 1;
  height: 70px;
  padding: 0 24px;
  border: 0;
  border-radius: 5px 0 0 5px;
  color: #3a3a3a;
  border: 2px solid #fff;
  border-right: 0;

  &::placeholder {
    color: #a8a8b3;
  }
}

`;

export const Informations = styled.div`
margin-top: 80px;
max-width: 700px;

a {
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: block;
  text-decoration: none;
  transition: transform 0.2s;

  &+a {
    margin-top: 16px;
  }

  &:hover {
    transform: translateX(10px);
  }
}

strong {
    margin-top: 25px;
    font-size: 20px;
    color: #3d3d4d;
    align-items:center;
    align-content: center;
    justify-content: center;
    display: flex;
}

.wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items:center;
    align-content: center;
    justify-content: center;
}

.box {
    padding: 1rem;
    margin: 1rem;
    width: calc((100% / 2) - 2rem);

    p {
    font-size: 18px;
    color: #a8a8b3;
    margin-top: 25px;
    display: flex;
    align-items:center;
    align-content: center;
    justify-content: center;
  }
}

`;
