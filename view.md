Incito.viewComponent.view
# View

Properties shared by all view component types.

Here you can find a list of all possible [Views](views.md).

| Properties | Description |
|:--|:--|
| **id** <br> String | The unique view id, which can be used for later reference. |
| **role** <br> String | Specifies the role of the view within the publication. <br><br> For example: `section`, `offer`. |
| **meta** <br> Object | Container for additional meta data on each View Component. |
| **feature_labels** <br> Array | An Array containing feature labels that describe the view content. |
| **child_views** <br> Array | The main Container for additional child views within the view. |
| **background_color** <br> [Color](color.md) |  |
| **background_image** <br> URI|  |
| **background_tile_mode** <br> Array | Defines the fill mode of the background tile. Possible options are: <br><br> `repeat_x, repeat_y, repeat` |
| **background_image_position** <br> String | Defines the background image position. Possible options are: <br><br> `left_top`, `left_center`, `left_bottom`, `center_top`, `center_center`, `center_bottom`, `right_top`, `right_center`, `right_bottom` |
| **background_image_scale_type** <br> [String] | Possible options are: <br><br> `center_crop, center_inside` |
| **gravity** <br> [String] | Defines the gravity attribute of the view component. Possible options are: <br><br> `center_horizontal, left_horizontal, right_horizontal` |
| **accessibility_label** <br> String | Defines the content of the view for voice over assistants. |
| **accessibility_hidden** <br> Boolean | Defines whether the accessibility label is hidden or not. |
| **clip_children** <br> Boolean | Defines is the child views are clipped to the root view. |
| **title** <br> String | The title of the view. |
| **link** <br> URI | The optional link property defines the URL the view links to. |
| **layout_width** <br> [Unit](unit.md) | Defines the absolute width of the component. |
| **layout_height** <br> [Unit](unit.md) | Defines the absolute height of the component. |
| **max_height** <br> [Unit](unit.md) | The unit that defines the maximal height of the view. <br><br> For example: `px`, `%`. |
| **max_width** <br> [Unit](unit.md) |  |
| **min_width** <br> [Unit](unit.md) |  |
| **min_height** <br> [Unit](unit.md) |  |
| **layout_left** <br> [Unit](unit.md) |  |
| **layout_right** <br> [Unit](unit.md) |  |
| **layout_top** <br> [Unit](unit.md) |  |
| **layout_bottom** <br> [Unit](unit.md) |  |
| **layout_margin** <br> [Unit](unit.md) |  |
| **layout_margin_left** <br> [Unit](unit.md) |  |
| **layout_margin_right** <br> [Unit](unit.md) |  |
| **layout_margin_top** <br> [Unit](unit.md) |  |
| **layout_margin_bottom** <br> [Unit](unit.md) |  |
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
