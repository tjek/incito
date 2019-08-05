# Incito Publication Format

Get Incito Publicaiton Format reference information, and create digital product catalogs.

---

## Overview

Incito Publication Format is a JavaScript Object Notation (JSON) format used to create automated platform agnostic publication layout for product catalogs, online shops, or any other layout.

A publication created with the Incito Publication Format (v1.0.0) can include text, images, and videos. You can enhance your publication with animations, behaviors, and customized styles that allow the creation of a unique look and feel for each publication, according to the publishers brand requirements. The finished publication can be published anywhere and is rendered with the help of the [Shopgun-SDK](https://shopgun.com/developers).

With Incito, you only have to author your publication once. Every publication is then automatically optimized for mobile, tablet, and desktop view.

[logo]: https://docs-assets.developer.apple.com/published/bd93d01c66/471c0130-9db2-4012-931e-acc5745a3d61.png "Incito Publication iPad"

[Incito Format](incito.md)

## Incito Publication Format
| Properties | Description |
|:--|:--|
| **id** <br> String | **(Required)** The unique identifier for the incito. This needs to be unique and could e.g. be done by using UUIDv4.|
| **version** <br> [String] | **(Required)** The specific version of Incito being used. <br><br> The current version is `v1.0.0`. |
| **locale** <br> String | The locale that describes the content in root_views the best. <br><br> For example `dk_DK` for Denmark. |
| **meta** <br> Object | The optional object to contain all meta data, specific for the Incito publication. |
| **root_view** <br> View Component | The main view entry point for the Incito. <br><br> For example: <br><br> ```root_view: {child_views: [], theme: {}``` |
| **font_assets** <br> Object | Object to contain all external font assets to be loaded for the publication. |
| **theme** <br> Object | The main theme that contains the primary colors, fonts, line-spacing values and any additional styling. This can be locally overridden in other areas of the Incito.|
| **‌** |  |
|  |  |
