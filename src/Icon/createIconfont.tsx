// 支持 iconfont 的图标

import { forwardRef } from "react";
import { Icon, IconProps } from ".";

const loadedSet = new Set<string>()

export function createFromIconfont(scriptUrl: string) {
    if (
        typeof scriptUrl === 'string'
        && scriptUrl.length
        && !loadedSet.has(scriptUrl)
    ) {
        const script = document.createElement('script');
        script.setAttribute('src', scriptUrl);
        script.setAttribute('data-namespace', scriptUrl);
        document.body.appendChild(script);

        loadedSet.add(scriptUrl);
    }

    const IconFont = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
        const { type, ...rest} = props;

        return (
            <Icon ref={ref} {...rest}>
                {type ? <use xlinkHref={`#${type}`}/> : null}
            </Icon>
        )
    })

    return IconFont;
}