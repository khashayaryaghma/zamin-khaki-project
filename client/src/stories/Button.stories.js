import Buttoon from "../component/Button";


export default {
    title: "Button",
    component: Buttoon,
};


const Template = (args) => <Buttoon {...args} />;


export const Primary = Template.bind({});

Primary.args = {
    label: "Button",
};
