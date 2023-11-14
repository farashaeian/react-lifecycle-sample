import { useEffect } from "react";

const SecondClock = ({ date, color }) => {

    // execute for all purposes:
    // useEffect(()=>{
    //     console.log("SecondClock.jsx - useEffect");
    // });

    useEffect(() => {
        console.log("SecondClock.jsx - Mount useEffect");
        return () => {
            console.log("SecondClock.jsx - Unmount useEffect");
        };
    }, []);

    useEffect(() => {
        console.log("SecondClock.jsx - Update useEffect");
    }, [color, date]);


    const style = {
        color: color ? "tomato" : "black",
    };
    return (
        <>
            <p style={style}>
                ساعت در حال حاضر برابر: {date.toLocaleTimeString()}
            </p>
        </>
    );
}

export default SecondClock;