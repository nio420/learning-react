import useWindowWidth from "./UseWindowWidth"

 
export default function LayoutComponent (){
        const smallScren = useWindowWidth(360);

    return (
        <div>
            <h1> your are browsing on {smallScren ? 'small' : 'large'} scren </h1>
        </div>
    )
 }