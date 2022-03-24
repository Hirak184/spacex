import styled from "styled-components";

const MissionsContainer = styled.div`
width:100%;
text-align:center;
display:flex;
padding-left:3.75rem;
justify-content: space-evenly;
.mission{
    font-size:0.813rem;
    margin: 1.25rem 1.25rem;
    width:18.75rem;
    height: 26.25rem;
    background-color:lime;
    img{
        width:8.125rem;
        height:8.125rem;
    }
}
.missions{
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: 100%;
}
.years{
    margin-top: 1.25rem;
    border-radius: 1.25rem;
    display:flex;
    position:sticky;
    top:0;
    flex-flow:row wrap;
    width:25%;
    height: 7%;
    padding: 1.25rem 0;
    background-color:#eebb99;
    align-items: center;
    justify-content: center;
    .year{
        background:none;
        background-color:#03C03C;
        color:white;
        height:3.125rem;
        width:6.25;
        margin:0.625rem 1.25rem;
        border:none;
        border-radius:0.625rem;
    }
}
@media only screen and (min-device-width: 20rem) and (max-device-width: 47.5rem)
{
    display: block;
    padding-left: 0;
    .years{
        display: block;
        width: 100%;
        height: 2%;
        position: static;
    .year{
        height: 3.125rem;
    }
}
}
`;
export default MissionsContainer;