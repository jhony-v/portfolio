import WobblyProgressAtomsLoading from 'common/Loading/WobblyProgressAtomsLoading';
import useDelay from 'hooks/useDelay';
import React, { useEffect } from 'react'
import { useModalVisualize } from 'views/IndexView/contexts/ModalVisualize/ModalVisualizeContext';


const duration = 3000;

type WobblyScreenAnimationProps = {
    text : string;
    isActiveInScreen ?: string;
}
export default function WobblyScreenAnimation({text,isActiveInScreen}:WobblyScreenAnimationProps) {
    const { isEqual,modalActive } = useModalVisualize();
    const { completed, start, reset } = useDelay({duration});
    useEffect(() => {
      if(isEqual(isActiveInScreen)) start();
      else reset();
    },[modalActive]);
    
    return(
        <WobblyProgressAtomsLoading
        duration={duration}
        visible={isEqual(isActiveInScreen) && !completed}
        text={text}
      />
    )
}
