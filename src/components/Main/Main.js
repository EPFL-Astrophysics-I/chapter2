import UnityApp from '../UnityApp/UnityApp';
import './Main.css';

const app1 = {
  index: 1,
  name: 'Tidal Forces',
  json: 'TidalForces/Build/TidalForces.json',
  unityLoader: 'TidalForces/Build/UnityLoader.js',
  description:
    "Tidal forces describe the variation of one object's gravitational field across and throughout the volume of another. " +
    "The Moon's tidal forces, for example, are laregly responsible for periodic distortions in Earth's shape as well as " +
    'the ocean tides.',
};

const app2 = {
  index: 2,
  name: 'Roche Limit',
  json: '',
  unityLoader: '',
  description:
    'The Roche limit is an invisible boundary surrounding a celestial body, where matter orbiting within this limit tends ' +
    'to break up and form rings.',
};

const app3 = {
  index: 3,
  name: 'Tidal Locking',
  json: '',
  unityLoader: '',
  description:
    'Given enough time, the rotation period of a moon about its own axis will tend to equalize with the orbital ' +
    'period around its host planet. As with many moons and planets in the solar system, our Moon has reached this state, ' +
    'meaning we always see the same face as viewed from Earth.',
};

export default function Main() {
  return (
    <main className='content'>
      <UnityApp {...app1} />
      <UnityApp {...app2} />
      <UnityApp {...app3} />
    </main>
  );
}
