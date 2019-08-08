Incito.viewComponent.view
# View

Properties shared by all view component types.

Here you can find a list of all possible [Views](views.md).

| Properties | Description |
|:--|:--|
| **id** <br> String | The unique view id, which can be used for later reference. <br><br> Minimum Length: `1`. |
| **role** <br> String | Specifies the role of the view within the publication. <br><br> For example: `section`, `offer`. <br><br> Minimum Length: `1`. |
| **meta** <br> Object | Container for additional meta data with at least one of multiple properties. |
| **feature_labels** <br> [Object] | An Array containing feature labels that describe the view content. Each feature label is an object with at least one property. Feature labels should be plain text and only consist of characters and numbers. |
| **child_views** <br> [\[Views\]](views.md) | The main Container for additional child views within the view. |
| **background_color** <br> [Color](color.md) | The views background color. The color defaults to withe if not otherwise specified. |
| **background_image** <br> URI| The url pointing to the views background image. If not explicitly specified, the background image defaults to none. |
| **background_tile_mode** <br> String | Defines the fill mode of the background tile. <br><br> Possible values: `repeat_x`, `repeat_y`, `repeat`. |
| **background_image_position** <br> String | Defines the background image position. <br><br> Possible values: `left_top`, `left_center`, `left_bottom`, `center_top`, `center_center`, `center_bottom`, `right_top`, `right_center`, `right_bottom` |
| **background_image_scale_type** <br> String | The string defining the scale mode of the background image. <br><br> Possible values: `center_crop`, `center_inside`. |
| **gravity** <br> [String] | Defines the gravity attribute of the view component. Possible options are: <br><br> `center_horizontal, left_horizontal, right_horizontal` |
| **accessibility_label** <br> String | Defines the content of the view for voice over assistants. This should be plain text, formatted text, HTML or Markdown are not supported. <br><br> Minimum Length: `1`. |
| **accessibility_hidden** <br> Boolean | Defines whether the accessibility label is hidden or not. |
| **clip_children** <br> Boolean | Defines if the child views are clipped to the root view. `?` |
| **title** <br> String | The title of the view. Should be plain text; HTML or Markdown formatting is not supported. |
| **link** <br> URI | The optional link property defines the URL the view links to. This could be the products detail page on the retailers webshop page. |
| **layout_width** <br> * | The width (as unit) that the individual view was designed for. <br><br> The width of the view cannot be negative and is limited by a maximum width of 1200 points for the overall publication width. <br><br> Minimum: 1 <br> Possible types: [Unit](unit.md) |
| **layout_height** <br> * | The height (as unit) that the view was designed for. <br><br> The height of the view cannot be negative. <br><br> Minimum: 1 <br> Possible types: [Unit](unit.md) |
| **max_height** <br> * | The maximum height (as unit) that the view is designed for. <br><br> Use the maximum height to ensure that the view won't be scaled down below a given treshold on mobile devices. <br><br> For example: `px`, `%`.  <br><br> Possible types: [Unit](unit.md) |
| **max_width** <br> * | <br><br> Possible types: [Unit](unit.md) |
| **min_width** <br> * | <br><br> Possible types: [Unit](unit.md) |
| **min_height** <br> * | <br><br> Possible types: [Unit](unit.md) |
| **layout_left** <br> * | <br><br> Possible types: [Unit](unit.md) |
| **layout_right** <br> * | <br><br> Possible types: [Unit](unit.md) |
| **layout_top** <br> * | <br><br> Possible types: [Unit](unit.md) |
| **layout_bottom** <br> * | <br><br> Possible types: [Unit](unit.md) |
| **layout_margin** <br> * | <br><br> Possible types: [Unit](unit.md) |
| **layout_margin_left** <br> * | <br><br> Possible types: [Unit](unit.md) |
| **layout_margin_right** <br> * | <br><br> Possible types: [Unit](unit.md) |
| **layout_margin_top** <br> * | <br><br> Possible types: [Unit](unit.md) |
| **layout_margin_bottom** <br> * | <br><br> Possible types: [Unit](unit.md) |
| **padding** <br> * | The outer (left, top, right, bottom) padding of the view. If this property is ommitted, the default padding that is applied is 0. If the padding is set to a negative, the number is set to 0. <br><br> Minimum: 0 <br> Possible types: [Unit](unit.md) |
| **padding_left** <br> * | The outer (left) padding of the view. If this property is ommitted, the default padding that is applied is 0. If the padding is set to a negative, the number is set to 0. <br><br> Minimum: 0 <br> Possible types: [Unit](unit.md), Integer |
| **padding_right** <br> * | The outer (right) padding of the view. If this property is ommitted, the default padding that is applied is 0. If the padding is set to a negative, the number is set to 0. <br><br> Minimum: 0 <br> Possible types: [Unit](unit.md), Integer |
| **padding_top** <br> * | The outer (top) padding of the view. If this property is ommitted, the default padding that is applied is 0. If the padding is set to a negative, the number is set to 0. <br><br> Minimum: 0 |
| **padding_bottom** * | The outer (bottom) padding of the view. If this property is ommitted, the default padding that is applied is 0. If the padding is set to a negative, the number is set to 0. <br><br> Minimum: 0 |
| **transform_scale** <br> Number | The number that defines the  |
| **transform_translate_x** <br> * |  |
| **transform_translate_y** <br> * |  |
| **transform_rotate** <br> Number | Defines the rotation... <br><br> Minimum: -360 <br> Maximum: 360 |
| **transform_origin** <br> [String] |  |
| **stroke_color** <br> [Color](color.md) |  |
| **stroke_width** |  |
| **stroke_style** | The string defining the stroke style of the view. <br><br> For example: <br><br> -solid: _____<br><br> Possible options are: <br><br> `solid`, dotted, dashed` |
| **stroke_top_width** |  |
| **stroke_top_color** <br> [Color](color.md) |  |
| **stroke_right_width** |  |
| **stroke_right_color** <br> [Color](color.md) |  |
| **stroke_bottom_width** |  |
| **stroke_bottom_color** <br> [Color](color.md) |  |
| **stroke_left_width** |  |
| **stroke_left_color** <br> [Color](color.md) |  |
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



Instead of using an additional layout object with all the relevant information, the layout is specified directly on the view object. Therefore, each view can contain a variety of layout properties.