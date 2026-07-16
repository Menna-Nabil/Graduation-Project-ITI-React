import { Outlet } from "react-router-dom"
import img from "../assets/a4f255723a0bf91d3bbff22af7aa7e07.jpg"
export default function Auth_Layout() {
  return (
    <div className="d-flex justify-content-between align-items-center vh-100">
        <div className="w-50">
        <img className="w-100 vh-100" src={img} alt="authLayout" />

        </div>
        <div className="w-50">
        <Outlet/>

        </div>


    </div>
  )
}
