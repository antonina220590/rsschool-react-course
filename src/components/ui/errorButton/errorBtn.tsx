import style from './errorBtn.module.css';

function ErrorButton() {
  return (
    <button className={style.errorBtn} type="button">
      Throw Error
    </button>
  );
}

export default ErrorButton;
