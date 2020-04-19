const Widget = ({title,children}) => {
    return (    
    <div class="card mb-3">
    <div class="card-header transparent b-b">
    <strong>{title}</strong>
    </div>
   {children}
</div>);
}
 
export default Widget;