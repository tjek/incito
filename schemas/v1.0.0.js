function createView (viewName, properties = {}, required = []) {
    const props = Object.assign({}, {
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
            properties: {},
            additionalProperties: true,
            minProperties: 1,
            description: 'Container for meta data'
        },
        child_views: {
            type: 'array',
            items: {
                $ref: '#/definitions/views'
            }
        },
        background_color: {
            $ref: '#/definitions/color'
        },
        background_image: {
            format: 'uri',
            type: 'string'
        },
        background_tile_mode: {
            enum: [
                'repeat_x',
                'repeat_y',
                'repeat'
            ]
        },
        background_image_position: {
            type: 'string',
            minLength: 1
        },
        background_image_scale_type: {
            enum: [
                'center_crop',
                'center_inside'
            ]
        },
        gravity: {
            enum: [
                'center_horizontal',
                'left_horizontal',
                'right_horizontal'
            ]
        },
        accessibility_label: {
            type: 'string',
            minLength: 1
        },
        accessibility_hidden: {
            type: 'boolean'
        },
        clip_children: {
            type: 'boolean'
        },
        title: {
            type: 'string',
            minLength: 1
        },
        link: {
            type: 'string',
            format: 'uri'
        },
        layout_width: {
            $ref: '#/definitions/unit'
        },
        layout_height: {
            $ref: '#/definitions/unit'
        },
        max_height: {
            $ref: '#/definitions/unit'
        },
        max_width: {
            $ref: '#/definitions/unit'
        },
        min_width: {
            $ref: '#/definitions/unit'
        },
        min_height: {
            $ref: '#/definitions/unit'
        },
        layout_left: {
            $ref: '#/definitions/unit'
        },
        layout_top: {
            $ref: '#/definitions/unit'
        },
        layout_bottom: {
            $ref: '#/definitions/unit'
        },
        layout_margin: {
            $ref: '#/definitions/unit'
        },
        layout_margin_left: {
            $ref: '#/definitions/unit'
        },
        layout_margin_right: {
            $ref: '#/definitions/unit'
        },
        layout_margin_bottom: {
            $ref: '#/definitions/unit'
        },
        layout_margin_top: {
            $ref: '#/definitions/unit'
        },
        padding: {
            $ref: '#/definitions/unit'
        },
        padding_top: {
            $ref: '#/definitions/unit'
        },
        padding_left: {
            $ref: '#/definitions/unit'
        },
        padding_right: {
            $ref: '#/definitions/unit'
        },
        padding_bottom: {
            $ref: '#/definitions/unit'
        },
        layout_right: {
            $ref: '#/definitions/unit'
        },
        transform_scale: {
            type: 'number'
        },
        transform_translate_x: {
            $ref: '#/definitions/unit'
        },
        transform_translate_y: {
            $ref: '#/definitions/unit'
        },
        transform_rotate: {
            type: 'number',
            minimum: -360,
            maximum: 360
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
        stroke_color: {
            $ref: '#/definitions/color'
        },
        stroke_width: {
            $ref: '#/definitions/unit'
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
        stroke_bottom_width: {
            $ref: '#/definitions/unit'
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
            $ref: '#/definitions/color'
        },
        stroke_right_width: {
            $ref: '#/definitions/unit'
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
            $ref: '#/definitions/color'
        },
        corner_radius: {
            $ref: '#/definitions/unit'
        },
        corner_top_right_radius: {
            $ref: '#/definitions/unit'
        },
        corner_top_left_radius: {
            $ref: '#/definitions/unit'
        },
        corner_bottom_right_radius: {
            $ref: '#/definitions/unit'
        },
        corner_bottom_left_radius: {
            $ref: '#/definitions/unit'
        },
        shadow_color: {
            $ref: '#/definitions/color'
        },
        shadow_dx: {
            type: 'number'
        },
        shadow_dy: {
            type: 'number'
        },
        shadow_radius: {
            type: 'number'
        }
    }, properties);

    if (viewName) {
        props.view_name = {
            enum: [viewName]
        };

        required.push('view_name');
    } else {
        props.view_name = {
            enum: [undefined]
        };
    }

    return {
        type: 'object',
        required,
        properties: props
    };
}

const schema = {
    type: 'object',
    title: 'Incito v1.0.0',
    description: 'Layout format',
    properties: {
        id: {
            type: 'string',
            minLength: 1,
            description: 'The identifier of the Incito used to future reference.'
        },
        version: {
            type: 'string',
            enum: [
                '1.0.0'
            ],
            description: 'The Incito specification version'
        },
        locale: {
            type: 'string',
            minLength: 1,
            description: 'The locale that defines the contents in `root_view` the best.'
        },
        meta: {
            type: 'object',
            minProperties: 1,
            description: 'An object that can contain any metadata for the Incito.'
        },
        root_view: {
            description: 'The main view entry point for the Incito.',
            $ref: '#/definitions/views'
        },
        font_assets: {
            description: 'External font assets loaded to be used in the Incito.',
            type: 'object',
            minProperties: 1,
            additionalProperties: false,
            patternProperties: {
                '[a-z|-|_]+': {
                    type: 'object',
                    properties: {
                        src: {
                            type: 'array',
                            items: {
                                type: 'array',
                                items: [{
                                    enum: [
                                        'woff',
                                        'woff2',
                                        'truetype',
                                        'svg',
                                        'opentype',
                                        'embedded-opentype'
                                    ]
                                }, {
                                    type: 'string',
                                    format: 'uri'
                                }]
                            }
                        },
                        weight: {
                            type: 'string',
                            minLength: 1
                        },
                        style: {
                            type: 'string',
                            minLength: 1
                        }
                    },
                    required: ['src']
                }
            }
        },
        theme: {
            description: 'The overall theme of the Incito that all views inherit from.',
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
                    $ref: '#/definitions/color'
                },
                text_color: {
                    $ref: '#/definitions/color'
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
        color: {
            type: 'string',
            minLength: 1
        },
        unit: {
            anyOf: [{
                type: 'number',
                minimum: 0
            }, {
                pattern: "^[-]?[0-9]+(\.)?([0-9]+)(dp|%)$"
            }]
        },
        views: {
            oneOf: [{
                $ref: '#/definitions/fallbackView'
            }, {
                $ref: '#/definitions/view'
            }, {
                $ref: '#/definitions/textView'
            }, {
                $ref: '#/definitions/absoluteLayout'
            }, {
                $ref: '#/definitions/linearLayout'
            }, {
                $ref: '#/definitions/flexLayout'
            }, {
                $ref: '#/definitions/fragView'
            }, {
                $ref: '#/definitions/imageView'
            }, {
                $ref: '#/definitions/videoEmbedView'
            }, {
                $ref: '#/definitions/videoView'
            }]
        },
        fallbackView: createView(),
        view: createView('View'),
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
                $ref: '#/definitions/color'
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
            text_prevent_widow: {
                type: 'boolean'
            },
            line_spacing_multiplier: {
                type: [
                    'string',
                    'number'
                ]
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
                        },
                        name: {
                            type: 'string',
                            enum: ['superscript']
                        }
                    }
                },
                minItems: 1
            },
            max_lines: {
                type: 'integer',
                minimum: 1
            }
        }, [
            'text'
        ]),
        absoluteLayout: createView('AbsoluteLayout', {}),
        linearLayout: createView('LinearLayout', {}),
        flexLayout: createView('FlexLayout', {
            layout_flex_align_items: {
                type: 'string',
                enum: ['stretch', 'center', 'flex-start', 'flex-end', 'baseline'],
                minLength: 1
            },
            layout_flex_justify_content: {
                type: 'string',
                enum: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
                minLength: 1
            },
            layout_flex_align_content: {
                type: 'string',
                enum: ['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'initial'],
                minLength: 1
            },
            layout_flex_direction: {
                type: 'string',
                enum: ['row', 'column'],
                minLength: 1
            },
            layout_flex_shrink: {
                type: 'number'
            },
            layout_flex_grow: {
                type: 'number'
            }
        }),
        fragView: createView('FragView', {}),
        imageView: createView('ImageView', {
            src: {
                description: 'The URL to the source image',
                type: 'string',
                format: 'uri'
            },
            label: {
                description: 'The caption describing the image',
                type: 'string'
            }
        }, [
            'src'
        ]),
        videoEmbedView: createView('VideoEmbedView', {
            src: {
                type: 'string',
                description: 'The URL to the source video',
                format: 'uri'
            },
        }, [
            'src'
        ]),
        videoView: createView('VideoView', {
            src: {
                description: 'The URL to the source video',
                type: 'string',
                format: 'uri'
            },
            autoplay: {
                type: 'boolean'
            },
            loop: {
                type: 'boolean'
            },
            controls: {
                type: 'boolean'
            },
            mime: {
                type: 'string'
            }
        }, [
            'src',
            'mime'
        ])
    }
};

module.exports = schema;