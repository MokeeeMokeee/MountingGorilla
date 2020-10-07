import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ManGorilla from '../assets/images/MainGorilla.jpg';
import backgroundDetail from '../assets/images/backgroundDetail.png';
import { ThumbUp, ThumbDown } from '@styled-icons/material';
import { useMutation } from '@apollo/client';
import { UPDATE_BAD_COUNT, UPDATE_LIKE_COUNT } from '../query/query';

/**
 * @params interface
 */
interface DataProps {
  item: {
    id: number;
    detail: string;
    like: number;
    bad: number;
  };
}

interface backgroundImageProps {
  img: string;
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0.5rem;
`;

const PostContent = styled.div<Pick<backgroundImageProps, 'img'>>`
  flex: 1 1 0;
  padding: 1rem;
  border: 2px solid #000;
  border-radius: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  background-image: url(${(props) => props.img});
  background-repeat: round;
  &::after {
    content: '';
    position: absolute;
    bottom: 1rem;
    right: -15px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-left: 15px solid #000;
    border-bottom: 5px solid transparent;
  }
`;

const DetailContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex: 1;
  margin-bottom: 0.5rem;
`;
const Detail = styled.p`
  white-space: pre-wrap;
  line-height: 1.125;
  font-weight: bold;
  display: inline-block;
  color: #ffffff;
  text-shadow: 2px 2px 1px #003366, -2px 2px 1px #003366, 2px -2px 1px #003366,
    -2px -2px 1px #003366, 2px 0px 1px #003366, 0px 2px 1px #003366,
    -2px 0px 1px #003366, 0px -2px 1px #003366;
`;

const UserContent = styled.div`
  flex: 0 1 4rem;
  display: flex;
  align-items: flex-end;
`;

const UserImage = styled.img`
  width: 4rem;
  height: 4rem;
  /* border-radius: 50%; */
`;
const ButtonContent = styled.div`
  display: flex;
  justify-content: space-around;
  padding-right: 4rem;
`;

const Button = styled.button`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  width: 6rem;
  transition: all 0.25s;
  cursor: pointer;
  outline: none;
`;

const LikeButton = styled(Button)`
  &:hover {
    color: #f00;
    border-color: #f00;
  }
`;
const BadButton = styled(Button)`
  &:hover {
    color: #00f;
    border-color: #00f;
  }
`;

const GoodJob = styled(ThumbUp)`
  width: 1rem;
  height: 1rem;
`;
const BadJob = styled(ThumbDown)`
  width: 1rem;
  height: 1rem;
`;

const ButtonText = styled.span`
  margin-left: 0.5rem;
`;

const CountContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Count = styled.p`
  font-weight: bold;
  margin-left: 0.5rem;
`;

const MainContent: React.FC<DataProps> = ({ item }) => {
  const [goodCount, setGoodCount] = useState(0);
  const [badCount, setBadCount] = useState(0);
  const [updateBadCount] = useMutation(UPDATE_BAD_COUNT);
  const [updateLikeCount] = useMutation(UPDATE_LIKE_COUNT);

  useEffect(() => {
    setGoodCount(item.like);
    setBadCount(item.bad);
  }, []);

  const likeCount = (contentId: number) => {
    console.log(contentId);
    setGoodCount(goodCount + 1);
    updateLikeCount({ variables: { id: contentId, like: goodCount + 1 } });
    alert('ウホォォォォォォォ！！！！！！！');
  };

  const noLikeCount = (contentId: number) => {
    console.log(contentId);
    setBadCount(badCount + 1);
    updateBadCount({ variables: { id: contentId, bad: badCount + 1 } });

    alert('ウホ。。。');
  };

  return (
    <Content>
      <DetailContent>
        <PostContent img={backgroundDetail}>
          <Detail>{item.detail}</Detail>
        </PostContent>

        <UserContent>
          <UserImage src={ManGorilla} />
        </UserContent>
      </DetailContent>
      <ButtonContent>
        <LikeButton onClick={() => likeCount(item.id)}>
          <ButtonText>ウホウホ!!</ButtonText>
          <CountContent>
            <GoodJob />
            <Count>{goodCount}</Count>
          </CountContent>
        </LikeButton>
        <BadButton onClick={() => noLikeCount(item.id)}>
          <ButtonText>ウホ...</ButtonText>
          <CountContent>
            <BadJob />
            <Count>{badCount}</Count>
          </CountContent>
        </BadButton>
      </ButtonContent>
    </Content>
  );
};

export default MainContent;
