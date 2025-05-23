// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/colx-circle-colorful.svg';

/**![ColxCircleColorful](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzc3QzNCMCIvPjxwYXRoIGQ9Ik0yNS42NzggMTMuMjgzbC0xLjY4OC0xLjY4OGEyLjcxNSAyLjcxNSAwIDAgMC0xLjkzNi0uOGgtLjI2di0uMjdjMC0uNDczLS4xMTItLjkyMy0uMzQ4LTEuMzI4YTIuMzc0IDIuMzc0IDAgMCAwLS40NzMtLjYzbC0xLjY4OC0xLjY4OWEyLjcxNSAyLjcxNSAwIDAgMC0xLjkzNy0uOEg5LjU3Yy0uNzMyIDAtMS40MTguMjgyLTEuOTM2LjhMNS45NDYgOC41NjZhMi42NyAyLjY3IDAgMCAwLS44IDEuOTI1bC0uMDQ1IDcuMjk1Yy0uMDEuNzMxLjI4MiAxLjQ0LjggMS45NThsMS42ODggMS42ODlhMi43MTQgMi43MTQgMCAwIDAgMS45MzYuNzk5aC4zMDR2LjI3YzAgLjQ3My4xMTMuOTIzLjM0OSAxLjMyOC4xMjQuMjM3LjI4MS40NS40NzMuNjNsMS42ODggMS42OWEyLjcxOSAyLjcxOSAwIDAgMCAxLjkzNi43OThoNy43OWMuNzMyIDAgMS40MTgtLjI4MSAxLjkzNi0uNzk5bDEuNjg5LTEuNjg4YTIuNzIgMi43MiAwIDAgMCAuNzk5LTEuOTM2di03LjMxN2EyLjcyNyAyLjcyNyAwIDAgMC0uODEtMS45MjV6TTkuNTI1IDE5Ljc1NWEuMjcyLjI3MiAwIDAgMS0uMTkxLS4wNzhsLS44NDQtLjg0NS0uODQ1LS44NDRhLjQuNCAwIDAgMS0uMDc5LS4xNDZ2LTcuMzM5YzAtLjA4LjAzNC0uMTQ3LjA4LS4xOTJsMS42ODgtMS42ODhjLjAyMi0uMDIzLjA0NS0uMDM0LjA2Ny0uMDQ1YS4zLjMgMCAwIDEgLjEzNS0uMDM0aDcuNzljLjA0NSAwIC4wNzkuMDExLjEyNC4wMzQuMDM0LjAxMS4wNTYuMDM0LjA3OS4wNTZsMS42ODggMS42ODlhLjIwMi4yMDIgMCAwIDEgLjA1Ni4wNzhjLjAxMi4wMTIuMDEyLjAyMy4wMTIuMDM0IDAgLjAxMS4wMS4wMjMuMDEuMDM0IDAgLjAxMS4wMTIuMDQ1LjAxMi4wNjd2LjM2YzAgLjE1OC0uMTI0LjI3LS4yNy4yN2gtMS4zNWEuMjcyLjI3MiAwIDAgMS0uMTkyLS4wNzhsLS43NjYtLjc2NWgtNi41OTZsLS4yODEuMjgtLjM4My4zODR2Ni4zMzdsLjY2NC42NjRoNi41ODVsLjc2Ni0uNzc2LjAxLS4wMTJjLjAyMy0uMDExLjA0Ni0uMDM0LjA2OC0uMDQ1LjAzNC0uMDIyLjA4LS4wMjIuMTEzLS4wMjJoMS4zNWMuMDkgMCAuMTcuMDQ1LjIyNi4xMTJhLjI2OS4yNjkgMCAwIDEgLjA1Ni4xNTh2LjM4M2EuMjcyLjI3MiAwIDAgMS0uMDc5LjE5MWwtLjg0NC44NDQtLjg0NC44NDRjLS4wMTEuMDEyLS4wMzQuMDIzLS4wNDUuMDM0IDAgMC0uMDExLjAxMS0uMDIzLjAxMS0uMDExLjAxMi0uMDIyLjAxMi0uMDM0LjAxMi0uMDEgMC0uMDEgMC0uMDIyLjAxMS0uMDExIDAtLjAyMy4wMTEtLjAzNC4wMTFIOS41MjV2LjAxMXptMTQuNDk5IDIuNzQ3YS4yNzIuMjcyIDAgMCAxLS4wOC4xOTFsLTEuNjg4IDEuNjg5YS4yMzkuMjM5IDAgMCAxLS4wNjcuMDQ1LjMuMyAwIDAgMS0uMTM1LjAzNGgtNy43OWEuMjU3LjI1NyAwIDAgMS0uMTI0LS4wMzQuMjAyLjIwMiAwIDAgMS0uMDc4LS4wNTZsLTEuNjg5LTEuNjg5Yy0uMDIyLS4wMjItLjA0NS0uMDQ1LS4wNTYtLjA3OS0uMDEyLS4wMS0uMDEyLS4wMjItLjAxMi0uMDMzIDAtLjAxMi0uMDEtLjAyMy0uMDEtLjAzNCAwLS4wMTEtLjAxMi0uMDQ1LS4wMTItLjA2OHYtLjM2YzAtLjE1Ny4xMjQtLjI3LjI3LS4yN2gxLjM1Yy4wOCAwIC4xNDcuMDM0LjE5Mi4wNzlsLjc2Ni43NjVoNi41ODVsLjI4MS0uMjgxLjM4My0uMzgzdi02LjMzN2wtLjY2NC0uNjY1aC02LjU3NGwtLjc2NS43NzctLjAxMi4wMTFjLS4wMjIuMDEyLS4wNDUuMDM0LS4wNjcuMDQ1LS4wMzQuMDIzLS4wNzkuMDIzLS4xMTMuMDIzaC0xLjM1YS4yOTQuMjk0IDAgMCAxLS4yMjYtLjExMy4yNjkuMjY5IDAgMCAxLS4wNTYtLjE1N3YtLjM4M2EuMjcuMjcgMCAwIDEgLjA3OS0uMTkxbC44NDQtLjg0NC44NDQtLjg0NWMuMDEyLS4wMTEuMDM0LS4wMjIuMDQ1LS4wMzQgMCAwIC4wMTItLjAxLjAyMy0uMDEuMDExLS4wMTIuMDIyLS4wMTIuMDM0LS4wMTIuMDEgMCAuMDEgMCAuMDIyLS4wMTEuMDExIDAgLjAyMy0uMDEyLjAzNC0uMDEyaDcuODQ2Yy4wNzggMCAuMTQ2LjAzNC4xOTEuMDhsLjg0NC44NDQuODQ1Ljg0NGMuMDEuMDExLjAyMi4wMjIuMDMzLjA0NWEuMzczLjM3MyAwIDAgMSAuMDQ1LjEwMXYuMDU2Yy4wMTItLjAyMi4wMTIgNy4yNzIuMDEyIDcuMjcyeiIgZmlsbD0iI0ZGRiIvPjwvZz48L3N2Zz4=) */
export const ColxCircleColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-colx-circle-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

ColxCircleColorful.displayName = 'ColxCircleColorful';
