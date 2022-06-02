import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { setRandomScore } from '../store/campaigns-slice'
import CampaignData from '../models/campaign_data';
import styled from 'styled-components';
import UserRow from './UserRow';

const Layout = styled.div`
    position: relative;
    width: 326px;
`;

function Campaign() {
    const campaignState = useAppSelector((state) => state.campaigns);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * 10);
            const randomScore = Math.floor(Math.random() * 10000);
            dispatch(setRandomScore(randomIndex,randomScore));
        }, 300)
        return () => {
            clearInterval(interval);
        }
    })
    
    return (
        <Layout>
            {
                campaignState.campaignDatas.map(
                    (campaign:CampaignData ,index:number) => <UserRow campaign={campaign} index={index} />
                )
            }
        </Layout>
    )
}
export default Campaign;