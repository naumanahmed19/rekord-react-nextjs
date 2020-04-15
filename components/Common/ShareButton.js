const ShareButton = () => {


    const handleClick = ()=>{

    }
  return (
    <div>
      <a href="#" className="ml-3 sharer" onClick={handleClick}> 
        <i className="icon-share-1 s-24"></i>
      </a>
      <div className="sharer-bar d-flex justify-content-around">
        <a
          href="#"
          className="social_share"
          data-title="Once Upon A Time"
          data-url="
          http://xvelopers.com/wp/themes/rekord/track/once-upon-a-time/"
          data-image=""
          data-type="fb"
          data-fb-api-id="288785018619405"
        >
          <i className="fa fa-facebook"></i>
        </a>
        <a
          href="#"
          className="social_share"
          data-title="Once Upon A Time"
          data-url="
          http://xvelopers.com/wp/themes/rekord/track/once-upon-a-time/"
          data-image=""
          data-type="tw"
        >
          <i className="fa fa-twitter"></i>
        </a>
        <a
          href="#"
          className="social_share"
          data-title="Once Upon A Time"
          data-url="
          http://xvelopers.com/wp/themes/rekord/track/once-upon-a-time/"
          data-image=""
          data-type="whatsapp"
        >
          <i className="fa fa-whatsapp"></i>
        </a>
        <a
          href="#"
          className="social_share"
          data-title="Once Upon A Time"
          data-url="
          http://xvelopers.com/wp/themes/rekord/track/once-upon-a-time/"
          data-image=""
          data-type="email"
        >
          <i className="fa fa-envelope-o"></i>
        </a>
      </div>
    </div>
  );
};

export default ShareButton;
