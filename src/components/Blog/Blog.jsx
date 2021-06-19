import React from 'react';
import Card from 'components/Card/Card';
import styled from 'styled-components';
import Colors from 'styledHelpers/Colors'
import Input from 'styledHelpers/Input'

const HeadWrapper = styled.div`
margin-top: 50px;
`;
const BlogDiv = styled.div`
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 grid-gap: 85px;
 padding: 25px 150px 25px 70px;
`;

const HeaderDiv = styled.div`
    h2{
        margin: 25px 0 0 0;
        color: ${Colors.primary};
    }
    p{
        color: ${Colors.primary};
        margin: 0;

    }

`;

// eslint-disable-next-line react/prefer-stateless-function
class Blog extends React.Component {
    render(){

        return (
        <HeadWrapper>
        <HeaderDiv>
            <Input search placeholder='search' />
            <h2>Some Blog </h2>
            <p>6 cards</p>
        </HeaderDiv>
        <BlogDiv>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </BlogDiv>
        </HeadWrapper>
        );
    };
}

export default Blog;