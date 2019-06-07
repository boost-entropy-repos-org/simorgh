import articleJson from '../../../../../../data/test/news/articles/c0000000003o.json';
import addIdsToBlocks from './addIdsToBlocks';

jest.mock('nanoid', () => () => 'mockId');

const expected = {
  metadata: {
    id: 'urn:bbc:ares::article:c0000000003o',
    locators: {
      optimoUrn: 'urn:bbc:optimo:asset:c0000000003o',
    },
    type: 'article',
    createdBy: '',
    created: 1514808060000,
    firstPublished: 1514808060000,
    lastPublished: 1514811600000,
    lastUpdated: 1514811600000,
    passport: {
      language: 'en-gb',
      home: 'http://www.bbc.co.uk/ontologies/passport/home/News',
      category: 'news',
      genre: null,
    },
    tags: {
      about: [
        {
          thingLabel: 'Bill',
          thingUri:
            'http://www.bbc.co.uk/things/3fbfd244-928b-498d-a585-9e39bd27fad3#id',
          thingId: '3fbfd244-928b-498d-a585-9e39bd27fad3',
          thingType: ['Film', 'Thing'],
        },
        {
          thingLabel: 'Theresa May',
          thingUri:
            'http://www.bbc.co.uk/things/96e2c26f-e5ed-465b-bcc7-88811af261b9#id',
          thingId: '96e2c26f-e5ed-465b-bcc7-88811af261b9',
          thingType: ['Person', 'Thing'],
          topidName: 'Theresa May',
          topicId: 'c50znx8v4z7t',
          curationType: ['vivo-stream'],
        },
      ],
      mentions: null,
    },
    version: 'v0.3.2',
    blockTypes: [
      'headline',
      'text',
      'paragraph',
      'video',
      'aresMedia',
      'caption',
      'fragment',
    ],
  },
  content: {
    model: {
      blocks: [
        {
          id: 'mockId',
          type: 'headline',
          model: {
            blocks: [
              {
                id: 'mockId',
                type: 'text',
                model: {
                  blocks: [
                    {
                      id: 'mockId',
                      type: 'paragraph',
                      model: {
                        text:
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit ©',
                        blocks: [
                          {
                            id: 'mockId',
                            type: 'fragment',
                            model: {
                              text:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit ©',
                              attributes: [],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          id: 'mockId',
          type: 'video',
          model: {
            locator: 'urn:bbc:pips:pid:p067gq6h',
            blocks: [
              {
                id: 'mockId',
                type: 'aresMedia',
                model: {
                  blocks: [
                    {
                      id: 'mockId',
                      type: 'aresMediaMetadata',
                      model: {
                        id: 'p067gq6h',
                        subType: 'clip',
                        format: 'audio_video',
                        title: 'Mark and Isla Royal Wedding',
                        synopses: {
                          short:
                            'Stop the press! It’s a Mark and Isla Royal Wedding special…',
                          medium: null,
                          long: null,
                        },
                        imageUrl:
                          'ichef.bbci.co.uk/images/ic/$recipe/p067grwg.jpg',
                        embedding: true,
                        warnings: {},
                        advertising: false,
                        versions: [
                          {
                            versionId: 'p067gq6k',
                            types: ['Original'],
                            duration: 94,
                            availableTerritories: {
                              uk: true,
                              nonUk: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                id: 'mockId',
                type: 'caption',
                model: {
                  blocks: [
                    {
                      id: 'mockId',
                      type: 'text',
                      model: {
                        blocks: [
                          {
                            id: 'mockId',
                            type: 'paragraph',
                            model: {
                              text:
                                'Duis vitae ipsum hendrerit, commodo metus vel, mattis sapien. Proin eleifend vulputate porta. Curabitur mollis nunc nec felis ultricies, vitae tempor metus imperdiet.',
                              blocks: [
                                {
                                  id: 'mockId',
                                  type: 'fragment',
                                  model: {
                                    text:
                                      'Duis vitae ipsum hendrerit, commodo metus vel, mattis sapien. Proin eleifend vulputate porta. Curabitur mollis nunc nec felis ultricies, vitae tempor metus imperdiet.',
                                    attributes: [],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          id: 'mockId',
          type: 'text',
          model: {
            blocks: [
              {
                id: 'mockId',
                type: 'paragraph',
                model: {
                  text:
                    'Donec ut fermentum risus, eu sodales mauris. Quisque vitae est sed nisl tincidunt facilisis.Nec vulputate metus sagittis.',
                  blocks: [
                    {
                      id: 'mockId',
                      type: 'fragment',
                      model: {
                        text:
                          'Donec ut fermentum risus, eu sodales mauris. Quisque vitae est sed nisl tincidunt facilisis.Nec vulputate metus sagittis.',
                        attributes: [],
                      },
                    },
                  ],
                },
              },
              {
                id: 'mockId',
                type: 'paragraph',
                model: {
                  text:
                    'Quisque quis libero H2O bibendum, feugiat felis ut, dignissim tortor.',
                  blocks: [
                    {
                      id: 'mockId',
                      type: 'fragment',
                      model: {
                        text:
                          'Quisque quis libero H²0 bibendum, feugiat felis ut, dignissim tortor.',
                        attributes: [],
                      },
                    },
                  ],
                },
              },
              {
                id: 'mockId',
                type: 'paragraph',
                model: {
                  text:
                    'Mauris metus lectus, lacinia sit amet massa ut, interdum convallis ipsum.',
                  blocks: [
                    {
                      id: 'mockId',
                      type: 'fragment',
                      model: {
                        text:
                          'Mauris metus lectus, lacinia sit amet massa ut, interdum convallis ipsum.',
                        attributes: [],
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
  promo: {
    id: 'urn:bbc:ares::article:c0000000003o',
    headlines: {
      seoHeadline:
        'Curabitur risus lorem vestibulum quis magna at vulputate vehicula nibh',
      promoHeadline: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    locators: {
      optimoUrn: 'urn:bbc:optimo:asset:c0000000003o',
    },
    summary:
      'Suspendisse lectus dui, mollis vitae fermentum non, feugiat sed nibh.',
    timestamp: 1514811600000,
  },
};

describe('addIdsToBlocks rules', () => {
  it('should recursively add ids to blocks in article data', () => {
    const actual = addIdsToBlocks(articleJson);

    expect(actual).toEqual(expected);
  });
});
