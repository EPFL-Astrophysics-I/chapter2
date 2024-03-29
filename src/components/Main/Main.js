import UnityApp from '../UnityApp/UnityApp';
import './Main.css';
import image1 from './img-load-tidal-forces.png';
import image2 from './img-load-roche-limit.png';
import image3 from './img-load-tidal-locking.png';

const app1 = {
  index: 1,
  name: 'Tidal Forces',
  json: 'TidalForces/Build/TidalForces.json',
  unityLoader: 'TidalForces/Build/UnityLoader.js',
  description:
    "Tidal forces describe the variation of one object's gravitational field across and throughout the volume of another. " +
    "The Moon's tidal forces, for example, are laregly responsible for periodic distortions in Earth's shape as well as " +
    'the ocean tides.',
  image: image1,
  github: 'https://github.com/EPFL-Astrophysics-I/tidal-forces.git',
};

const app2 = {
  index: 2,
  name: 'Roche Limit',
  json: 'RocheLimit/Build/RocheLimit.json',
  unityLoader: 'RocheLimit/Build/UnityLoader.js',
  description:
    'The Roche limit is an invisible boundary surrounding a celestial body, such as a planet or star. ' +
    'Within this limit, orbiting matter tends to break up and form rings.',
  image: image2,
  github: 'https://github.com/EPFL-Astrophysics-I/roche-limit.git',
};

const app3 = {
  index: 3,
  name: 'Tidal Locking',
  json: 'TidalLocking/Build/TidalLocking.json',
  unityLoader: 'TidalLocking/Build/UnityLoader.js',
  description:
    'Given enough time, the rotation period of a moon about its own axis will tend to equalize with the orbital ' +
    'period around its host planet. As with many moons and planets in the solar system, our Moon has reached this state, ' +
    'meaning we always see the same face as viewed from Earth.',
  image: image3,
  github: 'https://github.com/EPFL-Astrophysics-I/tidal-locking/git',
  comment: 'Primary app developer: Théo Damiani.',
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
