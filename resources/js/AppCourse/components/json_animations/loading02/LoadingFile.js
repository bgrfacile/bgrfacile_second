import React from 'react'
import Lottie, { useLottie } from "lottie-react";
import loadingFile from "./loadingFiles.json";

export default function LoadingFile() {
    // return <Lottie className="w-16 h-16 mx-auto" animationData={loadingFile} />
    const options = {
        animationData: loadingFile,
        loop: true,
        autoplay: true,
    };
    const { View } = useLottie(options);
    return View;
}
