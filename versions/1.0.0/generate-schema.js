const fs = require('fs');
const path = require('path');

function createView (viewName = 'View', properties = {}, required = []) {
    return {
        type: 'object',
        required,
        properties: Object.assign({}, {
            view_name: {
                enum: [viewName]
            }
        }, properties, {
            id: {
                type: 'string',
                minLength: 1
            },
            role: {
                type: 'string',
                minLength: 1
            },
            meta: {
                type: 'object',
                minProperties: 1,
                description: 'Container for meta data'
            },
            child_views: {
                type: 'array',
                items: {
                    oneOf: [{
                        '$ref': '#/definitions/view'
                    }, {
                        '$ref': '#/definitions/textView'
                    }, {
                        '$ref': '#/definitions/absoluteLayout'
                    }, {
                        '$ref': '#/definitions/linearLayout'
                    }, {
                        '$ref': '#/definitions/flexLayout'
                    }, {
                        '$ref': '#/definitions/fragView'
                    }, {
                        '$ref': '#/definitions/imageView'
                    }, {
                        '$ref': '#/definitions/videoEmbedView'
                    }, {
                        '$ref': '#/definitions/videoView'
                    }]
                }
            },
            background_color: {
                type: 'string',
                minLength: 1
            },
            background_tile_mode: {
                type: 'string',
                enum: [
                    'repeat_x',
                    'repeat_y',
                    'repeat'
                ],
                minLength: 1
            },
            background_image_position: {
                type: 'string',
                minLength: 1
            },
            background_image_scale_type: {
                type: 'string',
                enum: [
                    'center_crop',
                    'center_inside'
                ],
                minLength: 1
            },
            gravity: {
                type: 'string',
                minLength: 1
            },
            layout_width: {
                type: [
                    'number',
                    'string'
                ],
                minimum: 0
            },
            layout_height: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            max_height: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            max_width: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            min_width: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            min_height: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            layout_left: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            layout_top: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            accessibility_label: {
                type: 'string',
                minLength: 1
            },
            accessibility_hidden: {
                type: 'boolean'
            },
            layout_bottom: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            clip_children: {
                type: 'boolean'
            },
            transform_translate_x: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            transform_translate_y: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            transform_rotate: {
                type: 'number'
            },
            text_prevent_widow: {
                type: 'boolean'
            },
            line_spacing_multiplier: {
                type: [
                    'string',
                    'number'
                ]
            },
            title: {
                type: 'string',
                minLength: 1
            },
            layout_margin: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            layout_flex_align_content: {
                type: 'string',
                minLength: 1
            },
            layout_flex_direction: {
                type: 'string',
                minLength: 1
            },
            padding: {
                type: 'number'
            },
            padding_top: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            padding_left: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            padding_right: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            padding_bottom: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            layout_right: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            layout_margin_top: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            stroke_color: {
                type: 'string',
                minLength: 1
            },
            stroke_width: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            stroke_style: {
                type: 'string',
                enum: [
                    'solid',
                    'dotted',
                    'dashed'
                ],
                minLength: 1
            },
            transform_scale: {
                type: 'number'
            },
            stroke_bottom_width: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            stroke_bottom_style: {
                type: 'string',
                enum: [
                    'solid',
                    'dotted',
                    'dashed'
                ],
                minLength: 1
            },
            stroke_bottom_color: {
                type: 'string',
                minLength: 1
            },
            stroke_right_width: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            stroke_right_style: {
                type: 'string',
                enum: [
                    'solid',
                    'dotted',
                    'dashed'
                ],
                minLength: 1
            },
            stroke_right_color: {
                type: 'string',
                minLength: 1
            },
            corner_radius: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            corner_top_right_radius: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            corner_top_left_radius: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            corner_bottom_right_radius: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            corner_bottom_left_radius: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            layout_margin_left: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            background_image: {
                type: 'string',
                minLength: 1
            },
            transform_origin: {
                type: 'array',
                items: {
                    type: 'string',
                    minLength: 1
                },
                minItems: 2,
                maxItems: 2
            },
            layout_margin_bottom: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            link: {
                type: 'string',
                format: 'uri',
                minLength: 1
            }
        })
    };
}

const schema = {
    type: 'object',
    description: 'Incito',
    properties: {
        id: {
            type: 'string',
            minLength: 1,
            description: 'ID of incito'
        },
        version: {
            type: 'string',
            enum: [
                '1.0.0'
            ],
            description: 'Incito version'
        },
        locale: {
            type: 'string',
            minLength: 1,
            description: 'Locale'
        },
        meta: {
            type: 'object',
            minProperties: 1,
            description: 'Container for meta data'
        },
        root_view: {
            description: 'The main view entry point for the Incito.',
            oneOf: [{
                '$ref': '#/definitions/view'
            }, {
                '$ref': '#/definitions/textView'
            }, {
                '$ref': '#/definitions/absoluteLayout'
            }, {
                '$ref': '#/definitions/linearLayout'
            }, {
                '$ref': '#/definitions/flexLayout'
            }, {
                '$ref': '#/definitions/fragView'
            }, {
                '$ref': '#/definitions/imageView'
            }, {
                '$ref': '#/definitions/videoEmbedView'
            }, {
                '$ref': '#/definitions/videoView'
            }]
        },
        font_assets: {
            type: 'object',
            minProperties: 1,
            additionalProperties: false,
            patternProperties: {
                '[a-z|-]+': {
                    type: 'object',
                    description: 'External font asset',
                    properties: {
                        // src: {
                        //     type: 'array',
                        //     items: {
                        //         type: 'array',
                        //         items: {
                        //             type: 'string',
                        //             minLength: 1
                        //         },
                        //         minItems: 2,
                        //         maxItems: 2
                        //     },
                        //     required: true
                        // },
                        weight: {
                            type: 'string',
                            minLength: 1
                        },
                        style: {
                            type: 'string',
                            minLength: 1
                        }
                    }
                }
            }
        },
        theme: {
            type: 'object',
            properties: {
                font_family: {
                    type: 'array',
                    items: {
                        type: 'string',
                        minLength: 1
                    },
                    minItems: 1
                },
                background_color: {
                    type: 'string',
                    minLength: 1
                },
                text_color: {
                    type: 'string',
                    minLength: 1
                },
                line_spacing_multiplier: {
                    type: 'number'
                }
            }
        }
    },
    required: [
        'id',
        'version',
        'root_view'
    ],
    definitions: {
        view: createView('View', {}, []),
        textView: createView('TextView', {
            text_all_caps: {
                type: 'boolean'
            },
            font_family: {
                type: 'array',
                items: {
                    type: 'string',
                    minLength: 1
                },
                minItems: 1
            },
            text: {
                type: 'string',
                minLength: 1
            },
            text_color: {
                type: 'string',
                minLength: 1
            },
            text_alignment: {
                type: 'string',
                minLength: 1
            },
            text_size: {
                type: 'number',
                minimum: 0
            },
            font_stretch: {
                type: 'string',
                minLength: 1
            },
            text_style: {
                type: 'string'
            },
            spans: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        start: {
                            type: 'integer'
                        },
                        end: {
                            type: 'integer'
                        }
                    }
                },
                minItems: 1
            },
            max_lines: {
                type: 'integer',
                minimum: 1
            }
        }, ['text']),
        absoluteLayout: createView('AbsoluteLayout', {}, []),
        linearLayout: createView('LinearLayout', {}, []),
        flexLayout: createView('FlexLayout', {
            layout_flex_align_items: {
                type: 'string',
                minLength: 1
            },
            layout_flex_justify_content: {
                type: 'string',
                minLength: 1
            },
            layout_flex_shrink: {
                type: 'number'
            },
            layout_flex_grow: {
                type: 'number'
            }
        }, []),
        fragView: createView('FragView', {}, []),
        imageView: createView('ImageView', {
            src: {
                type: 'string',
                format: 'uri',
                minLength: 1
            },
            label: {
                type: 'string'
            }
        }, ['src']),
        videoEmbedView: createView('VideoEmbedView', {
            src: {
                type: 'string',
                format: 'uri',
                minLength: 1
            },
        }, ['src']),
        videoView: createView('VideoView', {
            video_width: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            video_height: {
                type: [
                    'string',
                    'number'
                ],
                minLength: 1
            },
            src: {
                type: 'string',
                format: 'uri',
                minLength: 1
            }
        }, ['video_width', 'video_height', 'src'])
    }
};

fs.writeFileSync(path.join(__dirname, 'incito.schema.json'), JSON.stringify(schema, null, 4));