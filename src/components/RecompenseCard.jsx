import React, {useEffect, useRef} from "react"

// motion
import { motion, useInView, useAnimation } from 'framer-motion'

const RecompenseCard = () => {
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint ipsa inventore distinctio! Dolorem consequatur quia doloremque dignissimos quae, omnis doloribus quos architecto mollitia incidunt nulla, ipsum et cum ad."
    const truncateText = (text, count) => {
        const words = text.split(' ');
        if (words.length > count) {
            return words.slice(0, count).join(' ') + ' (...)';
        }
        return text;
    };

    const truncatedDescription = truncateText(description, 10);

    // Animation
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
        mainControls.start('visible')
        }
    }, [isInView])
    return (
        
        <motion.div
            ref={ref}
            variants={{
            hidden: {
                opacity: 0,
            },
            visible: {
                opacity: 1,
            }
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.2, delay: 0.1}}
            className="card h-fit w-96 bg-base-100 shadow-xl cursor-pointer hover:scale-105 transition-all">
            <figure><img src="/assets/images/achivements.png" alt="Shoes" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">
                    Site pour les I.A.s qui ont perdu leur maître
                    <div className="badge badge-secondary">2nd</div>
                </h2>
                <p>{truncatedDescription}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">ReactJs</div> 
                    <div className="badge badge-outline">PHP</div>
                </div>
                
            </div>
        </motion.div>
    )
}
export default RecompenseCard