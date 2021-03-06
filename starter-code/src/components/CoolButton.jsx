import React from "react";

const CoolButton = (props) => {
    const allCases = {
        isActive: 'is-active',
        isBlack: 'is-black',
        isCentered: 'is-centered',
        isDanger: 'is-danger',
        isDark: 'is-dark',
        isFocused: 'is-focused',
        isGrouped: 'is-grouped',
        isHovered: 'is-hovered',
        isInfo: 'is-info',
        isInverted: 'is-inverted',
        isLarge: 'is-large',
        isLight: 'is-light',
        isLink: 'is-link',
        isLoading: 'is-loading',
        isMedium: 'is-medium',
        isOutlined: 'is-outlined',
        isPrimary: 'is-primary',
        isRight: 'is-right',
        isRounded: 'is-rounded',
        isSelected: 'is-selected',
        isSmall: 'is-small',
        isStatic: 'is-static',
        isSuccess: 'is-success',
        isText: 'is-text',
        isWarning: 'is-warning',
        isWhite: 'is-white',
      };

    const formatClass = (props) => {
        let result = "button";

        for (let key of Object.keys(props)) {
            if (key in allCases) {
                result += ` ${allCases[key]}`;
            }
        }

        if (props.className) {
            result += ` ${props.className}`;
        }

        return result;
    };

    return (
        <button className={formatClass(props)}>{props.children}</button>
    );
};

export default CoolButton;