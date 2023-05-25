import { computed } from "vue";

function useBackGroundColor(props) {
    return computed(() => {
        const options = {
            danger: "var(--danger-color)",
            info: "var(--info-color)",
            warning: "var(--warning-color)",
            success: "var(--accent-color)",
            secondary: "var(--secondary-color)",
        }
        return options[props.variant];
    });
}

const backGroundColorProps = {
    variant: {
        default: "success",
        validator(value) {
            const options = ["danger", "info", "warning", "success", "secondary"];

            return options.includes(value)
        }
    },
}

export { useBackGroundColor, backGroundColorProps };