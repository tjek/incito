# Incito Publication Format

### Get Incito Publicaiton Format reference information, and create digital product catalogs.

---

## Overview

Incito Publication Format is the JavaScript Object Notation (JSON) format used to create automated and truly digital product catalog publications.

A publication created with the Incito Publication Format can include text, images, videos, and embedded web content. You can enhance your publication with animations, behaviors, and customized styles that allow the creation of a unique look and feel of each publication, according to the publishers brand guidelines. The finished publication can be published anywhere and is rendered with the help of the shopgun SDK available at:

![alt text][logo]

With Incito, you only have to author your publication once. Incito can then automatically create updated version of you publication based on any change in the feed and it automatically optimizes the content for mobile, tablet, and desktop views.

[logo]: https://docs-assets.developer.apple.com/published/bd93d01c66/471c0130-9db2-4012-931e-acc5745a3d61.png "Incito Publication iPad"

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


## View Component
| Properties | Description |
|:--|:--|
| **id** <br> String | The unique view id, which can be used for later reference. |
| **role** <br> String | Specifies the role of the view within the publication. <br><br> For example: `role: “section”` |
| **meta** <br> Object | Container for additional meta data on each View Component. |
| **feature_labels** <br> Array | An Array containing feature labels that describe the view content. |
| **child_views** <br> Array | The main Container for additional child views within the view. |
| **background_color** <br> Object |  |
| **background_image** <br> URI|  |
| **background_tile_mode** <br> Array | Defines the fill mode of the background tile. Possible options are: <br><br> `repeat_x, repeat_y, repeat` |
| **background_image_position** <br> [String] | Defines the background image position. Possible options are: <br><br> `left_top, left_center, left_bottom, center_top, center_center, center_bottom, right_top, right_center, right_bottom` |
| **background_image_scale_type** <br> [String] | Possible options are: <br><br> `center_crop, center_inside` |
| **gravity** <br> [String] | Defines the gravity attribute of the view component. Possible options are: <br><br> `center_horizontal, left_horizontal, right_horizontal` |
| **accessibility_label** <br> String | Defines the content of the view for voice over assistants. |
| **accessibility_hidden** <br> Boolean | Defines whether the accessibility label is hidden or not. |
| **clip_children** <br> Boolean | Defines is the child views are clipped to the root view. |
| **title** <br> String | The title of the view. |
| **link** <br> URI | The optional link property defines the URL the view links to. |
| **layout_width** <br>  | Defines the absolute width of the component. |
| **layout_height** <br> | Defines the absolute height of the component. |
| **max_height** |  |
| **max_width** |  |
| **min_width** |  |
| **min_height** |  |
| **layout_left** |  |
| **layout_right** |  |
| **layout_top** |  |
| **layout_bottom** |  |
| **layout_margin** |  |
| **layout_margin_left** |  |
| **layout_margin_right** |  |
| **layout_margin_top** |  |
| **layout_margin_bottom** |  |
| **padding** |  |
| **padding_left** |  |
| **padding_right** |  |
| **padding_top** |  |
| **padding_bottom** |  |
| **transform_scale** <br> Number |  |
| **transform_translate_x** <br>  |  |
| **transform_translate_y** |  |
| **transform_rotate** <br> Number | Defines the rotation... <br><br> From `min: -360` to `max: 360` |
| **transform_origin** <br> [String] |  |
| **stroke_color** |  |
| **stroke_width** |  |
| **stroke_style** | Possible options are: <br><br> `solid, dotted, dashed` |
| **stroke_top_width** |  |
| **stroke_top_color** |  |
| **stroke_right_width** |  |
| **stroke_right_color** |  |
| **stroke_bottom_width** |  |
| **stroke_bottom_color** |  |
| **stroke_left_width** |  |
| **stroke_left_color** |  |
| **corner_radius** |  |
| **corner_top_right_radius** |  |
| **corner_top_left_radius** |  |
| **corner_bottom_right_radius** |  |
| **corner_bottom_left_radius** |  |
| **shadow_color** |  |
| **shadow_dx** <br> Number |  |
| **shadow_dy** <br> Number |  |
| **shadow_radius** <br> Number |  |
| **layout_flex_shrink** <br> Number |  |
| **layout_flex_grow** <br> Number |  |
| **layout_flex_basis** |  |
| **view_name** <br> [String] | Defines the view name. |
|  |  |
|  |  |


