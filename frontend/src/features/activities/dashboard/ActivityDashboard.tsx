import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponents from "../../../app/layout/LoadingComponents";
import { useStore } from "../../../app/stores/store";
import ActivityList from "./ActivityList";


export default observer(function ActivityDashboard(){
    const {activityStore} = useStore()
    const {loadActivities, loadingInitial, activityRegistry} = activityStore

    useEffect(() => {
        if(activityRegistry.size <= 1) loadActivities()
    },[activityStore, activityRegistry.size]);
    
    if (loadingInitial) return <LoadingComponents />

    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Activity Filters</h2>
            </Grid.Column>
        </Grid>
    );
})