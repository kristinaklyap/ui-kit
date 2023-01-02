import Notification from "../components/Notification/Notification";
import Button from "../components/Button/Button";
import {useState} from "react";
import Title from "../components/Title/Title";

const NotificationPage = () => {
    const [isInfoVisible, setIsInfoVisible] = useState(false)
    const [isSuccessVisible, setIsSuccessVisible] = useState(false)
    const [isErrorVisible, setIsErrorVisible] = useState(false)

    const onClickHandler = (e) => alert(`Clicked "${e.target.textContent}" button`);

    const onInfoBtnClickHandler = (e) => {
        e.preventDefault()
        setIsInfoVisible(!isInfoVisible)
    }
    const onSuccessBtnClickHandler = (e) => {
        e.preventDefault()
        setIsSuccessVisible(!isSuccessVisible)
    }
    const onErrorBtnClickHandler = (e) => {
        e.preventDefault()
        setIsErrorVisible(!isErrorVisible)
    }
    return (
        <>
            <Title headingLevel={4} label={"Notification Component Page"}/>

            <Button type={"button--secondary"} icon={'beer'} size={"button--medium"} label={"Open info notification"}
                    onClick={onInfoBtnClickHandler}/>

            {isInfoVisible &&
                <Notification
                    type={'info'}
                    description={"My description"}
                    cancelConfig={{
                        label: "Close",
                        onClick: onInfoBtnClickHandler,
                        type: "button--secondary",
                    }}
                    approveConfig={{
                        label: "Confirm",
                        onClick: onClickHandler,
                    }}
                />
            }

            <Button type={"button--secondary"} icon={'checkmark'} size={"button--medium"} label={"Open success notification"}
                    onClick={onSuccessBtnClickHandler}/>

            {isSuccessVisible &&
                <Notification
                    type={'success'}
                    description={"My description"}
                    cancelConfig={{
                        label: "Close",
                        onClick: onSuccessBtnClickHandler,
                        type: "button--secondary",
                    }}
                    approveConfig={{
                        label: "Confirm",
                        onClick: onClickHandler,
                    }}
                />
            }

            <Button type={"button--secondary"} icon={'cross'} size={"button--medium"} label={"Open error notification"}
                    onClick={onErrorBtnClickHandler}/>

            {isErrorVisible &&
                <Notification
                    type={'error'}
                    description={"My description"}
                    cancelConfig={{
                        label: "Close",
                        onClick: onErrorBtnClickHandler,
                        type: "button--secondary",
                    }}
                    approveConfig={{
                        label: "Confirm",
                        onClick: onClickHandler,
                    }}
                />
            }
        </>
    );
};
export default NotificationPage;
