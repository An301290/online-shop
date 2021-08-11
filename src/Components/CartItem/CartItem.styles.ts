import styled from "styled-components"; 

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
font-family:  'Roboto', sans-serif;
border-bottom: 1px solid gray;
padding-bottom: 20px;

div{
    flex:1
}

.information, .buttons {
    display: flex;
    justify-content: space-around;
}

img{
    max-width: 80px;
    object-fit: contain;
    margin-left: 40px;
}
`; 