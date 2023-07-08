import {motion,AnimatePresence} from 'framer-motion';
import {useSnapshot} from 'valtio';

import { CustomButton } from '../components';
import state from '../store/index';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';

const Home = () => {

    const snap=useSnapshot(state);

  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className="home" {...slideAnimation('left')}>
                <motion.header {...slideAnimation("down")}>
                    <img src="./threejs.png" 
                     alt=""
                     className="w-8 h-8 object-contain" />
                </motion.header>

                <motion.div className="home-content" {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className="head-text">
                            THE BAGEL <br className="xl:block hidden"/> EFFECT.
                        </h1>
                    </motion.div>
                    <motion.div>
                        <p className="max-w-xl font-normal text-gray-600 text-base">
                            In a twist of the multiverse, Peter Parker found himself caught in the "bagel effect" phenomenon,
                            where every purchase he made duplicated itself across parallel dimensions.
                        </p>

                        <CustomButton
                            type="filled"
                            title="Customize it"
                            handleClick={() => state.intro = false}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home 