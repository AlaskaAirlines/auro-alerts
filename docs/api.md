# auro-alerts

## Attributes

| Attribute | Type      | Description                   |
|-----------|-----------|-------------------------------|
| `fixed`   | `Boolean` | uses px values instead of rem |

## Properties

| Property         | Attribute        | Type      | Description                                      |
|------------------|------------------|-----------|--------------------------------------------------|
| `error`          | `error`          | `Boolean` | Turns alert into error style                     |
| `hidden`         | `hidden`         | `Boolean` | If present, the component will be hidden both visually and from screen readers |
| `hiddenAudible`  | `hiddenAudible`  | `Boolean` | If present, the component will be hidden from screen readers, but seen visually |
| `hiddenVisually` | `hiddenVisually` | `Boolean` | If present, the component will be hidden visually, but still read by screen readers |
| `information`    | `information`    | `Boolean` | Turns alert into information style               |
| `role`           | `role`           | `String`  | The role will be set based on type               |
| `warning`        | `warning`        | `Boolean` | Turns alert into warning style                   |

## Slots

| Name | Description                                      |
|------|--------------------------------------------------|
|      | Provide text for the alert. If using multiple lines, separate each line with <p> tags. |
