import React from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
    h1{
        font-size: 40px;
        color: blue;
    }
    h3{
        font-size: 32px;
        color: blueviolet;
    }
`

function Header (){
    return(
        <StyledDiv>
        <div className='header-container'>
            <h1>Nasa Photo of the Day</h1>
        </div>
        </StyledDiv>
    )
}
export default Header;