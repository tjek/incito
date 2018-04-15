
#  Schema

```
```

Incito

| Abstract | Extensible | Status | Custom Properties | Additional Properties | Defined In |
|----------|------------|--------|-------------------|-----------------------|------------|
| Can be instantiated | Yes | Experimental | Forbidden | Permitted |  |

#  Properties

| Property | Type | Required | Defined by |
|----------|------|----------|------------|
| [font_assets](#font_assets) | `object` | Optional |  (this schema) |
| [id](#id) | `string` | **Required** |  (this schema) |
| [locale](#locale) | `string` | Optional |  (this schema) |
| [meta](#meta) | `object` | Optional |  (this schema) |
| [root_view](#root_view) | views | **Required** |  (this schema) |
| [theme](#theme) | `object` | Optional |  (this schema) |
| [version](#version) | `enum` | **Required** |  (this schema) |
| `*` | any | Additional | this schema *allows* additional properties |

## font_assets


`font_assets`
* is optional
* type: `object`
* defined in this schema

### font_assets Type


`object` with following properties:


| Property | Type | Required
|----------|------|----------|






## id

ID of incito

`id`
* is **required**
* type: `string`
* defined in this schema

### id Type


`string`
* minimum length: 1 characters





## locale

Locale

`locale`
* is optional
* type: `string`
* defined in this schema

### locale Type


`string`
* minimum length: 1 characters





## meta

Container for meta data

`meta`
* is optional
* type: `object`
* defined in this schema

### meta Type


`object` with following properties:


| Property | Type | Required
|----------|------|----------|






## root_view

The main view entry point for the Incito.

`root_view`
* is **required**
* type: views
* defined in this schema

### root_view Type


* [views]() – `#/definitions/views`





## theme


`theme`
* is optional
* type: `object`
* defined in this schema

### theme Type


`object` with following properties:


| Property | Type | Required
|----------|------|----------|
| `background_color`| string | Optional | 
| `font_family`| array | Optional | 
| `line_spacing_multiplier`| number | Optional | 
| `text_color`| string | Optional | 



#### background_color

undefined

`background_color`
* is optional
* type: `string`

##### background_color Type


`string`
* minimum length: 1 characters







#### font_family

undefined

`font_family`
* is optional
* type: `array`
* at least `1` items in the array


##### font_family Type


Array type: `array`

All items must be of the type:
`string`
* minimum length: 1 characters










#### line_spacing_multiplier

undefined

`line_spacing_multiplier`
* is optional
* type: `number`

##### line_spacing_multiplier Type


`number`








#### text_color

undefined

`text_color`
* is optional
* type: `string`

##### text_color Type


`string`
* minimum length: 1 characters










## version

Incito version

`version`
* is **required**
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#version-known-values).

### version Known Values
| Value | Description |
|-------|-------------|
| `1.0.0` |  |




#  Definitions

| Property | Type | Group |
|----------|------|-------|
| [accessibility_hidden](#accessibility_hidden) | `boolean` | `#/definitions/videoView` |
| [accessibility_label](#accessibility_label) | `string` | `#/definitions/videoView` |
| [background_color](#background_color) | `string` | `#/definitions/videoView` |
| [background_image](#background_image) | `string` | `#/definitions/videoView` |
| [background_image_position](#background_image_position) | `string` | `#/definitions/videoView` |
| [background_image_scale_type](#background_image_scale_type) | `enum` | `#/definitions/videoView` |
| [background_tile_mode](#background_tile_mode) | `enum` | `#/definitions/videoView` |
| [child_views](#child_views) | views | `#/definitions/videoView` |
| [clip_children](#clip_children) | `boolean` | `#/definitions/videoView` |
| [corner_bottom_left_radius](#corner_bottom_left_radius) | complex | `#/definitions/videoView` |
| [corner_bottom_right_radius](#corner_bottom_right_radius) | complex | `#/definitions/videoView` |
| [corner_radius](#corner_radius) | complex | `#/definitions/videoView` |
| [corner_top_left_radius](#corner_top_left_radius) | complex | `#/definitions/videoView` |
| [corner_top_right_radius](#corner_top_right_radius) | complex | `#/definitions/videoView` |
| [font_family](#font_family) | `string[]` | `#/definitions/textView` |
| [font_stretch](#font_stretch) | `string` | `#/definitions/textView` |
| [gravity](#gravity) | `string` | `#/definitions/videoView` |
| [label](#label) | `string` | `#/definitions/imageView` |
| [layout_bottom](#layout_bottom) | complex | `#/definitions/videoView` |
| [layout_flex_align_content](#layout_flex_align_content) | `string` | `#/definitions/videoView` |
| [layout_flex_align_items](#layout_flex_align_items) | `string` | `#/definitions/flexLayout` |
| [layout_flex_direction](#layout_flex_direction) | `string` | `#/definitions/videoView` |
| [layout_flex_grow](#layout_flex_grow) | `number` | `#/definitions/flexLayout` |
| [layout_flex_justify_content](#layout_flex_justify_content) | `string` | `#/definitions/flexLayout` |
| [layout_flex_shrink](#layout_flex_shrink) | `number` | `#/definitions/flexLayout` |
| [layout_height](#layout_height) | complex | `#/definitions/videoView` |
| [layout_left](#layout_left) | complex | `#/definitions/videoView` |
| [layout_margin](#layout_margin) | complex | `#/definitions/videoView` |
| [layout_margin_bottom](#layout_margin_bottom) | complex | `#/definitions/videoView` |
| [layout_margin_left](#layout_margin_left) | complex | `#/definitions/videoView` |
| [layout_margin_top](#layout_margin_top) | complex | `#/definitions/videoView` |
| [layout_right](#layout_right) | complex | `#/definitions/videoView` |
| [layout_top](#layout_top) | complex | `#/definitions/videoView` |
| [layout_width](#layout_width) | complex | `#/definitions/videoView` |
| [line_spacing_multiplier](#line_spacing_multiplier) | complex | `#/definitions/videoView` |
| [link](#link) | `string` | `#/definitions/videoView` |
| [max_height](#max_height) | complex | `#/definitions/videoView` |
| [max_lines](#max_lines) | `integer` | `#/definitions/textView` |
| [max_width](#max_width) | complex | `#/definitions/videoView` |
| [min_height](#min_height) | complex | `#/definitions/videoView` |
| [min_width](#min_width) | complex | `#/definitions/videoView` |
| [padding](#padding) | `number` | `#/definitions/videoView` |
| [padding_bottom](#padding_bottom) | complex | `#/definitions/videoView` |
| [padding_left](#padding_left) | complex | `#/definitions/videoView` |
| [padding_right](#padding_right) | complex | `#/definitions/videoView` |
| [padding_top](#padding_top) | complex | `#/definitions/videoView` |
| [role](#role) | `string` | `#/definitions/videoView` |
| [spans](#spans) | `object[]` | `#/definitions/textView` |
| [src](#src) | `string` | `#/definitions/videoView` |
| [stroke_bottom_color](#stroke_bottom_color) | `string` | `#/definitions/videoView` |
| [stroke_bottom_style](#stroke_bottom_style) | `enum` | `#/definitions/videoView` |
| [stroke_bottom_width](#stroke_bottom_width) | complex | `#/definitions/videoView` |
| [stroke_color](#stroke_color) | `string` | `#/definitions/videoView` |
| [stroke_right_color](#stroke_right_color) | `string` | `#/definitions/videoView` |
| [stroke_right_style](#stroke_right_style) | `enum` | `#/definitions/videoView` |
| [stroke_right_width](#stroke_right_width) | complex | `#/definitions/videoView` |
| [stroke_style](#stroke_style) | `enum` | `#/definitions/videoView` |
| [stroke_width](#stroke_width) | complex | `#/definitions/videoView` |
| [text](#text) | `string` | `#/definitions/textView` |
| [text_alignment](#text_alignment) | `string` | `#/definitions/textView` |
| [text_all_caps](#text_all_caps) | `boolean` | `#/definitions/textView` |
| [text_color](#text_color) | `string` | `#/definitions/textView` |
| [text_prevent_widow](#text_prevent_widow) | `boolean` | `#/definitions/videoView` |
| [text_size](#text_size) | `number` | `#/definitions/textView` |
| [text_style](#text_style) | `string` | `#/definitions/textView` |
| [title](#title) | `string` | `#/definitions/videoView` |
| [transform_origin](#transform_origin) | `string[]` | `#/definitions/videoView` |
| [transform_rotate](#transform_rotate) | `number` | `#/definitions/videoView` |
| [transform_scale](#transform_scale) | `number` | `#/definitions/videoView` |
| [transform_translate_x](#transform_translate_x) | complex | `#/definitions/videoView` |
| [transform_translate_y](#transform_translate_y) | complex | `#/definitions/videoView` |
| [video_height](#video_height) | complex | `#/definitions/videoView` |
| [video_width](#video_width) | complex | `#/definitions/videoView` |
| [view_name](#view_name) | `enum` | `#/definitions/videoView` |

## accessibility_hidden


`accessibility_hidden`
* is optional
* type: `boolean`
* defined in this schema

### accessibility_hidden Type


`boolean`





## accessibility_label


`accessibility_label`
* is optional
* type: `string`
* defined in this schema

### accessibility_label Type


`string`
* minimum length: 1 characters





## background_color


`background_color`
* is optional
* type: `string`
* defined in this schema

### background_color Type


`string`
* minimum length: 1 characters





## background_image


`background_image`
* is optional
* type: `string`
* defined in this schema

### background_image Type


`string`
* minimum length: 1 characters





## background_image_position


`background_image_position`
* is optional
* type: `string`
* defined in this schema

### background_image_position Type


`string`
* minimum length: 1 characters





## background_image_scale_type


`background_image_scale_type`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#background_image_scale_type-known-values).

### background_image_scale_type Known Values
| Value | Description |
|-------|-------------|
| `center_crop` |  |
| `center_inside` |  |




## background_tile_mode


`background_tile_mode`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#background_tile_mode-known-values).

### background_tile_mode Known Values
| Value | Description |
|-------|-------------|
| `repeat_x` |  |
| `repeat_y` |  |
| `repeat` |  |




## child_views


`child_views`
* is optional
* type: views

* defined in this schema

### child_views Type


Array type: views

All items must be of the type:
* [views]() – `#/definitions/views`








## clip_children


`clip_children`
* is optional
* type: `boolean`
* defined in this schema

### clip_children Type


`boolean`





## corner_bottom_left_radius


`corner_bottom_left_radius`
* is optional
* type: complex
* defined in this schema

### corner_bottom_left_radius Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## corner_bottom_right_radius


`corner_bottom_right_radius`
* is optional
* type: complex
* defined in this schema

### corner_bottom_right_radius Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## corner_radius


`corner_radius`
* is optional
* type: complex
* defined in this schema

### corner_radius Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## corner_top_left_radius


`corner_top_left_radius`
* is optional
* type: complex
* defined in this schema

### corner_top_left_radius Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## corner_top_right_radius


`corner_top_right_radius`
* is optional
* type: complex
* defined in this schema

### corner_top_right_radius Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## font_family


`font_family`
* is optional
* type: `string[]`
* at least `1` items in the array
* defined in this schema

### font_family Type


Array type: `string[]`

All items must be of the type:
`string`
* minimum length: 1 characters








## font_stretch


`font_stretch`
* is optional
* type: `string`
* defined in this schema

### font_stretch Type


`string`
* minimum length: 1 characters





## gravity


`gravity`
* is optional
* type: `string`
* defined in this schema

### gravity Type


`string`
* minimum length: 1 characters





## label


`label`
* is optional
* type: `string`
* defined in this schema

### label Type


`string`






## layout_bottom


`layout_bottom`
* is optional
* type: complex
* defined in this schema

### layout_bottom Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## layout_flex_align_content


`layout_flex_align_content`
* is optional
* type: `string`
* defined in this schema

### layout_flex_align_content Type


`string`
* minimum length: 1 characters





## layout_flex_align_items


`layout_flex_align_items`
* is optional
* type: `string`
* defined in this schema

### layout_flex_align_items Type


`string`
* minimum length: 1 characters





## layout_flex_direction


`layout_flex_direction`
* is optional
* type: `string`
* defined in this schema

### layout_flex_direction Type


`string`
* minimum length: 1 characters





## layout_flex_grow


`layout_flex_grow`
* is optional
* type: `number`
* defined in this schema

### layout_flex_grow Type


`number`






## layout_flex_justify_content


`layout_flex_justify_content`
* is optional
* type: `string`
* defined in this schema

### layout_flex_justify_content Type


`string`
* minimum length: 1 characters





## layout_flex_shrink


`layout_flex_shrink`
* is optional
* type: `number`
* defined in this schema

### layout_flex_shrink Type


`number`






## layout_height


`layout_height`
* is optional
* type: complex
* defined in this schema

### layout_height Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## layout_left


`layout_left`
* is optional
* type: complex
* defined in this schema

### layout_left Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## layout_margin


`layout_margin`
* is optional
* type: complex
* defined in this schema

### layout_margin Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## layout_margin_bottom


`layout_margin_bottom`
* is optional
* type: complex
* defined in this schema

### layout_margin_bottom Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## layout_margin_left


`layout_margin_left`
* is optional
* type: complex
* defined in this schema

### layout_margin_left Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## layout_margin_top


`layout_margin_top`
* is optional
* type: complex
* defined in this schema

### layout_margin_top Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## layout_right


`layout_right`
* is optional
* type: complex
* defined in this schema

### layout_right Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## layout_top


`layout_top`
* is optional
* type: complex
* defined in this schema

### layout_top Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## layout_width


`layout_width`
* is optional
* type: complex
* defined in this schema

### layout_width Type

Unknown type `number,string`.

```json
{
  "type": [
    "number",
    "string"
  ],
  "minimum": 0,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## line_spacing_multiplier


`line_spacing_multiplier`
* is optional
* type: complex
* defined in this schema

### line_spacing_multiplier Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## link


`link`
* is optional
* type: `string`
* defined in this schema

### link Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))
* minimum length: 1 characters





## max_height


`max_height`
* is optional
* type: complex
* defined in this schema

### max_height Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## max_lines


`max_lines`
* is optional
* type: `integer`
* defined in this schema

### max_lines Type


`integer`
* minimum value: `1`






## max_width


`max_width`
* is optional
* type: complex
* defined in this schema

### max_width Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## min_height


`min_height`
* is optional
* type: complex
* defined in this schema

### min_height Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## min_width


`min_width`
* is optional
* type: complex
* defined in this schema

### min_width Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## padding


`padding`
* is optional
* type: `number`
* defined in this schema

### padding Type


`number`






## padding_bottom


`padding_bottom`
* is optional
* type: complex
* defined in this schema

### padding_bottom Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## padding_left


`padding_left`
* is optional
* type: complex
* defined in this schema

### padding_left Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## padding_right


`padding_right`
* is optional
* type: complex
* defined in this schema

### padding_right Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## padding_top


`padding_top`
* is optional
* type: complex
* defined in this schema

### padding_top Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## role


`role`
* is optional
* type: `string`
* defined in this schema

### role Type


`string`
* minimum length: 1 characters





## spans


`spans`
* is optional
* type: `object[]`
* at least `1` items in the array
* defined in this schema

### spans Type


Array type: `object[]`

All items must be of the type:
`object` with following properties:


| Property | Type | Required
|----------|------|----------|
| `end`| integer | Optional | 
| `start`| integer | Optional | 



#### end

undefined

`end`
* is optional
* type: `integer`

##### end Type


`integer`








#### start

undefined

`start`
* is optional
* type: `integer`

##### start Type


`integer`














## src


`src`
* is optional
* type: `string`
* defined in this schema

### src Type


`string`
* format: `uri` – Uniformous Resource Identifier (according to [RFC3986](http://tools.ietf.org/html/rfc3986))
* minimum length: 1 characters





## stroke_bottom_color


`stroke_bottom_color`
* is optional
* type: `string`
* defined in this schema

### stroke_bottom_color Type


`string`
* minimum length: 1 characters





## stroke_bottom_style


`stroke_bottom_style`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#stroke_bottom_style-known-values).

### stroke_bottom_style Known Values
| Value | Description |
|-------|-------------|
| `solid` |  |
| `dotted` |  |
| `dashed` |  |




## stroke_bottom_width


`stroke_bottom_width`
* is optional
* type: complex
* defined in this schema

### stroke_bottom_width Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## stroke_color


`stroke_color`
* is optional
* type: `string`
* defined in this schema

### stroke_color Type


`string`
* minimum length: 1 characters





## stroke_right_color


`stroke_right_color`
* is optional
* type: `string`
* defined in this schema

### stroke_right_color Type


`string`
* minimum length: 1 characters





## stroke_right_style


`stroke_right_style`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#stroke_right_style-known-values).

### stroke_right_style Known Values
| Value | Description |
|-------|-------------|
| `solid` |  |
| `dotted` |  |
| `dashed` |  |




## stroke_right_width


`stroke_right_width`
* is optional
* type: complex
* defined in this schema

### stroke_right_width Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## stroke_style


`stroke_style`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#stroke_style-known-values).

### stroke_style Known Values
| Value | Description |
|-------|-------------|
| `solid` |  |
| `dotted` |  |
| `dashed` |  |




## stroke_width


`stroke_width`
* is optional
* type: complex
* defined in this schema

### stroke_width Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## text


`text`
* is optional
* type: `string`
* defined in this schema

### text Type


`string`
* minimum length: 1 characters





## text_alignment


`text_alignment`
* is optional
* type: `string`
* defined in this schema

### text_alignment Type


`string`
* minimum length: 1 characters





## text_all_caps


`text_all_caps`
* is optional
* type: `boolean`
* defined in this schema

### text_all_caps Type


`boolean`





## text_color


`text_color`
* is optional
* type: `string`
* defined in this schema

### text_color Type


`string`
* minimum length: 1 characters





## text_prevent_widow


`text_prevent_widow`
* is optional
* type: `boolean`
* defined in this schema

### text_prevent_widow Type


`boolean`





## text_size


`text_size`
* is optional
* type: `number`
* defined in this schema

### text_size Type


`number`
* minimum value: `0`






## text_style


`text_style`
* is optional
* type: `string`
* defined in this schema

### text_style Type


`string`






## title


`title`
* is optional
* type: `string`
* defined in this schema

### title Type


`string`
* minimum length: 1 characters





## transform_origin


`transform_origin`
* is optional
* type: `string[]`
* between `2` and `2` items in the array
* defined in this schema

### transform_origin Type


Array type: `string[]`

All items must be of the type:
`string`
* minimum length: 1 characters








## transform_rotate


`transform_rotate`
* is optional
* type: `number`
* defined in this schema

### transform_rotate Type


`number`






## transform_scale


`transform_scale`
* is optional
* type: `number`
* defined in this schema

### transform_scale Type


`number`






## transform_translate_x


`transform_translate_x`
* is optional
* type: complex
* defined in this schema

### transform_translate_x Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## transform_translate_y


`transform_translate_y`
* is optional
* type: complex
* defined in this schema

### transform_translate_y Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## video_height


`video_height`
* is optional
* type: complex
* defined in this schema

### video_height Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## video_width


`video_width`
* is optional
* type: complex
* defined in this schema

### video_width Type

Unknown type `string,number`.

```json
{
  "type": [
    "string",
    "number"
  ],
  "minLength": 1,
  "definitiongroup": "videoView",
  "simpletype": "complex"
}
```





## view_name


`view_name`
* is optional
* type: `enum`
* defined in this schema

The value of this property **must** be equal to one of the [known values below](#view_name-known-values).

### view_name Known Values
| Value | Description |
|-------|-------------|
| `VideoView` |  |



