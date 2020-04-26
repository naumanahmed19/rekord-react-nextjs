const Content = ({ className, content, length }) => {
  function shorten(text, max) {}

  const html = (markup) => {
    if (length)
      markup =  markup.slice(0, length).split(" ").slice(0, -1).join(" ")+ ' ...'
        
    return { __html: markup };
  };

  return <div className={className} dangerouslySetInnerHTML={html(content)} />;
};

export default Content;
