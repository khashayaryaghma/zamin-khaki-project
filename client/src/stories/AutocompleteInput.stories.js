import AutocompleteInput from "../component/AutocompleteInput";

export default {
    title: "Autocomplete",
    component: AutocompleteInput,
};

const Template = (args) => <AutocompleteInput {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: "Autocomplete",
};
