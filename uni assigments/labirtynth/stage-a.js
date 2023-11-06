
import {step,turn,jump,setupAsStage} from "./main.js";
setupAsStage("Stage A", () => {

    for (let i = 0; i < 10; i++) {
      step();
    }
  
    turn('right');
    for (let j = 0; j < 8; j++) {
        step();
    }

    turn('back')
    for (let k = 0; k < 4; k++) {
        step();
    }

    turn('left')
    for (let l = 0; l < 10; l++) {
        step();
    }

    turn('left')
    for (let m = 0; m < 4; m++) {
        step();
    }

    turn('back')
    for (let n = 0; n < 7; n++) {
        step();
    }
  });