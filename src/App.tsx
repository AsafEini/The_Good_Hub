import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends React.Component {
    state = {open: false};
    openDialog = () => {
        this.setState({open: true});
    }

    closeDialog = () => {
        this.setState({open: false});
    }

  render() {
    return (
        <BrowserRouter>
            <MuiThemeProvider>
                <div className="App">
                    <AppBar
                        title="The Good Hub"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonClick={
                            this.openDialog
                            }
                    />
                    <Dialog
                        title="ANGULAR RULZZZZ"
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.closeDialog}
                    >
                        The actions in this window were passed in as an array of React objects.
                    </Dialog>
                </div>
            </MuiThemeProvider>
        </BrowserRouter>

    );
  }
}

export default App;
