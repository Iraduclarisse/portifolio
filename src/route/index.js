import Home from '../views/Home';
import {Route, Switch} from 'react-router-dom';

const Index=()=>{
return (
<Switch>
    <Route component={Home} exact path={["/","/home"]}/>
</Switch>
)
}

export default Index;