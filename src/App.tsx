import React, { useEffect } from 'react';
import { fetchCampaigns } from './store/campaigns-slice'
import { useAppDispatch } from './hooks';
import Home from './pages/Home';
function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCampaigns())
  }, [dispatch]);
  return (
    <Home/>
  );
}

export default App;
