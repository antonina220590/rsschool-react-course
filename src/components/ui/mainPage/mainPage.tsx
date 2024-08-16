// import { useSelector } from 'react-redux';
// import { DataState } from '../reactHookForms/reactHookFroms';
// import style from './mainPage.module.css';
// import { ImageState } from '../../../slices/imageSlice';
// import { RootState } from '../../../app/store';

function MainPage() {
  // const countries = useSelector(
  //   (state: DataState) => state.data.selectedCountry
  // );
  // const names = useSelector((state: DataState) => state.data.name);
  // const age = useSelector((state: DataState) => state.data.age);
  // const email = useSelector((state: DataState) => state.data.email);
  // const password = useSelector((state: DataState) => state.data.password);
  // const gender = useSelector((state: DataState) => state.data.gender);
  // const conditions = useSelector((state: DataState) => state.data.conditions);
  // const baseImages = useSelector((state: RootState) => state.image.baseImage);
  // return (
  //   <main>
  //     <div className={style.mainPageWrapper}>
  //     </div>
  //   </main>
  // );
}

export default MainPage;

/* <h2>Uploaded Images</h2>
<div className="image-container">
  {baseImages.length > 0 ? (
    baseImages.map((imageObj, index) => (
      <div key={index} className="tile">
        <img
          src={`data:image/png;base64,${imageObj.image}`}
          alt="uploaded"
          style={{ width: '100px', height: 'auto' }}
        />
      </div>
    ))
  ) : (
    <p>No images uploaded yet.</p>
  )}
</div> */
