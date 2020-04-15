const Like = ({liked, count=0, size="s-18"}) => {


    
    const handleClick = () => {
        
    }
    const classNames= () => {
        let classNames = [size];
        const icon =  liked ? 'icon-heart': 'icon-heart-o'; 
        classNames.push(icon);
        return classNames.join(' ');
    }

  return (
    <div className="clickable" onClick={handleClick}>
      <i className={classNames()}></i>
      <span className="fav-count">
        <span data-favorites-post-count-id="1372" data-siteid="48">
          {count}
        </span>
      </span>
    </div>
  );
};

export default Like;
