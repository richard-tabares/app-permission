import { FaCircleInfo } from "react-icons/fa6"

export const MessageInfo = ({message}) => {
    return (

        <aside className="bg-green-light p-6 rounded-2xl"><FaCircleInfo className="mr-4 inline-block" />{ message }</aside>

    )
}
