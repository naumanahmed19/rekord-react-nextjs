const someCommonValues = ['common', 'values'];


export const handleOpenPlayList = () => {
    const ele = document.getElementById("playlist");
        ele.classList.toggle("control-sidebar-open");
};

export const handleSidebarMenu = () => {
    const ele = document.body;
        ele.classList.toggle("sidebar-collapse");
};




export const html = (markup) => {
    return {__html: markup};
};


export const backgroundImage = imageUrl => {
    return imageUrl != null ? {
        //  backgroundImage: 'url(' + require("../assets/img/demo/v11.jpg") + ')',
        backgroundImage: `url(${imageUrl})`,
    
        }:'';

  };