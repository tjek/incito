### Object

## Flex Layout

Properties used in the Flex Layout View.

____________________________________________________

## Properties

| | |
|:--|:--|
| **view_name** <br> [String] | **(Required)** Defines the view name. |
| **layout_flex_align_items** <br> String | Determines the flex layout alignment of all contained elements. <br><br> For example: `flex-start` aligns all elements at the top of the containing view, while `flex-end` aligns all elements at the bottom of the parent-view container. <br><br> Possible values: `flex-start`, `flex-end`, `center`, `stretch`, `baseline`. |
| **layout_flex_justify_items** <br> String | Defines how the elements inside the parent node are justified. <br><br> Possible values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`. |
| **layout_flex_direction** <br> String | String that defines the direction of the layout. <br><br> Possible values: `row`, `column`. |

____________________________________________________

## Example

```Javascript
1   {
2       "flexLayout": [
3         {
4           "layout_flex_align_items": "flex-start",
5           "layout_flex_justify_items": "space-around",
6           "child_views": [{}]
7         }
8       ]
9   }
```

____________________________________________________

## Inherits From [View](view.md)

____________________________________________________
