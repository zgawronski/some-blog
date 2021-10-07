import React, { useState, useEffect } from 'react';
import Button from 'components/atoms/Button/Button';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { StyledWrapper, InnerWrapper } from './Cards.styles';
import { warehouse } from 'tools/warehouse/warehouse';
import { commentStorage } from 'tools/commentStorage/commentStorage';

const Cards = (props) => {
  const [xl, setXl] = useState(false);
  const [cut, setCut] = useState(`${props.description.slice(0, 20)}...`);
  const [text, setText] = useState('Read More...');
  const [title, setTitle] = useState(`${props.title.slice(0, 15)}...`);
  // const [smaller, setSmaller]=useState(true);

  const [comment, setComment] = useState();
  const [addComment, setAddComment] = useState(false);

  useEffect(() => {
    setComment();
    setAddComment(false);
  }, []);

  // const comchk = JSON.parse(localStorage.getItem('comments'));
  const commentBtn = (event) => {
    const ev = event.target.id;
    if (ev === 'addCom') {
      // eslint-disable-next-line no-unused-expressions
      addComment ? (setAddComment(false), commentStorage.push(comment)) : setAddComment(true);
      console.log(commentStorage);
    }
    localStorage.setItem('comments', JSON.stringify(commentStorage));
  };

  const addInput = (event, className) => {
    const a = event.target.value;
    switch (className) {
      case 'comment':
        setComment(a);
        break;
      default:
        // eslint-disable-next-line no-console
        console.log('has no change');
    }
  };

  const changeSize = () => {
    if (!xl) {
      setXl(true);
      setCut(props.description);
      setText('Read less');
      setTitle(props.title);
    } else {
      setXl(false);
      setCut(`${props.description.slice(0, 20)}...`);
      setText('Read More...');
      setTitle(`${props.title.slice(0, 15)}...`);
    }
  };

  const x = props.id;
  const chk = JSON.parse(localStorage.getItem('names'));
  const favPost = () => {
    if (!warehouse.includes(x)) warehouse.push(x);
    if (chk == null) {
      localStorage.setItem('names', JSON.stringify(warehouse));
    } else {
      const items = JSON.parse(localStorage.getItem('names'));
      const tmp = [];
      items.forEach((z) => {
        tmp.push(z);
      });
      tmp.push(x);
      localStorage.setItem('names', JSON.stringify(tmp));
    }
  };

  return (
    <StyledWrapper id={props.id} bigger={xl} smaller={!xl}>
      <InnerWrapper activeColor>
        <h3>
          {props.id}) {title}
        </h3>
        <ButtonIcon onClick={() => favPost()} className='favButton' />
      </InnerWrapper>
      <InnerWrapper flex>
        <p>{cut}</p>
        {addComment !== true ? (
          <p key={props.id}>
            Your Comment: <q>{comment}</q>
          </p>
        ) : (
          <input key={props.id} type='text' onChange={(event) => addInput(event, 'comment')} />
        )}
        <Button onClick={() => changeSize()} secondary>
          {text}
        </Button>
        <Button id='addCom' onClick={(ev) => commentBtn(ev)} className='comment'>
          Add Comment
        </Button>
      </InnerWrapper>
    </StyledWrapper>
  );
};

export default Cards;
