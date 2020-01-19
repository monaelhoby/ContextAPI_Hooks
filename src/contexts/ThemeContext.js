import React , {Component, createContext} from "react";


export const ThemeContext = createContext() ;

class ThemeContextProvider extends Component {

    state={
        isLightTheme : true,
        light : {syntax:"#555", ui:"#DDD", bg:"#EEE"},
        dark : {syntax:"#DDD", ui:"#333", bg:"#555"}
    }

    ToggleTheme = () => {
        this.setState({isLightTheme: !this.state.isLightTheme})
    }

    render () {
        return (
            <ThemeContext.Provider value={{...this.state,ToggleTheme:this.ToggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider