import UnityApp from '../UnityApp/UnityApp';
import './Main.css';

const app1 = {
  index: 1,
  name: 'Tidal Forces',
  json: 'TidalForces/Build/TidalForces.json',
  unityLoader: 'TidalForces/Build/UnityLoader.js',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

const app2 = {
  index: 2,
  name: 'Roche Limit',
  json: '',
  unityLoader: '',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

const app3 = {
  index: 3,
  name: 'Tidal Locking',
  json: '',
  unityLoader: '',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
