import Buttoon from "../component/Button";


export default {
    title: "Buttoon",
    component: Buttoon,
};


const Template = (args) => <Buttoon {...args} />;


export const Primary = Template.bind({});

Primary.args = {
    primary: true,
    label: "Button",
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//     label: "Button",
// };

// export const Large = Template.bind({});
// Large.args = {
//     size: "large",
//     label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
//     size: "small",
//     label: "Button",
// };
// export const FirstStory = {
//     args: {
        
//     },
// };
