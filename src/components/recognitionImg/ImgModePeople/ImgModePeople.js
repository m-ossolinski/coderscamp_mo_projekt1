import './ImgModePeople.css';

const createImgElementPeopleMode = (imgBase64) => {
  const img = new Image();
  img.src = imgBase64;
  img.classList.add('swq_recognitionimg-people');
  return img;
};

export default createImgElementPeopleMode;
