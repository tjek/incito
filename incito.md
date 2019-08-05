## Incito Publication Format (v1.0.0)

The root object of any Incito Publicaiton, containing all required properties, metadata, content, layout, and styles.

| Properties | Description |
|:--|:--|
| **id** <br> String | **(Required)** The unique identifier for the incito. This needs to be unique and could e.g. be done by using UUIDv4.|
| **version** <br> [String] | **(Required)** The specific version of Incito being used. <br><br> The current version is `v1.0.0`. |
| **locale** <br> String | The locale that describes the content in root_views the best. <br><br> For example `dk_DK` for Denmark. |
| **meta** <br> Object | The optional object to contain all meta data, specific for the Incito publication. |
| **root_view** <br> [View Component](view-component.md) | **(Required)** The main view entry point for the Incito. <br><br> For example: <br><br> ```root_view: {child_views: [], theme: {}``` |
| **font_assets** <br> [Incito.fontAssets](incito-font-assets.md) | Object to contain all external font assets to be loaded for the publication. |
| **theme** <br> [Incito.theme](incito-theme.md) | The main theme that contains the primary colors, fonts, line-spacing values and any additional styling. This can be locally overridden in other areas of the Incito.|
| **‌** |  |
|  |  |
