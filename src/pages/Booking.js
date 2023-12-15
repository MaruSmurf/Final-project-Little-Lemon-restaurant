import ReservationPage from "./ReservationPage";

export default function booking(props){
    return(
        <ReservationPage availableTime={props.availableTime} dispatch={props.dispatch}
                         submitForm={props.submitForm} />
    )
}