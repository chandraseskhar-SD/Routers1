import React from "react";
import { useForm } from "react-hook-form";

const Form = ()=>{
    return(
        <div>
            <div className="row">
            <div className="col-6">
            <label>
                Username
                <input/>
            </label>
            <label>
                Password
                <input/>
            </label>
            </div>
            <div className="col-6 mt-6">
            <label>
                Email
                <input/>
            </label>
            <label>
                PhoneNumber
                <input/>
            </label>
            </div>
            </div>
        </div>
    )
}
export default Form;