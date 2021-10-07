import React from 'react';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { warehouse } from 'tools/warehouse/warehouse';
import { StyledWrapper, InnerWrapper } from './Post.styles';

const Post = (props) => {
  const x = props.id;

  const favPost = () => {
    if (!warehouse.includes(x)) warehouse.push(x);
    localStorage.setItem('names', JSON.stringify(warehouse));
    // @ts-ignore: Object is possibly 'null'.
    const tmp = JSON.parse(localStorage.getItem('names'));
    localStorage.setItem('names', JSON.stringify(tmp));
    tmp.push(x);
  };

  return (
    <StyledWrapper id={props.id}>
      <InnerWrapper activeColor>
        <h4>
          {props.id}) {props.title}
        </h4>
        <ButtonIcon onClick={() => favPost()} className='favButton2' />
      </InnerWrapper>
      <InnerWrapper flex>
        <p>{props.description}</p>
      </InnerWrapper>
    </StyledWrapper>
  );
};

export default Post;
