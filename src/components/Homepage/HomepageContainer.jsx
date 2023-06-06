import Homepage from "./Homepage";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {}
}
let mapDispatchToProps = (dispatch) => {
    return {}
}

const HomepageContainer = connect(mapStateToProps, mapDispatchToProps)(Homepage);

export default HomepageContainer