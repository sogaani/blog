// go to https://github.com/ModiiMedia/contentful-hugo#configuration for configuration instructions

/**
 * @type {import('contentful-hugo').ContentfulHugoConfig}
 */
module.exports = {
    locales: [], // uses default locale if left empty
    singleTypes: [],
    repeatableTypes: [
        {
            id: 'hugoPost',                       // (1) model id for blog post
            directory: 'content/posts',           // (2) output directory for hugo
            mainContent: 'body',                  // (3) filed id for content
            resolveEntries: [
                {
                    field: 'categories',          // (4) field id for taxonomy, category
                    resolveTo: 'sys.id',    // (5) reference filed for the above
                },
                {
                    field: 'tags',                // (6) field id for taxonomy, tag
                    resolveTo: 'sys.id',    // (7) reference filed for the above
                },
            ],
            overrides: [
                {
                    field: 'eyecatch',                    // (8) field id for image
                    options: {
                        fieldName: 'featuredImage',       // (9) replace field name
                        valueTransformer: (value) => {
                            return value.fields.file.url; // (10) value for the above
                        },
                    },
                },
                {
                    field: 'publushDate',                 // (8) field id for image
                    options: {
                        fieldName: 'date',                // (9) replace field name
                    },
                },
            ],
        },
        {
            id: 'hugoCategory',                   // (11) model id for blog category
            directory: 'content/categories',      // (12) output directory for hugo
            isTaxonomy: true,
        },
        {
            id: 'hugoTag',                        // (13) model id for blog category
            directory: 'content/tags',            // (14) output directory for hugo
            isTaxonomy: true,
        }
    ],
    staticContent: [
        {
            inputDir: 'static',
            outputDir: 'content',
        },
    ],
};