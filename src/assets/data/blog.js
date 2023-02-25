import { randomDateInCurrentMonth } from "../../utils";

const radom = () => {
  let randomValue = 2;
  while (randomValue === 2) {
    randomValue = Math.floor(Math.random() * 4) + 1;
  }

  return randomValue;
};

const blogData = {
  data: {
    posts: {
      edges: [
        {
          node: {
            publishedAt: randomDateInCurrentMonth().toLocaleDateString(),
            comments: {
              nodes: [
                {
                  commentId: 3,
                  databaseId: 3,
                  id: "Y29tbWVudDoz",
                  author: {
                    node: {
                      avatar: {
                        url: "http://0.gravatar.com/avatar/92c2a5ef5dcbd564ed3bf66c4d978022?s=96&d=mm&r=g",
                      },
                      email: null,
                      id: "dXNlcjox",
                      name: "chakta",
                    },
                  },
                  date: "2023-02-20 07:48:41",
                  content:
                    "<p>Again is there anyone who loves or pursues or desires to obtain paiits ecause it is pain, but because occasionally circumstances occur in which</p>\n",
                  replies: {
                    nodes: [],
                  },
                },
                {
                  commentId: 2,
                  databaseId: 2,
                  id: "Y29tbWVudDoy",
                  author: {
                    node: {
                      avatar: {
                        url: "http://0.gravatar.com/avatar/92c2a5ef5dcbd564ed3bf66c4d978022?s=96&d=mm&r=g",
                      },
                      email: null,
                      id: "dXNlcjox",
                      name: "chakta",
                    },
                  },
                  date: "2023-02-20 07:48:25",
                  content:
                    "<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pawas born and I will give you a complete account</p>\n",
                  replies: {
                    nodes: [
                      {
                        author: {
                          node: {
                            avatar: {
                              url: "http://0.gravatar.com/avatar/92c2a5ef5dcbd564ed3bf66c4d978022?s=96&d=mm&r=g",
                            },
                            email: null,
                            id: "dXNlcjox",
                            databaseId: 1,
                            url: null,
                            name: "leo",
                          },
                        },
                        commentId: 3,
                        id: "Y29tbWVudDoz2",
                        content:
                          "<p>Again is there anyone who loves or pursues or desires to obtain paiits ecause it is pain, but because occasionally circumstances occur in which</p>\n",
                        date: "2023-02-20 07:48:41",
                      },
                    ],
                  },
                },
              ],
            },
            acf_post: {
              fieldGroupName: "acf_post",
              component: [
                {
                  blockquote:
                    "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>\n<footer>– Rosalina Pong</footer>\n",
                  contentParagraph:
                    "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>\n",
                  fieldGroupName: "Post_AcfPost_Component_ContentPost",
                  paragraph:
                    "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit",
                  title: "On the other hand we provide denounce with righteous",
                  image: {
                    mediaItemUrl: `https://klbtheme.com/chakta/wp-content/uploads/2021/01/blog-${radom()}-370x360.jpg`,
                  },
                },
              ],
            },
            title: "On the other hand we provide denounce with righteous",
            id: "cG9zdDoxNDA=",
            databaseId: 140,
            slug: "on-the-other-hand-we-provide-denounce-with-righteous",
            date: "2023-02-20T02:57:59",
            categories: {
              nodes: [
                {
                  categoryId: 119,
                  name: "Brake Discs",
                  slug: "brake-discs",
                },
              ],
            },
            tags: {
              edges: [
                {
                  node: {
                    databaseId: 106,
                    name: "Ecommerce",
                    slug: "ecommerce",
                  },
                },
                {
                  node: {
                    databaseId: 83,
                    name: "Envato",
                    slug: "envato",
                  },
                },
              ],
            },
          },
        },
        {
          node: {
            publishedAt: randomDateInCurrentMonth().toLocaleDateString(),
            comments: {
              nodes: [
                {
                  commentId: 3,
                  databaseId: 3,
                  id: "Y29tbWVudDoz",
                  author: {
                    node: {
                      avatar: {
                        url: "http://0.gravatar.com/avatar/92c2a5ef5dcbd564ed3bf66c4d978022?s=96&d=mm&r=g",
                      },
                      email: null,
                      id: "dXNlcjox",
                      name: "chakta",
                    },
                  },
                  date: "2023-02-20 07:48:41",
                  content:
                    "<p>Again is there anyone who loves or pursues or desires to obtain paiits ecause it is pain, but because occasionally circumstances occur in which</p>\n",
                  replies: {
                    nodes: [],
                  },
                },
                {
                  commentId: 2,
                  databaseId: 2,
                  id: "Y29tbWVudDoy",
                  author: {
                    node: {
                      avatar: {
                        url: "http://0.gravatar.com/avatar/92c2a5ef5dcbd564ed3bf66c4d978022?s=96&d=mm&r=g",
                      },
                      email: null,
                      id: "dXNlcjox",
                      name: "chakta",
                    },
                  },
                  date: "2023-02-20 07:48:25",
                  content:
                    "<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pawas born and I will give you a complete account</p>\n",
                  replies: {
                    nodes: [
                      {
                        author: {
                          node: {
                            avatar: {
                              url: "http://0.gravatar.com/avatar/92c2a5ef5dcbd564ed3bf66c4d978022?s=96&d=mm&r=g",
                            },
                            email: null,
                            id: "dXNlcjox",
                            databaseId: 1,
                            url: null,
                            name: "leo",
                          },
                        },
                        commentId: 3,
                        id: "Y29tbWVudDoz2",
                        content:
                          "<p>Again is there anyone who loves or pursues or desires to obtain paiits ecause it is pain, but because occasionally circumstances occur in which</p>\n",
                        date: "2023-02-20 07:48:41",
                      },
                    ],
                  },
                },
              ],
            },
            acf_post: {
              fieldGroupName: "acf_post",
              component: [
                {
                  blockquote:
                    "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>\n<footer>– Rosalina Pong</footer>\n",
                  contentParagraph:
                    "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>\n",
                  fieldGroupName: "Post_AcfPost_Component_ContentPost",
                  paragraph:
                    "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit",
                  title: "But I must explain to you how all this mistaken idea",
                  image: {
                    mediaItemUrl: `https://klbtheme.com/chakta/wp-content/uploads/2021/01/blog-${radom()}-370x360.jpg`,
                  },
                },
              ],
            },
            title: "But I must explain to you how all this mistaken idea",
            id: "cG9zdDoxMzU=",
            databaseId: 135,
            slug: "but-i-must-explain-to-you-how-all-this-mistaken-idea",
            date: "2023-02-20T02:56:04",
            categories: {
              nodes: [
                {
                  categoryId: 103,
                  name: "Engine Parts",
                  slug: "engine-parts",
                  count: 1,
                },
              ],
            },
            tags: {
              edges: [
                {
                  node: {
                    databaseId: 122,
                    name: "Themeforest",
                    slug: "themeforest",
                  },
                },
              ],
            },
          },
        },
        {
          node: {
            publishedAt: randomDateInCurrentMonth().toLocaleDateString(),
            comments: {
              nodes: [
                {
                  commentId: 3,
                  databaseId: 3,
                  id: "Y29tbWVudDoz",
                  author: {
                    node: {
                      avatar: {
                        url: "http://0.gravatar.com/avatar/92c2a5ef5dcbd564ed3bf66c4d978022?s=96&d=mm&r=g",
                      },
                      email: null,
                      id: "dXNlcjox",
                      name: "chakta",
                    },
                  },
                  date: "2023-02-20 07:48:41",
                  content:
                    "<p>Again is there anyone who loves or pursues or desires to obtain paiits ecause it is pain, but because occasionally circumstances occur in which</p>\n",
                  replies: {
                    nodes: [],
                  },
                },
                {
                  commentId: 2,
                  databaseId: 2,
                  id: "Y29tbWVudDoy",
                  author: {
                    node: {
                      avatar: {
                        url: "http://0.gravatar.com/avatar/92c2a5ef5dcbd564ed3bf66c4d978022?s=96&d=mm&r=g",
                      },
                      email: null,
                      id: "dXNlcjox",
                      name: "chakta",
                    },
                  },
                  date: "2023-02-20 07:48:25",
                  content:
                    "<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pawas born and I will give you a complete account</p>\n",
                  replies: {
                    nodes: [
                      {
                        author: {
                          node: {
                            avatar: {
                              url: "http://0.gravatar.com/avatar/92c2a5ef5dcbd564ed3bf66c4d978022?s=96&d=mm&r=g",
                            },
                            email: null,
                            id: "dXNlcjox",
                            databaseId: 1,
                            url: null,
                            name: "leo",
                          },
                        },
                        commentId: 3,
                        id: "Y29tbWVudDoz2",
                        content:
                          "<p>Again is there anyone who loves or pursues or desires to obtain paiits ecause it is pain, but because occasionally circumstances occur in which</p>\n",
                        date: "2023-02-20 07:48:41",
                      },
                    ],
                  },
                },
              ],
            },
            acf_post: {
              fieldGroupName: "acf_post",
              component: [
                {
                  blockquote:
                    "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>\n<footer>– Rosalina Pong</footer>\n",
                  contentParagraph:
                    "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>\n",
                  fieldGroupName: "Post_AcfPost_Component_ContentPost",
                  paragraph:
                    "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit",
                  title: "Mirage Deep Dive Under anding Timin Response",
                  image: {
                    mediaItemUrl: `https://klbtheme.com/chakta/wp-content/uploads/2021/01/blog-${radom()}-370x360.jpg`,
                  },
                },
              ],
            },
            title: "Mirage Deep Dive Under anding Timin Response",
            id: "cG9zdDoxMzE=",
            databaseId: 131,
            slug: "mirage-deep-dive-under-anding-timin-response",
            date: "2023-02-20T02:53:03",
            categories: {
              nodes: [
                 {
                  categoryId: 90,
                  name: "Gallery",
                  slug: "gallery",
                  count: 1,
                },
              ],
            },
            tags: {
              edges: [
                {
                  node: {
                    databaseId: 113,
                    name: "Video",
                    slug: "video",
                  },
                },
                {
                  node: {
                    databaseId: 116,
                    name: "Vimeo",
                    slug: "vimeo",
                  },
                },
              ],
            },
          },
        },
        {
          node: {
            publishedAt: randomDateInCurrentMonth().toLocaleDateString(),
            comments: {
              nodes: [
                {
                  commentId: 3,
                  databaseId: 3,
                  id: "Y29tbWVudDoz",
                  author: {
                    node: {
                      avatar: {
                        url: "http://0.gravatar.com/avatar/92c2a5ef5dcbd564ed3bf66c4d978022?s=96&d=mm&r=g",
                      },
                      email: null,
                      id: "dXNlcjox",
                      name: "chakta",
                    },
                  },
                  date: "2023-02-20 07:48:41",
                  content:
                    "<p>Again is there anyone who loves or pursues or desires to obtain paiits ecause it is pain, but because occasionally circumstances occur in which</p>\n",
                  replies: {
                    nodes: [],
                  },
                },
                {
                  commentId: 2,
                  databaseId: 2,
                  id: "Y29tbWVudDoy",
                  author: {
                    node: {
                      avatar: {
                        url: "http://0.gravatar.com/avatar/92c2a5ef5dcbd564ed3bf66c4d978022?s=96&d=mm&r=g",
                      },
                      email: null,
                      id: "dXNlcjox",
                      name: "chakta",
                    },
                  },
                  date: "2023-02-20 07:48:25",
                  content:
                    "<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pawas born and I will give you a complete account</p>\n",
                  replies: {
                    nodes: [
                      {
                        author: {
                          node: {
                            avatar: {
                              url: "http://0.gravatar.com/avatar/92c2a5ef5dcbd564ed3bf66c4d978022?s=96&d=mm&r=g",
                            },
                            email: null,
                            id: "dXNlcjox",
                            databaseId: 1,
                            url: null,
                            name: "leo",
                          },
                        },
                        commentId: 3,
                        id: "Y29tbWVudDoz2",
                        content:
                          "<p>Again is there anyone who loves or pursues or desires to obtain paiits ecause it is pain, but because occasionally circumstances occur in which</p>\n",
                        date: "2023-02-20 07:48:41",
                      },
                    ],
                  },
                },
              ],
            },
            acf_post: {
              fieldGroupName: "acf_post",
              component: [
                {
                  blockquote:
                    "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>\n<footer>– Rosalina Pong</footer>\n",
                  contentParagraph:
                    "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>\n",
                  fieldGroupName: "Post_AcfPost_Component_ContentPost",
                  paragraph:
                    "Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit",
                  title: "The Problem With Typefaces on the Web",
                  image: {
                    mediaItemUrl: `https://klbtheme.com/chakta/wp-content/uploads/2021/01/blog-${radom()}-370x360.jpg`,
                  },
                },
              ],
            },
            title: "The Problem With Typefaces on the Web",
            id: "cG9zdDoxMTg=",
            databaseId: 118,
            slug: "the-problem-with-typefaces-on-the-web",
            date: "2023-02-20T01:59:37",
            categories: {
              nodes: [
                {
                  categoryId: 1,
                  name: "Uncategorized",
                  slug: "uncategorized",
                  count: null,
                },
              ],
            },
            tags: {
              edges: [
                {
                  node: {
                    databaseId: 83,
                    name: "Envato",
                    slug: "envato",
                  },
                },
                {
                  node: {
                    databaseId: 87,
                    name: "Images",
                    slug: "images",
                  },
                },
              ],
            },
          },
        },
      ],
    },
    categories: {
      edges: [
        {
          node: {
            categoryId: 119,
            name: "Brake Discs",
            slug: "brake-discs",
            count: 1,
          },
        },
        {
          node: {
            categoryId: 103,
            name: "Engine Parts",
            slug: "engine-parts",
            count: 1,
          },
        },
        {
          node: {
            categoryId: 90,
            name: "Gallery",
            slug: "gallery",
            count: 1,
          },
        },
        {
          node: {
            categoryId: 1,
            name: "Uncategorized",
            slug: "uncategorized",
            count: 0,
          },
        },
        {
          node: {
            categoryId: 110,
            name: "Video",
            slug: "video",
            count: 1,
          },
        },
      ],
    },
    tags: {
      edges: [
        {
          node: {
            databaseId: 106,
            name: "Ecommerce",
            slug: "ecommerce",
          },
        },
        {
          node: {
            databaseId: 83,
            name: "Envato",
            slug: "envato",
          },
        },
        {
          node: {
            databaseId: 87,
            name: "Images",
            slug: "images",
          },
        },
        {
          node: {
            databaseId: 122,
            name: "Themeforest",
            slug: "themeforest",
          },
        },
        {
          node: {
            databaseId: 113,
            name: "Video",
            slug: "video",
          },
        },
        {
          node: {
            databaseId: 116,
            name: "Vimeo",
            slug: "vimeo",
          },
        },
      ],
    },
  },
  extensions: {
    debug: [],
    queryAnalyzer: {
      keys: "c3bf348f10d49fc42ce5d3882c49d8a705e7195be54ac323aefa7bfc5e56032e graphql:Query operation:POST list:post list:category list:tag list:page list:mediaitem cG9zdDoxNDA= cG9zdDoxMzU= cG9zdDoxMzE= cG9zdDoxMTg= dGVybToxMTk= dGVybToxMDM= dGVybTo5MA== dGVybTox dGVybToxMTA= dGVybToxMDY= dGVybTo4Mw== dGVybTo4Nw== dGVybToxMjI= dGVybToxMTM= dGVybToxMTY= dXNlcjox cG9zdDoxNDE= cG9zdDoxMzY= cG9zdDoxMDY=",
      keysLength: 390,
      keysCount: 27,
      skippedKeys: "",
      skippedKeysSize: 0,
      skippedKeysCount: 0,
      skippedTypes: [],
    },
  },
};

export default blogData;
