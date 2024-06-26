import { getEnv } from '../../env';
import NxWelcome from './nx-welcome';

export function App() {
  const env = getEnv();
  return (
    <div>
      <h1>Welcome to smart-room!</h1>
      <h2>App URL: {env.appUrl}</h2>

      <NxWelcome title="smart-room" />
    </div>
  );
}

export default App;
