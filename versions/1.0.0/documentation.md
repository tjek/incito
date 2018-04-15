The schema defines the following properties:

# `id` (string, required)

ID of incito

# `version` (string, enum, required)

Incito version

This element must be one of the following enum values:

* `1.0.0`

# `locale` (string)

Locale

# `meta` (object)

Container for meta data

# `root_view` (views, required)

# `font_assets` (object)

# `theme` (object)

Properties of the `theme` object:

## `font_family` (array)

The object is an array with all elements of the type `string`.

Additional restrictions:

* Minimum items: `1`

## `background_color` (string)

## `text_color` (string)

## `line_spacing_multiplier` (number)

---

# Sub Schemas

The schema defines the following additional types:

## `views` (undefined)

This property must be one of the following types:

* `view`
* `textView`
* `absoluteLayout`
* `linearLayout`
* `flexLayout`
* `fragView`
* `imageView`
* `videoEmbedView`
* `videoView`

## `view` (object)

Properties of the `view` object:

### `view_name`

This element must be one of the following enum values:

* `View`

### `id` (string)

### `role` (string)

### `meta` (object)

Container for meta data

### `child_views` (array)

The object is an array with all elements of the type `views`.

### `background_color` (string)

### `background_tile_mode` (string, enum)

This element must be one of the following enum values:

* `repeat_x`
* `repeat_y`
* `repeat`

### `background_image_position` (string)

### `background_image_scale_type` (string, enum)

This element must be one of the following enum values:

* `center_crop`
* `center_inside`

### `gravity` (string)

### `layout_width` (number,string)

### `layout_height` (string,number)

### `max_height` (string,number)

### `max_width` (string,number)

### `min_width` (string,number)

### `min_height` (string,number)

### `layout_left` (string,number)

### `layout_top` (string,number)

### `accessibility_label` (string)

### `accessibility_hidden` (boolean)

### `layout_bottom` (string,number)

### `clip_children` (boolean)

### `transform_translate_x` (string,number)

### `transform_translate_y` (string,number)

### `transform_rotate` (number)

### `text_prevent_widow` (boolean)

### `line_spacing_multiplier` (string,number)

### `title` (string)

### `layout_margin` (string,number)

### `layout_flex_align_content` (string)

### `layout_flex_direction` (string)

### `padding` (number)

### `padding_top` (string,number)

### `padding_left` (string,number)

### `padding_right` (string,number)

### `padding_bottom` (string,number)

### `layout_right` (string,number)

### `layout_margin_top` (string,number)

### `stroke_color` (string)

### `stroke_width` (string,number)

### `stroke_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `transform_scale` (number)

### `stroke_bottom_width` (string,number)

### `stroke_bottom_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `stroke_bottom_color` (string)

### `stroke_right_width` (string,number)

### `stroke_right_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `stroke_right_color` (string)

### `corner_radius` (string,number)

### `corner_top_right_radius` (string,number)

### `corner_top_left_radius` (string,number)

### `corner_bottom_right_radius` (string,number)

### `corner_bottom_left_radius` (string,number)

### `layout_margin_left` (string,number)

### `background_image` (string)

### `transform_origin` (array)

The object is an array with all elements of the type `string`.

Additional restrictions:

* Minimum items: `2`

### `layout_margin_bottom` (string,number)

### `link` (string)

## `textView` (object)

Properties of the `textView` object:

### `view_name`

This element must be one of the following enum values:

* `TextView`

### `text_all_caps` (boolean)

### `font_family` (array)

The object is an array with all elements of the type `string`.

Additional restrictions:

* Minimum items: `1`

### `text` (string, required)

### `text_color` (string)

### `text_alignment` (string)

### `text_size` (number)

### `font_stretch` (string)

### `text_style` (string)

### `spans` (array)

The object is an array with all elements of the type `object`.

The array object has the following properties:

#### `start` (integer)

#### `end` (integer)

Additional restrictions:

* Minimum items: `1`

### `max_lines` (integer)

Additional restrictions:

* Minimum: `1`

### `id` (string)

### `role` (string)

### `meta` (object)

Container for meta data

### `child_views` (array)

The object is an array with all elements of the type `views`.

### `background_color` (string)

### `background_tile_mode` (string, enum)

This element must be one of the following enum values:

* `repeat_x`
* `repeat_y`
* `repeat`

### `background_image_position` (string)

### `background_image_scale_type` (string, enum)

This element must be one of the following enum values:

* `center_crop`
* `center_inside`

### `gravity` (string)

### `layout_width` (number,string)

### `layout_height` (string,number)

### `max_height` (string,number)

### `max_width` (string,number)

### `min_width` (string,number)

### `min_height` (string,number)

### `layout_left` (string,number)

### `layout_top` (string,number)

### `accessibility_label` (string)

### `accessibility_hidden` (boolean)

### `layout_bottom` (string,number)

### `clip_children` (boolean)

### `transform_translate_x` (string,number)

### `transform_translate_y` (string,number)

### `transform_rotate` (number)

### `text_prevent_widow` (boolean)

### `line_spacing_multiplier` (string,number)

### `title` (string)

### `layout_margin` (string,number)

### `layout_flex_align_content` (string)

### `layout_flex_direction` (string)

### `padding` (number)

### `padding_top` (string,number)

### `padding_left` (string,number)

### `padding_right` (string,number)

### `padding_bottom` (string,number)

### `layout_right` (string,number)

### `layout_margin_top` (string,number)

### `stroke_color` (string)

### `stroke_width` (string,number)

### `stroke_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `transform_scale` (number)

### `stroke_bottom_width` (string,number)

### `stroke_bottom_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `stroke_bottom_color` (string)

### `stroke_right_width` (string,number)

### `stroke_right_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `stroke_right_color` (string)

### `corner_radius` (string,number)

### `corner_top_right_radius` (string,number)

### `corner_top_left_radius` (string,number)

### `corner_bottom_right_radius` (string,number)

### `corner_bottom_left_radius` (string,number)

### `layout_margin_left` (string,number)

### `background_image` (string)

### `transform_origin` (array)

The object is an array with all elements of the type `string`.

Additional restrictions:

* Minimum items: `2`

### `layout_margin_bottom` (string,number)

### `link` (string)

## `absoluteLayout` (object)

Properties of the `absoluteLayout` object:

### `view_name`

This element must be one of the following enum values:

* `AbsoluteLayout`

### `id` (string)

### `role` (string)

### `meta` (object)

Container for meta data

### `child_views` (array)

The object is an array with all elements of the type `views`.

### `background_color` (string)

### `background_tile_mode` (string, enum)

This element must be one of the following enum values:

* `repeat_x`
* `repeat_y`
* `repeat`

### `background_image_position` (string)

### `background_image_scale_type` (string, enum)

This element must be one of the following enum values:

* `center_crop`
* `center_inside`

### `gravity` (string)

### `layout_width` (number,string)

### `layout_height` (string,number)

### `max_height` (string,number)

### `max_width` (string,number)

### `min_width` (string,number)

### `min_height` (string,number)

### `layout_left` (string,number)

### `layout_top` (string,number)

### `accessibility_label` (string)

### `accessibility_hidden` (boolean)

### `layout_bottom` (string,number)

### `clip_children` (boolean)

### `transform_translate_x` (string,number)

### `transform_translate_y` (string,number)

### `transform_rotate` (number)

### `text_prevent_widow` (boolean)

### `line_spacing_multiplier` (string,number)

### `title` (string)

### `layout_margin` (string,number)

### `layout_flex_align_content` (string)

### `layout_flex_direction` (string)

### `padding` (number)

### `padding_top` (string,number)

### `padding_left` (string,number)

### `padding_right` (string,number)

### `padding_bottom` (string,number)

### `layout_right` (string,number)

### `layout_margin_top` (string,number)

### `stroke_color` (string)

### `stroke_width` (string,number)

### `stroke_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `transform_scale` (number)

### `stroke_bottom_width` (string,number)

### `stroke_bottom_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `stroke_bottom_color` (string)

### `stroke_right_width` (string,number)

### `stroke_right_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `stroke_right_color` (string)

### `corner_radius` (string,number)

### `corner_top_right_radius` (string,number)

### `corner_top_left_radius` (string,number)

### `corner_bottom_right_radius` (string,number)

### `corner_bottom_left_radius` (string,number)

### `layout_margin_left` (string,number)

### `background_image` (string)

### `transform_origin` (array)

The object is an array with all elements of the type `string`.

Additional restrictions:

* Minimum items: `2`

### `layout_margin_bottom` (string,number)

### `link` (string)

## `linearLayout` (object)

Properties of the `linearLayout` object:

### `view_name`

This element must be one of the following enum values:

* `LinearLayout`

### `id` (string)

### `role` (string)

### `meta` (object)

Container for meta data

### `child_views` (array)

The object is an array with all elements of the type `views`.

### `background_color` (string)

### `background_tile_mode` (string, enum)

This element must be one of the following enum values:

* `repeat_x`
* `repeat_y`
* `repeat`

### `background_image_position` (string)

### `background_image_scale_type` (string, enum)

This element must be one of the following enum values:

* `center_crop`
* `center_inside`

### `gravity` (string)

### `layout_width` (number,string)

### `layout_height` (string,number)

### `max_height` (string,number)

### `max_width` (string,number)

### `min_width` (string,number)

### `min_height` (string,number)

### `layout_left` (string,number)

### `layout_top` (string,number)

### `accessibility_label` (string)

### `accessibility_hidden` (boolean)

### `layout_bottom` (string,number)

### `clip_children` (boolean)

### `transform_translate_x` (string,number)

### `transform_translate_y` (string,number)

### `transform_rotate` (number)

### `text_prevent_widow` (boolean)

### `line_spacing_multiplier` (string,number)

### `title` (string)

### `layout_margin` (string,number)

### `layout_flex_align_content` (string)

### `layout_flex_direction` (string)

### `padding` (number)

### `padding_top` (string,number)

### `padding_left` (string,number)

### `padding_right` (string,number)

### `padding_bottom` (string,number)

### `layout_right` (string,number)

### `layout_margin_top` (string,number)

### `stroke_color` (string)

### `stroke_width` (string,number)

### `stroke_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `transform_scale` (number)

### `stroke_bottom_width` (string,number)

### `stroke_bottom_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `stroke_bottom_color` (string)

### `stroke_right_width` (string,number)

### `stroke_right_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `stroke_right_color` (string)

### `corner_radius` (string,number)

### `corner_top_right_radius` (string,number)

### `corner_top_left_radius` (string,number)

### `corner_bottom_right_radius` (string,number)

### `corner_bottom_left_radius` (string,number)

### `layout_margin_left` (string,number)

### `background_image` (string)

### `transform_origin` (array)

The object is an array with all elements of the type `string`.

Additional restrictions:

* Minimum items: `2`

### `layout_margin_bottom` (string,number)

### `link` (string)

## `flexLayout` (object)

Properties of the `flexLayout` object:

### `view_name`

This element must be one of the following enum values:

* `FlexLayout`

### `layout_flex_align_items` (string)

### `layout_flex_justify_content` (string)

### `layout_flex_shrink` (number)

### `layout_flex_grow` (number)

### `id` (string)

### `role` (string)

### `meta` (object)

Container for meta data

### `child_views` (array)

The object is an array with all elements of the type `views`.

### `background_color` (string)

### `background_tile_mode` (string, enum)

This element must be one of the following enum values:

* `repeat_x`
* `repeat_y`
* `repeat`

### `background_image_position` (string)

### `background_image_scale_type` (string, enum)

This element must be one of the following enum values:

* `center_crop`
* `center_inside`

### `gravity` (string)

### `layout_width` (number,string)

### `layout_height` (string,number)

### `max_height` (string,number)

### `max_width` (string,number)

### `min_width` (string,number)

### `min_height` (string,number)

### `layout_left` (string,number)

### `layout_top` (string,number)

### `accessibility_label` (string)

### `accessibility_hidden` (boolean)

### `layout_bottom` (string,number)

### `clip_children` (boolean)

### `transform_translate_x` (string,number)

### `transform_translate_y` (string,number)

### `transform_rotate` (number)

### `text_prevent_widow` (boolean)

### `line_spacing_multiplier` (string,number)

### `title` (string)

### `layout_margin` (string,number)

### `layout_flex_align_content` (string)

### `layout_flex_direction` (string)

### `padding` (number)

### `padding_top` (string,number)

### `padding_left` (string,number)

### `padding_right` (string,number)

### `padding_bottom` (string,number)

### `layout_right` (string,number)

### `layout_margin_top` (string,number)

### `stroke_color` (string)

### `stroke_width` (string,number)

### `stroke_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `transform_scale` (number)

### `stroke_bottom_width` (string,number)

### `stroke_bottom_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `stroke_bottom_color` (string)

### `stroke_right_width` (string,number)

### `stroke_right_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `stroke_right_color` (string)

### `corner_radius` (string,number)

### `corner_top_right_radius` (string,number)

### `corner_top_left_radius` (string,number)

### `corner_bottom_right_radius` (string,number)

### `corner_bottom_left_radius` (string,number)

### `layout_margin_left` (string,number)

### `background_image` (string)

### `transform_origin` (array)

The object is an array with all elements of the type `string`.

Additional restrictions:

* Minimum items: `2`

### `layout_margin_bottom` (string,number)

### `link` (string)

## `fragView` (object)

Properties of the `fragView` object:

### `view_name`

This element must be one of the following enum values:

* `FragView`

### `id` (string)

### `role` (string)

### `meta` (object)

Container for meta data

### `child_views` (array)

The object is an array with all elements of the type `views`.

### `background_color` (string)

### `background_tile_mode` (string, enum)

This element must be one of the following enum values:

* `repeat_x`
* `repeat_y`
* `repeat`

### `background_image_position` (string)

### `background_image_scale_type` (string, enum)

This element must be one of the following enum values:

* `center_crop`
* `center_inside`

### `gravity` (string)

### `layout_width` (number,string)

### `layout_height` (string,number)

### `max_height` (string,number)

### `max_width` (string,number)

### `min_width` (string,number)

### `min_height` (string,number)

### `layout_left` (string,number)

### `layout_top` (string,number)

### `accessibility_label` (string)

### `accessibility_hidden` (boolean)

### `layout_bottom` (string,number)

### `clip_children` (boolean)

### `transform_translate_x` (string,number)

### `transform_translate_y` (string,number)

### `transform_rotate` (number)

### `text_prevent_widow` (boolean)

### `line_spacing_multiplier` (string,number)

### `title` (string)

### `layout_margin` (string,number)

### `layout_flex_align_content` (string)

### `layout_flex_direction` (string)

### `padding` (number)

### `padding_top` (string,number)

### `padding_left` (string,number)

### `padding_right` (string,number)

### `padding_bottom` (string,number)

### `layout_right` (string,number)

### `layout_margin_top` (string,number)

### `stroke_color` (string)

### `stroke_width` (string,number)

### `stroke_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `transform_scale` (number)

### `stroke_bottom_width` (string,number)

### `stroke_bottom_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `stroke_bottom_color` (string)

### `stroke_right_width` (string,number)

### `stroke_right_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `stroke_right_color` (string)

### `corner_radius` (string,number)

### `corner_top_right_radius` (string,number)

### `corner_top_left_radius` (string,number)

### `corner_bottom_right_radius` (string,number)

### `corner_bottom_left_radius` (string,number)

### `layout_margin_left` (string,number)

### `background_image` (string)

### `transform_origin` (array)

The object is an array with all elements of the type `string`.

Additional restrictions:

* Minimum items: `2`

### `layout_margin_bottom` (string,number)

### `link` (string)

## `imageView` (object)

Properties of the `imageView` object:

### `view_name`

This element must be one of the following enum values:

* `ImageView`

### `src` (string, required)

### `label` (string)

### `id` (string)

### `role` (string)

### `meta` (object)

Container for meta data

### `child_views` (array)

The object is an array with all elements of the type `views`.

### `background_color` (string)

### `background_tile_mode` (string, enum)

This element must be one of the following enum values:

* `repeat_x`
* `repeat_y`
* `repeat`

### `background_image_position` (string)

### `background_image_scale_type` (string, enum)

This element must be one of the following enum values:

* `center_crop`
* `center_inside`

### `gravity` (string)

### `layout_width` (number,string)

### `layout_height` (string,number)

### `max_height` (string,number)

### `max_width` (string,number)

### `min_width` (string,number)

### `min_height` (string,number)

### `layout_left` (string,number)

### `layout_top` (string,number)

### `accessibility_label` (string)

### `accessibility_hidden` (boolean)

### `layout_bottom` (string,number)

### `clip_children` (boolean)

### `transform_translate_x` (string,number)

### `transform_translate_y` (string,number)

### `transform_rotate` (number)

### `text_prevent_widow` (boolean)

### `line_spacing_multiplier` (string,number)

### `title` (string)

### `layout_margin` (string,number)

### `layout_flex_align_content` (string)

### `layout_flex_direction` (string)

### `padding` (number)

### `padding_top` (string,number)

### `padding_left` (string,number)

### `padding_right` (string,number)

### `padding_bottom` (string,number)

### `layout_right` (string,number)

### `layout_margin_top` (string,number)

### `stroke_color` (string)

### `stroke_width` (string,number)

### `stroke_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `transform_scale` (number)

### `stroke_bottom_width` (string,number)

### `stroke_bottom_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `stroke_bottom_color` (string)

### `stroke_right_width` (string,number)

### `stroke_right_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `stroke_right_color` (string)

### `corner_radius` (string,number)

### `corner_top_right_radius` (string,number)

### `corner_top_left_radius` (string,number)

### `corner_bottom_right_radius` (string,number)

### `corner_bottom_left_radius` (string,number)

### `layout_margin_left` (string,number)

### `background_image` (string)

### `transform_origin` (array)

The object is an array with all elements of the type `string`.

Additional restrictions:

* Minimum items: `2`

### `layout_margin_bottom` (string,number)

### `link` (string)

## `videoEmbedView` (object)

Properties of the `videoEmbedView` object:

### `view_name`

This element must be one of the following enum values:

* `VideoEmbedView`

### `src` (string, required)

### `id` (string)

### `role` (string)

### `meta` (object)

Container for meta data

### `child_views` (array)

The object is an array with all elements of the type `views`.

### `background_color` (string)

### `background_tile_mode` (string, enum)

This element must be one of the following enum values:

* `repeat_x`
* `repeat_y`
* `repeat`

### `background_image_position` (string)

### `background_image_scale_type` (string, enum)

This element must be one of the following enum values:

* `center_crop`
* `center_inside`

### `gravity` (string)

### `layout_width` (number,string)

### `layout_height` (string,number)

### `max_height` (string,number)

### `max_width` (string,number)

### `min_width` (string,number)

### `min_height` (string,number)

### `layout_left` (string,number)

### `layout_top` (string,number)

### `accessibility_label` (string)

### `accessibility_hidden` (boolean)

### `layout_bottom` (string,number)

### `clip_children` (boolean)

### `transform_translate_x` (string,number)

### `transform_translate_y` (string,number)

### `transform_rotate` (number)

### `text_prevent_widow` (boolean)

### `line_spacing_multiplier` (string,number)

### `title` (string)

### `layout_margin` (string,number)

### `layout_flex_align_content` (string)

### `layout_flex_direction` (string)

### `padding` (number)

### `padding_top` (string,number)

### `padding_left` (string,number)

### `padding_right` (string,number)

### `padding_bottom` (string,number)

### `layout_right` (string,number)

### `layout_margin_top` (string,number)

### `stroke_color` (string)

### `stroke_width` (string,number)

### `stroke_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `transform_scale` (number)

### `stroke_bottom_width` (string,number)

### `stroke_bottom_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `stroke_bottom_color` (string)

### `stroke_right_width` (string,number)

### `stroke_right_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `stroke_right_color` (string)

### `corner_radius` (string,number)

### `corner_top_right_radius` (string,number)

### `corner_top_left_radius` (string,number)

### `corner_bottom_right_radius` (string,number)

### `corner_bottom_left_radius` (string,number)

### `layout_margin_left` (string,number)

### `background_image` (string)

### `transform_origin` (array)

The object is an array with all elements of the type `string`.

Additional restrictions:

* Minimum items: `2`

### `layout_margin_bottom` (string,number)

### `link` (string)

## `videoView` (object)

Properties of the `videoView` object:

### `view_name`

This element must be one of the following enum values:

* `VideoView`

### `video_width` (string,number, required)

### `video_height` (string,number, required)

### `src` (string, required)

### `id` (string)

### `role` (string)

### `meta` (object)

Container for meta data

### `child_views` (array)

The object is an array with all elements of the type `views`.

### `background_color` (string)

### `background_tile_mode` (string, enum)

This element must be one of the following enum values:

* `repeat_x`
* `repeat_y`
* `repeat`

### `background_image_position` (string)

### `background_image_scale_type` (string, enum)

This element must be one of the following enum values:

* `center_crop`
* `center_inside`

### `gravity` (string)

### `layout_width` (number,string)

### `layout_height` (string,number)

### `max_height` (string,number)

### `max_width` (string,number)

### `min_width` (string,number)

### `min_height` (string,number)

### `layout_left` (string,number)

### `layout_top` (string,number)

### `accessibility_label` (string)

### `accessibility_hidden` (boolean)

### `layout_bottom` (string,number)

### `clip_children` (boolean)

### `transform_translate_x` (string,number)

### `transform_translate_y` (string,number)

### `transform_rotate` (number)

### `text_prevent_widow` (boolean)

### `line_spacing_multiplier` (string,number)

### `title` (string)

### `layout_margin` (string,number)

### `layout_flex_align_content` (string)

### `layout_flex_direction` (string)

### `padding` (number)

### `padding_top` (string,number)

### `padding_left` (string,number)

### `padding_right` (string,number)

### `padding_bottom` (string,number)

### `layout_right` (string,number)

### `layout_margin_top` (string,number)

### `stroke_color` (string)

### `stroke_width` (string,number)

### `stroke_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `transform_scale` (number)

### `stroke_bottom_width` (string,number)

### `stroke_bottom_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `stroke_bottom_color` (string)

### `stroke_right_width` (string,number)

### `stroke_right_style` (string, enum)

This element must be one of the following enum values:

* `solid`
* `dotted`
* `dashed`

### `stroke_right_color` (string)

### `corner_radius` (string,number)

### `corner_top_right_radius` (string,number)

### `corner_top_left_radius` (string,number)

### `corner_bottom_right_radius` (string,number)

### `corner_bottom_left_radius` (string,number)

### `layout_margin_left` (string,number)

### `background_image` (string)

### `transform_origin` (array)

The object is an array with all elements of the type `string`.

Additional restrictions:

* Minimum items: `2`

### `layout_margin_bottom` (string,number)

### `link` (string)