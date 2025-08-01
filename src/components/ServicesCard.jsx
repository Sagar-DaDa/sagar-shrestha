import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLaptop } from "@fortawesome/free-solid-svg-icons"

const ServicesCard = (props) =>
    <div className="p-10 rounded bg-neutral-800 space-y-2">
        <FontAwesomeIcon className="text-2xl" icon={props.icon}/>
        <p className="text-xl font-semibold">{props.serviceName}</p>
        <p className="text-xs">{props.description}</p>
    </div>

export default ServicesCard