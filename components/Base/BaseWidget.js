const BaseWidget = ({title,children}) => {
    return (    
    <div className="card mb-3">
    <div className="card-header transparent b-b">
    <strong>{title}</strong>
    </div>
   {children}
</div>);
}
 
export default BaseWidget;