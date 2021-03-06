import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.tooltip", module);
import { Tooltip, Button } from "antd";

stories.addWithJSX("arrow-point-at-center", () => (
  <div>
    <Tooltip placement="topLeft" title="Prompt Text">
      <Button>Align edge / 边缘对齐</Button>
    </Tooltip>
    <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
      <Button>Arrow points to center / 箭头指向中心</Button>
    </Tooltip>
  </div>
));
