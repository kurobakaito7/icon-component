// 进行icon组件的封装

import { CSSProperties, forwardRef, PropsWithChildren, SVGAttributes } from "react";
import cs from 'classnames'
import './index.scss'

type BaseIconProps = {
    className?: string;
    style?: CSSProperties;
    size?: string | string[];
    spin?: boolean;
};

export type IconProps = BaseIconProps & Omit<SVGAttributes<SVGElement>, keyof BaseIconProps>;

export const getSize = (size: IconProps['size']) => {
    if(Array.isArray(size) && size.length === 2) {
        return size as string[];
    }

    const width = (size as string) || '1em';
    const height = (size as string) || '1em';

    return [width, height];
}

export const Icon = forwardRef<SVGSVGElement, PropsWithChildren<IconProps>>((props, ref) => {
    const {
        style,
        className,
        size = '1em',
        spin,
        children,
        ...rest
    } = props

    const [width, height] = getSize(size);

    const cn = cs(
        'icon',
        {
            'icon-spin': spin
        },
        className
    )

    return (
        <svg ref={ref} className={cn} style={style} width={width} height={height} fill="currentColor" {...rest}>{children}</svg>
    )
})