import React from "react";
import CardItemBegin from "../../components/Cards/CardItemBegin";



export default function CoursIndex({ listItem }) {

    return (<>
        <div className="h-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
            {listItem.map((item,key) => {
                return <CardItemBegin key={key} element={item} />
            })}
        </div>
    </>);
}

