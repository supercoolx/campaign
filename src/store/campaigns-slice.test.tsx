import campaignSlice, { campaignSort } from './campaigns-slice';

const previousState = {
    campaignDatas: []
}

describe('Redux test', () => {

    test('should add users', async () => {
        const response = await fetch('https://webcdn.17app.co/campaign/pretest/data.json');
        const users = await response.json();
        expect(
            campaignSlice.reducer(
                previousState,
                campaignSlice.actions.setCampaigns({ campaignDatas: users })
            )
        ).toEqual({
            campaignDatas: campaignSort(users)
        });
    });
});