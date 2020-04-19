import { TrackList,Widget } from "..";
const TrackWidget = ({title,tracks}) => {
    return (  
    <Widget title={title} >
        <TrackList tracks={tracks}/> 
    </Widget>
);
}
 
export default TrackWidget;