import styled from "@emotion/styled";

export const FriendListUl = styled.ul`
  margin-top: 20px;
  box-sizing: inherit;
  margin: 40px auto 0px;
  padding: 0;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  height: 55px;
  padding: 20px;
  margin: auto;
  font-size: 28px;
  color: #1f630e;
  box-shadow: 0 2px 1px rgb(0 0 0 / 20%), 0 1px 1px rgb(0 0 0 / 14%),
    0 1px 3px rgb(0 0 0 / 12%);
  border-radius: 0 0 4px 4px;
`;

export const Status = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 55px;
  height: 55px;
  padding: 0px;
  margin-left: 15px;
  margin-right: 25px;
  font-size: 28px;
  box-shadow: 0 2px 1px rgb(0 0 0 / 20%), 0 1px 1px rgb(0 0 0 / 14%),
    0 1px 3px rgb(0 0 0 / 12%);
  border-radius: 100%;
  background-color: ${(props) => {
    return props.statusIsOnline ? "red" : "green";
  }};
`;

export const Avatar = styled.img`
  width: 60px;
  heigth: 100%;
  border-radius: 10px;
  margin-right: 15px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
