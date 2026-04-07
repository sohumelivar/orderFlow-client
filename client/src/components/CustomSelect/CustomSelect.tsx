type Option = {
    value: string;
    label: string;
};

type Props = {
    placeholder: string;
    options: Option[];
};

export const CustomSelect = ({ placeholder, options }: Props) => {
    return (
        <div className="custom-select">
            <button type="button" className="custom-select__trigger">
                <span className="custom-select__placeholder">{placeholder}</span>
            </button>
        </div>        
    );
};
