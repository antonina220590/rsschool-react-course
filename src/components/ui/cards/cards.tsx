import { Component } from 'react';
import style from './cards.module.css';
import SWApi from '../../api/api';
import IPlanet from '../../utils/interface';

class Cards extends Component {
  myApi = new SWApi();

  state = {
    planetList: [],
  };

  componentDidMount(): void {
    this.myApi.getAllPlanet().then((planetList) => {
      this.setState({
        planetList,
      });
    });
  }

  renderCards(arr: IPlanet[]) {
    return arr.map((planet) => {
      return (
        <div className={style.cardContainer} key={planet.name}>
          <div className={style.cardImageBox}>
            <img
              className={style.cardImage}
              src="https://starwars-visualguide.com/assets/img/planets/2.jpg"
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
    const { planetList } = this.state;
    if (!planetList) {
      <p>No data available</p>;
    }
    const items = this.renderCards(planetList);
    return <div className={style.cardsCommonBox}>{items};</div>;
  }
}

export default Cards;
