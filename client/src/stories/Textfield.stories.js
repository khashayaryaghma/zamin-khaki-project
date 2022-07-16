import Textfieldd from "../component/Textfield";

export default {
    title: "Textfield",
    component: Textfieldd,
};

export const Filled = (args) => <Textfieldd variant="filled" {...args} />;
export const Outlined = (args) => <Textfieldd variant="outlined" {...args} />;
export const Standard = (args) => <Textfieldd variant="standard" {...args} />;
