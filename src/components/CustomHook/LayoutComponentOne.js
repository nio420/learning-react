import useWindowWidth from '../CustomHook/UseWindowWidth';

 export default function LayoutComponentOne (){
        const smallScren = useWindowWidth();

    return (
        <div className= {smallScren ? 'small' : 'large'}>
            <h1> this is another component </h1>
        </div>
    )
 }