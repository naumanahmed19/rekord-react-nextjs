const Content = ({className,content}) => {


     const html = (markup) => {
    return {__html: markup};
};

    return (   <div className={className} dangerouslySetInnerHTML={html(content)} /> );

}
 
export default Content;