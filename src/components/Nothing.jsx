import nothing from "../lotties/nothing.json";
import Lottie from 'react-lottie'

const options = {
    loop: true,
    autoplay: true,
    animationData: nothing,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    },
    color : '#000'
};

export default function Nothing() {
    return (
        <div className={'w-full mx-auto flex flex-col justify-center items-center'}>
            <Lottie
                options={options}
                height={200}
                width={260}
            />
            <span className={'text-2xl font-bold text-center'}>Vous n'avez rien à afficher</span>
        </div>
    )
}