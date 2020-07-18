import { TrackList,BaseWidget } from "..";
const TrackWidget = ({title,tracks}) => {
    return (  
    <BaseWidget title={title} >
        <TrackList tracks={tracks}/> 
    </BaseWidget>
);
}
 
export default TrackWidget;