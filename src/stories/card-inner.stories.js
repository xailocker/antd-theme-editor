import React from "react";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("antDesign.card", module);
import { Card } from "antd";

stories.addWithJSX("inner", () => (
  <Card title="Card title">
    <p
      style={{
        fontSize: 14,
        color: "rgba(0, 0, 0, 0.85)",
        marginBottom: 16,
        fontWeight: 500
      }}
    >
      Group title
    </p>
    <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
      Inner Card content
    </Card>
    <Card
      style={{ marginTop: 16 }}
      type="inner"
      title="Inner Card title"
      extra={<a href="#">More</a>}
    >
      Inner Card content
    </Card>
  </Card>
));
