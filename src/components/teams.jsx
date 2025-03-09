import { motion } from "framer-motion";

const TrustedTeams = () => {
    return (
        <div className="text-white pb-32 w-full flex flex-col items-center gap-5">
            <motion.h3
                initial={{x:30, opacity: 0}}
                whileInView={{x:0, opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1}}
             className="text-xl">Trusted by startups and teams at</motion.h3>
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1.5, delay: 0.5}}
             className="w-3/4 text-2xl text-gray-400 flex flex-wrap gap-5 justify-center">
                <div class="items item1">Freshly Folded</div>|
                <div class="items item2">The Laundry Depot San Diego</div>|
                <div class="items item3">Mach 2 Vending</div>|
                <div class="items item4">National Vending Academy</div>|
                <div class="items item5">Winners Chapel Rhode Island</div>|
                <div class="items item6">Haruna Yahaya Accountants</div>|
                <div class="items item7">Sally Reid</div>|
                <div class="items item8">That's Right Coaching</div>
            </motion.div>
        </div>
    );
}
 
export default TrustedTeams;