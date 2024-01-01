import {ParseImpl} from "./parseImpl";

export class Scheduling {
    constructor(parse: ParseImpl) {
        parse.verifyWhetherMakeUpTheConfigHandler().increasePagesHandler().updatePagesHandler()
    }
}
