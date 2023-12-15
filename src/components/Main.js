import React,{useReducer} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import App from "../App";

import OrderPage from "../pages/OrderPage";
import Login from "../pages/Login";
import MenuPage from "../pages/MenuPage";
import Cart from "../pages/Cart";
import ReservationPage from "../pages/ReservationPage";
import ConfirmReservation from "../pages/ConfirmReservation";
import Payment from "../pages/Payment"
export default function Main (){
    const seedRandom =function (seed){
        var m=2**35-31;
        var a= 185852;
        var s= seed%m;
        return function(){
            return(s=s*a%m)/m
        }

    }
    const fetchAPI=function (date){
        let result=[];
        let random=seedRandom(date.getDate());
        for (let i=17; i <= 23; i++){
            if(random()<0.5){
                result.push(i+':00')
            }
            if(random()>0.5){
                result.push(i+':30')
            }
        }
        return result;
    }
    const submitAPI=function (formData){
        return true;
    }

    const initialState={availableTime:fetchAPI(new Date())}
    const[state, dispatch]=useReducer(updateTime,initialState)

    function updateTime(state, date){
        return{availableTime: fetchAPI(new Date())}
    }

    const navigate=useNavigate();
    function SubmitForm(formData){
        if(submitAPI(formData)){
           navigate("/confirm")
        }
    }
    return(
        <main>
                <Routes>
                    <Route exact path="/"  element={<App/>}>
                    </Route>
                    <Route  path="/reservation" element={<ReservationPage availableTime={state} dispatch={dispatch} SubmitForm={SubmitForm}/>}></Route>
                    <Route path="/confirm" element={<ConfirmReservation/>}/>
                    <Route  path="/Order" element={<OrderPage/>}></Route>
                    <Route  path="/login" element={<Login/>}></Route>
                    <Route  path="/menu" element={<MenuPage/>}></Route>
                    <Route path="/cart" element={<Cart/>}></Route>
                    <Route path="/pay" element={<Payment/>}></Route>
                    <Route path="*" element={<div>404 Not Found</div>}></Route>
                </Routes>

        </main>
)
}