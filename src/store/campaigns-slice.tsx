import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import CampaignData from '../models/campaign_data';
type campaignsState = {
    campaignDatas: CampaignData[];
}
const initialState: campaignsState = {
    campaignDatas: []
}
export const campaignSort = (campaigns: CampaignData[]) => {
    let sorted = campaigns.slice().sort((a:CampaignData, b:CampaignData) => {
        return b['score'] - a['score'];
    });
    return campaigns.map((cam: CampaignData) => {
        return {
            ...cam,
            rank: sorted.indexOf(cam) + 1
        }
    });
}
const campaignsSlice = createSlice({
    name:'campaigns',
    initialState,
    reducers: {
        setCampaigns(state: campaignsState, action: PayloadAction<{ campaignDatas: CampaignData[] }>) {
            state.campaignDatas = campaignSort(action.payload.campaignDatas);
        },
        setRandomScores(state: campaignsState, action: PayloadAction<{ randomIndex: number, randomScore: number }>) {
            state.campaignDatas = campaignSort(state.campaignDatas.map((campaign: CampaignData, index: number) => {
                    if (index === action.payload.randomIndex) {
                        campaign.score += action.payload.randomScore
                    }
                    return campaign
                })
            );
        }
    }
});
const campaignsActions = campaignsSlice.actions;

export const fetchCampaigns = () => {
    return async (dispatch: Dispatch) => {
        try {
            const API_URL = 'https://webcdn.17app.co/campaign/pretest/data.json'
            const response = await fetch(API_URL);
            const responseData = await response.json();
            dispatch(campaignsActions.setCampaigns({ campaignDatas: responseData }));
        } catch (error) {
            console.log(error);
        }
    }
}

export const setRandomScore = (randomIndex:number, randomScore:number) => {
    return (dispatch: Dispatch) => {
        dispatch(campaignsActions.setRandomScores({ randomIndex, randomScore }))
    }
}

export default campaignsSlice;