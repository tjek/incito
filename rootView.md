### View

## Root View

The main entry point of the publication, containing an array with all the child views.

____________________________________________________

## Properties

| | |
|:--|:--|
| **gravity** <br> String | Defines the gravity of the publications content. |
| **layout_width** <br> String | The overall layout width of the publication. This number cannot be negative or 0. The default value is set to 1200 points. |
| **child_views** <br> [\[Views\]](views.md) | The main content of the publication. <br><br> Possible view's: [Views](views.md) |

____________________________________________________

## Example

```Javascript
1   {
2       "root_view":
3         {
4           "layout_flex_align_items": "flex-start",
5           "layout_flex_justify_items": "space-around",
6           "child_views": [{}]
7         }
8   }
```

____________________________________________________