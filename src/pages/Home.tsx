import React from 'react';
import Campaign from '../components/Campaign';
import styled from 'styled-components';

const HomeLayout = styled.div`
    display: flex;
    justify-content: center;
`

function Home () {
    return (
        <HomeLayout>
            <Campaign/>
        </HomeLayout>
    )
}
export default Home;