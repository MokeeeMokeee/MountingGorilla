import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainContent from '../components/MainContent';
import { GET_NOT_MOUNTING } from '../query/query';

/**
 * @params interface
 */
interface DataProps {
  mountTable: {
    id: number;
    detail: string;
    like: number;
    bad: number;
  }[];
}

const Container = styled.div`
  padding: 10vh 0 5vh 0;
  grid-auto-rows: minmax(200px, 1fr);
  position: relative;
  display: grid;
  list-style: none;
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  grid-gap: 1rem;
`;

const NoMounting: React.FC = () => {
  const [Data, setData] = useState<DataProps>();
  const { loading, data, error } = useQuery(GET_NOT_MOUNTING);

  useEffect(() => {
    if (data) {
      setData(data);
    }
    console.log(data);
  }, [data]);

  return (
    <Container>
      {Data !== undefined
        ? Data.mountTable.map((item, index) => {
            return <MainContent key={index} item={item} />;
          })
        : null}
    </Container>
  );
};

export default NoMounting;
