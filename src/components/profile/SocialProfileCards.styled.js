import styled from "@emotion/styled";

export const Profile = styled.div`
  padding: 50px;
  width: 320px;
  height: 480px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: white;
  border: rgb(68, 63, 63) 1px solid;
`;

export const Description = styled.div`
  width: 100%;
  text-align: center;
`;
export const Avatar = styled.img`
  width: 100%;
  height: 280px;
  border-radius: 100%;
  border: black 2px solid;
`;

export const Name = styled.p`
  font-size: 18px;
  color: #333;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 0px;
`;

export const TagLocation = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  border-radius: 0 0 5px 5px;
  padding: 0px;
`;

export const StatsList = styled.li`
  padding-bottom: 22px;
  line-height: 1.2;
  font-weight: 700;
  font-size: 14px;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d8e0ea;
  width: 85px;
  color: #97a2ae;
  padding-top: 22px;
  font-size: 12px;
  display: flex;
  background-color: #f3f6f9;
`;
