import { useSelector } from 'react-redux';
import clsx from 'clsx';
import style from './mainPage.module.css';
import { RootState } from '../../../app/store';

function MainPage() {
  const submissions = useSelector((state: RootState) => state.data.submissions);

  return (
    <main>
      <h1 className={clsx(style.mainH1)}>Form Submission History</h1>
      <div className={style.mainPageWrapper}>
        {submissions.length > 0 ? (
          submissions.map((submission, index) => (
            <div
              key={submission.email}
              className={
                index === submissions.length - 1 ? style.lastTile : style.tile
              }
            >
              {Array.isArray(submission.image) &&
              submission.image.length > 0 ? (
                submission.image.map((image, imgIndex) => (
                  <div key={image} className={clsx(style.imageTile)}>
                    <img
                      src={`data:image/png;base64,${image}`}
                      alt={`uploaded ${imgIndex + 1}`}
                      style={{ width: '100px', height: 'auto' }}
                    />
                  </div>
                ))
              ) : (
                <p>No images uploaded for this submission.</p>
              )}
              <div className={clsx(style.tileName, style.tileText)}>
                Name:
                <p className={clsx(style.tilePara)}>{submission.validName}</p>
              </div>
              <div className={clsx(style.tileText)}>
                Age:
                <p className={clsx(style.tilePara)}>
                  {' '}
                  {submission.age} years old
                </p>
              </div>
              <div className={clsx(style.tileText)}>
                Email:
                <p className={clsx(style.tilePara)}>{submission.email}</p>
              </div>
              <div className={clsx(style.tileText)}>
                Password:
                <p className={clsx(style.tilePara)}> {submission.password}</p>
              </div>
              <div className={clsx(style.tileText)}>
                Gender:
                <p className={clsx(style.tilePara)}>{submission.gender}</p>
              </div>
              <div className={clsx(style.tileText)}>
                Terms Accepted:
                <p className={clsx(style.tilePara)}>
                  {submission.conditions ? 'False' : 'True'}
                </p>
              </div>
              <div className={clsx(style.tileText)}>
                Country:
                <p className={clsx(style.tilePara)}>{submission.country}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No submissions yet.</p>
        )}
      </div>
    </main>
  );
}

export default MainPage;
