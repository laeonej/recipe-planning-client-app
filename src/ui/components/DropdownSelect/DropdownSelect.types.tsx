export type DropdownSelectProps = {
    existingOptionList: string[];
    onSelect: (option: string) => void;
    label: string;
    showInputOnSelection?: boolean;
    clearInputField?: () => void;
}