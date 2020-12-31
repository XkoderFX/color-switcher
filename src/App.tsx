import { makeStyles } from "@material-ui/core";
import React from "react";
import { Provider } from "react-redux";
import Border from "./components/Border";
import ColorBlock from "./components/ColorBlock";
import { store } from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Border></Border>
            </div>
        </Provider>
    );
}

export default App;
