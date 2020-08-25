import { TrackList,BaseWidget } from "..";
const TrackWidget = ({title,tracks}) => {
    return (  
    <BaseWidget title={title} >
        <TrackList tracks={tracks} style="mini"/> 
    </BaseWidget>
);
}
 
export default TrackWidget;