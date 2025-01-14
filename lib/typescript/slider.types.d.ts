/// <reference types="react" />
export type SliderProps = {
    value?: number;
    disabled?: boolean;
    min: number;
    max: number;
    onChange: (value: number) => void;
    onComplete?: (value: number) => void;
    width: number;
    height: number;
    borderRadius?: number;
    maximumTrackTintColor?: string;
    minimumTrackTintColor?: string;
    showBallIndicator?: boolean;
    step?: number;
    ballIndicatorColor?: string;
    ballIndicatorWidth?: number;
    ballIndicatorHeight?: number;
    ballIndicatorPosition?: number;
    ballIndicatorTextColor?: string;
    showBackgroundShadow?: boolean;
    shadowProps?: {
        shadowOffsetWidth?: number;
        shadowOffsetHeight?: number;
        shadowOpacity?: number;
        shadowRadius?: number;
        elevation?: number;
        shadowColor?: string;
    };
    renderIndicator?: (value: number) => JSX.Element | null;
};
//# sourceMappingURL=slider.types.d.ts.map