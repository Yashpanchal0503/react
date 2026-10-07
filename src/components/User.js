import { useState } from "react";

const User = ({name}) => {
    const [count1] = useState(0);
    const [count2] = useState(1);
    return (
        <div>
            <h1>Count-1 : {count1}</h1>
            <h1>Count-2 : {count2}</h1>
            <h1>{name}</h1>
            <h2>Kurukshetra</h2>
            <h2>yash2007panchal@gmail.com</h2>
        </div>
    );
}
export default User;