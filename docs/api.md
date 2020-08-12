# auro-alerts

## Properties

| Property      | Attribute     | Type      | Description                              |
|---------------|---------------|-----------|------------------------------------------|
| `error`       | `error`       | `Boolean` | Turns alert into error style             |
| `hidden`      | `hidden`      | `Boolean` | If present, the component will be hidden |
| `information` | `information` | `Boolean` | Turns alert into information style       |
| `role`        | `role`        | `String`  | The role will be set based on type       |
| `warning`     | `warning`     | `Boolean` | Turns alert into warning style           |

## Methods

| Method             | Type                                   | Description                                      |
|--------------------|----------------------------------------|--------------------------------------------------|
| `generateIconHtml` | `(svgContent: string): TemplateResult` | Internal function to generate the HTML for the icon to use<br /><br />**svgContent**: The imported svg icon |

## Slots

| Name | Description                                      |
|------|--------------------------------------------------|
|      | Provide text for the alert. If using multiple lines, separate each line with <p> tags. |
