import { Component } from 'react';
import style from './cards.module.css';
import SWApi from '../../api/api';
import { IPlanet, IProps } from '../../utils/interface';
import Spinner from '../spinner/spinner';

class Cards extends Component<object, { planetList: []; loading: boolean }> {
  myApi = new SWApi();

  constructor(props: IProps) {
    super(props);
    this.state = {
      planetList: [],
      loading: true,
    };
  }

  componentDidMount(): void {
    this.myApi.getAllPlanet().then((planetList) => {
      this.setState({
        planetList,
        loading: false,
      });
    });
  }

  renderCards(arr: IPlanet[]) {
    return arr.map((planet) => {
      const id = planet.url.split('/')[5];
      return (
        <div className={style.cardContainer} key={planet.name}>
          <div className={style.cardImageBox}>
            <img
              className={style.cardImage}
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
              onError={({ currentTarget }) => {
                const newTarget = currentTarget;
                newTarget.onerror = null;
                newTarget.src =
                  'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';
              }}
              alt="planet"
            />
          </div>
          <div className={style.cardInfo}>
            <h3 className={style.cardTitle}>{planet.name}</h3>
            <p className={style.cardDescription}>
              Rotation Period:{' '}
              <span className={style.fetchInfo}>{planet.rotation_period}</span>
            </p>
            <p className={style.cardDescription}>
              Orbital Period:{' '}
              <span className={style.fetchInfo}>{planet.orbital_period}</span>
            </p>
            <p className={style.cardDescription}>
              Diameter:
              <span className={style.fetchInfo}>{planet.diameter}</span>
            </p>
            <p className={style.cardDescription}>
              Climate: <span className={style.fetchInfo}>{planet.climate}</span>
            </p>
            <p className={style.cardDescription}>
              Gravity: <span className={style.fetchInfo}>{planet.gravity}</span>
            </p>
            <p className={style.cardDescription}>
              Terrain: <span className={style.fetchInfo}>{planet.terrain}</span>
            </p>
            <p className={style.cardDescription}>
              Population:{' '}
              <span className={style.fetchInfo}>{planet.population}</span>
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    const { planetList, loading } = this.state;
    if (loading) {
      return <Spinner />;
    }
    const items = this.renderCards(planetList);
    return <div className={style.cardsCommonBox}>{items}</div>;
  }
}

export default Cards;
