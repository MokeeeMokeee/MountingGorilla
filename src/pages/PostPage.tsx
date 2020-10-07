import { useMutation } from '@apollo/client';
import { Button, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ADD_MOUNT } from '../query/query';

const Container = styled.div`
  padding: 10vh 1rem;
`;

const Content = styled.div`
  max-width: 20rem;
  margin: auto;
`;

const CustomButton = styled(Button)`
  margin: 2rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PostPage: React.FC = () => {
  const [detail, setDetail] = useState<string>('');
  const [addMount, { data }] = useMutation(ADD_MOUNT);
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);
    switch (name) {
      case 'detail':
        setDetail(value);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (data) {
      console.log(data);
      alert('どんどんマウントしていこうぜ！！');
    }
  }, [data]);

  const postMount = () => {
    if (detail === '') {
      alert('お前自慢することないん？？？？？？？？');
      return 0;
    }
    // ここにマウントを送る処理
    addMount({ variables: { detail: detail } });
  };

  return (
    <Container>
      <Content>
        <TextField
          name='detail'
          onChange={handleInputChange}
          id='outlined-multiline-static'
          multiline
          variant='outlined'
          inputProps={{ maxLength: 120 }}
          helperText={`${detail.length}/120`}
          value={detail}
          fullWidth
        />
        <CustomButton
          onClick={() => postMount()}
          variant='contained'
          color='primary'
        >
          マウントを投稿する
        </CustomButton>
      </Content>
    </Container>
  );
};

export default PostPage;
