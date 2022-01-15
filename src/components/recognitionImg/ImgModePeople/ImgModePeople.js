import './ImgModePeople.css';

const createImgElementPeopleMode = (imgBase64) => {
  const img = new Image();
  const url = atob(imgBase64);
  img.src = url;
  img.classList.add('swq_recognitionimg-people');
  return img;
};

export default createImgElementPeopleMode;
