import React, {Component} from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';

import styles from './css/App.module.css';
import {ANALYTICS, FACEBOOK, INSTAGRAM, TWITTER} from './constants/view-types';
import Analytics from './screens/Analytics';
import FacebookContainer from './containers/FacebookContainer';
import InstagramContainer from './containers/InstagramContainer';
import TwitterContainer from './containers/TwitterContainer';

const viewToComponentEnum = {
    [ANALYTICS]: Analytics,
    [FACEBOOK]: FacebookContainer,
    [INSTAGRAM]: InstagramContainer,
    [TWITTER]: TwitterContainer
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
                <MainComponent />
            </div>
        );
    }
}

export default App;
