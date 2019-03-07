import React, {Component} from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';

import styles from './css/App.module.css';
import {ANALYTICS, FACEBOOK, INSTAGRAM, TWITTER} from './constants/view-types';
import Instagram from './screens/Instagram';
import Facebook from './screens/Facebook';
import Twitter from './screens/Twitter';
import Analytics from './screens/Analytics';

const viewToComponentEnum = {
    [ANALYTICS]: Analytics,
    [FACEBOOK]: Facebook,
    [INSTAGRAM]: Instagram,
    [TWITTER]: Twitter
};

class App extends Component {
    _getComponent = () => {
        const {currentView} = this.props;

        return viewToComponentEnum[currentView];
    };

    render() {
        const {setCurrentView} = this.props;
        const MainComponent = this._getComponent();

        return (
            <div className={styles.wrapper}>
                <ButtonGroup
                    className={styles.buttonGroupWrapper}
                >
                    <Button
                        onClick={() => setCurrentView(INSTAGRAM)}
                        size={'30'}
                        variant={'secondary'}
                    >
                        {'Instagram'}
                    </Button>
                    <Button
                        onClick={() => setCurrentView(FACEBOOK)}
                        size={'30'}
                        variant={'secondary'}
                    >
                        {'Facebook'}
                    </Button>
                    <Button
                        onClick={() => setCurrentView(TWITTER)}
                        size={'30'}
                        variant={'secondary'}
                    >
                        {'Twitter'}
                    </Button>
                    <Button
                        onClick={() => setCurrentView(ANALYTICS)}
                        size={'30'}
                        variant={'secondary'}
                    >
                        {'Analytics'}
                    </Button>
                </ButtonGroup>
                <MainComponent {...this.props} />
            </div>
        );
    }
}

export default App;
