import Buttoon from "../component/Button";

export default {
    title: "Button",
    component: Buttoon,
};

export const Sample = (args) => <Buttoon children="click" {...args} />;
export const Primary = (args) => (
    <Buttoon children="click" variant="outlined" {...args} />
);
export const Secondary = (args) => (
    <Buttoon children="click" variant="contained" {...args} />
);

// const Template = (args) => <Buttoon {...args} />;

// export const Primary = Template.bind({});

// Primary.args = {
//     label: "Button",
// };
