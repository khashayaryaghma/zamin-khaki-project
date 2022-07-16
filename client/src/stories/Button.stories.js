import Buttoon from "../component/Button";


export default {
    title: "Button",
    component: Buttoon,
};

export const Sample = (args) => <Buttoon {...args} />;
export const Primary = () => <Buttoon variant="outlined" />;
export const Secondary = () => <Buttoon variant="contained" />;

// const Template = (args) => <Buttoon {...args} />;

// export const Primary = Template.bind({});

// Primary.args = {
//     label: "Button",
// };
