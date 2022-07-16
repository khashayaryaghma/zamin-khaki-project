import Selectopt from "../component/Selectopt"

export default {
    title: "Selectopt",
    component: Selectopt,
};

export const Template = (args) => <Selectopt options={["hi","bye"]} {...args}/>;


