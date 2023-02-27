import './App.css';
import {withAuthenticator, Button, Heading, Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const styles = {
    container: { width: 400, height: '100vh', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
}

export default function App() {
    return (
        <div style={styles.container}>
            <Authenticator socialProviders={['google']} >
                {({ signOut, user }) => (
                    <main>
                        <h1>Hello {user.username}</h1>
                        <button onClick={signOut}>Sign out</button>
                    </main>
                )}
            </Authenticator>
        </div>
    );
}
