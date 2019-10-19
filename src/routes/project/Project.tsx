import React from "react";
import {Route, RouteComponentProps} from "react-router";

import openHeavens from "./openheavens";
import linearAlgebra from "./linear_algebra";
import futMxShuttle from "./fut_mx_shuttle";



const Project: React.FC<RouteComponentProps> = ({ match }) => {
    return (
        <>
            <Route path={`${match.path}/openheavens`} component={openHeavens} />
            <Route path={`${match.path}/fut_mx_shuttle`} component={futMxShuttle} />
            <Route path={`${match.path}/linear_algebra`} component={linearAlgebra} />
        </>
    );
};

export default Project;