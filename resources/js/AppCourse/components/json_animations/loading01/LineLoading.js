import Lottie, { useLottie } from "lottie-react";
import lineLoading from "./lineLoading.json";

export default function LineLoading() {
    // const options = {
    //     animationData: lineLoading,
    //     loop: true,
    //     autoplay: true,
    // };
    // const { View } = useLottie(options);
    // return View;
    return <Lottie className="w-96 h-96" animationData={lineLoading} />
}


// ou

// import React from 'react';
// import lottie from "lottie-web";
// import lineLoading from "./lineLoading.json";

// export default function LineLoading() {
//     React.useEffect(() => {
//         lottie.loadAnimation({
//             container: document.querySelector("#react-logo"),
//             animationData: lineLoading,
//             renderer: "svg",
//             loop: true,
//             autoplay: true,
//         });
//     }, []);
//     return <div id="react-logo" style={{ width: 200, height: 200 }} />
// }
