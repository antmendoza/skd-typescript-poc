import {Databasedswitch} from "./workflow";
import {DataConditionsType, DefaultTransitionType} from "./types";


export class DatabasedswitchBuilder {


    // @ts-ignore
    private model: Databasedswitch = {
        type: "switch"
    }


    withName(value: string): DatabasedswitchBuilder {
        this.model.name = value;
        return this;
    }

    withDataConditions(value: DataConditionsType): DatabasedswitchBuilder {
        this.model.dataConditions = value;
        return this;
    }


    withDefault(value: DefaultTransitionType): DatabasedswitchBuilder {
        this.model.default = value;
        return this;
    }

    build() {
        return this.model;
    }
}

